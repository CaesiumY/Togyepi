"use strict";
import { Functions as fn } from './Functions';
/**
 * An action to perform on the source as instructed by the iterator.
 */
export var IteratorAction;
(function (IteratorAction) {
    /**
     * Continue iteration.
     */
    IteratorAction[IteratorAction["Continue"] = 0] = "Continue";
    /**
     * Stop iteration.
     */
    IteratorAction[IteratorAction["Stop"] = 1] = "Stop";
    /**
     * Remove the current item if possible, and continue iteration.
     */
    IteratorAction[IteratorAction["Remove"] = 2] = "Remove";
    /**
     * Replace the current item with the provided value.
     */
    IteratorAction[IteratorAction["Replace"] = 3] = "Replace";
})(IteratorAction = IteratorAction || (IteratorAction = {}));
/**
 * A class that allows an iteratable source to be iterated any number of times
 * by providing the following functionality:
 *
 * - [[Iterator.isEmpty]]: Determines whether the source contains any items.
 * - [[Iterator.first]]: Gets the first item in the source.
 * - [[Iterator.count]]: Counds the number of items in the source.
 * - [[Iterator.list]]: Builds a list of the items in the source.
 * - [[Iterator.object]]: Builds an object of the items in the source.
 * - [[Iterator.reduce]]: Reduces the items in the source down to a single value.
 * - [[Iterator.purge]]: Removes items from the source which meet some criteria.
 * - [[Iterator.filter]]: Returns a subset of items that meet some criteria by
 *    returning a new Iterator.
 * - [[Iterator.map]]: Maps each item in the source to another item by returning
 *    a new Iterator.
 * - [[Iterator.iterate]]: Invokes a function for each item in the source.
 *
 * The following static functions exist to help iterate simple sources:
 *
 * - [[Iterator.forArray]]: Iterates an array, optionally reverse
 * - [[Iterator.forObject]]: Iterates the properties of an object, optionally
 *    just the properties explicitly set on the object.
 *
 * ```typescript
 * let iter = object.iterateThings();
 * iter.isEmpty();              // no items?
 * iter.isEmpty(d => d.flag);   // no items that meet some criteria?
 * iter.count();                // number of items
 * iter.count(d => d.flag);     // number of items that meet some criteria
 * iter.first();                // first item
 * iter.first(d => d.flag);     // first item that meets some criteria
 * iter.list();                 // get all items as array
 * iter.list(myArray);          // add all items to given array
 * iter.list([], d => d.flag);  // get all items as array that meet some criteria
 * iter.object(d => d.id);      // get all items as an object keyed by a value (ex: id)
 * iter.object(d => d.id, {},
 *    d => d.flag);             // get all items as an object keyed by a value where the item meets some criteria (ex: key id if flag is truthy)
 * iter.purge(d => d.flag);     // remove all items from source that meet some criteria
 * iter.filter(d => d.flag);    // returns an iterator which iterates a subset of items which meet some criteria
 * iter.reduce<number>(0,
 *   (d, t) => t + d.size);     // reduces all items to a single value (ex: sums all size)
 * iter.reduce<number>(0,
 *   (d, t) => t + d.size,
 *   d => d.flag);              // reduces all items to a single value (ex: sums all size) where the item meets some criteria
 * iter.map<S>(d => d.subitem); // return an iterator for subitems if they exist
 * iter.iterate(d => log(d));   // do something for each item
 * ```
 *
 * @typeparam T The type of item being iterated.
 */
