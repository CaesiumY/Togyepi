"use strict";
import { Functions as fn } from './Functions';
import { Schedule } from './Schedule';
import { ScheduleModifier } from './ScheduleModifier';
import { Constants } from './Constants';
import { Day } from './Day';
import { Event } from './Event';
import { Time } from './Time';
/**
 * The class which takes user input and parses it to specific structures.
 */
var Parse = (function () {
    function Parse() {
    }
    /**
     * Parses a value and converts it to a [[FrequencyCheck]].
     *
     * @param input The input to parse into a function.
     * @param property The [[Day]] property the frequency is for.
     * @returns A function which determines whether a value matches a frequency.
     * @see [[Schedule]]
     */
    Parse.frequency = function (input, property) {
        var check = function (value) {
            return true;
        };
        check.given = false;
        if (fn.isFrequencyValueEvery(input)) {
            var every_1 = input.every;
            var offset_1 = (input.offset || 0) % every_1;
            check = function (value) {
                return value % every_1 === offset_1;
            };
            check.given = true;
        }
        if (fn.isFrequencyValueOneOf(input)) {
            var map_1 = {};
            for (var i = 0; i < input.length; i++) {
                map_1[input[i]] = true;
            }
            check = function (value) {
                return !!map_1[value];
            };
            check.given = true;
        }
        check.input = fn.coalesce(input, null);
        check.property = property;
        return check;
    };
    /**
     * Parses [[DayInput]] into a [[Day]] instance.
     *
     * ```typescript
     * Parse.day( 65342300 );               // UTC timestamp
     * Parse.day( '01/02/2014' );           // strings in many formats
     * Parse.day( day );                    // return a passed instance
     * Parse.day( [2018, 0, 2] );           // array: 01/02/2018
     * Parse.day( {year: 2018, month: 2} ); // object: 03/01/2018
     * Parse.day( true );                   // today
     * ```
     *
     * @param input The input to parse.
     * @returns The Day parsed or `null` if the value is not valid.
     */
    Parse.day = function (input) {
        if (fn.isNumber(input)) {
            return Day.unix(input);
        }
        else if (fn.isString(input)) {
            return Day.fromString(input);
        }
        else if (input instanceof Day) {
            return input;
        }
        else if (fn.isArray(input)) {
            return Day.fromArray(input);
        }
        else if (fn.isObject(input)) {
            return Day.fromObject(input);
        }
        else if (input === true) {
            return Day.today();
        }
        return null;
    };
    /**
     * Parses a value and tries to convert it to a Time instance.
     *
     * ```typescript
     * Parse.time( time );      // return a passed instance
     * Parse.time( 9 );         // 09:00:00.000
     * Parse.time( 3009 );      // 09:30:00.000
     * Parse.time( 593009 );    // 09:30:59.000
     * Parsetime( '09' );       // 09:00:00.000
     * Parse.time( '9:30' );    // 09:30:00.000
     * Parse.time( '9:30:59' ); // 09:30:59.000
     * Parse.time( {hour: 2} ); // 02:00:00.000
     * ```
     *
     * @param input The input to parse.
     * @returns The instance parsed or `null` if it was invalid.
     * @see [[Time.fromIdentifier]]
     * @see [[Time.fromString]]
     */
    Parse.time = function (input) {
        if (input instanceof Time) {
            return input;
        }
        if (fn.isNumber(input)) {
            return Time.fromIdentifier(input);
        }
        if (fn.isString(input)) {
            return Time.fromString(input);
        }
        if (fn.isObject(input) && fn.isNumber(input.hour)) {
            return new Time(input.hour, input.minute, input.second, input.millisecond);
        }
        return null;
    };
    /**
     * Parses a value and tries to convert it to an array of Time instances.
     * If any of the given values are not a valid time value then the resulting
     * array will not contain a time instance.
     *
     * @param input The input to parse.
     * @returns A non-null array of time instances.
     * @see [[Parse.time]]
     */
    Parse.times = function (input) {
        var times = [];
        if (fn.isArray(input)) {
            for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
                var timeInput = input_1[_i];
                var time = this.time(timeInput);
                if (time) {
                    times.push(time);
                }
            }
            // Sort times from earliest to latest.
            times.sort(function (a, b) {
                return a.toMilliseconds() - b.toMilliseconds();
            });
        }
        return times;
    };
    /**
     * Parses an array of excluded days into a map of excluded days where the
     * array value and returned object key are [[Day.dayIdentifier]].
     *
     * ```typescript
     * Parse.modifier( [ 20180101, 20140506 ] );            // {'20180101': true, '20140506': true}
     * Parse.modifier( [ 20180101, Day.build(2014,4,6) ] ); // {'20180101': true, '20140506': true}
     * ```
     *
     * @param input The input to parse.
     * @param value The default value if the input given is an array of identifiers.
     * @param parseMeta A function to use to parse a modifier.
     * @param out The modifier to set the identifiers and values of and return.
     * @returns The object with identifier keys and `true` values.
     * @see [[Day.dayIdentifier]]
     */
    Parse.modifier = function (input, value, parseMeta, out) {
        if (parseMeta === void 0) { parseMeta = (function (x) { return x; }); }
        if (out === void 0) { out = new ScheduleModifier(); }
        var map = {};
        if (fn.isArray(input)) {
            for (var _i = 0, input_2 = input; _i < input_2.length; _i++) {
                var identifier = input_2[_i];
                if (identifier instanceof Day) {
                    map[identifier.dayIdentifier] = value;
                }
                else if (fn.isNumber(identifier)) {
                    map[identifier] = value;
                }
                else if (fn.isString(identifier)) {
                    map[identifier] = value;
                }
            }
        }
        if (fn.isObject(input)) {
            for (var identifier in input) {
                map[identifier] = parseMeta(input[identifier]);
            }
        }
        out.map = map;
        return out;
    };
    /**
     * Parses an object which specifies a schedule where events may or may not
     * repeat and they may be all day events or at specific times.
     *
     * @param input The input to parse into a schedule.
     * @param parseMeta A function to use when parsing meta input into the desired type.
     * @param out The schedule to set the values of and return.
     * @returns An instance of the parsed [[Schedule]].
     */
    Parse.schedule = function (input, parseMeta, out) {
        if (parseMeta === void 0) { parseMeta = (function (x) { return x; }); }
        if (out === void 0) { out = new Schedule(); }
        if (input instanceof Schedule) {
            return input;
        }
        var on = this.day(input.on);
        var times = this.times(input.times);
        var fullDay = times.length === 0;
        if (on) {
            input.start = on.start();
            input.end = on.end();
            input.year = [on.year];
            input.month = [on.month];
            input.dayOfMonth = [on.dayOfMonth];
        }
        out.times = times;
        out.duration = fn.coalesce(input.duration, Constants.DURATION_DEFAULT);
        out.durationUnit = fn.coalesce(input.durationUnit, Constants.DURATION_DEFAULT_UNIT(fullDay));
        out.start = this.day(input.start);
        out.end = this.day(input.end);
        out.exclude = this.modifier(input.exclude, true, undefined, out.exclude);
        out.include = this.modifier(input.include, true, undefined, out.include);
        out.cancel = this.modifier(input.cancel, true, undefined, out.cancel);
        out.meta = this.modifier(input.meta, null, parseMeta, out.meta);
        out.year = this.frequency(input.year, 'year');
        out.month = this.frequency(input.month, 'month');
        out.week = this.frequency(input.week, 'week');
        out.weekOfYear = this.frequency(input.weekOfYear, 'weekOfYear');
        out.weekspanOfYear = this.frequency(input.weekspanOfYear, 'weekspanOfYear');
        out.fullWeekOfYear = this.frequency(input.fullWeekOfYear, 'fullWeekOfYear');
        out.lastWeekspanOfYear = this.frequency(input.lastWeekspanOfYear, 'lastWeekspanOfYear');
        out.lastFullWeekOfYear = this.frequency(input.lastFullWeekOfYear, 'lastFullWeekOfYear');
        out.weekOfMonth = this.frequency(input.weekOfMonth, 'weekOfMonth');
        out.weekspanOfMonth = this.frequency(input.weekspanOfMonth, 'weekspanOfMonth');
        out.fullWeekOfMonth = this.frequency(input.fullWeekOfMonth, 'fullWeekOfMonth');
        out.lastWeekspanOfMonth = this.frequency(input.lastWeekspanOfMonth, 'lastWeekspanOfMonth');
        out.lastFullWeekOfMonth = this.frequency(input.lastFullWeekOfMonth, 'lastFullWeekOfMonth');
        out.dayOfWeek = this.frequency(input.dayOfWeek, 'dayOfWeek');
        out.dayOfMonth = this.frequency(input.dayOfMonth, 'dayOfMonth');
        out.lastDayOfMonth = this.frequency(input.lastDayOfMonth, 'lastDayOfMonth');
        out.dayOfYear = this.frequency(input.dayOfYear, 'dayOfYear');
        out.updateDurationInDays();
        out.updateChecks();
        return out;
    };
    /**
     * Parses an array of [[FrequencyCheck]] functions and returns an array of
     * functions for only the checks that were specified by the user.
     *
     * @param checks The array of check functions to filter through.
     * @returns The array of user specified checks.
     */
    Parse.givenFrequency = function (checks) {
        var out = [];
        for (var _i = 0, checks_1 = checks; _i < checks_1.length; _i++) {
            var check = checks_1[_i];
            if (check.given) {
                out.push(check);
            }
        }
        return out;
    };
    /**
     * Parses [[EventInput]] and returns an [[Event]].
     *
     * @param input The input to parse.
     * @param parseData A function to use when parsing data input into the desired type.
     * @param parseMeta A function to use when parsing meta input into the desired type.
     * @returns The parsed value.
     */
    Parse.event = function (input, parseData, parseMeta) {
        if (parseData === void 0) { parseData = (function (x) { return x; }); }
        if (parseMeta === void 0) { parseMeta = (function (x) { return x; }); }
        if (input instanceof Event) {
            return input;
        }
        if (!input.schedule) {
            return null;
        }
        var schedule = this.schedule(input.schedule, parseMeta);
        return new Event(schedule, parseData(input.data), input.id, input.visible);
    };
    /**
     * Parses a schedule from a CRON pattern. TODO
     */
    Parse.cron = function (pattern, out) {
        if (out === void 0) { out = new Schedule(); }
        return out;
    };
    return Parse;
}());
export { Parse };
//# sourceMappingURL=Parse.js.map