export class Iterator {
    /**
     * Creates a new Iterator given a source.
     *
     * @param source The source of items to iterator.
     */
    constructor(source) {
        /**
         * A result of the iteration passed to [[Iterator.stop]].
         */
        this.result = null;
        this.source = source;
    }
    /**
     * Returns a clone of this iterator with the same source. This is necessary
     * if you want to iterate all or a portion of the source while already
     * iterating it (like a nested loop).
     */
    clone() {
        return new Iterator(this.source);
    }
    /**
     * Passes the given item to the iterator callback and returns the action
     * requested at this point in iteration.
     *
     * @param item The current item being iterated.
     */
    act(item) {
        this.action = IteratorAction.Continue;
        this.replaceWith = null;
        this.callback(item, this);
        return this.action;
    }
    /**
     * Stops iteration and optionally sets the result of the iteration.
     *
     * @param result The result of the iteration.
     */
    stop(result) {
        this.result = result;
        this.action = IteratorAction.Stop;
        return this;
    }
    /**
     * Stops iteration and optionally sets the result of the iteration.
     *
     * @param result The result of the iteration.
     */
    replace(replaceWith) {
        this.replaceWith = replaceWith;
        this.action = IteratorAction.Replace;
        return this;
    }
    /**
     * Signals to the iterator source that the current item wants to be removed.
     */
    remove() {
        this.action = IteratorAction.Remove;
        return this;
    }
    /**
     * Determines with this iterator is empty. A filter function can be specified
     * to only check for items which match certain criteria.
     *
     * @param filter A function to the checks items for certain criteria.
     * @returns `true` if no valid items exist in the source.
     */
    isEmpty(filter = null) {
        let empty = true;
        this.iterate((item, iterator) => {
            if (filter && !filter(item)) {
                return;
            }
            empty = false;
            iterator.stop();
        });
        return empty;
    }
    /**
     * Counts the number of items in the iterator. A filter function can be
     * specified to only count items which match certain criteria.
     *
     * @param filter A function to count items for certain criteria.
     * @returns The number of items in the source that optionally match the given
     *    criteria.
     */
    count(filter = null) {
        let total = 0;
        this.iterate((item, iterator) => {
            if (filter && !filter(item)) {
                return;
            }
            total++;
        });
        return total;
    }
    /**
     * Returns the first item in the iterator. A filter function can be specified
     * to only return the first item which matches certain criteria.
     *
     * @param filter A function to compare items to to match certain criteria.
     * @returns The first item found that optonally matches the given criteria.
     */
    first(filter = null) {
        let first = null;
        this.iterate((item, iterator) => {
            if (filter && !filter(item)) {
                return;
            }
            first = item;
            iterator.stop();
        });
        return first;
    }
    /**
     * Builds a list of items from the source. A filter function can be specified
     * so the resulting list only contain items that match certain criteria.
     *
     * @param out The array to place the items in.
     * @param filter The function which determines which items are added to the list.
     * @returns The reference to `out` which has had items added to it which
     *    optionally match the given criteria.
     */
    list(out = [], filter = null) {
        this.iterate((item, iterator) => {
            if (filter && !filter(item)) {
                return;
            }
            out.push(item);
        });
        return out;
    }
    /**
     * Builds an object of items from the source keyed by a result returned by
     * a `getKey` function.
     *
     * @param getKey The function which returns the key of the object.
     * @param out The object to place the items in.
     * @param filter The function which determines which items are set on the object.
     * @returns The reference to `out` which has had items set to it which
     *    optionally match the given criteria.
     */
    object(getKey, out = {}, filter = null) {
        this.iterate((item, iterator) => {
            if (filter && !filter(item)) {
                return;
            }
            let key = getKey(item);
            out[key] = item;
        });
        return out;
    }
    /**
     * Returns a new iterator that only returns a maximum number of items.
     *
     * @param amount The maximum number of items to return.
     * @returns A new iterator which returns a maximum number of items.
     */
    take(amount) {
        return new Iterator(next => {
            this.iterate((item, prev) => {
                switch (next.act(item)) {
                    case IteratorAction.Stop:
                        prev.stop();
                        break;
                    case IteratorAction.Remove:
                        prev.remove();
                        break;
                    case IteratorAction.Replace:
                        prev.replace(next.replaceWith);
                        break;
                }
                if (--amount <= 0) {
                    prev.stop();
                }
            });
        });
    }
    /**
     * Returns a new iterator that skips the given number of items from the items
     * in this iterator.
     *
     * @param amount The number of items to skip.
     * @returns A new iterator which skipped the given number of items.
     */
    skip(amount) {
        return new Iterator(next => {
            let skipped = 0;
            this.iterate((item, prev) => {
                if (skipped >= amount) {
                    switch (next.act(item)) {
                        case IteratorAction.Stop:
                            prev.stop();
                            break;
                        case IteratorAction.Remove:
                            prev.remove();
                            break;
                        case IteratorAction.Replace:
                            prev.replace(next.replaceWith);
                            break;
                    }
                }
                skipped++;
            });
        });
    }
    /**
     * Returns a new iterator thats items are the items in this iterator followed
     * by the items in the given iterators.
     *
     * @param iterators The iterators to append after this one.
     * @returns A new iterator based on this iterator followed by the given.
     */
    append(...iterators) {
        return Iterator.join(this, ...iterators);
    }
    /**
     * Returns a new iterator thats items are the items in the given iterators
     * followed by the items in this iterator.
     *
     * @param iterators The iterators to prepend before this one.
     * @returns A new iterator based on the given iterators followed by this.
     */
    prepend(...iterators) {
        return Iterator.join(...iterators, this);
    }
    /**
     * Removes items from the source that match certain criteria.
     *
     * @param filter The function which determines which items to remove.
     */
    purge(filter) {
        this.iterate((item, iterator) => {
            if (filter(item)) {
                iterator.remove();
            }
        });
        return this;
    }
    /**
     * Returns an iterator which takes items from this iterator and presents them
     * in reverse.
     *
     * @returns A new iterator with the items in this iterator in reverse.
     */
    reverse() {
        return new Iterator(iterator => {
            let items = this.list();
            let modifies = false;
            let actions = [];
            let replaces = [];
            for (let i = items.length - 1; i >= 0; i--) {
                let item = items[i];
                let action = iterator.act(item);
                if (action === IteratorAction.Stop) {
                    break;
                }
                if (action !== IteratorAction.Continue) {
                    modifies = true;
                    actions[i] = action;
                    replaces[i] = iterator.replaceWith;
                }
            }
            if (modifies) {
                let index = 0;
                this.iterate((item, iterator) => {
                    switch (actions[index]) {
                        case IteratorAction.Remove:
                            iterator.remove();
                            break;
                        case IteratorAction.Replace:
                            iterator.replace(replaces[index]);
                            break;
                    }
                    index++;
                });
            }
        });
    }
    /**
     * Reduces all the items in the source to a single value given the initial
     * value and a function to convert an item and the current reduced value
     */
    reduce(initial, reducer, filter = null) {
        let reduced = initial;
        this.iterate((item, iterator) => {
            if (filter && !filter(item)) {
                return;
            }
            reduced = reducer(item, reduced);
        });
        return reduced;
    }
    /**
     * Returns an iterator where this iterator is the source and the returned
     * iterator is built on a subset of items which pass a `filter` function.
     *
     * @param filter The function which determines if an item should be iterated.
     * @returns A new iterator for the filtered items from this iterator.
     */
    filter(filter) {
        return new Iterator(next => {
            this.iterate((prevItem, prev) => {
                if (filter(prevItem)) {
                    switch (next.act(prevItem)) {
                        case IteratorAction.Stop:
                            prev.stop();
                            break;
                        case IteratorAction.Remove:
                            prev.remove();
                            break;
                        case IteratorAction.Replace:
                            prev.replace(next.replaceWith);
                            break;
                    }
                }
            });
        });
    }
    /**
     * Returns an iterator where this iterator is the source and the returned
     * iterator is built from mapped items pulled from items in the source
     * of this iterator. If the given callback `outerCallback` does not return
     * a mapped value then the returned iterator will not see the item. A filter
     * function can be specified to only look at mapping items which match
     * certain criteria.
     *
     * @param mapper The function which maps an item to another.
     * @param filter The function which determines if an item should be mapped.
     * @param unmapper The function which unmaps a value when replace is called.
     * @returns A new iterator for the mapped items from this iterator.
     */
    map(mapper, filter = null, unmapper = null) {
        return new Iterator(next => {
            this.iterate((prevItem, prev) => {
                if (filter && !filter(prevItem)) {
                    return;
                }
                let nextItem = mapper(prevItem, prev);
                if (fn.isDefined(nextItem)) {
                    switch (next.act(nextItem)) {
                        case IteratorAction.Stop:
                            prev.stop();
                            break;
                        case IteratorAction.Remove:
                            prev.remove();
                            break;
                        case IteratorAction.Replace:
                            if (unmapper) {
                                prev.replace(unmapper(next.replaceWith, nextItem, prevItem));
                            }
                            break;
                    }
                }
            });
        });
    }
    /**
     * Invokes the callback for each item in the source of this iterator. The
     * second argument in the callback is the reference to this iterator and
     * [[Iterator.stop]] can be called at anytime to cease iteration.
     *
     * @param callback The function to invoke for each item in this iterator.
     */
    iterate(callback) {
        this.result = undefined;
        this.callback = callback;
        this.action = IteratorAction.Continue;
        this.source(this);
        this.callback = null;
        return this;
    }
    /**
     * Passes the result of the iteration to the given function if a truthy
     * result was passed to [[Iterator.stop]].
     *
     * @param getResult The function to pass the result to if it exists.
     */
    withResult(getResult) {
        if (this.result) {
            getResult(this.result);
        }
        return this;
    }
    /**
     * Returns an iterator for the given array optionally iterating it in reverse.
     *
     * @param items The array of items to iterate.
     * @param reverse If the array should be iterated in reverse.
     * @returns A new iterator for the given array.
     */
    static forArray(items, reverse = false) {
        return new Iterator(iterator => {
            if (reverse) {
                for (let i = items.length - 1; i >= 0; i--) {
                    switch (iterator.act(items[i])) {
                        case IteratorAction.Stop:
                            return;
                        case IteratorAction.Remove:
                            items.splice(i, 1);
                            break;
                        case IteratorAction.Replace:
                            items.splice(i, 1, iterator.replaceWith);
                            break;
                    }
                }
            }
            else {
                for (let i = 0; i < items.length; i++) {
                    switch (iterator.act(items[i])) {
                        case IteratorAction.Stop:
                            return;
                        case IteratorAction.Remove:
                            items.splice(i, 1);
                            i--;
                            break;
                        case IteratorAction.Replace:
                            items.splice(i, 1, iterator.replaceWith);
                            break;
                    }
                }
            }
        });
    }
    /**
     * Returns an iterator for the given object optionally checking the
     * `hasOwnProperty` function on the given object.
     *
     * @param items The object to iterate.
     * @param hasOwnProperty If `hasOwnProperty` should be checked.
     * @returns A new iterator for the given object.
     */
    static forObject(items, hasOwnProperty = true) {
        return new Iterator(iterator => {
            for (let key in items) {
                if (hasOwnProperty && !items.hasOwnProperty(key)) {
                    continue;
                }
                switch (iterator.act(items[key])) {
                    case IteratorAction.Stop:
                        return;
                    case IteratorAction.Remove:
                        delete items[key];
                        break;
                    case IteratorAction.Replace:
                        items[key] = iterator.replaceWith;
                        break;
                }
            }
        });
    }
    /**
     * Joins all the given iterators into a single iterator where the items
     * returned are in the same order as passed to this function. If any items
     * are removed from the returned iterator they will be removed from the given
     * iterator if it supports removal.
     *
     * @param iterators The array of iterators to join as one.
     * @returns A new iterator for the given iterators.
     */
    static join(...iterators) {
        return new Iterator(parent => {
            for (let child of iterators) {
                child.iterate((item, childIterator) => {
                    switch (parent.act(item)) {
                        case IteratorAction.Remove:
                            childIterator.remove();
                            break;
                        case IteratorAction.Stop:
                            childIterator.stop();
                            break;
                        case IteratorAction.Replace:
                            childIterator.replace(parent.replaceWith);
                            break;
                    }
                });
                if (child.action === IteratorAction.Stop) {
                    return;
                }
            }
        });
    }
    /**
     * Returns a new iterator with no items.
     *
     * @returns A new iterator with no items.
     */
    static empty() {
        return new Iterator(parent => { });
    }
}
//# sourceMappingURL=Iterator.js.map