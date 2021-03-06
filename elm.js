(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.multiline) { flags += 'm'; }
	if (options.caseInsensitive) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;


function _Url_percentEncode(string)
{
	return encodeURIComponent(string);
}

function _Url_percentDecode(string)
{
	try
	{
		return $elm$core$Maybe$Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return $elm$core$Maybe$Nothing;
	}
}



// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.expect.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.expect.b, xhr)); });
		$elm$core$Maybe$isJust(request.tracker) && _Http_track(router, xhr, request.tracker.a);

		try {
			xhr.open(request.method, request.url, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.url));
		}

		_Http_configureRequest(xhr, request);

		request.body.a && xhr.setRequestHeader('Content-Type', request.body.a);
		xhr.send(request.body.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.headers; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.timeout.a || 0;
	xhr.responseType = request.expect.d;
	xhr.withCredentials = request.allowCookiesFromOtherDomains;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		url: xhr.responseURL,
		statusCode: xhr.status,
		statusText: xhr.statusText,
		headers: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			sent: event.loaded,
			size: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			received: event.loaded,
			size: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $author$project$Main$canonicalSiteUrl = 'https://elm-pages-starter.netlify.com';
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Basics$append = _Utils_append;
var $billstclair$elm_xml_eeue56$Xml$Encode$boolToString = function (b) {
	return b ? 'true' : 'false';
};
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Basics$False = {$: 'False'};
var $billstclair$elm_xml_eeue56$Xml$Encode$needsIndent = function (nextValue) {
	switch (nextValue.$) {
		case 'Object':
			if (!nextValue.a.b) {
				return false;
			} else {
				return true;
			}
		case 'Tag':
			return true;
		default:
			return false;
	}
};
var $elm$core$String$length = _String_length;
var $billstclair$elm_xml_eeue56$Xml$Encode$propToString = function (value) {
	switch (value.$) {
		case 'StrNode':
			var str = value.a;
			return str;
		case 'IntNode':
			var n = value.a;
			return $elm$core$String$fromInt(n);
		case 'BoolNode':
			var b = value.a;
			return $billstclair$elm_xml_eeue56$Xml$Encode$boolToString(b);
		case 'FloatNode':
			var f = value.a;
			return $elm$core$String$fromFloat(f);
		default:
			return '';
	}
};
var $billstclair$elm_xml_eeue56$Xml$Encode$propsToString = function (props) {
	return function (x) {
		return ($elm$core$String$length(x) > 0) ? (' ' + x) : '';
	}(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				function (_v0) {
					var key = _v0.a;
					var value = _v0.b;
					return key + ('=\"' + ($billstclair$elm_xml_eeue56$Xml$Encode$propToString(value) + '\"'));
				},
				$elm$core$Dict$toList(props))));
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $billstclair$elm_xml_eeue56$Xml$Encode$valueToString = F3(
	function (level, indent, value) {
		switch (value.$) {
			case 'Tag':
				var name = value.a;
				var props = value.b;
				var nextValue = value.c;
				var indentString = $billstclair$elm_xml_eeue56$Xml$Encode$needsIndent(nextValue) ? '\n' : '';
				return '<' + (name + ($billstclair$elm_xml_eeue56$Xml$Encode$propsToString(props) + ('>' + (indentString + (A3($billstclair$elm_xml_eeue56$Xml$Encode$valueToString, level + 1, indent, nextValue) + (indentString + ('</' + (name + '>'))))))));
			case 'StrNode':
				var str = value.a;
				return str;
			case 'IntNode':
				var n = value.a;
				return $elm$core$String$fromInt(n);
			case 'FloatNode':
				var n = value.a;
				return $elm$core$String$fromFloat(n);
			case 'BoolNode':
				var b = value.a;
				return $billstclair$elm_xml_eeue56$Xml$Encode$boolToString(b);
			case 'Object':
				var xs = value.a;
				return A2(
					$elm$core$String$join,
					'\n',
					A2(
						$elm$core$List$map,
						$elm$core$Basics$append(
							A2($elm$core$String$repeat, level * indent, ' ')),
						A2(
							$elm$core$List$map,
							A2($billstclair$elm_xml_eeue56$Xml$Encode$valueToString, level + 1, indent),
							xs)));
			default:
				var name = value.a;
				var props = value.b;
				return '<?' + (name + ($billstclair$elm_xml_eeue56$Xml$Encode$propsToString(props) + '?>'));
		}
	});
var $billstclair$elm_xml_eeue56$Xml$Encode$encode = F2(
	function (indent, value) {
		return A3($billstclair$elm_xml_eeue56$Xml$Encode$valueToString, -1, indent, value);
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $billstclair$elm_xml_eeue56$Xml$Object = function (a) {
	return {$: 'Object', a: a};
};
var $billstclair$elm_xml_eeue56$Xml$Encode$list = function (values) {
	return $billstclair$elm_xml_eeue56$Xml$Object(values);
};
var $billstclair$elm_xml_eeue56$Xml$Tag = F3(
	function (a, b, c) {
		return {$: 'Tag', a: a, b: b, c: c};
	});
var $billstclair$elm_xml_eeue56$Xml$Encode$object = function (values) {
	return $billstclair$elm_xml_eeue56$Xml$Object(
		A2(
			$elm$core$List$map,
			function (_v0) {
				var name = _v0.a;
				var props = _v0.b;
				var value = _v0.c;
				return A3($billstclair$elm_xml_eeue56$Xml$Tag, name, props, value);
			},
			values));
};
var $billstclair$elm_xml_eeue56$Xml$StrNode = function (a) {
	return {$: 'StrNode', a: a};
};
var $billstclair$elm_xml_eeue56$Xml$Encode$string = function (str) {
	return $billstclair$elm_xml_eeue56$Xml$StrNode(str);
};
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$startsWith = _String_startsWith;
var $dillonkearns$elm_sitemap$Path$dropLeading = function (url) {
	return A2($elm$core$String$startsWith, '/', url) ? A2($elm$core$String$dropLeft, 1, url) : url;
};
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$core$String$endsWith = _String_endsWith;
var $dillonkearns$elm_sitemap$Path$dropTrailing = function (url) {
	return A2($elm$core$String$endsWith, '/', url) ? A2($elm$core$String$dropRight, 1, url) : url;
};
var $dillonkearns$elm_sitemap$Path$dropBoth = function (url) {
	return $dillonkearns$elm_sitemap$Path$dropTrailing(
		$dillonkearns$elm_sitemap$Path$dropLeading(url));
};
var $dillonkearns$elm_sitemap$Path$join = function (urls) {
	return A2(
		$elm$core$String$join,
		'/',
		A2($elm$core$List$map, $dillonkearns$elm_sitemap$Path$dropBoth, urls));
};
var $dillonkearns$elm_sitemap$Sitemap$keyValue = F2(
	function (key, value) {
		return $billstclair$elm_xml_eeue56$Xml$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple3(key, $elm$core$Dict$empty, value)
				]));
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_sitemap$Sitemap$urlXml = F2(
	function (siteUrl, entry) {
		return $billstclair$elm_xml_eeue56$Xml$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple3(
					'url',
					$elm$core$Dict$empty,
					$billstclair$elm_xml_eeue56$Xml$Encode$list(
						A2(
							$elm$core$List$filterMap,
							$elm$core$Basics$identity,
							_List_fromArray(
								[
									$elm$core$Maybe$Just(
									A2(
										$dillonkearns$elm_sitemap$Sitemap$keyValue,
										'loc',
										$billstclair$elm_xml_eeue56$Xml$Encode$string(
											$dillonkearns$elm_sitemap$Path$join(
												_List_fromArray(
													[siteUrl, entry.path]))))),
									A2(
									$elm$core$Maybe$map,
									$dillonkearns$elm_sitemap$Sitemap$keyValue('lastmod'),
									A2($elm$core$Maybe$map, $billstclair$elm_xml_eeue56$Xml$Encode$string, entry.lastMod))
								]))))
				]));
	});
var $dillonkearns$elm_sitemap$Sitemap$build = F2(
	function (_v0, urls) {
		var siteUrl = _v0.siteUrl;
		return A2(
			$billstclair$elm_xml_eeue56$Xml$Encode$encode,
			0,
			$billstclair$elm_xml_eeue56$Xml$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple3(
						'urlset',
						$elm$core$Dict$fromList(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'xmlns',
									$billstclair$elm_xml_eeue56$Xml$Encode$string('http://www.sitemaps.org/schemas/sitemap/0.9'))
								])),
						$billstclair$elm_xml_eeue56$Xml$Encode$list(
							A2(
								$elm$core$List$map,
								$dillonkearns$elm_sitemap$Sitemap$urlXml(siteUrl),
								urls)))
					])));
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$Basics$not = _Basics_not;
var $dillonkearns$elm_pages$Pages$PagePath$toString = function (path) {
	if (path.$ === 'Internal') {
		var rawPath = path.a;
		return A2($elm$core$String$join, '/', rawPath);
	} else {
		var url = path.a;
		return url;
	}
};
var $author$project$MySitemap$build = F2(
	function (config, siteMetadata) {
		return {
			content: A2(
				$dillonkearns$elm_sitemap$Sitemap$build,
				config,
				A2(
					$elm$core$List$map,
					function (page) {
						return {
							lastMod: $elm$core$Maybe$Nothing,
							path: $dillonkearns$elm_pages$Pages$PagePath$toString(page.path)
						};
					},
					A2(
						$elm$core$List$filter,
						function (page) {
							var _v0 = page.frontmatter;
							if (_v0.$ === 'Article') {
								var articleData = _v0.a;
								return !articleData.draft;
							} else {
								return true;
							}
						},
						siteMetadata))),
			path: _List_fromArray(
				['sitemap.xml'])
		};
	});
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $author$project$Pages$builtAt = $elm$time$Time$millisToPosix(1616501995217);
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $ryannhg$date_format$DateFormat$DayOfMonthFixed = {$: 'DayOfMonthFixed'};
var $ryannhg$date_format$DateFormat$dayOfMonthFixed = $ryannhg$date_format$DateFormat$DayOfMonthFixed;
var $ryannhg$date_format$DateFormat$Language$Language = F6(
	function (toMonthName, toMonthAbbreviation, toWeekdayName, toWeekdayAbbreviation, toAmPm, toOrdinalSuffix) {
		return {toAmPm: toAmPm, toMonthAbbreviation: toMonthAbbreviation, toMonthName: toMonthName, toOrdinalSuffix: toOrdinalSuffix, toWeekdayAbbreviation: toWeekdayAbbreviation, toWeekdayName: toWeekdayName};
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $ryannhg$date_format$DateFormat$Language$toEnglishAmPm = function (hour) {
	return (hour > 11) ? 'pm' : 'am';
};
var $ryannhg$date_format$DateFormat$Language$toEnglishMonthName = function (month) {
	switch (month.$) {
		case 'Jan':
			return 'January';
		case 'Feb':
			return 'February';
		case 'Mar':
			return 'March';
		case 'Apr':
			return 'April';
		case 'May':
			return 'May';
		case 'Jun':
			return 'June';
		case 'Jul':
			return 'July';
		case 'Aug':
			return 'August';
		case 'Sep':
			return 'September';
		case 'Oct':
			return 'October';
		case 'Nov':
			return 'November';
		default:
			return 'December';
	}
};
var $elm$core$Basics$modBy = _Basics_modBy;
var $ryannhg$date_format$DateFormat$Language$toEnglishSuffix = function (num) {
	var _v0 = A2($elm$core$Basics$modBy, 100, num);
	switch (_v0) {
		case 11:
			return 'th';
		case 12:
			return 'th';
		case 13:
			return 'th';
		default:
			var _v1 = A2($elm$core$Basics$modBy, 10, num);
			switch (_v1) {
				case 1:
					return 'st';
				case 2:
					return 'nd';
				case 3:
					return 'rd';
				default:
					return 'th';
			}
	}
};
var $ryannhg$date_format$DateFormat$Language$toEnglishWeekdayName = function (weekday) {
	switch (weekday.$) {
		case 'Mon':
			return 'Monday';
		case 'Tue':
			return 'Tuesday';
		case 'Wed':
			return 'Wednesday';
		case 'Thu':
			return 'Thursday';
		case 'Fri':
			return 'Friday';
		case 'Sat':
			return 'Saturday';
		default:
			return 'Sunday';
	}
};
var $ryannhg$date_format$DateFormat$Language$english = A6(
	$ryannhg$date_format$DateFormat$Language$Language,
	$ryannhg$date_format$DateFormat$Language$toEnglishMonthName,
	A2(
		$elm$core$Basics$composeR,
		$ryannhg$date_format$DateFormat$Language$toEnglishMonthName,
		$elm$core$String$left(3)),
	$ryannhg$date_format$DateFormat$Language$toEnglishWeekdayName,
	A2(
		$elm$core$Basics$composeR,
		$ryannhg$date_format$DateFormat$Language$toEnglishWeekdayName,
		$elm$core$String$left(3)),
	$ryannhg$date_format$DateFormat$Language$toEnglishAmPm,
	$ryannhg$date_format$DateFormat$Language$toEnglishSuffix);
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$time$Time$flooredDiv = F2(
	function (numerator, denominator) {
		return $elm$core$Basics$floor(numerator / denominator);
	});
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $elm$time$Time$toAdjustedMinutesHelp = F3(
	function (defaultOffset, posixMinutes, eras) {
		toAdjustedMinutesHelp:
		while (true) {
			if (!eras.b) {
				return posixMinutes + defaultOffset;
			} else {
				var era = eras.a;
				var olderEras = eras.b;
				if (_Utils_cmp(era.start, posixMinutes) < 0) {
					return posixMinutes + era.offset;
				} else {
					var $temp$defaultOffset = defaultOffset,
						$temp$posixMinutes = posixMinutes,
						$temp$eras = olderEras;
					defaultOffset = $temp$defaultOffset;
					posixMinutes = $temp$posixMinutes;
					eras = $temp$eras;
					continue toAdjustedMinutesHelp;
				}
			}
		}
	});
var $elm$time$Time$toAdjustedMinutes = F2(
	function (_v0, time) {
		var defaultOffset = _v0.a;
		var eras = _v0.b;
		return A3(
			$elm$time$Time$toAdjustedMinutesHelp,
			defaultOffset,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				60000),
			eras);
	});
var $elm$time$Time$toHour = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			24,
			A2(
				$elm$time$Time$flooredDiv,
				A2($elm$time$Time$toAdjustedMinutes, zone, time),
				60));
	});
var $ryannhg$date_format$DateFormat$amPm = F3(
	function (language, zone, posix) {
		return language.toAmPm(
			A2($elm$time$Time$toHour, zone, posix));
	});
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$time$Time$toCivil = function (minutes) {
	var rawDay = A2($elm$time$Time$flooredDiv, minutes, 60 * 24) + 719468;
	var era = (((rawDay >= 0) ? rawDay : (rawDay - 146096)) / 146097) | 0;
	var dayOfEra = rawDay - (era * 146097);
	var yearOfEra = ((((dayOfEra - ((dayOfEra / 1460) | 0)) + ((dayOfEra / 36524) | 0)) - ((dayOfEra / 146096) | 0)) / 365) | 0;
	var dayOfYear = dayOfEra - (((365 * yearOfEra) + ((yearOfEra / 4) | 0)) - ((yearOfEra / 100) | 0));
	var mp = (((5 * dayOfYear) + 2) / 153) | 0;
	var month = mp + ((mp < 10) ? 3 : (-9));
	var year = yearOfEra + (era * 400);
	return {
		day: (dayOfYear - ((((153 * mp) + 2) / 5) | 0)) + 1,
		month: month,
		year: year + ((month <= 2) ? 1 : 0)
	};
};
var $elm$time$Time$toDay = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).day;
	});
var $ryannhg$date_format$DateFormat$dayOfMonth = $elm$time$Time$toDay;
var $elm$time$Time$Sun = {$: 'Sun'};
var $elm$time$Time$Fri = {$: 'Fri'};
var $elm$time$Time$Mon = {$: 'Mon'};
var $elm$time$Time$Sat = {$: 'Sat'};
var $elm$time$Time$Thu = {$: 'Thu'};
var $elm$time$Time$Tue = {$: 'Tue'};
var $elm$time$Time$Wed = {$: 'Wed'};
var $ryannhg$date_format$DateFormat$days = _List_fromArray(
	[$elm$time$Time$Sun, $elm$time$Time$Mon, $elm$time$Time$Tue, $elm$time$Time$Wed, $elm$time$Time$Thu, $elm$time$Time$Fri, $elm$time$Time$Sat]);
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$time$Time$toWeekday = F2(
	function (zone, time) {
		var _v0 = A2(
			$elm$core$Basics$modBy,
			7,
			A2(
				$elm$time$Time$flooredDiv,
				A2($elm$time$Time$toAdjustedMinutes, zone, time),
				60 * 24));
		switch (_v0) {
			case 0:
				return $elm$time$Time$Thu;
			case 1:
				return $elm$time$Time$Fri;
			case 2:
				return $elm$time$Time$Sat;
			case 3:
				return $elm$time$Time$Sun;
			case 4:
				return $elm$time$Time$Mon;
			case 5:
				return $elm$time$Time$Tue;
			default:
				return $elm$time$Time$Wed;
		}
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $ryannhg$date_format$DateFormat$dayOfWeek = F2(
	function (zone, posix) {
		return function (_v1) {
			var i = _v1.a;
			return i;
		}(
			A2(
				$elm$core$Maybe$withDefault,
				_Utils_Tuple2(0, $elm$time$Time$Sun),
				$elm$core$List$head(
					A2(
						$elm$core$List$filter,
						function (_v0) {
							var day = _v0.b;
							return _Utils_eq(
								day,
								A2($elm$time$Time$toWeekday, zone, posix));
						},
						A2(
							$elm$core$List$indexedMap,
							F2(
								function (i, day) {
									return _Utils_Tuple2(i, day);
								}),
							$ryannhg$date_format$DateFormat$days)))));
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $ryannhg$date_format$DateFormat$isLeapYear = function (year_) {
	return (!(!A2($elm$core$Basics$modBy, 4, year_))) ? false : ((!(!A2($elm$core$Basics$modBy, 100, year_))) ? true : ((!(!A2($elm$core$Basics$modBy, 400, year_))) ? false : true));
};
var $ryannhg$date_format$DateFormat$daysInMonth = F2(
	function (year_, month) {
		switch (month.$) {
			case 'Jan':
				return 31;
			case 'Feb':
				return $ryannhg$date_format$DateFormat$isLeapYear(year_) ? 29 : 28;
			case 'Mar':
				return 31;
			case 'Apr':
				return 30;
			case 'May':
				return 31;
			case 'Jun':
				return 30;
			case 'Jul':
				return 31;
			case 'Aug':
				return 31;
			case 'Sep':
				return 30;
			case 'Oct':
				return 31;
			case 'Nov':
				return 30;
			default:
				return 31;
		}
	});
var $elm$time$Time$Jan = {$: 'Jan'};
var $elm$time$Time$Apr = {$: 'Apr'};
var $elm$time$Time$Aug = {$: 'Aug'};
var $elm$time$Time$Dec = {$: 'Dec'};
var $elm$time$Time$Feb = {$: 'Feb'};
var $elm$time$Time$Jul = {$: 'Jul'};
var $elm$time$Time$Jun = {$: 'Jun'};
var $elm$time$Time$Mar = {$: 'Mar'};
var $elm$time$Time$May = {$: 'May'};
var $elm$time$Time$Nov = {$: 'Nov'};
var $elm$time$Time$Oct = {$: 'Oct'};
var $elm$time$Time$Sep = {$: 'Sep'};
var $ryannhg$date_format$DateFormat$months = _List_fromArray(
	[$elm$time$Time$Jan, $elm$time$Time$Feb, $elm$time$Time$Mar, $elm$time$Time$Apr, $elm$time$Time$May, $elm$time$Time$Jun, $elm$time$Time$Jul, $elm$time$Time$Aug, $elm$time$Time$Sep, $elm$time$Time$Oct, $elm$time$Time$Nov, $elm$time$Time$Dec]);
var $elm$time$Time$toMonth = F2(
	function (zone, time) {
		var _v0 = $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).month;
		switch (_v0) {
			case 1:
				return $elm$time$Time$Jan;
			case 2:
				return $elm$time$Time$Feb;
			case 3:
				return $elm$time$Time$Mar;
			case 4:
				return $elm$time$Time$Apr;
			case 5:
				return $elm$time$Time$May;
			case 6:
				return $elm$time$Time$Jun;
			case 7:
				return $elm$time$Time$Jul;
			case 8:
				return $elm$time$Time$Aug;
			case 9:
				return $elm$time$Time$Sep;
			case 10:
				return $elm$time$Time$Oct;
			case 11:
				return $elm$time$Time$Nov;
			default:
				return $elm$time$Time$Dec;
		}
	});
var $ryannhg$date_format$DateFormat$monthPair = F2(
	function (zone, posix) {
		return A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple2(0, $elm$time$Time$Jan),
			$elm$core$List$head(
				A2(
					$elm$core$List$filter,
					function (_v0) {
						var i = _v0.a;
						var m = _v0.b;
						return _Utils_eq(
							m,
							A2($elm$time$Time$toMonth, zone, posix));
					},
					A2(
						$elm$core$List$indexedMap,
						F2(
							function (a, b) {
								return _Utils_Tuple2(a, b);
							}),
						$ryannhg$date_format$DateFormat$months))));
	});
var $ryannhg$date_format$DateFormat$monthNumber_ = F2(
	function (zone, posix) {
		return 1 + function (_v0) {
			var i = _v0.a;
			var m = _v0.b;
			return i;
		}(
			A2($ryannhg$date_format$DateFormat$monthPair, zone, posix));
	});
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $elm$time$Time$toYear = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).year;
	});
var $ryannhg$date_format$DateFormat$dayOfYear = F2(
	function (zone, posix) {
		var monthsBeforeThisOne = A2(
			$elm$core$List$take,
			A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix) - 1,
			$ryannhg$date_format$DateFormat$months);
		var daysBeforeThisMonth = $elm$core$List$sum(
			A2(
				$elm$core$List$map,
				$ryannhg$date_format$DateFormat$daysInMonth(
					A2($elm$time$Time$toYear, zone, posix)),
				monthsBeforeThisOne));
		return daysBeforeThisMonth + A2($ryannhg$date_format$DateFormat$dayOfMonth, zone, posix);
	});
var $ryannhg$date_format$DateFormat$quarter = F2(
	function (zone, posix) {
		return (A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix) / 4) | 0;
	});
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $ryannhg$date_format$DateFormat$toFixedLength = F2(
	function (totalChars, num) {
		var numStr = $elm$core$String$fromInt(num);
		var numZerosNeeded = totalChars - $elm$core$String$length(numStr);
		var zeros = A2(
			$elm$core$String$join,
			'',
			A2(
				$elm$core$List$map,
				function (_v0) {
					return '0';
				},
				A2($elm$core$List$range, 1, numZerosNeeded)));
		return _Utils_ap(zeros, numStr);
	});
var $elm$core$String$toLower = _String_toLower;
var $elm$time$Time$toMillis = F2(
	function (_v0, time) {
		return A2(
			$elm$core$Basics$modBy,
			1000,
			$elm$time$Time$posixToMillis(time));
	});
var $elm$time$Time$toMinute = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2($elm$time$Time$toAdjustedMinutes, zone, time));
	});
var $ryannhg$date_format$DateFormat$toNonMilitary = function (num) {
	return (!num) ? 12 : ((num <= 12) ? num : (num - 12));
};
var $elm$time$Time$toSecond = F2(
	function (_v0, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				1000));
	});
var $elm$core$String$toUpper = _String_toUpper;
var $elm$core$Basics$round = _Basics_round;
var $ryannhg$date_format$DateFormat$millisecondsPerYear = $elm$core$Basics$round((((1000 * 60) * 60) * 24) * 365.25);
var $ryannhg$date_format$DateFormat$firstDayOfYear = F2(
	function (zone, time) {
		return $elm$time$Time$millisToPosix(
			$ryannhg$date_format$DateFormat$millisecondsPerYear * A2($elm$time$Time$toYear, zone, time));
	});
var $ryannhg$date_format$DateFormat$weekOfYear = F2(
	function (zone, posix) {
		var firstDay = A2($ryannhg$date_format$DateFormat$firstDayOfYear, zone, posix);
		var firstDayOffset = A2($ryannhg$date_format$DateFormat$dayOfWeek, zone, firstDay);
		var daysSoFar = A2($ryannhg$date_format$DateFormat$dayOfYear, zone, posix);
		return (((daysSoFar + firstDayOffset) / 7) | 0) + 1;
	});
var $ryannhg$date_format$DateFormat$year = F2(
	function (zone, time) {
		return $elm$core$String$fromInt(
			A2($elm$time$Time$toYear, zone, time));
	});
var $ryannhg$date_format$DateFormat$piece = F4(
	function (language, zone, posix, token) {
		switch (token.$) {
			case 'MonthNumber':
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix));
			case 'MonthSuffix':
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix));
			case 'MonthFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix));
			case 'MonthNameAbbreviated':
				return language.toMonthAbbreviation(
					A2($elm$time$Time$toMonth, zone, posix));
			case 'MonthNameFull':
				return language.toMonthName(
					A2($elm$time$Time$toMonth, zone, posix));
			case 'QuarterNumber':
				return $elm$core$String$fromInt(
					1 + A2($ryannhg$date_format$DateFormat$quarter, zone, posix));
			case 'QuarterSuffix':
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					1 + A2($ryannhg$date_format$DateFormat$quarter, zone, posix));
			case 'DayOfMonthNumber':
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$dayOfMonth, zone, posix));
			case 'DayOfMonthSuffix':
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2($ryannhg$date_format$DateFormat$dayOfMonth, zone, posix));
			case 'DayOfMonthFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($ryannhg$date_format$DateFormat$dayOfMonth, zone, posix));
			case 'DayOfYearNumber':
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$dayOfYear, zone, posix));
			case 'DayOfYearSuffix':
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2($ryannhg$date_format$DateFormat$dayOfYear, zone, posix));
			case 'DayOfYearFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					3,
					A2($ryannhg$date_format$DateFormat$dayOfYear, zone, posix));
			case 'DayOfWeekNumber':
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$dayOfWeek, zone, posix));
			case 'DayOfWeekSuffix':
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2($ryannhg$date_format$DateFormat$dayOfWeek, zone, posix));
			case 'DayOfWeekNameAbbreviated':
				return language.toWeekdayAbbreviation(
					A2($elm$time$Time$toWeekday, zone, posix));
			case 'DayOfWeekNameFull':
				return language.toWeekdayName(
					A2($elm$time$Time$toWeekday, zone, posix));
			case 'WeekOfYearNumber':
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$weekOfYear, zone, posix));
			case 'WeekOfYearSuffix':
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2($ryannhg$date_format$DateFormat$weekOfYear, zone, posix));
			case 'WeekOfYearFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($ryannhg$date_format$DateFormat$weekOfYear, zone, posix));
			case 'YearNumberLastTwo':
				return A2(
					$elm$core$String$right,
					2,
					A2($ryannhg$date_format$DateFormat$year, zone, posix));
			case 'YearNumber':
				return A2($ryannhg$date_format$DateFormat$year, zone, posix);
			case 'AmPmUppercase':
				return $elm$core$String$toUpper(
					A3($ryannhg$date_format$DateFormat$amPm, language, zone, posix));
			case 'AmPmLowercase':
				return $elm$core$String$toLower(
					A3($ryannhg$date_format$DateFormat$amPm, language, zone, posix));
			case 'HourMilitaryNumber':
				return $elm$core$String$fromInt(
					A2($elm$time$Time$toHour, zone, posix));
			case 'HourMilitaryFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($elm$time$Time$toHour, zone, posix));
			case 'HourNumber':
				return $elm$core$String$fromInt(
					$ryannhg$date_format$DateFormat$toNonMilitary(
						A2($elm$time$Time$toHour, zone, posix)));
			case 'HourFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					$ryannhg$date_format$DateFormat$toNonMilitary(
						A2($elm$time$Time$toHour, zone, posix)));
			case 'HourMilitaryFromOneNumber':
				return $elm$core$String$fromInt(
					1 + A2($elm$time$Time$toHour, zone, posix));
			case 'HourMilitaryFromOneFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					1 + A2($elm$time$Time$toHour, zone, posix));
			case 'MinuteNumber':
				return $elm$core$String$fromInt(
					A2($elm$time$Time$toMinute, zone, posix));
			case 'MinuteFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($elm$time$Time$toMinute, zone, posix));
			case 'SecondNumber':
				return $elm$core$String$fromInt(
					A2($elm$time$Time$toSecond, zone, posix));
			case 'SecondFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($elm$time$Time$toSecond, zone, posix));
			case 'MillisecondNumber':
				return $elm$core$String$fromInt(
					A2($elm$time$Time$toMillis, zone, posix));
			case 'MillisecondFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					3,
					A2($elm$time$Time$toMillis, zone, posix));
			default:
				var string = token.a;
				return string;
		}
	});
var $ryannhg$date_format$DateFormat$formatWithLanguage = F4(
	function (language, tokens, zone, time) {
		return A2(
			$elm$core$String$join,
			'',
			A2(
				$elm$core$List$map,
				A3($ryannhg$date_format$DateFormat$piece, language, zone, time),
				tokens));
	});
var $ryannhg$date_format$DateFormat$format = $ryannhg$date_format$DateFormat$formatWithLanguage($ryannhg$date_format$DateFormat$Language$english);
var $ryannhg$date_format$DateFormat$DayOfWeekNameFull = {$: 'DayOfWeekNameFull'};
var $ryannhg$date_format$DateFormat$dayOfWeekNameFull = $ryannhg$date_format$DateFormat$DayOfWeekNameFull;
var $dmy$elm_imf_date_time$Imf$DateTime$formatDay = F2(
	function (tz, posix) {
		return A2(
			$elm$core$String$left,
			3,
			A3(
				$ryannhg$date_format$DateFormat$format,
				_List_fromArray(
					[$ryannhg$date_format$DateFormat$dayOfWeekNameFull]),
				tz,
				posix));
	});
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $justinmimbs$date$Date$toRataDie = function (_v0) {
	var rd = _v0.a;
	return rd;
};
var $justinmimbs$time_extra$Time$Extra$dateToMillis = function (date) {
	var daysSinceEpoch = $justinmimbs$date$Date$toRataDie(date) - 719163;
	return daysSinceEpoch * 86400000;
};
var $justinmimbs$date$Date$RD = function (a) {
	return {$: 'RD', a: a};
};
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$or = _Basics_or;
var $justinmimbs$date$Date$isLeapYear = function (y) {
	return ((!A2($elm$core$Basics$modBy, 4, y)) && (!(!A2($elm$core$Basics$modBy, 100, y)))) || (!A2($elm$core$Basics$modBy, 400, y));
};
var $justinmimbs$date$Date$daysBeforeMonth = F2(
	function (y, m) {
		var leapDays = $justinmimbs$date$Date$isLeapYear(y) ? 1 : 0;
		switch (m.$) {
			case 'Jan':
				return 0;
			case 'Feb':
				return 31;
			case 'Mar':
				return 59 + leapDays;
			case 'Apr':
				return 90 + leapDays;
			case 'May':
				return 120 + leapDays;
			case 'Jun':
				return 151 + leapDays;
			case 'Jul':
				return 181 + leapDays;
			case 'Aug':
				return 212 + leapDays;
			case 'Sep':
				return 243 + leapDays;
			case 'Oct':
				return 273 + leapDays;
			case 'Nov':
				return 304 + leapDays;
			default:
				return 334 + leapDays;
		}
	});
var $justinmimbs$date$Date$floorDiv = F2(
	function (a, b) {
		return $elm$core$Basics$floor(a / b);
	});
var $justinmimbs$date$Date$daysBeforeYear = function (y1) {
	var y = y1 - 1;
	var leapYears = (A2($justinmimbs$date$Date$floorDiv, y, 4) - A2($justinmimbs$date$Date$floorDiv, y, 100)) + A2($justinmimbs$date$Date$floorDiv, y, 400);
	return (365 * y) + leapYears;
};
var $justinmimbs$date$Date$daysInMonth = F2(
	function (y, m) {
		switch (m.$) {
			case 'Jan':
				return 31;
			case 'Feb':
				return $justinmimbs$date$Date$isLeapYear(y) ? 29 : 28;
			case 'Mar':
				return 31;
			case 'Apr':
				return 30;
			case 'May':
				return 31;
			case 'Jun':
				return 30;
			case 'Jul':
				return 31;
			case 'Aug':
				return 31;
			case 'Sep':
				return 30;
			case 'Oct':
				return 31;
			case 'Nov':
				return 30;
			default:
				return 31;
		}
	});
var $justinmimbs$date$Date$fromCalendarDate = F3(
	function (y, m, d) {
		return $justinmimbs$date$Date$RD(
			($justinmimbs$date$Date$daysBeforeYear(y) + A2($justinmimbs$date$Date$daysBeforeMonth, y, m)) + A3(
				$elm$core$Basics$clamp,
				1,
				A2($justinmimbs$date$Date$daysInMonth, y, m),
				d));
	});
var $justinmimbs$date$Date$fromPosix = F2(
	function (zone, posix) {
		return A3(
			$justinmimbs$date$Date$fromCalendarDate,
			A2($elm$time$Time$toYear, zone, posix),
			A2($elm$time$Time$toMonth, zone, posix),
			A2($elm$time$Time$toDay, zone, posix));
	});
var $justinmimbs$time_extra$Time$Extra$timeFromClock = F4(
	function (hour, minute, second, millisecond) {
		return (((hour * 3600000) + (minute * 60000)) + (second * 1000)) + millisecond;
	});
var $justinmimbs$time_extra$Time$Extra$timeFromPosix = F2(
	function (zone, posix) {
		return A4(
			$justinmimbs$time_extra$Time$Extra$timeFromClock,
			A2($elm$time$Time$toHour, zone, posix),
			A2($elm$time$Time$toMinute, zone, posix),
			A2($elm$time$Time$toSecond, zone, posix),
			A2($elm$time$Time$toMillis, zone, posix));
	});
var $justinmimbs$time_extra$Time$Extra$toOffset = F2(
	function (zone, posix) {
		var millis = $elm$time$Time$posixToMillis(posix);
		var localMillis = $justinmimbs$time_extra$Time$Extra$dateToMillis(
			A2($justinmimbs$date$Date$fromPosix, zone, posix)) + A2($justinmimbs$time_extra$Time$Extra$timeFromPosix, zone, posix);
		return ((localMillis - millis) / 60000) | 0;
	});
var $dmy$elm_imf_date_time$Imf$DateTime$formatZone = F2(
	function (tz, posix) {
		var minuteOffset = A2($justinmimbs$time_extra$Time$Extra$toOffset, tz, posix);
		var minute = A3(
			$elm$core$String$padLeft,
			2,
			_Utils_chr('0'),
			$elm$core$String$fromInt(
				A2(
					$elm$core$Basics$modBy,
					60,
					$elm$core$Basics$abs(minuteOffset))));
		var hour = A3(
			$elm$core$String$padLeft,
			2,
			_Utils_chr('0'),
			$elm$core$String$fromInt(
				($elm$core$Basics$abs(minuteOffset) / 60) | 0));
		return $elm$core$String$concat(
			_List_fromArray(
				[
					(minuteOffset >= 0) ? '+' : '-',
					hour,
					minute
				]));
	});
var $ryannhg$date_format$DateFormat$HourMilitaryFixed = {$: 'HourMilitaryFixed'};
var $ryannhg$date_format$DateFormat$hourMilitaryFixed = $ryannhg$date_format$DateFormat$HourMilitaryFixed;
var $ryannhg$date_format$DateFormat$MinuteFixed = {$: 'MinuteFixed'};
var $ryannhg$date_format$DateFormat$minuteFixed = $ryannhg$date_format$DateFormat$MinuteFixed;
var $ryannhg$date_format$DateFormat$MonthNameAbbreviated = {$: 'MonthNameAbbreviated'};
var $ryannhg$date_format$DateFormat$monthNameAbbreviated = $ryannhg$date_format$DateFormat$MonthNameAbbreviated;
var $ryannhg$date_format$DateFormat$SecondFixed = {$: 'SecondFixed'};
var $ryannhg$date_format$DateFormat$secondFixed = $ryannhg$date_format$DateFormat$SecondFixed;
var $ryannhg$date_format$DateFormat$Text = function (a) {
	return {$: 'Text', a: a};
};
var $ryannhg$date_format$DateFormat$text = $ryannhg$date_format$DateFormat$Text;
var $ryannhg$date_format$DateFormat$YearNumber = {$: 'YearNumber'};
var $ryannhg$date_format$DateFormat$yearNumber = $ryannhg$date_format$DateFormat$YearNumber;
var $dmy$elm_imf_date_time$Imf$DateTime$fromPosix = F2(
	function (tz, posix) {
		return A3(
			$ryannhg$date_format$DateFormat$format,
			_List_fromArray(
				[
					$ryannhg$date_format$DateFormat$text(
					A2($dmy$elm_imf_date_time$Imf$DateTime$formatDay, tz, posix)),
					$ryannhg$date_format$DateFormat$text(', '),
					$ryannhg$date_format$DateFormat$dayOfMonthFixed,
					$ryannhg$date_format$DateFormat$text(' '),
					$ryannhg$date_format$DateFormat$monthNameAbbreviated,
					$ryannhg$date_format$DateFormat$text(' '),
					$ryannhg$date_format$DateFormat$yearNumber,
					$ryannhg$date_format$DateFormat$text(' '),
					$ryannhg$date_format$DateFormat$hourMilitaryFixed,
					$ryannhg$date_format$DateFormat$text(':'),
					$ryannhg$date_format$DateFormat$minuteFixed,
					$ryannhg$date_format$DateFormat$text(':'),
					$ryannhg$date_format$DateFormat$secondFixed,
					$ryannhg$date_format$DateFormat$text(' '),
					$ryannhg$date_format$DateFormat$text(
					A2($dmy$elm_imf_date_time$Imf$DateTime$formatZone, tz, posix))
				]),
			tz,
			posix);
	});
var $justinmimbs$date$Date$monthToNumber = function (m) {
	switch (m.$) {
		case 'Jan':
			return 1;
		case 'Feb':
			return 2;
		case 'Mar':
			return 3;
		case 'Apr':
			return 4;
		case 'May':
			return 5;
		case 'Jun':
			return 6;
		case 'Jul':
			return 7;
		case 'Aug':
			return 8;
		case 'Sep':
			return 9;
		case 'Oct':
			return 10;
		case 'Nov':
			return 11;
		default:
			return 12;
	}
};
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $justinmimbs$date$Date$numberToMonth = function (mn) {
	var _v0 = A2($elm$core$Basics$max, 1, mn);
	switch (_v0) {
		case 1:
			return $elm$time$Time$Jan;
		case 2:
			return $elm$time$Time$Feb;
		case 3:
			return $elm$time$Time$Mar;
		case 4:
			return $elm$time$Time$Apr;
		case 5:
			return $elm$time$Time$May;
		case 6:
			return $elm$time$Time$Jun;
		case 7:
			return $elm$time$Time$Jul;
		case 8:
			return $elm$time$Time$Aug;
		case 9:
			return $elm$time$Time$Sep;
		case 10:
			return $elm$time$Time$Oct;
		case 11:
			return $elm$time$Time$Nov;
		default:
			return $elm$time$Time$Dec;
	}
};
var $justinmimbs$date$Date$toCalendarDateHelp = F3(
	function (y, m, d) {
		toCalendarDateHelp:
		while (true) {
			var monthDays = A2($justinmimbs$date$Date$daysInMonth, y, m);
			var mn = $justinmimbs$date$Date$monthToNumber(m);
			if ((mn < 12) && (_Utils_cmp(d, monthDays) > 0)) {
				var $temp$y = y,
					$temp$m = $justinmimbs$date$Date$numberToMonth(mn + 1),
					$temp$d = d - monthDays;
				y = $temp$y;
				m = $temp$m;
				d = $temp$d;
				continue toCalendarDateHelp;
			} else {
				return {day: d, month: m, year: y};
			}
		}
	});
var $justinmimbs$date$Date$divWithRemainder = F2(
	function (a, b) {
		return _Utils_Tuple2(
			A2($justinmimbs$date$Date$floorDiv, a, b),
			A2($elm$core$Basics$modBy, b, a));
	});
var $justinmimbs$date$Date$year = function (_v0) {
	var rd = _v0.a;
	var _v1 = A2($justinmimbs$date$Date$divWithRemainder, rd, 146097);
	var n400 = _v1.a;
	var r400 = _v1.b;
	var _v2 = A2($justinmimbs$date$Date$divWithRemainder, r400, 36524);
	var n100 = _v2.a;
	var r100 = _v2.b;
	var _v3 = A2($justinmimbs$date$Date$divWithRemainder, r100, 1461);
	var n4 = _v3.a;
	var r4 = _v3.b;
	var _v4 = A2($justinmimbs$date$Date$divWithRemainder, r4, 365);
	var n1 = _v4.a;
	var r1 = _v4.b;
	var n = (!r1) ? 0 : 1;
	return ((((n400 * 400) + (n100 * 100)) + (n4 * 4)) + n1) + n;
};
var $justinmimbs$date$Date$toOrdinalDate = function (_v0) {
	var rd = _v0.a;
	var y = $justinmimbs$date$Date$year(
		$justinmimbs$date$Date$RD(rd));
	return {
		ordinalDay: rd - $justinmimbs$date$Date$daysBeforeYear(y),
		year: y
	};
};
var $justinmimbs$date$Date$toCalendarDate = function (_v0) {
	var rd = _v0.a;
	var date = $justinmimbs$date$Date$toOrdinalDate(
		$justinmimbs$date$Date$RD(rd));
	return A3($justinmimbs$date$Date$toCalendarDateHelp, date.year, $elm$time$Time$Jan, date.ordinalDay);
};
var $justinmimbs$date$Date$day = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toCalendarDate,
	function ($) {
		return $.day;
	});
var $justinmimbs$date$Date$month = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toCalendarDate,
	function ($) {
		return $.month;
	});
var $justinmimbs$date$Date$monthNumber = A2($elm$core$Basics$composeR, $justinmimbs$date$Date$month, $justinmimbs$date$Date$monthToNumber);
var $justinmimbs$date$Date$ordinalDay = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toOrdinalDate,
	function ($) {
		return $.ordinalDay;
	});
var $justinmimbs$date$Date$padSignedInt = F2(
	function (length, _int) {
		return _Utils_ap(
			(_int < 0) ? '-' : '',
			A3(
				$elm$core$String$padLeft,
				length,
				_Utils_chr('0'),
				$elm$core$String$fromInt(
					$elm$core$Basics$abs(_int))));
	});
var $justinmimbs$date$Date$monthToQuarter = function (m) {
	return (($justinmimbs$date$Date$monthToNumber(m) + 2) / 3) | 0;
};
var $justinmimbs$date$Date$quarter = A2($elm$core$Basics$composeR, $justinmimbs$date$Date$month, $justinmimbs$date$Date$monthToQuarter);
var $justinmimbs$date$Date$weekdayNumber = function (_v0) {
	var rd = _v0.a;
	var _v1 = A2($elm$core$Basics$modBy, 7, rd);
	if (!_v1) {
		return 7;
	} else {
		var n = _v1;
		return n;
	}
};
var $justinmimbs$date$Date$daysBeforeWeekYear = function (y) {
	var jan4 = $justinmimbs$date$Date$daysBeforeYear(y) + 4;
	return jan4 - $justinmimbs$date$Date$weekdayNumber(
		$justinmimbs$date$Date$RD(jan4));
};
var $justinmimbs$date$Date$numberToWeekday = function (wdn) {
	var _v0 = A2($elm$core$Basics$max, 1, wdn);
	switch (_v0) {
		case 1:
			return $elm$time$Time$Mon;
		case 2:
			return $elm$time$Time$Tue;
		case 3:
			return $elm$time$Time$Wed;
		case 4:
			return $elm$time$Time$Thu;
		case 5:
			return $elm$time$Time$Fri;
		case 6:
			return $elm$time$Time$Sat;
		default:
			return $elm$time$Time$Sun;
	}
};
var $justinmimbs$date$Date$toWeekDate = function (_v0) {
	var rd = _v0.a;
	var wdn = $justinmimbs$date$Date$weekdayNumber(
		$justinmimbs$date$Date$RD(rd));
	var wy = $justinmimbs$date$Date$year(
		$justinmimbs$date$Date$RD(rd + (4 - wdn)));
	var week1Day1 = $justinmimbs$date$Date$daysBeforeWeekYear(wy) + 1;
	return {
		weekNumber: 1 + (((rd - week1Day1) / 7) | 0),
		weekYear: wy,
		weekday: $justinmimbs$date$Date$numberToWeekday(wdn)
	};
};
var $justinmimbs$date$Date$weekNumber = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toWeekDate,
	function ($) {
		return $.weekNumber;
	});
var $justinmimbs$date$Date$weekYear = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toWeekDate,
	function ($) {
		return $.weekYear;
	});
var $justinmimbs$date$Date$weekday = A2($elm$core$Basics$composeR, $justinmimbs$date$Date$weekdayNumber, $justinmimbs$date$Date$numberToWeekday);
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $justinmimbs$date$Date$ordinalSuffix = function (n) {
	var nn = A2($elm$core$Basics$modBy, 100, n);
	var _v0 = A2(
		$elm$core$Basics$min,
		(nn < 20) ? nn : A2($elm$core$Basics$modBy, 10, nn),
		4);
	switch (_v0) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
};
var $justinmimbs$date$Date$withOrdinalSuffix = function (n) {
	return _Utils_ap(
		$elm$core$String$fromInt(n),
		$justinmimbs$date$Date$ordinalSuffix(n));
};
var $justinmimbs$date$Date$formatField = F4(
	function (language, _char, length, date) {
		switch (_char.valueOf()) {
			case 'y':
				if (length === 2) {
					return A2(
						$elm$core$String$right,
						2,
						A3(
							$elm$core$String$padLeft,
							2,
							_Utils_chr('0'),
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$year(date))));
				} else {
					return A2(
						$justinmimbs$date$Date$padSignedInt,
						length,
						$justinmimbs$date$Date$year(date));
				}
			case 'Y':
				if (length === 2) {
					return A2(
						$elm$core$String$right,
						2,
						A3(
							$elm$core$String$padLeft,
							2,
							_Utils_chr('0'),
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$weekYear(date))));
				} else {
					return A2(
						$justinmimbs$date$Date$padSignedInt,
						length,
						$justinmimbs$date$Date$weekYear(date));
				}
			case 'Q':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					case 2:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					case 3:
						return 'Q' + $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					case 4:
						return $justinmimbs$date$Date$withOrdinalSuffix(
							$justinmimbs$date$Date$quarter(date));
					case 5:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					default:
						return '';
				}
			case 'M':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$monthNumber(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							_Utils_chr('0'),
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$monthNumber(date)));
					case 3:
						return language.monthNameShort(
							$justinmimbs$date$Date$month(date));
					case 4:
						return language.monthName(
							$justinmimbs$date$Date$month(date));
					case 5:
						return A2(
							$elm$core$String$left,
							1,
							language.monthNameShort(
								$justinmimbs$date$Date$month(date)));
					default:
						return '';
				}
			case 'w':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$weekNumber(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							_Utils_chr('0'),
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$weekNumber(date)));
					default:
						return '';
				}
			case 'd':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$day(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							_Utils_chr('0'),
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$day(date)));
					case 3:
						return language.dayWithSuffix(
							$justinmimbs$date$Date$day(date));
					default:
						return '';
				}
			case 'D':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$ordinalDay(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							_Utils_chr('0'),
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$ordinalDay(date)));
					case 3:
						return A3(
							$elm$core$String$padLeft,
							3,
							_Utils_chr('0'),
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$ordinalDay(date)));
					default:
						return '';
				}
			case 'E':
				switch (length) {
					case 1:
						return language.weekdayNameShort(
							$justinmimbs$date$Date$weekday(date));
					case 2:
						return language.weekdayNameShort(
							$justinmimbs$date$Date$weekday(date));
					case 3:
						return language.weekdayNameShort(
							$justinmimbs$date$Date$weekday(date));
					case 4:
						return language.weekdayName(
							$justinmimbs$date$Date$weekday(date));
					case 5:
						return A2(
							$elm$core$String$left,
							1,
							language.weekdayNameShort(
								$justinmimbs$date$Date$weekday(date)));
					case 6:
						return A2(
							$elm$core$String$left,
							2,
							language.weekdayNameShort(
								$justinmimbs$date$Date$weekday(date)));
					default:
						return '';
				}
			case 'e':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$weekdayNumber(date));
					case 2:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$weekdayNumber(date));
					default:
						return A4(
							$justinmimbs$date$Date$formatField,
							language,
							_Utils_chr('E'),
							length,
							date);
				}
			default:
				return '';
		}
	});
var $justinmimbs$date$Date$formatWithTokens = F3(
	function (language, tokens, date) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (token, formatted) {
					if (token.$ === 'Field') {
						var _char = token.a;
						var length = token.b;
						return _Utils_ap(
							A4($justinmimbs$date$Date$formatField, language, _char, length, date),
							formatted);
					} else {
						var str = token.a;
						return _Utils_ap(str, formatted);
					}
				}),
			'',
			tokens);
	});
var $justinmimbs$date$Pattern$Literal = function (a) {
	return {$: 'Literal', a: a};
};
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 'Bad', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 'Good', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parseA(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					var _v2 = callback(a);
					var parseB = _v2.a;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
					}
				}
			});
	});
var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0.a;
		var parseB = _v1.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v2 = parseA(s0);
				if (_v2.$ === 'Bad') {
					var p = _v2.a;
					var x = _v2.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v2.a;
					var a = _v2.b;
					var s1 = _v2.c;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3(
							$elm$parser$Parser$Advanced$Good,
							p1 || p2,
							A2(func, a, b),
							s2);
					}
				}
			});
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$Good, false, a, s);
		});
};
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $elm$parser$Parser$Expecting = function (a) {
	return {$: 'Expecting', a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 'Token', a: a, b: b};
	});
var $elm$parser$Parser$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 'AddRight', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {col: col, contextStack: contextStack, problem: problem, row: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 'Empty'};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
	});
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$token = function (str) {
	return $elm$parser$Parser$Advanced$token(
		$elm$parser$Parser$toToken(str));
};
var $justinmimbs$date$Pattern$escapedQuote = A2(
	$elm$parser$Parser$ignorer,
	$elm$parser$Parser$succeed(
		$justinmimbs$date$Pattern$Literal('\'')),
	$elm$parser$Parser$token('\'\''));
var $elm$parser$Parser$UnexpectedChar = {$: 'UnexpectedChar'};
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
				return _Utils_eq(newOffset, -1) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: 1, context: s.context, indent: s.indent, offset: s.offset + 1, row: s.row + 1, src: s.src}) : A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: s.col + 1, context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src}));
			});
	});
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $justinmimbs$date$Pattern$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.offset, offset) < 0,
					_Utils_Tuple0,
					{col: col, context: s0.context, indent: s0.indent, offset: offset, row: row, src: s0.src});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
		});
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $elm$parser$Parser$Advanced$getOffset = $elm$parser$Parser$Advanced$Parser(
	function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, s.offset, s);
	});
var $elm$parser$Parser$getOffset = $elm$parser$Parser$Advanced$getOffset;
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
var $elm$parser$Parser$Problem = function (a) {
	return {$: 'Problem', a: a};
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $elm$parser$Parser$problem = function (msg) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(msg));
};
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $justinmimbs$date$Pattern$fieldRepeats = function (str) {
	var _v0 = $elm$core$String$toList(str);
	if (_v0.b && (!_v0.b.b)) {
		var _char = _v0.a;
		return A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					F2(
						function (x, y) {
							return A2($justinmimbs$date$Pattern$Field, _char, 1 + (y - x));
						})),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$getOffset,
					$elm$parser$Parser$chompWhile(
						$elm$core$Basics$eq(_char)))),
			$elm$parser$Parser$getOffset);
	} else {
		return $elm$parser$Parser$problem('expected exactly one char');
	}
};
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						A2(
							func,
							A3($elm$core$String$slice, s0.offset, s1.offset, s0.src),
							a),
						s1);
				}
			});
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $justinmimbs$date$Pattern$field = A2(
	$elm$parser$Parser$andThen,
	$justinmimbs$date$Pattern$fieldRepeats,
	$elm$parser$Parser$getChompedString(
		$elm$parser$Parser$chompIf($elm$core$Char$isAlpha)));
var $justinmimbs$date$Pattern$finalize = A2(
	$elm$core$List$foldl,
	F2(
		function (token, tokens) {
			var _v0 = _Utils_Tuple2(token, tokens);
			if (((_v0.a.$ === 'Literal') && _v0.b.b) && (_v0.b.a.$ === 'Literal')) {
				var x = _v0.a.a;
				var _v1 = _v0.b;
				var y = _v1.a.a;
				var rest = _v1.b;
				return A2(
					$elm$core$List$cons,
					$justinmimbs$date$Pattern$Literal(
						_Utils_ap(x, y)),
					rest);
			} else {
				return A2($elm$core$List$cons, token, tokens);
			}
		}),
	_List_Nil);
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v0 = thunk(_Utils_Tuple0);
			var parse = _v0.a;
			return parse(s);
		});
};
var $elm$parser$Parser$lazy = $elm$parser$Parser$Advanced$lazy;
var $justinmimbs$date$Pattern$isLiteralChar = function (_char) {
	return (!_Utils_eq(
		_char,
		_Utils_chr('\''))) && (!$elm$core$Char$isAlpha(_char));
};
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						func(a),
						s1);
				} else {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				}
			});
	});
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $justinmimbs$date$Pattern$literal = A2(
	$elm$parser$Parser$map,
	$justinmimbs$date$Pattern$Literal,
	$elm$parser$Parser$getChompedString(
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed(_Utils_Tuple0),
				$elm$parser$Parser$chompIf($justinmimbs$date$Pattern$isLiteralChar)),
			$elm$parser$Parser$chompWhile($justinmimbs$date$Pattern$isLiteralChar))));
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 'Append', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
		});
};
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $elm$parser$Parser$ExpectingEnd = {$: 'ExpectingEnd'};
var $elm$parser$Parser$Advanced$end = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return _Utils_eq(
				$elm$core$String$length(s.src),
				s.offset) ? A3($elm$parser$Parser$Advanced$Good, false, _Utils_Tuple0, s) : A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $justinmimbs$date$Pattern$quotedHelp = function (result) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$andThen,
				function (str) {
					return $justinmimbs$date$Pattern$quotedHelp(
						_Utils_ap(result, str));
				},
				$elm$parser$Parser$getChompedString(
					A2(
						$elm$parser$Parser$ignorer,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed(_Utils_Tuple0),
							$elm$parser$Parser$chompIf(
								$elm$core$Basics$neq(
									_Utils_chr('\'')))),
						$elm$parser$Parser$chompWhile(
							$elm$core$Basics$neq(
								_Utils_chr('\'')))))),
				A2(
				$elm$parser$Parser$andThen,
				function (_v0) {
					return $justinmimbs$date$Pattern$quotedHelp(result + '\'');
				},
				$elm$parser$Parser$token('\'\'')),
				$elm$parser$Parser$succeed(result)
			]));
};
var $justinmimbs$date$Pattern$quoted = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed($justinmimbs$date$Pattern$Literal),
		$elm$parser$Parser$chompIf(
			$elm$core$Basics$eq(
				_Utils_chr('\'')))),
	A2(
		$elm$parser$Parser$ignorer,
		$justinmimbs$date$Pattern$quotedHelp(''),
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$chompIf(
					$elm$core$Basics$eq(
						_Utils_chr('\''))),
					$elm$parser$Parser$end
				]))));
var $justinmimbs$date$Pattern$patternHelp = function (tokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$andThen,
				function (token) {
					return $justinmimbs$date$Pattern$patternHelp(
						A2($elm$core$List$cons, token, tokens));
				},
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[$justinmimbs$date$Pattern$field, $justinmimbs$date$Pattern$literal, $justinmimbs$date$Pattern$escapedQuote, $justinmimbs$date$Pattern$quoted]))),
				$elm$parser$Parser$lazy(
				function (_v0) {
					return $elm$parser$Parser$succeed(
						$justinmimbs$date$Pattern$finalize(tokens));
				})
			]));
};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {col: col, problem: problem, row: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.row, p.col, p.problem);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 'Empty':
					return list;
				case 'AddRight':
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0.a;
		var _v1 = parse(
			{col: 1, context: _List_Nil, indent: 1, offset: 0, row: 1, src: src});
		if (_v1.$ === 'Good') {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (_v0.$ === 'Ok') {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (result.$ === 'Ok') {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $justinmimbs$date$Pattern$fromString = function (str) {
	return A2(
		$elm$core$Result$withDefault,
		_List_fromArray(
			[
				$justinmimbs$date$Pattern$Literal(str)
			]),
		A2(
			$elm$parser$Parser$run,
			$justinmimbs$date$Pattern$patternHelp(_List_Nil),
			str));
};
var $justinmimbs$date$Date$formatWithLanguage = F2(
	function (language, pattern) {
		var tokens = $elm$core$List$reverse(
			$justinmimbs$date$Pattern$fromString(pattern));
		return A2($justinmimbs$date$Date$formatWithTokens, language, tokens);
	});
var $justinmimbs$date$Date$monthToName = function (m) {
	switch (m.$) {
		case 'Jan':
			return 'January';
		case 'Feb':
			return 'February';
		case 'Mar':
			return 'March';
		case 'Apr':
			return 'April';
		case 'May':
			return 'May';
		case 'Jun':
			return 'June';
		case 'Jul':
			return 'July';
		case 'Aug':
			return 'August';
		case 'Sep':
			return 'September';
		case 'Oct':
			return 'October';
		case 'Nov':
			return 'November';
		default:
			return 'December';
	}
};
var $justinmimbs$date$Date$weekdayToName = function (wd) {
	switch (wd.$) {
		case 'Mon':
			return 'Monday';
		case 'Tue':
			return 'Tuesday';
		case 'Wed':
			return 'Wednesday';
		case 'Thu':
			return 'Thursday';
		case 'Fri':
			return 'Friday';
		case 'Sat':
			return 'Saturday';
		default:
			return 'Sunday';
	}
};
var $justinmimbs$date$Date$language_en = {
	dayWithSuffix: $justinmimbs$date$Date$withOrdinalSuffix,
	monthName: $justinmimbs$date$Date$monthToName,
	monthNameShort: A2(
		$elm$core$Basics$composeR,
		$justinmimbs$date$Date$monthToName,
		$elm$core$String$left(3)),
	weekdayName: $justinmimbs$date$Date$weekdayToName,
	weekdayNameShort: A2(
		$elm$core$Basics$composeR,
		$justinmimbs$date$Date$weekdayToName,
		$elm$core$String$left(3))
};
var $justinmimbs$date$Date$format = function (pattern) {
	return A2($justinmimbs$date$Date$formatWithLanguage, $justinmimbs$date$Date$language_en, pattern);
};
var $dillonkearns$elm_rss$Rss$formatDate = function (date) {
	return A2($justinmimbs$date$Date$format, 'EEE, dd MMM yyyy', date) + ' 00:00:00 GMT';
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$utc = A2($elm$time$Time$Zone, 0, _List_Nil);
var $dillonkearns$elm_rss$Rss$formatDateOrTime = function (dateOrTime) {
	if (dateOrTime.$ === 'Date') {
		var date = dateOrTime.a;
		return $dillonkearns$elm_rss$Rss$formatDate(date);
	} else {
		var posix = dateOrTime.a;
		return A2($dmy$elm_imf_date_time$Imf$DateTime$fromPosix, $elm$time$Time$utc, posix);
	}
};
var $dillonkearns$elm_rss$Path$dropLeading = function (url) {
	return A2($elm$core$String$startsWith, '/', url) ? A2($elm$core$String$dropLeft, 1, url) : url;
};
var $dillonkearns$elm_rss$Path$dropTrailing = function (url) {
	return A2($elm$core$String$endsWith, '/', url) ? A2($elm$core$String$dropRight, 1, url) : url;
};
var $dillonkearns$elm_rss$Path$dropBoth = function (url) {
	return $dillonkearns$elm_rss$Path$dropTrailing(
		$dillonkearns$elm_rss$Path$dropLeading(url));
};
var $dillonkearns$elm_rss$Path$join = function (urls) {
	return A2(
		$elm$core$String$join,
		'/',
		A2($elm$core$List$map, $dillonkearns$elm_rss$Path$dropBoth, urls));
};
var $dillonkearns$elm_rss$Rss$keyValue = F2(
	function (key, value) {
		return $billstclair$elm_xml_eeue56$Xml$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple3(
					key,
					$elm$core$Dict$empty,
					$billstclair$elm_xml_eeue56$Xml$Encode$string(value))
				]));
	});
var $dillonkearns$elm_rss$Rss$itemXml = F2(
	function (siteUrl, item) {
		return $billstclair$elm_xml_eeue56$Xml$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple3(
					'item',
					$elm$core$Dict$empty,
					$billstclair$elm_xml_eeue56$Xml$Encode$list(
						_Utils_ap(
							_List_fromArray(
								[
									A2($dillonkearns$elm_rss$Rss$keyValue, 'title', item.title),
									A2($dillonkearns$elm_rss$Rss$keyValue, 'description', item.description),
									A2(
									$dillonkearns$elm_rss$Rss$keyValue,
									'link',
									$dillonkearns$elm_rss$Path$join(
										_List_fromArray(
											[siteUrl, item.url]))),
									A2(
									$dillonkearns$elm_rss$Rss$keyValue,
									'guid',
									$dillonkearns$elm_rss$Path$join(
										_List_fromArray(
											[siteUrl, item.url]))),
									A2(
									$dillonkearns$elm_rss$Rss$keyValue,
									'pubDate',
									$dillonkearns$elm_rss$Rss$formatDateOrTime(item.pubDate))
								]),
							A2(
								$elm$core$List$filterMap,
								$elm$core$Basics$identity,
								_List_fromArray(
									[
										A2(
										$elm$core$Maybe$map,
										function (content) {
											return A2($dillonkearns$elm_rss$Rss$keyValue, 'content', content);
										},
										item.content)
									])))))
				]));
	});
var $dillonkearns$elm_rss$Rss$generate = function (feed) {
	return A2(
		$billstclair$elm_xml_eeue56$Xml$Encode$encode,
		0,
		$billstclair$elm_xml_eeue56$Xml$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple3(
					'rss',
					$elm$core$Dict$fromList(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'xmlns:dc',
								$billstclair$elm_xml_eeue56$Xml$Encode$string('http://purl.org/dc/elements/1.1/')),
								_Utils_Tuple2(
								'xmlns:content',
								$billstclair$elm_xml_eeue56$Xml$Encode$string('http://purl.org/rss/1.0/modules/content/')),
								_Utils_Tuple2(
								'xmlns:atom',
								$billstclair$elm_xml_eeue56$Xml$Encode$string('http://www.w3.org/2005/Atom')),
								_Utils_Tuple2(
								'version',
								$billstclair$elm_xml_eeue56$Xml$Encode$string('2.0'))
							])),
					$billstclair$elm_xml_eeue56$Xml$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple3(
								'channel',
								$elm$core$Dict$empty,
								$billstclair$elm_xml_eeue56$Xml$Encode$list(
									$elm$core$List$concat(
										_List_fromArray(
											[
												_List_fromArray(
												[
													A2($dillonkearns$elm_rss$Rss$keyValue, 'title', feed.title),
													A2($dillonkearns$elm_rss$Rss$keyValue, 'description', feed.description),
													A2($dillonkearns$elm_rss$Rss$keyValue, 'link', feed.url),
													A2(
													$dillonkearns$elm_rss$Rss$keyValue,
													'lastBuildDate',
													A2($dmy$elm_imf_date_time$Imf$DateTime$fromPosix, $elm$time$Time$utc, feed.lastBuildTime))
												]),
												A2(
												$elm$core$List$filterMap,
												$elm$core$Basics$identity,
												_List_fromArray(
													[
														A2(
														$elm$core$Maybe$map,
														$dillonkearns$elm_rss$Rss$keyValue('generator'),
														feed.generator)
													])),
												A2(
												$elm$core$List$map,
												$dillonkearns$elm_rss$Rss$itemXml(feed.siteUrl),
												feed.items)
											]))))
							])))
				])));
};
var $dillonkearns$elm_rss$Rss$Date = function (a) {
	return {$: 'Date', a: a};
};
var $author$project$Feed$metadataToRssItem = function (page) {
	var _v0 = page.frontmatter;
	if (_v0.$ === 'Article') {
		var article = _v0.a;
		return article.draft ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
			{
				author: article.author.name,
				categories: _List_Nil,
				content: $elm$core$Maybe$Nothing,
				description: article.description,
				pubDate: $dillonkearns$elm_rss$Rss$Date(article.published),
				title: article.title,
				url: $dillonkearns$elm_pages$Pages$PagePath$toString(page.path)
			});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Feed$generate = F2(
	function (_v0, siteMetadata) {
		var siteTagline = _v0.siteTagline;
		var siteUrl = _v0.siteUrl;
		return $dillonkearns$elm_rss$Rss$generate(
			{
				description: siteTagline,
				generator: $elm$core$Maybe$Just('elm-pages'),
				items: A2($elm$core$List$filterMap, $author$project$Feed$metadataToRssItem, siteMetadata),
				lastBuildTime: $author$project$Pages$builtAt,
				siteUrl: siteUrl,
				title: 'elm-pages Blog',
				url: 'https://elm-pages.com/blog'
			});
	});
var $author$project$Feed$fileToGenerate = F2(
	function (config, siteMetadata) {
		return {
			content: A2($author$project$Feed$generate, config, siteMetadata),
			path: _List_fromArray(
				['blog', 'feed.xml'])
		};
	});
var $author$project$Main$siteTagline = 'Starter blog for elm-pages';
var $dillonkearns$elm_pages$Pages$StaticHttpRequest$Done = function (a) {
	return {$: 'Done', a: a};
};
var $dillonkearns$elm_pages$Pages$StaticHttpRequest$Request = function (a) {
	return {$: 'Request', a: a};
};
var $dillonkearns$elm_pages$Pages$StaticHttp$succeed = function (value) {
	return $dillonkearns$elm_pages$Pages$StaticHttpRequest$Request(
		_Utils_Tuple2(
			_List_Nil,
			F2(
				function (appType, rawResponses) {
					return $elm$core$Result$Ok(
						_Utils_Tuple2(
							$elm$core$Dict$empty,
							$dillonkearns$elm_pages$Pages$StaticHttpRequest$Done(value)));
				})));
};
var $author$project$Main$generateFiles = function (siteMetadata) {
	return $dillonkearns$elm_pages$Pages$StaticHttp$succeed(
		_List_fromArray(
			[
				$elm$core$Result$Ok(
				A2(
					$author$project$Feed$fileToGenerate,
					{siteTagline: $author$project$Main$siteTagline, siteUrl: $author$project$Main$canonicalSiteUrl},
					siteMetadata)),
				$elm$core$Result$Ok(
				A2(
					$author$project$MySitemap$build,
					{siteUrl: $author$project$Main$canonicalSiteUrl},
					siteMetadata))
			]));
};
var $author$project$Main$Model = {};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$String$all = _String_all;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Main$init = _Utils_Tuple2($author$project$Main$Model, $elm$core$Platform$Cmd$none);
var $dillonkearns$elm_pages$Pages$Platform$Builder = function (a) {
	return {$: 'Builder', a: a};
};
var $dillonkearns$elm_pages$Pages$Document$DocumentHandler = function (a) {
	return {$: 'DocumentHandler', a: a};
};
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $dillonkearns$elm_pages$Pages$Document$parser = function (_v0) {
	var extension = _v0.extension;
	var body = _v0.body;
	var metadata = _v0.metadata;
	return _Utils_Tuple2(
		extension,
		$dillonkearns$elm_pages$Pages$Document$DocumentHandler(
			{
				contentParser: body,
				frontmatterParser: function (frontmatter) {
					return A2(
						$elm$core$Result$mapError,
						$elm$json$Json$Decode$errorToString,
						A2($elm$json$Json$Decode$decodeString, metadata, frontmatter));
				}
			}));
};
var $dillonkearns$elm_pages$Pages$Platform$init = function (config) {
	return $dillonkearns$elm_pages$Pages$Platform$Builder(
		{
			canonicalSiteUrl: config.canonicalSiteUrl,
			documents: A2($elm$core$List$map, $dillonkearns$elm_pages$Pages$Document$parser, config.documents),
			generateFiles: function (_v0) {
				return $dillonkearns$elm_pages$Pages$StaticHttp$succeed(_List_Nil);
			},
			init: config.init,
			internals: config.internals,
			manifest: config.manifest,
			onPageChange: config.onPageChange,
			subscriptions: config.subscriptions,
			update: config.update,
			view: config.view
		});
};
var $dillonkearns$elm_pages$Pages$Internal$Browser = {$: 'Browser'};
var $author$project$Pages$PathKey = {$: 'PathKey'};
var $author$project$Pages$content = _List_fromArray(
	[
		_Utils_Tuple2(
		_List_Nil,
		{body: $elm$core$Maybe$Nothing, extension: 'md', frontMatter: '{\"title\":\"elm-pages-starter - a simple blog starter\",\"type\":\"page\"}'}),
		_Utils_Tuple2(
		_List_fromArray(
			['blog', 'draft']),
		{body: $elm$core$Maybe$Nothing, extension: 'md', frontMatter: '{\"type\":\"blog\",\"author\":\"Dillon Kearns\",\"title\":\"A Draft Blog Post\",\"description\":\"I\'m not quite ready to share this post with the world\",\"image\":\"images/article-covers/mountains.jpg\",\"draft\":true,\"published\":\"2019-09-21\"}'}),
		_Utils_Tuple2(
		_List_fromArray(
			['blog', 'hello']),
		{body: $elm$core$Maybe$Nothing, extension: 'md', frontMatter: '{\"type\":\"blog\",\"author\":\"Dillon Kearns\",\"title\":\"Hello `elm-pages`! ????\",\"description\":\"Here\'s an intro for my blog post to get you interested in reading more...\",\"image\":\"images/article-covers/hello.jpg\",\"published\":\"2019-09-21\"}'}),
		_Utils_Tuple2(
		_List_fromArray(
			['blog']),
		{body: $elm$core$Maybe$Nothing, extension: 'md', frontMatter: '{\"title\":\"elm-pages blog\",\"type\":\"blog-index\"}'})
	]);
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Pages$fromJsPort = _Platform_incomingPort('fromJsPort', $elm$json$Json$Decode$value);
var $author$project$Pages$toJsPort = _Platform_outgoingPort('toJsPort', $elm$core$Basics$identity);
var $author$project$Pages$internals = {
	applicationType: $dillonkearns$elm_pages$Pages$Internal$Browser,
	content: $author$project$Pages$content,
	fromJsPort: $author$project$Pages$fromJsPort($elm$core$Basics$identity),
	pathKey: $author$project$Pages$PathKey,
	toJsPort: $author$project$Pages$toJsPort
};
var $dillonkearns$elm_pages$Pages$Manifest$Portrait = {$: 'Portrait'};
var $dillonkearns$elm_pages$Pages$Manifest$Standalone = {$: 'Standalone'};
var $dillonkearns$elm_pages$Pages$Manifest$Category$Category = function (a) {
	return {$: 'Category', a: a};
};
var $dillonkearns$elm_pages$Pages$Manifest$Category$education = $dillonkearns$elm_pages$Pages$Manifest$Category$Category('education');
var $dillonkearns$elm_pages$Pages$ImagePath$Internal = F2(
	function (a, b) {
		return {$: 'Internal', a: a, b: b};
	});
var $dillonkearns$elm_pages$Pages$ImagePath$build = F3(
	function (_v0, path, dims) {
		return A2($dillonkearns$elm_pages$Pages$ImagePath$Internal, path, dims);
	});
var $author$project$Pages$buildImage = F2(
	function (path, dimensions) {
		return A3(
			$dillonkearns$elm_pages$Pages$ImagePath$build,
			$author$project$Pages$PathKey,
			A2($elm$core$List$cons, 'images', path),
			dimensions);
	});
var $dillonkearns$elm_pages$Pages$PagePath$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $dillonkearns$elm_pages$Pages$PagePath$build = F2(
	function (key, path) {
		return $dillonkearns$elm_pages$Pages$PagePath$Internal(path);
	});
var $author$project$Pages$buildPage = function (path) {
	return A2($dillonkearns$elm_pages$Pages$PagePath$build, $author$project$Pages$PathKey, path);
};
var $author$project$Pages$allPages = _List_fromArray(
	[
		$author$project$Pages$buildPage(
		_List_fromArray(
			['blog', 'draft'])),
		$author$project$Pages$buildPage(
		_List_fromArray(
			['blog', 'hello'])),
		$author$project$Pages$buildPage(
		_List_fromArray(
			['blog'])),
		$author$project$Pages$buildPage(_List_Nil)
	]);
var $dillonkearns$elm_pages$Pages$Directory$Directory = F3(
	function (a, b, c) {
		return {$: 'Directory', a: a, b: b, c: c};
	});
var $dillonkearns$elm_pages$Pages$Directory$withoutIndex = F3(
	function (key, allPagePaths, path) {
		return A3($dillonkearns$elm_pages$Pages$Directory$Directory, key, allPagePaths, path);
	});
var $author$project$Pages$directoryWithoutIndex = function (path) {
	return A3($dillonkearns$elm_pages$Pages$Directory$withoutIndex, $author$project$Pages$PathKey, $author$project$Pages$allPages, path);
};
var $author$project$Pages$images = {
	articleCovers: {
		directory: $author$project$Pages$directoryWithoutIndex(
			_List_fromArray(
				['articleCovers'])),
		hello: A2(
			$author$project$Pages$buildImage,
			_List_fromArray(
				['article-covers', 'hello.jpg']),
			{height: 1561, width: 2000}),
		mountains: A2(
			$author$project$Pages$buildImage,
			_List_fromArray(
				['article-covers', 'mountains.jpg']),
			{height: 1600, width: 2400})
	},
	author: {
		dillon: A2(
			$author$project$Pages$buildImage,
			_List_fromArray(
				['author', 'dillon.jpg']),
			{height: 3035, width: 3035}),
		directory: $author$project$Pages$directoryWithoutIndex(
			_List_fromArray(
				['author']))
	},
	directory: $author$project$Pages$directoryWithoutIndex(_List_Nil),
	elmLogo: A2(
		$author$project$Pages$buildImage,
		_List_fromArray(
			['elm-logo.svg']),
		{height: 323, width: 323}),
	github: A2(
		$author$project$Pages$buildImage,
		_List_fromArray(
			['github.svg']),
		{height: 24, width: 24}),
	icon: A2(
		$author$project$Pages$buildImage,
		_List_fromArray(
			['icon.svg']),
		{height: 75, width: 50}),
	iconPng: A2(
		$author$project$Pages$buildImage,
		_List_fromArray(
			['icon-png.png']),
		{height: 75, width: 50})
};
var $dillonkearns$elm_pages$Pages$Directory$withIndex = F3(
	function (key, allPagePaths, path) {
		return A3($dillonkearns$elm_pages$Pages$Directory$Directory, key, allPagePaths, path);
	});
var $author$project$Pages$directoryWithIndex = function (path) {
	return A3($dillonkearns$elm_pages$Pages$Directory$withIndex, $author$project$Pages$PathKey, $author$project$Pages$allPages, path);
};
var $author$project$Pages$pages = {
	blog: {
		directory: $author$project$Pages$directoryWithIndex(
			_List_fromArray(
				['blog'])),
		draft: $author$project$Pages$buildPage(
			_List_fromArray(
				['blog', 'draft'])),
		hello: $author$project$Pages$buildPage(
			_List_fromArray(
				['blog', 'hello'])),
		index: $author$project$Pages$buildPage(
			_List_fromArray(
				['blog']))
	},
	directory: $author$project$Pages$directoryWithIndex(_List_Nil),
	index: $author$project$Pages$buildPage(_List_Nil)
};
var $avh4$elm_color$Color$RgbaSpace = F4(
	function (a, b, c, d) {
		return {$: 'RgbaSpace', a: a, b: b, c: c, d: d};
	});
var $avh4$elm_color$Color$white = A4($avh4$elm_color$Color$RgbaSpace, 255 / 255, 255 / 255, 255 / 255, 1.0);
var $author$project$Main$manifest = {
	backgroundColor: $elm$core$Maybe$Just($avh4$elm_color$Color$white),
	categories: _List_fromArray(
		[$dillonkearns$elm_pages$Pages$Manifest$Category$education]),
	description: 'elm-pages-starter - A statically typed site generator.',
	displayMode: $dillonkearns$elm_pages$Pages$Manifest$Standalone,
	iarcRatingId: $elm$core$Maybe$Nothing,
	icons: _List_Nil,
	name: 'elm-pages-starter',
	orientation: $dillonkearns$elm_pages$Pages$Manifest$Portrait,
	shortName: $elm$core$Maybe$Just('elm-pages-starter'),
	sourceIcon: $author$project$Pages$images.iconPng,
	startUrl: $author$project$Pages$pages.index,
	themeColor: $elm$core$Maybe$Just($avh4$elm_color$Color$white)
};
var $author$project$Metadata$Article = function (a) {
	return {$: 'Article', a: a};
};
var $author$project$Metadata$ArticleMetadata = F6(
	function (title, description, published, author, image, draft) {
		return {author: author, description: description, draft: draft, image: image, published: published, title: title};
	});
var $author$project$Data$Author$Author = F3(
	function (name, avatar, bio) {
		return {avatar: avatar, bio: bio, name: name};
	});
var $author$project$Metadata$Author = function (a) {
	return {$: 'Author', a: a};
};
var $author$project$Metadata$BlogIndex = {$: 'BlogIndex'};
var $author$project$Metadata$Page = function (a) {
	return {$: 'Page', a: a};
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $author$project$Data$Author$all = _List_fromArray(
	[
		{avatar: $author$project$Pages$images.author.dillon, bio: 'Elm developer and educator. Founder of Incremental Elm Consulting.', name: 'Dillon Kearns'}
	]);
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm_community$list_extra$List$Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $author$project$Data$Author$decoder = A2(
	$elm$json$Json$Decode$andThen,
	function (lookupName) {
		var _v0 = A2(
			$elm_community$list_extra$List$Extra$find,
			function (currentAuthor) {
				return _Utils_eq(currentAuthor.name, lookupName);
			},
			$author$project$Data$Author$all);
		if (_v0.$ === 'Just') {
			var author = _v0.a;
			return $elm$json$Json$Decode$succeed(author);
		} else {
			return $elm$json$Json$Decode$fail(
				'Couldn\'t find author with name ' + (lookupName + ('. Options are ' + A2(
					$elm$core$String$join,
					', ',
					A2(
						$elm$core$List$map,
						function ($) {
							return $.name;
						},
						$author$project$Data$Author$all)))));
		}
	},
	$elm$json$Json$Decode$string);
var $elm$json$Json$Decode$field = _Json_decodeField;
var $justinmimbs$date$Date$deadEndToString = function (_v0) {
	var problem = _v0.problem;
	if (problem.$ === 'Problem') {
		var message = problem.a;
		return message;
	} else {
		return 'Expected a date in ISO 8601 format';
	}
};
var $justinmimbs$date$Date$MonthAndDay = F2(
	function (a, b) {
		return {$: 'MonthAndDay', a: a, b: b};
	});
var $justinmimbs$date$Date$OrdinalDay = function (a) {
	return {$: 'OrdinalDay', a: a};
};
var $justinmimbs$date$Date$WeekAndWeekday = F2(
	function (a, b) {
		return {$: 'WeekAndWeekday', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0.a;
	return $elm$parser$Parser$Advanced$Parser(
		function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 'Bad') {
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, false, x);
			} else {
				var a = _v1.b;
				var s1 = _v1.c;
				return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
			}
		});
};
var $elm$parser$Parser$backtrackable = $elm$parser$Parser$Advanced$backtrackable;
var $elm$parser$Parser$Advanced$commit = function (a) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$Good, true, a, s);
		});
};
var $elm$parser$Parser$commit = $elm$parser$Parser$Advanced$commit;
var $elm$parser$Parser$mapChompedString = $elm$parser$Parser$Advanced$mapChompedString;
var $elm$core$String$toInt = _String_toInt;
var $justinmimbs$date$Date$int1 = A2(
	$elm$parser$Parser$mapChompedString,
	F2(
		function (str, _v0) {
			return A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(str));
		}),
	$elm$parser$Parser$chompIf($elm$core$Char$isDigit));
var $justinmimbs$date$Date$int2 = A2(
	$elm$parser$Parser$mapChompedString,
	F2(
		function (str, _v0) {
			return A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(str));
		}),
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(_Utils_Tuple0),
			$elm$parser$Parser$chompIf($elm$core$Char$isDigit)),
		$elm$parser$Parser$chompIf($elm$core$Char$isDigit)));
var $justinmimbs$date$Date$int3 = A2(
	$elm$parser$Parser$mapChompedString,
	F2(
		function (str, _v0) {
			return A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(str));
		}),
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed(_Utils_Tuple0),
				$elm$parser$Parser$chompIf($elm$core$Char$isDigit)),
			$elm$parser$Parser$chompIf($elm$core$Char$isDigit)),
		$elm$parser$Parser$chompIf($elm$core$Char$isDigit)));
var $justinmimbs$date$Date$dayOfYear = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$token('-')),
			$elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$backtrackable(
						A2(
							$elm$parser$Parser$andThen,
							$elm$parser$Parser$commit,
							A2($elm$parser$Parser$map, $justinmimbs$date$Date$OrdinalDay, $justinmimbs$date$Date$int3))),
						A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							$elm$parser$Parser$succeed($justinmimbs$date$Date$MonthAndDay),
							$justinmimbs$date$Date$int2),
						$elm$parser$Parser$oneOf(
							_List_fromArray(
								[
									A2(
									$elm$parser$Parser$keeper,
									A2(
										$elm$parser$Parser$ignorer,
										$elm$parser$Parser$succeed($elm$core$Basics$identity),
										$elm$parser$Parser$token('-')),
									$justinmimbs$date$Date$int2),
									$elm$parser$Parser$succeed(1)
								]))),
						A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							A2(
								$elm$parser$Parser$ignorer,
								$elm$parser$Parser$succeed($justinmimbs$date$Date$WeekAndWeekday),
								$elm$parser$Parser$token('W')),
							$justinmimbs$date$Date$int2),
						$elm$parser$Parser$oneOf(
							_List_fromArray(
								[
									A2(
									$elm$parser$Parser$keeper,
									A2(
										$elm$parser$Parser$ignorer,
										$elm$parser$Parser$succeed($elm$core$Basics$identity),
										$elm$parser$Parser$token('-')),
									$justinmimbs$date$Date$int1),
									$elm$parser$Parser$succeed(1)
								])))
					]))),
			$elm$parser$Parser$backtrackable(
			A2(
				$elm$parser$Parser$andThen,
				$elm$parser$Parser$commit,
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$keeper,
						$elm$parser$Parser$succeed($justinmimbs$date$Date$MonthAndDay),
						$justinmimbs$date$Date$int2),
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								$justinmimbs$date$Date$int2,
								$elm$parser$Parser$succeed(1)
							]))))),
			A2($elm$parser$Parser$map, $justinmimbs$date$Date$OrdinalDay, $justinmimbs$date$Date$int3),
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($justinmimbs$date$Date$WeekAndWeekday),
					$elm$parser$Parser$token('W')),
				$justinmimbs$date$Date$int2),
			$elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						$justinmimbs$date$Date$int1,
						$elm$parser$Parser$succeed(1)
					]))),
			$elm$parser$Parser$succeed(
			$justinmimbs$date$Date$OrdinalDay(1))
		]));
var $justinmimbs$date$Date$isBetweenInt = F3(
	function (a, b, x) {
		return (_Utils_cmp(a, x) < 1) && (_Utils_cmp(x, b) < 1);
	});
var $justinmimbs$date$Date$fromCalendarParts = F3(
	function (y, mn, d) {
		return (A3($justinmimbs$date$Date$isBetweenInt, 1, 12, mn) && A3(
			$justinmimbs$date$Date$isBetweenInt,
			1,
			A2(
				$justinmimbs$date$Date$daysInMonth,
				y,
				$justinmimbs$date$Date$numberToMonth(mn)),
			d)) ? $elm$core$Result$Ok(
			$justinmimbs$date$Date$RD(
				($justinmimbs$date$Date$daysBeforeYear(y) + A2(
					$justinmimbs$date$Date$daysBeforeMonth,
					y,
					$justinmimbs$date$Date$numberToMonth(mn))) + d)) : $elm$core$Result$Err(
			'Invalid calendar date (' + ($elm$core$String$fromInt(y) + (', ' + ($elm$core$String$fromInt(mn) + (', ' + ($elm$core$String$fromInt(d) + ')'))))));
	});
var $justinmimbs$date$Date$fromOrdinalParts = F2(
	function (y, od) {
		return (A3($justinmimbs$date$Date$isBetweenInt, 1, 365, od) || ((od === 366) && $justinmimbs$date$Date$isLeapYear(y))) ? $elm$core$Result$Ok(
			$justinmimbs$date$Date$RD(
				$justinmimbs$date$Date$daysBeforeYear(y) + od)) : $elm$core$Result$Err(
			'Invalid ordinal date (' + ($elm$core$String$fromInt(y) + (', ' + ($elm$core$String$fromInt(od) + ')'))));
	});
var $justinmimbs$date$Date$firstOfYear = function (y) {
	return $justinmimbs$date$Date$RD(
		$justinmimbs$date$Date$daysBeforeYear(y) + 1);
};
var $justinmimbs$date$Date$is53WeekYear = function (y) {
	var wdnJan1 = $justinmimbs$date$Date$weekdayNumber(
		$justinmimbs$date$Date$firstOfYear(y));
	return (wdnJan1 === 4) || ((wdnJan1 === 3) && $justinmimbs$date$Date$isLeapYear(y));
};
var $justinmimbs$date$Date$fromWeekParts = F3(
	function (wy, wn, wdn) {
		return (A3($justinmimbs$date$Date$isBetweenInt, 1, 7, wdn) && (A3($justinmimbs$date$Date$isBetweenInt, 1, 52, wn) || ((wn === 53) && $justinmimbs$date$Date$is53WeekYear(wy)))) ? $elm$core$Result$Ok(
			$justinmimbs$date$Date$RD(
				($justinmimbs$date$Date$daysBeforeWeekYear(wy) + ((wn - 1) * 7)) + wdn)) : $elm$core$Result$Err(
			'Invalid week date (' + ($elm$core$String$fromInt(wy) + (', ' + ($elm$core$String$fromInt(wn) + (', ' + ($elm$core$String$fromInt(wdn) + ')'))))));
	});
var $justinmimbs$date$Date$fromYearAndDayOfYear = function (_v0) {
	var y = _v0.a;
	var doy = _v0.b;
	switch (doy.$) {
		case 'MonthAndDay':
			var mn = doy.a;
			var d = doy.b;
			return A3($justinmimbs$date$Date$fromCalendarParts, y, mn, d);
		case 'WeekAndWeekday':
			var wn = doy.a;
			var wdn = doy.b;
			return A3($justinmimbs$date$Date$fromWeekParts, y, wn, wdn);
		default:
			var od = doy.a;
			return A2($justinmimbs$date$Date$fromOrdinalParts, y, od);
	}
};
var $justinmimbs$date$Date$int4 = A2(
	$elm$parser$Parser$mapChompedString,
	F2(
		function (str, _v0) {
			return A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(str));
		}),
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$succeed(_Utils_Tuple0),
						$elm$parser$Parser$oneOf(
							_List_fromArray(
								[
									$elm$parser$Parser$chompIf(
									function (c) {
										return _Utils_eq(
											c,
											_Utils_chr('-'));
									}),
									$elm$parser$Parser$succeed(_Utils_Tuple0)
								]))),
					$elm$parser$Parser$chompIf($elm$core$Char$isDigit)),
				$elm$parser$Parser$chompIf($elm$core$Char$isDigit)),
			$elm$parser$Parser$chompIf($elm$core$Char$isDigit)),
		$elm$parser$Parser$chompIf($elm$core$Char$isDigit)));
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $justinmimbs$date$Date$resultToParser = function (result) {
	if (result.$ === 'Ok') {
		var x = result.a;
		return $elm$parser$Parser$succeed(x);
	} else {
		var message = result.a;
		return $elm$parser$Parser$problem(message);
	}
};
var $justinmimbs$date$Date$parser = A2(
	$elm$parser$Parser$andThen,
	A2($elm$core$Basics$composeR, $justinmimbs$date$Date$fromYearAndDayOfYear, $justinmimbs$date$Date$resultToParser),
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Tuple$pair),
			$justinmimbs$date$Date$int4),
		$justinmimbs$date$Date$dayOfYear));
var $justinmimbs$date$Date$fromIsoString = A2(
	$elm$core$Basics$composeR,
	$elm$parser$Parser$run(
		A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			A2(
				$elm$parser$Parser$ignorer,
				$justinmimbs$date$Date$parser,
				A2(
					$elm$parser$Parser$andThen,
					$justinmimbs$date$Date$resultToParser,
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								A2($elm$parser$Parser$map, $elm$core$Result$Ok, $elm$parser$Parser$end),
								A2(
								$elm$parser$Parser$map,
								$elm$core$Basics$always(
									$elm$core$Result$Err('Expected a date only, not a date and time')),
								$elm$parser$Parser$chompIf(
									$elm$core$Basics$eq(
										_Utils_chr('T')))),
								$elm$parser$Parser$succeed(
								$elm$core$Result$Err('Expected a date only'))
							])))))),
	$elm$core$Result$mapError(
		A2(
			$elm$core$Basics$composeR,
			$elm$core$List$head,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Maybe$map($justinmimbs$date$Date$deadEndToString),
				$elm$core$Maybe$withDefault('')))));
var $author$project$Pages$allImages = _List_fromArray(
	[
		A2(
		$author$project$Pages$buildImage,
		_List_fromArray(
			['article-covers', 'hello.jpg']),
		{height: 1561, width: 2000}),
		A2(
		$author$project$Pages$buildImage,
		_List_fromArray(
			['article-covers', 'mountains.jpg']),
		{height: 1600, width: 2400}),
		A2(
		$author$project$Pages$buildImage,
		_List_fromArray(
			['author', 'dillon.jpg']),
		{height: 3035, width: 3035}),
		A2(
		$author$project$Pages$buildImage,
		_List_fromArray(
			['elm-logo.svg']),
		{height: 323, width: 323}),
		A2(
		$author$project$Pages$buildImage,
		_List_fromArray(
			['github.svg']),
		{height: 24, width: 24}),
		A2(
		$author$project$Pages$buildImage,
		_List_fromArray(
			['icon-png.png']),
		{height: 75, width: 50}),
		A2(
		$author$project$Pages$buildImage,
		_List_fromArray(
			['icon.svg']),
		{height: 75, width: 50})
	]);
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $dillonkearns$elm_pages$Pages$ImagePath$toString = function (path) {
	if (path.$ === 'Internal') {
		var rawPath = path.a;
		return A2($elm$core$String$join, '/', rawPath);
	} else {
		var url = path.a;
		return url;
	}
};
var $author$project$Metadata$findMatchingImage = function (imageAssetPath) {
	return A2(
		$elm_community$list_extra$List$Extra$find,
		function (image) {
			return _Utils_eq(
				$dillonkearns$elm_pages$Pages$ImagePath$toString(image),
				imageAssetPath);
		},
		$author$project$Pages$allImages);
};
var $author$project$Metadata$imageDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (imageAssetPath) {
		var _v0 = $author$project$Metadata$findMatchingImage(imageAssetPath);
		if (_v0.$ === 'Nothing') {
			return $elm$json$Json$Decode$fail(
				A2(
					$elm$core$String$join,
					'\n',
					A2(
						$elm$core$List$cons,
						'I couldn\'t find that. Available images are:\n',
						A2(
							$elm$core$List$map,
							A2(
								$elm$core$Basics$composeL,
								function (x) {
									return '\t\"' + (x + '\"');
								},
								$dillonkearns$elm_pages$Pages$ImagePath$toString),
							$author$project$Pages$allImages))));
		} else {
			var imagePath = _v0.a;
			return $elm$json$Json$Decode$succeed(imagePath);
		}
	},
	$elm$json$Json$Decode$string);
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$json$Json$Decode$map6 = _Json_map6;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $author$project$Metadata$decoder = A2(
	$elm$json$Json$Decode$andThen,
	function (pageType) {
		switch (pageType) {
			case 'page':
				return A2(
					$elm$json$Json$Decode$map,
					function (title) {
						return $author$project$Metadata$Page(
							{title: title});
					},
					A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string));
			case 'blog-index':
				return $elm$json$Json$Decode$succeed($author$project$Metadata$BlogIndex);
			case 'author':
				return A2(
					$elm$json$Json$Decode$map,
					$author$project$Metadata$Author,
					A4(
						$elm$json$Json$Decode$map3,
						$author$project$Data$Author$Author,
						A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
						A2($elm$json$Json$Decode$field, 'avatar', $author$project$Metadata$imageDecoder),
						A2($elm$json$Json$Decode$field, 'bio', $elm$json$Json$Decode$string)));
			case 'blog':
				return A2(
					$elm$json$Json$Decode$map,
					$author$project$Metadata$Article,
					A7(
						$elm$json$Json$Decode$map6,
						$author$project$Metadata$ArticleMetadata,
						A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string),
						A2($elm$json$Json$Decode$field, 'description', $elm$json$Json$Decode$string),
						A2(
							$elm$json$Json$Decode$field,
							'published',
							A2(
								$elm$json$Json$Decode$andThen,
								function (isoString) {
									var _v1 = $justinmimbs$date$Date$fromIsoString(isoString);
									if (_v1.$ === 'Ok') {
										var date = _v1.a;
										return $elm$json$Json$Decode$succeed(date);
									} else {
										var error = _v1.a;
										return $elm$json$Json$Decode$fail(error);
									}
								},
								$elm$json$Json$Decode$string)),
						A2($elm$json$Json$Decode$field, 'author', $author$project$Data$Author$decoder),
						A2($elm$json$Json$Decode$field, 'image', $author$project$Metadata$imageDecoder),
						A2(
							$elm$json$Json$Decode$map,
							$elm$core$Maybe$withDefault(false),
							$elm$json$Json$Decode$maybe(
								A2($elm$json$Json$Decode$field, 'draft', $elm$json$Json$Decode$bool)))));
			default:
				return $elm$json$Json$Decode$fail('Unexpected page type ' + pageType);
		}
	},
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string));
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$align = $elm$html$Html$Attributes$stringProperty('align');
var $elm$html$Html$Attributes$alt = $elm$html$Html$Attributes$stringProperty('alt');
var $elm$html$Html$blockquote = _VirtualDom_node('blockquote');
var $elm$html$Html$br = _VirtualDom_node('br');
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$checked = $elm$html$Html$Attributes$boolProperty('checked');
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$code = _VirtualDom_node('code');
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $elm$html$Html$em = _VirtualDom_node('em');
var $elm$html$Html$h1 = _VirtualDom_node('h1');
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $elm$html$Html$h4 = _VirtualDom_node('h4');
var $elm$html$Html$h5 = _VirtualDom_node('h5');
var $elm$html$Html$h6 = _VirtualDom_node('h6');
var $elm$html$Html$hr = _VirtualDom_node('hr');
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$html$Html$img = _VirtualDom_node('img');
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$html$Html$ol = _VirtualDom_node('ol');
var $dillonkearns$elm_markdown$Markdown$HtmlRenderer$HtmlRenderer = function (a) {
	return {$: 'HtmlRenderer', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Html$resultOr = F2(
	function (ra, rb) {
		if (ra.$ === 'Err') {
			var singleError = ra.a;
			if (rb.$ === 'Ok') {
				var okValue = rb.a;
				return $elm$core$Result$Ok(okValue);
			} else {
				var errorsSoFar = rb.a;
				return $elm$core$Result$Err(
					A2($elm$core$List$cons, singleError, errorsSoFar));
			}
		} else {
			var okValue = ra.a;
			return $elm$core$Result$Ok(okValue);
		}
	});
var $dillonkearns$elm_markdown$Markdown$Html$attributesToString = function (attributes) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$map,
			function (_v0) {
				var name = _v0.name;
				var value = _v0.value;
				return name + ('=\"' + (value + '\"'));
			},
			attributes));
};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $dillonkearns$elm_markdown$Markdown$Html$tagToString = F2(
	function (tagName, attributes) {
		return $elm$core$List$isEmpty(attributes) ? ('<' + (tagName + '>')) : ('<' + (tagName + (' ' + ($dillonkearns$elm_markdown$Markdown$Html$attributesToString(attributes) + '>'))));
	});
var $dillonkearns$elm_markdown$Markdown$Html$oneOf = function (decoders) {
	var unwrappedDecoders = A2(
		$elm$core$List$map,
		function (_v1) {
			var rawDecoder = _v1.a;
			return rawDecoder;
		},
		decoders);
	return function (rawDecoder) {
		return $dillonkearns$elm_markdown$Markdown$HtmlRenderer$HtmlRenderer(
			F3(
				function (tagName, attributes, innerBlocks) {
					return A2(
						$elm$core$Result$mapError,
						function (errors) {
							if (!errors.b) {
								return 'Ran into a oneOf with no possibilities!';
							} else {
								if (!errors.b.b) {
									var singleError = errors.a;
									return 'Problem with the given value:\n\n' + (A2($dillonkearns$elm_markdown$Markdown$Html$tagToString, tagName, attributes) + ('\n\n' + (singleError + '\n')));
								} else {
									return 'oneOf failed parsing this value:\n    ' + (A2($dillonkearns$elm_markdown$Markdown$Html$tagToString, tagName, attributes) + ('\n\nParsing failed in the following 2 ways:\n\n\n' + (A2(
										$elm$core$String$join,
										'\n\n',
										A2(
											$elm$core$List$indexedMap,
											F2(
												function (index, error) {
													return '(' + ($elm$core$String$fromInt(index + 1) + (') ' + error));
												}),
											errors)) + '\n')));
								}
							}
						},
						A3(rawDecoder, tagName, attributes, innerBlocks));
				}));
	}(
		A3(
			$elm$core$List$foldl,
			F2(
				function (decoder, soFar) {
					return F3(
						function (tagName, attributes, children) {
							return A2(
								$dillonkearns$elm_markdown$Markdown$Html$resultOr,
								A3(decoder, tagName, attributes, children),
								A3(soFar, tagName, attributes, children));
						});
				}),
			F3(
				function (tagName, attributes, children) {
					return $elm$core$Result$Err(_List_Nil);
				}),
			unwrappedDecoders));
};
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$html$Html$pre = _VirtualDom_node('pre');
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $elm$html$Html$Attributes$start = function (n) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'start',
		$elm$core$String$fromInt(n));
};
var $elm$html$Html$strong = _VirtualDom_node('strong');
var $elm$html$Html$table = _VirtualDom_node('table');
var $elm$html$Html$tbody = _VirtualDom_node('tbody');
var $elm$html$Html$td = _VirtualDom_node('td');
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $elm$html$Html$th = _VirtualDom_node('th');
var $elm$html$Html$thead = _VirtualDom_node('thead');
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $elm$html$Html$tr = _VirtualDom_node('tr');
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $dillonkearns$elm_markdown$Markdown$Renderer$defaultHtmlRenderer = {
	blockQuote: $elm$html$Html$blockquote(_List_Nil),
	codeBlock: function (_v0) {
		var body = _v0.body;
		var language = _v0.language;
		var classes = function () {
			if (language.$ === 'Just') {
				var actualLanguage = language.a;
				return _List_fromArray(
					[
						$elm$html$Html$Attributes$class('language-' + actualLanguage)
					]);
			} else {
				return _List_Nil;
			}
		}();
		return A2(
			$elm$html$Html$pre,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$code,
					classes,
					_List_fromArray(
						[
							$elm$html$Html$text(body)
						]))
				]));
	},
	codeSpan: function (content) {
		return A2(
			$elm$html$Html$code,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text(content)
				]));
	},
	emphasis: function (children) {
		return A2($elm$html$Html$em, _List_Nil, children);
	},
	hardLineBreak: A2($elm$html$Html$br, _List_Nil, _List_Nil),
	heading: function (_v2) {
		var level = _v2.level;
		var children = _v2.children;
		switch (level.$) {
			case 'H1':
				return A2($elm$html$Html$h1, _List_Nil, children);
			case 'H2':
				return A2($elm$html$Html$h2, _List_Nil, children);
			case 'H3':
				return A2($elm$html$Html$h3, _List_Nil, children);
			case 'H4':
				return A2($elm$html$Html$h4, _List_Nil, children);
			case 'H5':
				return A2($elm$html$Html$h5, _List_Nil, children);
			default:
				return A2($elm$html$Html$h6, _List_Nil, children);
		}
	},
	html: $dillonkearns$elm_markdown$Markdown$Html$oneOf(_List_Nil),
	image: function (imageInfo) {
		var _v4 = imageInfo.title;
		if (_v4.$ === 'Just') {
			var title = _v4.a;
			return A2(
				$elm$html$Html$img,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$src(imageInfo.src),
						$elm$html$Html$Attributes$alt(imageInfo.alt),
						$elm$html$Html$Attributes$title(title)
					]),
				_List_Nil);
		} else {
			return A2(
				$elm$html$Html$img,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$src(imageInfo.src),
						$elm$html$Html$Attributes$alt(imageInfo.alt)
					]),
				_List_Nil);
		}
	},
	link: F2(
		function (link, content) {
			var _v5 = link.title;
			if (_v5.$ === 'Just') {
				var title = _v5.a;
				return A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href(link.destination),
							$elm$html$Html$Attributes$title(title)
						]),
					content);
			} else {
				return A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href(link.destination)
						]),
					content);
			}
		}),
	orderedList: F2(
		function (startingIndex, items) {
			return A2(
				$elm$html$Html$ol,
				function () {
					if (startingIndex === 1) {
						return _List_fromArray(
							[
								$elm$html$Html$Attributes$start(startingIndex)
							]);
					} else {
						return _List_Nil;
					}
				}(),
				A2(
					$elm$core$List$map,
					function (itemBlocks) {
						return A2($elm$html$Html$li, _List_Nil, itemBlocks);
					},
					items));
		}),
	paragraph: $elm$html$Html$p(_List_Nil),
	strong: function (children) {
		return A2($elm$html$Html$strong, _List_Nil, children);
	},
	table: $elm$html$Html$table(_List_Nil),
	tableBody: $elm$html$Html$tbody(_List_Nil),
	tableCell: function (maybeAlignment) {
		var attrs = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				$elm$core$List$singleton,
				A2(
					$elm$core$Maybe$map,
					$elm$html$Html$Attributes$align,
					A2(
						$elm$core$Maybe$map,
						function (alignment) {
							switch (alignment.$) {
								case 'AlignLeft':
									return 'left';
								case 'AlignCenter':
									return 'center';
								default:
									return 'right';
							}
						},
						maybeAlignment))));
		return $elm$html$Html$td(attrs);
	},
	tableHeader: $elm$html$Html$thead(_List_Nil),
	tableHeaderCell: function (maybeAlignment) {
		var attrs = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				$elm$core$List$singleton,
				A2(
					$elm$core$Maybe$map,
					$elm$html$Html$Attributes$align,
					A2(
						$elm$core$Maybe$map,
						function (alignment) {
							switch (alignment.$) {
								case 'AlignLeft':
									return 'left';
								case 'AlignCenter':
									return 'center';
								default:
									return 'right';
							}
						},
						maybeAlignment))));
		return $elm$html$Html$th(attrs);
	},
	tableRow: $elm$html$Html$tr(_List_Nil),
	text: $elm$html$Html$text,
	thematicBreak: A2($elm$html$Html$hr, _List_Nil, _List_Nil),
	unorderedList: function (items) {
		return A2(
			$elm$html$Html$ul,
			_List_Nil,
			A2(
				$elm$core$List$map,
				function (item) {
					var task = item.a;
					var children = item.b;
					var checkbox = function () {
						switch (task.$) {
							case 'NoTask':
								return $elm$html$Html$text('');
							case 'IncompleteTask':
								return A2(
									$elm$html$Html$input,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$disabled(true),
											$elm$html$Html$Attributes$checked(false),
											$elm$html$Html$Attributes$type_('checkbox')
										]),
									_List_Nil);
							default:
								return A2(
									$elm$html$Html$input,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$disabled(true),
											$elm$html$Html$Attributes$checked(true),
											$elm$html$Html$Attributes$type_('checkbox')
										]),
									_List_Nil);
						}
					}();
					return A2(
						$elm$html$Html$li,
						_List_Nil,
						A2($elm$core$List$cons, checkbox, children));
				},
				items));
	}
};
var $elm$html$Html$div = _VirtualDom_node('div');
var $mdgriffith$elm_ui$Internal$Model$Fill = function (a) {
	return {$: 'Fill', a: a};
};
var $mdgriffith$elm_ui$Element$fill = $mdgriffith$elm_ui$Internal$Model$Fill(1);
var $mdgriffith$elm_ui$Internal$Model$Unstyled = function (a) {
	return {$: 'Unstyled', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$unstyled = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Unstyled, $elm$core$Basics$always);
var $mdgriffith$elm_ui$Element$html = $mdgriffith$elm_ui$Internal$Model$unstyled;
var $mdgriffith$elm_ui$Internal$Model$Describe = function (a) {
	return {$: 'Describe', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Paragraph = {$: 'Paragraph'};
var $mdgriffith$elm_ui$Internal$Model$Unkeyed = function (a) {
	return {$: 'Unkeyed', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$AsParagraph = {$: 'AsParagraph'};
var $mdgriffith$elm_ui$Internal$Model$asParagraph = $mdgriffith$elm_ui$Internal$Model$AsParagraph;
var $mdgriffith$elm_ui$Internal$Model$Generic = {$: 'Generic'};
var $mdgriffith$elm_ui$Internal$Model$div = $mdgriffith$elm_ui$Internal$Model$Generic;
var $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren = {$: 'NoNearbyChildren'};
var $mdgriffith$elm_ui$Internal$Style$classes = {above: 'a', active: 'atv', alignBottom: 'ab', alignCenterX: 'cx', alignCenterY: 'cy', alignContainerBottom: 'acb', alignContainerCenterX: 'accx', alignContainerCenterY: 'accy', alignContainerRight: 'acr', alignLeft: 'al', alignRight: 'ar', alignTop: 'at', alignedHorizontally: 'ah', alignedVertically: 'av', any: 's', behind: 'bh', below: 'b', bold: 'w7', borderDashed: 'bd', borderDotted: 'bdt', borderNone: 'bn', borderSolid: 'bs', capturePointerEvents: 'cpe', clip: 'cp', clipX: 'cpx', clipY: 'cpy', column: 'c', container: 'ctr', contentBottom: 'cb', contentCenterX: 'ccx', contentCenterY: 'ccy', contentLeft: 'cl', contentRight: 'cr', contentTop: 'ct', cursorPointer: 'cptr', cursorText: 'ctxt', focus: 'fcs', focusedWithin: 'focus-within', fullSize: 'fs', grid: 'g', hasBehind: 'hbh', heightContent: 'hc', heightExact: 'he', heightFill: 'hf', heightFillPortion: 'hfp', hover: 'hv', imageContainer: 'ic', inFront: 'fr', inputLabel: 'lbl', inputMultiline: 'iml', inputMultilineFiller: 'imlf', inputMultilineParent: 'imlp', inputMultilineWrapper: 'implw', inputText: 'it', italic: 'i', link: 'lnk', nearby: 'nb', noTextSelection: 'notxt', onLeft: 'ol', onRight: 'or', opaque: 'oq', overflowHidden: 'oh', page: 'pg', paragraph: 'p', passPointerEvents: 'ppe', root: 'ui', row: 'r', scrollbars: 'sb', scrollbarsX: 'sbx', scrollbarsY: 'sby', seButton: 'sbt', single: 'e', sizeByCapital: 'cap', spaceEvenly: 'sev', strike: 'sk', text: 't', textCenter: 'tc', textExtraBold: 'w8', textExtraLight: 'w2', textHeavy: 'w9', textJustify: 'tj', textJustifyAll: 'tja', textLeft: 'tl', textLight: 'w3', textMedium: 'w5', textNormalWeight: 'w4', textRight: 'tr', textSemiBold: 'w6', textThin: 'w1', textUnitalicized: 'tun', transition: 'ts', transparent: 'clr', underline: 'u', widthContent: 'wc', widthExact: 'we', widthFill: 'wf', widthFillPortion: 'wfp', wrapped: 'wrp'};
var $mdgriffith$elm_ui$Internal$Model$columnClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.column);
var $mdgriffith$elm_ui$Internal$Model$gridClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.grid);
var $mdgriffith$elm_ui$Internal$Model$pageClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.page);
var $mdgriffith$elm_ui$Internal$Model$paragraphClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.paragraph);
var $mdgriffith$elm_ui$Internal$Model$rowClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.row);
var $mdgriffith$elm_ui$Internal$Model$singleClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.single);
var $mdgriffith$elm_ui$Internal$Model$contextClasses = function (context) {
	switch (context.$) {
		case 'AsRow':
			return $mdgriffith$elm_ui$Internal$Model$rowClass;
		case 'AsColumn':
			return $mdgriffith$elm_ui$Internal$Model$columnClass;
		case 'AsEl':
			return $mdgriffith$elm_ui$Internal$Model$singleClass;
		case 'AsGrid':
			return $mdgriffith$elm_ui$Internal$Model$gridClass;
		case 'AsParagraph':
			return $mdgriffith$elm_ui$Internal$Model$paragraphClass;
		default:
			return $mdgriffith$elm_ui$Internal$Model$pageClass;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Keyed = function (a) {
	return {$: 'Keyed', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$NoStyleSheet = {$: 'NoStyleSheet'};
var $mdgriffith$elm_ui$Internal$Model$Styled = function (a) {
	return {$: 'Styled', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addChildren = F2(
	function (existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(behind, existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(existing, inFront);
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					behind,
					_Utils_ap(existing, inFront));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$addKeyedChildren = F3(
	function (key, existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(
					existing,
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						inFront));
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					_Utils_ap(
						existing,
						A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(key, x);
							},
							inFront)));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$AsEl = {$: 'AsEl'};
var $mdgriffith$elm_ui$Internal$Model$asEl = $mdgriffith$elm_ui$Internal$Model$AsEl;
var $mdgriffith$elm_ui$Internal$Flag$Flag = function (a) {
	return {$: 'Flag', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Second = function (a) {
	return {$: 'Second', a: a};
};
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $mdgriffith$elm_ui$Internal$Flag$flag = function (i) {
	return (i > 31) ? $mdgriffith$elm_ui$Internal$Flag$Second(1 << (i - 32)) : $mdgriffith$elm_ui$Internal$Flag$Flag(1 << i);
};
var $mdgriffith$elm_ui$Internal$Flag$alignBottom = $mdgriffith$elm_ui$Internal$Flag$flag(41);
var $mdgriffith$elm_ui$Internal$Flag$alignRight = $mdgriffith$elm_ui$Internal$Flag$flag(40);
var $mdgriffith$elm_ui$Internal$Flag$centerX = $mdgriffith$elm_ui$Internal$Flag$flag(42);
var $mdgriffith$elm_ui$Internal$Flag$centerY = $mdgriffith$elm_ui$Internal$Flag$flag(43);
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $mdgriffith$elm_ui$Internal$Model$lengthClassName = function (x) {
	switch (x.$) {
		case 'Px':
			var px = x.a;
			return $elm$core$String$fromInt(px) + 'px';
		case 'Content':
			return 'auto';
		case 'Fill':
			var i = x.a;
			return $elm$core$String$fromInt(i) + 'fr';
		case 'Min':
			var min = x.a;
			var len = x.b;
			return 'min' + ($elm$core$String$fromInt(min) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
		default:
			var max = x.a;
			var len = x.b;
			return 'max' + ($elm$core$String$fromInt(max) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
	}
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $mdgriffith$elm_ui$Internal$Model$floatClass = function (x) {
	return $elm$core$String$fromInt(
		$elm$core$Basics$round(x * 255));
};
var $mdgriffith$elm_ui$Internal$Model$transformClass = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return $elm$core$Maybe$Nothing;
		case 'Moved':
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'mv-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(x) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(y) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(z))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			return $elm$core$Maybe$Just(
				'tfrm-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ty) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ox) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oz) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(angle))))))))))))))))))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$getStyleName = function (style) {
	switch (style.$) {
		case 'Shadows':
			var name = style.a;
			return name;
		case 'Transparency':
			var name = style.a;
			var o = style.b;
			return name;
		case 'Style':
			var _class = style.a;
			return _class;
		case 'FontFamily':
			var name = style.a;
			return name;
		case 'FontSize':
			var i = style.a;
			return 'font-size-' + $elm$core$String$fromInt(i);
		case 'Single':
			var _class = style.a;
			return _class;
		case 'Colored':
			var _class = style.a;
			return _class;
		case 'SpacingStyle':
			var cls = style.a;
			var x = style.b;
			var y = style.c;
			return cls;
		case 'PaddingStyle':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'BorderWidth':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'GridTemplateStyle':
			var template = style.a;
			return 'grid-rows-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.b)))))));
		case 'GridPosition':
			var pos = style.a;
			return 'gp grid-pos-' + ($elm$core$String$fromInt(pos.row) + ('-' + ($elm$core$String$fromInt(pos.col) + ('-' + ($elm$core$String$fromInt(pos.width) + ('-' + $elm$core$String$fromInt(pos.height)))))));
		case 'PseudoSelector':
			var selector = style.a;
			var subStyle = style.b;
			var name = function () {
				switch (selector.$) {
					case 'Focus':
						return 'fs';
					case 'Hover':
						return 'hv';
					default:
						return 'act';
				}
			}();
			return A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (sty) {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$getStyleName(sty);
						if (_v1 === '') {
							return '';
						} else {
							var styleName = _v1;
							return styleName + ('-' + name);
						}
					},
					subStyle));
		default:
			var x = style.a;
			return A2(
				$elm$core$Maybe$withDefault,
				'',
				$mdgriffith$elm_ui$Internal$Model$transformClass(x));
	}
};
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $mdgriffith$elm_ui$Internal$Model$reduceStyles = F2(
	function (style, nevermind) {
		var cache = nevermind.a;
		var existing = nevermind.b;
		var styleName = $mdgriffith$elm_ui$Internal$Model$getStyleName(style);
		return A2($elm$core$Set$member, styleName, cache) ? nevermind : _Utils_Tuple2(
			A2($elm$core$Set$insert, styleName, cache),
			A2($elm$core$List$cons, style, existing));
	});
var $mdgriffith$elm_ui$Internal$Model$Property = F2(
	function (a, b) {
		return {$: 'Property', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Style = F2(
	function (a, b) {
		return {$: 'Style', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$dot = function (c) {
	return '.' + c;
};
var $mdgriffith$elm_ui$Internal$Model$formatColor = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return 'rgba(' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(red * 255)) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(green * 255))) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(blue * 255))) + (',' + ($elm$core$String$fromFloat(alpha) + ')')))));
};
var $mdgriffith$elm_ui$Internal$Model$formatBoxShadow = function (shadow) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					shadow.inset ? $elm$core$Maybe$Just('inset') : $elm$core$Maybe$Nothing,
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.offset.a) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.offset.b) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.blur) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.size) + 'px'),
					$elm$core$Maybe$Just(
					$mdgriffith$elm_ui$Internal$Model$formatColor(shadow.color))
				])));
};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $mdgriffith$elm_ui$Internal$Model$renderFocusStyle = function (focus) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.focusedWithin) + ':focus-within',
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.borderColor),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.backgroundColor),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										blur: shadow.blur,
										color: shadow.color,
										inset: false,
										offset: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.offset)),
										size: shadow.size
									}));
						},
						focus.shadow),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					]))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ':focus .focusable, ') + (($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + '.focusable:focus, ') + ('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ' .focusable-thumb'))),
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.borderColor),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.backgroundColor),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										blur: shadow.blur,
										color: shadow.color,
										inset: false,
										offset: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.offset)),
										size: shadow.size
									}));
						},
						focus.shadow),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					])))
		]);
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Style$AllChildren = F2(
	function (a, b) {
		return {$: 'AllChildren', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Batch = function (a) {
	return {$: 'Batch', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Child = F2(
	function (a, b) {
		return {$: 'Child', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Descriptor = F2(
	function (a, b) {
		return {$: 'Descriptor', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Left = {$: 'Left'};
var $mdgriffith$elm_ui$Internal$Style$Prop = F2(
	function (a, b) {
		return {$: 'Prop', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Right = {$: 'Right'};
var $mdgriffith$elm_ui$Internal$Style$Self = function (a) {
	return {$: 'Self', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Supports = F2(
	function (a, b) {
		return {$: 'Supports', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Content = function (a) {
	return {$: 'Content', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Bottom = {$: 'Bottom'};
var $mdgriffith$elm_ui$Internal$Style$CenterX = {$: 'CenterX'};
var $mdgriffith$elm_ui$Internal$Style$CenterY = {$: 'CenterY'};
var $mdgriffith$elm_ui$Internal$Style$Top = {$: 'Top'};
var $mdgriffith$elm_ui$Internal$Style$alignments = _List_fromArray(
	[$mdgriffith$elm_ui$Internal$Style$Top, $mdgriffith$elm_ui$Internal$Style$Bottom, $mdgriffith$elm_ui$Internal$Style$Right, $mdgriffith$elm_ui$Internal$Style$Left, $mdgriffith$elm_ui$Internal$Style$CenterX, $mdgriffith$elm_ui$Internal$Style$CenterY]);
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $mdgriffith$elm_ui$Internal$Style$contentName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _v1 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentTop);
		case 'Bottom':
			var _v2 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentBottom);
		case 'Right':
			var _v3 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentRight);
		case 'Left':
			var _v4 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentLeft);
		case 'CenterX':
			var _v5 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX);
		default:
			var _v6 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY);
	}
};
var $mdgriffith$elm_ui$Internal$Style$selfName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _v1 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignTop);
		case 'Bottom':
			var _v2 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
		case 'Right':
			var _v3 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignRight);
		case 'Left':
			var _v4 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
		case 'CenterX':
			var _v5 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
		default:
			var _v6 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
	}
};
var $mdgriffith$elm_ui$Internal$Style$describeAlignment = function (values) {
	var createDescription = function (alignment) {
		var _v0 = values(alignment);
		var content = _v0.a;
		var indiv = _v0.b;
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$contentName(
					$mdgriffith$elm_ui$Internal$Style$Content(alignment)),
				content),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(
							$mdgriffith$elm_ui$Internal$Style$Self(alignment)),
						indiv)
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$elDescription = _List_fromArray(
	[
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hasBehind),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.seButton),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'auto !important')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightContent),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
			])),
		$mdgriffith$elm_ui$Internal$Style$describeAlignment(
		function (alignment) {
			switch (alignment.$) {
				case 'Top':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
							]));
				case 'Bottom':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
							]));
				case 'Right':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
							]));
				case 'Left':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							]));
				case 'CenterX':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
							]));
				default:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
									]))
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
							]));
			}
		})
	]);
var $mdgriffith$elm_ui$Internal$Style$gridAlignments = function (values) {
	var createDescription = function (alignment) {
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(
							$mdgriffith$elm_ui$Internal$Style$Self(alignment)),
						values(alignment))
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$Above = {$: 'Above'};
var $mdgriffith$elm_ui$Internal$Style$Behind = {$: 'Behind'};
var $mdgriffith$elm_ui$Internal$Style$Below = {$: 'Below'};
var $mdgriffith$elm_ui$Internal$Style$OnLeft = {$: 'OnLeft'};
var $mdgriffith$elm_ui$Internal$Style$OnRight = {$: 'OnRight'};
var $mdgriffith$elm_ui$Internal$Style$Within = {$: 'Within'};
var $mdgriffith$elm_ui$Internal$Style$locations = function () {
	var loc = $mdgriffith$elm_ui$Internal$Style$Above;
	var _v0 = function () {
		switch (loc.$) {
			case 'Above':
				return _Utils_Tuple0;
			case 'Below':
				return _Utils_Tuple0;
			case 'OnRight':
				return _Utils_Tuple0;
			case 'OnLeft':
				return _Utils_Tuple0;
			case 'Within':
				return _Utils_Tuple0;
			default:
				return _Utils_Tuple0;
		}
	}();
	return _List_fromArray(
		[$mdgriffith$elm_ui$Internal$Style$Above, $mdgriffith$elm_ui$Internal$Style$Below, $mdgriffith$elm_ui$Internal$Style$OnRight, $mdgriffith$elm_ui$Internal$Style$OnLeft, $mdgriffith$elm_ui$Internal$Style$Within, $mdgriffith$elm_ui$Internal$Style$Behind]);
}();
var $mdgriffith$elm_ui$Internal$Style$baseSheet = _List_fromArray(
	[
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		'html,body',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		_Utils_ap(
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
			_Utils_ap(
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.imageContainer))),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-height', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ':focus',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'outline', 'none')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.root),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.nearby),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.nearby),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				$mdgriffith$elm_ui$Internal$Style$Batch(
				function (fn) {
					return A2($elm$core$List$map, fn, $mdgriffith$elm_ui$Internal$Style$locations);
				}(
					function (loc) {
						switch (loc.$) {
							case 'Above':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.above),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
												])),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Below':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.below),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												]))
										]));
							case 'OnRight':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onRight),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'OnLeft':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onLeft),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'right', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Within':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							default:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
						}
					}))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'resize', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'box-sizing', 'border-box'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-size', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-family', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'inherit'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.wrapped),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-wrap', 'wrap')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.noTextSelection),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-moz-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-webkit-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-ms-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'user-select', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cursorPointer),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'pointer')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cursorText),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.passPointerEvents),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.capturePointerEvents),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.transparent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.opaque),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hover, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hover, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.focus, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.focus, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.active, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.active, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.transition),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Prop,
						'transition',
						A2(
							$elm$core$String$join,
							', ',
							A2(
								$elm$core$List$map,
								function (x) {
									return x + ' 160ms';
								},
								_List_fromArray(
									['transform', 'opacity', 'filter', 'background-color', 'color', 'font-size']))))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbars),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbarsX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbarsY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clip),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clipX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clipY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', 'auto')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderNone),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderDashed),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dashed')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderDotted),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dotted')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderSolid),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputText),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1.05'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background', 'transparent'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'inherit')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.link),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-left', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-right', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_Nil);
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_Nil);
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'baseline')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0px'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', 'min-content'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.grid),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', '-ms-grid'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'.gp',
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Supports,
						_Utils_Tuple2('display', 'grid'),
						_List_fromArray(
							[
								_Utils_Tuple2('display', 'grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$gridAlignments(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
										]);
								case 'Bottom':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
										]);
								case 'Right':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
										]);
								case 'Left':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
										]);
								case 'CenterX':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
										]);
								default:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
										]);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.page),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any + ':first-child'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.any + ($mdgriffith$elm_ui$Internal$Style$selfName(
								$mdgriffith$elm_ui$Internal$Style$Self($mdgriffith$elm_ui$Internal$Style$Left)) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.any + ($mdgriffith$elm_ui$Internal$Style$selfName(
								$mdgriffith$elm_ui$Internal$Style$Self($mdgriffith$elm_ui$Internal$Style$Right)) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultiline),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background-color', 'transparent')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineWrapper),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineParent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineFiller),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'transparent')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.paragraph),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-wrap', 'break-word'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hasBehind),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.paragraph),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::after',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::before',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.above),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.below),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onRight),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onLeft),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.grid),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left')
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.hidden',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textThin),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '100')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textExtraLight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '200')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textLight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '300')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textNormalWeight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '400')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textMedium),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '500')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textSemiBold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '600')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '700')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textExtraBold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '800')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textHeavy),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '900')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.italic),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'italic')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.strike),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.underline),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.underline),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.strike)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textUnitalicized),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'normal')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textJustify),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textJustifyAll),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify-all')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textCenter),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'center')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textRight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'right')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textLeft),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'left')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.modal',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none')
					]))
			]))
	]);
var $mdgriffith$elm_ui$Internal$Style$fontVariant = function (_var) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + _var,
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\"'))
				])),
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + (_var + '-off'),
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\" 0'))
				]))
		]);
};
var $mdgriffith$elm_ui$Internal$Style$commonValues = $elm$core$List$concat(
	_List_fromArray(
		[
			A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.border-' + $elm$core$String$fromInt(x),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'border-width',
							$elm$core$String$fromInt(x) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 6)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 8, 32)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.p-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'padding',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 24)),
			_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'small-caps')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp-off',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'normal')
					]))
			]),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('zero'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('onum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('liga'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('dlig'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('ordn'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('tnum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('afrc'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('frac')
		]));
var $mdgriffith$elm_ui$Internal$Style$explainer = '\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > .' + ($mdgriffith$elm_ui$Internal$Style$classes.any + (' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > .' + ($mdgriffith$elm_ui$Internal$Style$classes.any + ' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n')));
var $mdgriffith$elm_ui$Internal$Style$inputTextReset = '\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$sliderReset = '\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$thumbReset = '\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n';
var $mdgriffith$elm_ui$Internal$Style$trackReset = '\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$overrides = '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + (' { flex-basis: auto !important; } ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container) + (' { flex-basis: auto !important; }}' + ($mdgriffith$elm_ui$Internal$Style$inputTextReset + ($mdgriffith$elm_ui$Internal$Style$sliderReset + ($mdgriffith$elm_ui$Internal$Style$trackReset + ($mdgriffith$elm_ui$Internal$Style$thumbReset + $mdgriffith$elm_ui$Internal$Style$explainer)))))))))))))));
var $mdgriffith$elm_ui$Internal$Style$Intermediate = function (a) {
	return {$: 'Intermediate', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$emptyIntermediate = F2(
	function (selector, closing) {
		return $mdgriffith$elm_ui$Internal$Style$Intermediate(
			{closing: closing, others: _List_Nil, props: _List_Nil, selector: selector});
	});
var $mdgriffith$elm_ui$Internal$Style$renderRules = F2(
	function (_v0, rulesToRender) {
		var parent = _v0.a;
		var generateIntermediates = F2(
			function (rule, rendered) {
				switch (rule.$) {
					case 'Prop':
						var name = rule.a;
						var val = rule.b;
						return _Utils_update(
							rendered,
							{
								props: A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, val),
									rendered.props)
							});
					case 'Supports':
						var _v2 = rule.a;
						var prop = _v2.a;
						var value = _v2.b;
						var props = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Style$Intermediate(
										{closing: '\n}', others: _List_Nil, props: props, selector: '@supports (' + (prop + (':' + (value + (') {' + parent.selector))))}),
									rendered.others)
							});
					case 'Adjacent':
						var selector = rule.a;
						var adjRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' + ' + selector), ''),
										adjRules),
									rendered.others)
							});
					case 'Child':
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' > ' + child), ''),
										childRules),
									rendered.others)
							});
					case 'AllChildren':
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' ' + child), ''),
										childRules),
									rendered.others)
							});
					case 'Descriptor':
						var descriptor = rule.a;
						var descriptorRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(
											$mdgriffith$elm_ui$Internal$Style$emptyIntermediate,
											_Utils_ap(parent.selector, descriptor),
											''),
										descriptorRules),
									rendered.others)
							});
					default:
						var batched = rule.a;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector, ''),
										batched),
									rendered.others)
							});
				}
			});
		return $mdgriffith$elm_ui$Internal$Style$Intermediate(
			A3($elm$core$List$foldr, generateIntermediates, parent, rulesToRender));
	});
var $mdgriffith$elm_ui$Internal$Style$renderCompact = function (styleClasses) {
	var renderValues = function (values) {
		return $elm$core$String$concat(
			A2(
				$elm$core$List$map,
				function (_v3) {
					var x = _v3.a;
					var y = _v3.b;
					return x + (':' + (y + ';'));
				},
				values));
	};
	var renderClass = function (rule) {
		var _v2 = rule.props;
		if (!_v2.b) {
			return '';
		} else {
			return rule.selector + ('{' + (renderValues(rule.props) + (rule.closing + '}')));
		}
	};
	var renderIntermediate = function (_v0) {
		var rule = _v0.a;
		return _Utils_ap(
			renderClass(rule),
			$elm$core$String$concat(
				A2($elm$core$List$map, renderIntermediate, rule.others)));
	};
	return $elm$core$String$concat(
		A2(
			$elm$core$List$map,
			renderIntermediate,
			A3(
				$elm$core$List$foldr,
				F2(
					function (_v1, existing) {
						var name = _v1.a;
						var styleRules = _v1.b;
						return A2(
							$elm$core$List$cons,
							A2(
								$mdgriffith$elm_ui$Internal$Style$renderRules,
								A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, name, ''),
								styleRules),
							existing);
					}),
				_List_Nil,
				styleClasses)));
};
var $mdgriffith$elm_ui$Internal$Style$rules = _Utils_ap(
	$mdgriffith$elm_ui$Internal$Style$overrides,
	$mdgriffith$elm_ui$Internal$Style$renderCompact(
		_Utils_ap($mdgriffith$elm_ui$Internal$Style$baseSheet, $mdgriffith$elm_ui$Internal$Style$commonValues)));
var $mdgriffith$elm_ui$Internal$Model$staticRoot = function (opts) {
	var _v0 = opts.mode;
	switch (_v0.$) {
		case 'Layout':
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'div',
				_List_Nil,
				_List_fromArray(
					[
						A3(
						$elm$virtual_dom$VirtualDom$node,
						'style',
						_List_Nil,
						_List_fromArray(
							[
								$elm$virtual_dom$VirtualDom$text($mdgriffith$elm_ui$Internal$Style$rules)
							]))
					]));
		case 'NoStaticStyleSheet':
			return $elm$virtual_dom$VirtualDom$text('');
		default:
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'elm-ui-static-rules',
				_List_fromArray(
					[
						A2(
						$elm$virtual_dom$VirtualDom$property,
						'rules',
						$elm$json$Json$Encode$string($mdgriffith$elm_ui$Internal$Style$rules))
					]),
				_List_Nil);
	}
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$fontName = function (font) {
	switch (font.$) {
		case 'Serif':
			return 'serif';
		case 'SansSerif':
			return 'sans-serif';
		case 'Monospace':
			return 'monospace';
		case 'Typeface':
			var name = font.a;
			return '\"' + (name + '\"');
		case 'ImportFont':
			var name = font.a;
			var url = font.b;
			return '\"' + (name + '\"');
		default:
			var name = font.a.name;
			return '\"' + (name + '\"');
	}
};
var $mdgriffith$elm_ui$Internal$Model$isSmallCaps = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return name === 'smcp';
		case 'VariantOff':
			var name = _var.a;
			return false;
		default:
			var name = _var.a;
			var index = _var.b;
			return (name === 'smcp') && (index === 1);
	}
};
var $mdgriffith$elm_ui$Internal$Model$hasSmallCaps = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$isSmallCaps, font.variants);
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderProps = F3(
	function (force, _v0, existing) {
		var key = _v0.a;
		var val = _v0.b;
		return force ? (existing + ('\n  ' + (key + (': ' + (val + ' !important;'))))) : (existing + ('\n  ' + (key + (': ' + (val + ';')))));
	});
var $mdgriffith$elm_ui$Internal$Model$renderStyle = F4(
	function (options, maybePseudo, selector, props) {
		if (maybePseudo.$ === 'Nothing') {
			return _List_fromArray(
				[
					selector + ('{' + (A3(
					$elm$core$List$foldl,
					$mdgriffith$elm_ui$Internal$Model$renderProps(false),
					'',
					props) + '\n}'))
				]);
		} else {
			var pseudo = maybePseudo.a;
			switch (pseudo.$) {
				case 'Hover':
					var _v2 = options.hover;
					switch (_v2.$) {
						case 'NoHover':
							return _List_Nil;
						case 'ForceHover':
							return _List_fromArray(
								[
									selector + ('-hv {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(true),
									'',
									props) + '\n}'))
								]);
						default:
							return _List_fromArray(
								[
									selector + ('-hv:hover {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(false),
									'',
									props) + '\n}'))
								]);
					}
				case 'Focus':
					var renderedProps = A3(
						$elm$core$List$foldl,
						$mdgriffith$elm_ui$Internal$Model$renderProps(false),
						'',
						props);
					return _List_fromArray(
						[
							selector + ('-fs:focus {' + (renderedProps + '\n}')),
							('.' + ($mdgriffith$elm_ui$Internal$Style$classes.any + (':focus ' + (selector + '-fs  {')))) + (renderedProps + '\n}'),
							(selector + '-fs:focus-within {') + (renderedProps + '\n}'),
							('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + (' .focusable-thumb' + (selector + '-fs {')))) + (renderedProps + '\n}')
						]);
				default:
					return _List_fromArray(
						[
							selector + ('-act:active {' + (A3(
							$elm$core$List$foldl,
							$mdgriffith$elm_ui$Internal$Model$renderProps(false),
							'',
							props) + '\n}'))
						]);
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderVariant = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return '\"' + (name + '\"');
		case 'VariantOff':
			var name = _var.a;
			return '\"' + (name + '\" 0');
		default:
			var name = _var.a;
			var index = _var.b;
			return '\"' + (name + ('\" ' + $elm$core$String$fromInt(index)));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderVariants = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				', ',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$renderVariant, font.variants)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$transformValue = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return $elm$core$Maybe$Nothing;
		case 'Moved':
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'translate3d(' + ($elm$core$String$fromFloat(x) + ('px, ' + ($elm$core$String$fromFloat(y) + ('px, ' + ($elm$core$String$fromFloat(z) + 'px)'))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			var translate = 'translate3d(' + ($elm$core$String$fromFloat(tx) + ('px, ' + ($elm$core$String$fromFloat(ty) + ('px, ' + ($elm$core$String$fromFloat(tz) + 'px)')))));
			var scale = 'scale3d(' + ($elm$core$String$fromFloat(sx) + (', ' + ($elm$core$String$fromFloat(sy) + (', ' + ($elm$core$String$fromFloat(sz) + ')')))));
			var rotate = 'rotate3d(' + ($elm$core$String$fromFloat(ox) + (', ' + ($elm$core$String$fromFloat(oy) + (', ' + ($elm$core$String$fromFloat(oz) + (', ' + ($elm$core$String$fromFloat(angle) + 'rad)')))))));
			return $elm$core$Maybe$Just(translate + (' ' + (scale + (' ' + rotate))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderStyleRule = F3(
	function (options, rule, maybePseudo) {
		switch (rule.$) {
			case 'Style':
				var selector = rule.a;
				var props = rule.b;
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, selector, props);
			case 'Shadows':
				var name = rule.a;
				var prop = rule.b;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, 'box-shadow', prop)
						]));
			case 'Transparency':
				var name = rule.a;
				var transparency = rule.b;
				var opacity = A2(
					$elm$core$Basics$max,
					0,
					A2($elm$core$Basics$min, 1, 1 - transparency));
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'opacity',
							$elm$core$String$fromFloat(opacity))
						]));
			case 'FontSize':
				var i = rule.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			case 'FontFamily':
				var name = rule.a;
				var typefaces = rule.b;
				var features = A2(
					$elm$core$String$join,
					', ',
					A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Internal$Model$renderVariants, typefaces));
				var families = _List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-family',
						A2(
							$elm$core$String$join,
							', ',
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$fontName, typefaces))),
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'font-feature-settings', features),
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-variant',
						A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$hasSmallCaps, typefaces) ? 'small-caps' : 'normal')
					]);
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, '.' + name, families);
			case 'Single':
				var _class = rule.a;
				var prop = rule.b;
				var val = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, prop, val)
						]));
			case 'Colored':
				var _class = rule.a;
				var prop = rule.b;
				var color = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							prop,
							$mdgriffith$elm_ui$Internal$Model$formatColor(color))
						]));
			case 'SpacingStyle':
				var cls = rule.a;
				var x = rule.b;
				var y = rule.c;
				var yPx = $elm$core$String$fromInt(y) + 'px';
				var xPx = $elm$core$String$fromInt(x) + 'px';
				var single = '.' + $mdgriffith$elm_ui$Internal$Style$classes.single;
				var row = '.' + $mdgriffith$elm_ui$Internal$Style$classes.row;
				var wrappedRow = '.' + ($mdgriffith$elm_ui$Internal$Style$classes.wrapped + row);
				var right = '.' + $mdgriffith$elm_ui$Internal$Style$classes.alignRight;
				var paragraph = '.' + $mdgriffith$elm_ui$Internal$Style$classes.paragraph;
				var page = '.' + $mdgriffith$elm_ui$Internal$Style$classes.page;
				var left = '.' + $mdgriffith$elm_ui$Internal$Style$classes.alignLeft;
				var halfY = $elm$core$String$fromFloat(y / 2) + 'px';
				var halfX = $elm$core$String$fromFloat(x / 2) + 'px';
				var column = '.' + $mdgriffith$elm_ui$Internal$Style$classes.column;
				var _class = '.' + cls;
				var any = '.' + $mdgriffith$elm_ui$Internal$Style$classes.any;
				return $elm$core$List$concat(
					_List_fromArray(
						[
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (row + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (wrappedRow + (' > ' + any)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin', halfY + (' ' + halfX))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (column + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_Utils_ap(_class, paragraph),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							'textarea' + (any + _class),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)')),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'height',
									'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::after'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-top',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::before'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-bottom',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								]))
						]));
			case 'PaddingStyle':
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'padding',
							$elm$core$String$fromFloat(top) + ('px ' + ($elm$core$String$fromFloat(right) + ('px ' + ($elm$core$String$fromFloat(bottom) + ('px ' + ($elm$core$String$fromFloat(left) + 'px')))))))
						]));
			case 'BorderWidth':
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'border-width',
							$elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px')))))))
						]));
			case 'GridTemplateStyle':
				var template = rule.a;
				var toGridLengthHelper = F3(
					function (minimum, maximum, x) {
						toGridLengthHelper:
						while (true) {
							switch (x.$) {
								case 'Px':
									var px = x.a;
									return $elm$core$String$fromInt(px) + 'px';
								case 'Content':
									var _v2 = _Utils_Tuple2(minimum, maximum);
									if (_v2.a.$ === 'Nothing') {
										if (_v2.b.$ === 'Nothing') {
											var _v3 = _v2.a;
											var _v4 = _v2.b;
											return 'max-content';
										} else {
											var _v6 = _v2.a;
											var maxSize = _v2.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v2.b.$ === 'Nothing') {
											var minSize = _v2.a.a;
											var _v5 = _v2.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + 'max-content)'));
										} else {
											var minSize = _v2.a.a;
											var maxSize = _v2.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 'Fill':
									var i = x.a;
									var _v7 = _Utils_Tuple2(minimum, maximum);
									if (_v7.a.$ === 'Nothing') {
										if (_v7.b.$ === 'Nothing') {
											var _v8 = _v7.a;
											var _v9 = _v7.b;
											return $elm$core$String$fromInt(i) + 'fr';
										} else {
											var _v11 = _v7.a;
											var maxSize = _v7.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v7.b.$ === 'Nothing') {
											var minSize = _v7.a.a;
											var _v10 = _v7.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(i) + ('fr' + 'fr)'))));
										} else {
											var minSize = _v7.a.a;
											var maxSize = _v7.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 'Min':
									var m = x.a;
									var len = x.b;
									var $temp$minimum = $elm$core$Maybe$Just(m),
										$temp$maximum = maximum,
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
								default:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = minimum,
										$temp$maximum = $elm$core$Maybe$Just(m),
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
							}
						}
					});
				var toGridLength = function (x) {
					return A3(toGridLengthHelper, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, x);
				};
				var xSpacing = toGridLength(template.spacing.a);
				var ySpacing = toGridLength(template.spacing.b);
				var rows = function (x) {
					return 'grid-template-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.rows)));
				var msRows = function (x) {
					return '-ms-grid-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.columns)));
				var msColumns = function (x) {
					return '-ms-grid-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.columns)));
				var gapY = 'grid-row-gap:' + (toGridLength(template.spacing.b) + ';');
				var gapX = 'grid-column-gap:' + (toGridLength(template.spacing.a) + ';');
				var columns = function (x) {
					return 'grid-template-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.columns)));
				var _class = '.grid-rows-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.b)))))));
				var modernGrid = _class + ('{' + (columns + (rows + (gapX + (gapY + '}')))));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msColumns + (msRows + '}')));
				return _List_fromArray(
					[base, supports]);
			case 'GridPosition':
				var position = rule.a;
				var msPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'-ms-grid-row: ' + ($elm$core$String$fromInt(position.row) + ';'),
							'-ms-grid-row-span: ' + ($elm$core$String$fromInt(position.height) + ';'),
							'-ms-grid-column: ' + ($elm$core$String$fromInt(position.col) + ';'),
							'-ms-grid-column-span: ' + ($elm$core$String$fromInt(position.width) + ';')
						]));
				var modernPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'grid-row: ' + ($elm$core$String$fromInt(position.row) + (' / ' + ($elm$core$String$fromInt(position.row + position.height) + ';'))),
							'grid-column: ' + ($elm$core$String$fromInt(position.col) + (' / ' + ($elm$core$String$fromInt(position.col + position.width) + ';')))
						]));
				var _class = '.grid-pos-' + ($elm$core$String$fromInt(position.row) + ('-' + ($elm$core$String$fromInt(position.col) + ('-' + ($elm$core$String$fromInt(position.width) + ('-' + $elm$core$String$fromInt(position.height)))))));
				var modernGrid = _class + ('{' + (modernPosition + '}'));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msPosition + '}'));
				return _List_fromArray(
					[base, supports]);
			case 'PseudoSelector':
				var _class = rule.a;
				var styles = rule.b;
				var renderPseudoRule = function (style) {
					return A3(
						$mdgriffith$elm_ui$Internal$Model$renderStyleRule,
						options,
						style,
						$elm$core$Maybe$Just(_class));
				};
				return A2($elm$core$List$concatMap, renderPseudoRule, styles);
			default:
				var transform = rule.a;
				var val = $mdgriffith$elm_ui$Internal$Model$transformValue(transform);
				var _class = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				var _v12 = _Utils_Tuple2(_class, val);
				if ((_v12.a.$ === 'Just') && (_v12.b.$ === 'Just')) {
					var cls = _v12.a.a;
					var v = _v12.b.a;
					return A4(
						$mdgriffith$elm_ui$Internal$Model$renderStyle,
						options,
						maybePseudo,
						'.' + cls,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Model$Property, 'transform', v)
							]));
				} else {
					return _List_Nil;
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$encodeStyles = F2(
	function (options, stylesheet) {
		return $elm$json$Json$Encode$object(
			A2(
				$elm$core$List$map,
				function (style) {
					var styled = A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing);
					return _Utils_Tuple2(
						$mdgriffith$elm_ui$Internal$Model$getStyleName(style),
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styled));
				},
				stylesheet));
	});
var $mdgriffith$elm_ui$Internal$Model$bracket = F2(
	function (selector, rules) {
		var renderPair = function (_v0) {
			var name = _v0.a;
			var val = _v0.b;
			return name + (': ' + (val + ';'));
		};
		return selector + (' {' + (A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, renderPair, rules)) + '}'));
	});
var $mdgriffith$elm_ui$Internal$Model$fontRule = F3(
	function (name, modifier, _v0) {
		var parentAdj = _v0.a;
		var textAdjustment = _v0.b;
		return _List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + (', ' + ('.' + (name + (' .' + modifier))))))), parentAdj),
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (', .' + (name + (' .' + (modifier + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.text)))))))))), textAdjustment)
			]);
	});
var $mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule = F3(
	function (fontToAdjust, _v0, otherFontName) {
		var full = _v0.a;
		var capital = _v0.b;
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_Utils_ap(
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital, capital),
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.fullSize, full)));
	});
var $mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule = F2(
	function (fontToAdjust, otherFontName) {
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (', ' + ('.' + (name + (' .' + $mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('line-height', '1')
						])),
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (', .' + (name + (' .' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.text)))))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('vertical-align', '0'),
							_Utils_Tuple2('line-height', '1')
						]))
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$adjust = F3(
	function (size, height, vertical) {
		return {height: height / size, size: size, vertical: vertical};
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$convertAdjustment = function (adjustment) {
	var lines = _List_fromArray(
		[adjustment.capital, adjustment.baseline, adjustment.descender, adjustment.lowercase]);
	var lineHeight = 1.5;
	var normalDescender = (lineHeight - 1) / 2;
	var oldMiddle = lineHeight / 2;
	var descender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.descender,
		$elm$core$List$minimum(lines));
	var newBaseline = A2(
		$elm$core$Maybe$withDefault,
		adjustment.baseline,
		$elm$core$List$minimum(
			A2(
				$elm$core$List$filter,
				function (x) {
					return !_Utils_eq(x, descender);
				},
				lines)));
	var base = lineHeight;
	var ascender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.capital,
		$elm$core$List$maximum(lines));
	var capitalSize = 1 / (ascender - newBaseline);
	var capitalVertical = 1 - ascender;
	var fullSize = 1 / (ascender - descender);
	var fullVertical = 1 - ascender;
	var newCapitalMiddle = ((ascender - newBaseline) / 2) + newBaseline;
	var newFullMiddle = ((ascender - descender) / 2) + descender;
	return {
		capital: A3($mdgriffith$elm_ui$Internal$Model$adjust, capitalSize, ascender - newBaseline, capitalVertical),
		full: A3($mdgriffith$elm_ui$Internal$Model$adjust, fullSize, ascender - descender, fullVertical)
	};
};
var $mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules = function (converted) {
	return _Utils_Tuple2(
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'block')
			]),
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'inline-block'),
				_Utils_Tuple2(
				'line-height',
				$elm$core$String$fromFloat(converted.height)),
				_Utils_Tuple2(
				'vertical-align',
				$elm$core$String$fromFloat(converted.vertical) + 'em'),
				_Utils_Tuple2(
				'font-size',
				$elm$core$String$fromFloat(converted.size) + 'em')
			]));
};
var $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment = function (typefaces) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (face, found) {
				if (found.$ === 'Nothing') {
					if (face.$ === 'FontWith') {
						var _with = face.a;
						var _v2 = _with.adjustment;
						if (_v2.$ === 'Nothing') {
							return found;
						} else {
							var adjustment = _v2.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.full;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment))),
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.capital;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment)))));
						}
					} else {
						return found;
					}
				} else {
					return found;
				}
			}),
		$elm$core$Maybe$Nothing,
		typefaces);
};
var $mdgriffith$elm_ui$Internal$Model$renderTopLevelValues = function (rules) {
	var withImport = function (font) {
		if (font.$ === 'ImportFont') {
			var url = font.b;
			return $elm$core$Maybe$Just('@import url(\'' + (url + '\');'));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	var fontImports = function (_v2) {
		var name = _v2.a;
		var typefaces = _v2.b;
		var imports = A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$filterMap, withImport, typefaces));
		return imports;
	};
	var allNames = A2($elm$core$List$map, $elm$core$Tuple$first, rules);
	var fontAdjustments = function (_v1) {
		var name = _v1.a;
		var typefaces = _v1.b;
		var _v0 = $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment(typefaces);
		if (_v0.$ === 'Nothing') {
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					$mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule(name),
					allNames));
		} else {
			var adjustment = _v0.a;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					A2($mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule, name, adjustment),
					allNames));
		}
	};
	return _Utils_ap(
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontImports, rules)),
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontAdjustments, rules)));
};
var $mdgriffith$elm_ui$Internal$Model$topLevelValue = function (rule) {
	if (rule.$ === 'FontFamily') {
		var name = rule.a;
		var typefaces = rule.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(name, typefaces));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$toStyleSheetString = F2(
	function (options, stylesheet) {
		var combine = F2(
			function (style, rendered) {
				return {
					rules: _Utils_ap(
						rendered.rules,
						A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing)),
					topLevel: function () {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$topLevelValue(style);
						if (_v1.$ === 'Nothing') {
							return rendered.topLevel;
						} else {
							var topLevel = _v1.a;
							return A2($elm$core$List$cons, topLevel, rendered.topLevel);
						}
					}()
				};
			});
		var _v0 = A3(
			$elm$core$List$foldl,
			combine,
			{rules: _List_Nil, topLevel: _List_Nil},
			stylesheet);
		var topLevel = _v0.topLevel;
		var rules = _v0.rules;
		return _Utils_ap(
			$mdgriffith$elm_ui$Internal$Model$renderTopLevelValues(topLevel),
			$elm$core$String$concat(rules));
	});
var $mdgriffith$elm_ui$Internal$Model$toStyleSheet = F2(
	function (options, styleSheet) {
		var _v0 = options.mode;
		switch (_v0.$) {
			case 'Layout':
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			case 'NoStaticStyleSheet':
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			default:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'elm-ui-rules',
					_List_fromArray(
						[
							A2(
							$elm$virtual_dom$VirtualDom$property,
							'rules',
							A2($mdgriffith$elm_ui$Internal$Model$encodeStyles, options, styleSheet))
						]),
					_List_Nil);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$embedKeyed = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.focus)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			_Utils_Tuple2(
				'static-stylesheet',
				$mdgriffith$elm_ui$Internal$Model$staticRoot(opts)),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
				children)) : A2(
			$elm$core$List$cons,
			_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
			children);
	});
var $mdgriffith$elm_ui$Internal$Model$embedWith = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.focus)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			$mdgriffith$elm_ui$Internal$Model$staticRoot(opts),
			A2($elm$core$List$cons, dynamicStyleSheet, children)) : A2($elm$core$List$cons, dynamicStyleSheet, children);
	});
var $mdgriffith$elm_ui$Internal$Flag$heightBetween = $mdgriffith$elm_ui$Internal$Flag$flag(45);
var $mdgriffith$elm_ui$Internal$Flag$heightFill = $mdgriffith$elm_ui$Internal$Flag$flag(37);
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $mdgriffith$elm_ui$Internal$Flag$present = F2(
	function (myFlag, _v0) {
		var fieldOne = _v0.a;
		var fieldTwo = _v0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return _Utils_eq(first & fieldOne, first);
		} else {
			var second = myFlag.a;
			return _Utils_eq(second & fieldTwo, second);
		}
	});
var $elm$html$Html$s = _VirtualDom_node('s');
var $elm$html$Html$u = _VirtualDom_node('u');
var $mdgriffith$elm_ui$Internal$Flag$widthBetween = $mdgriffith$elm_ui$Internal$Flag$flag(44);
var $mdgriffith$elm_ui$Internal$Flag$widthFill = $mdgriffith$elm_ui$Internal$Flag$flag(39);
var $mdgriffith$elm_ui$Internal$Model$finalizeNode = F6(
	function (has, node, attributes, children, embedMode, parentContext) {
		var createNode = F2(
			function (nodeName, attrs) {
				if (children.$ === 'Keyed') {
					var keyed = children.a;
					return A3(
						$elm$virtual_dom$VirtualDom$keyedNode,
						nodeName,
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return keyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, false, opts, styles, keyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, true, opts, styles, keyed);
							}
						}());
				} else {
					var unkeyed = children.a;
					return A2(
						function () {
							switch (nodeName) {
								case 'div':
									return $elm$html$Html$div;
								case 'p':
									return $elm$html$Html$p;
								default:
									return $elm$virtual_dom$VirtualDom$node(nodeName);
							}
						}(),
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return unkeyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, false, opts, styles, unkeyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, true, opts, styles, unkeyed);
							}
						}());
				}
			});
		var html = function () {
			switch (node.$) {
				case 'Generic':
					return A2(createNode, 'div', attributes);
				case 'NodeName':
					var nodeName = node.a;
					return A2(createNode, nodeName, attributes);
				default:
					var nodeName = node.a;
					var internal = node.b;
					return A3(
						$elm$virtual_dom$VirtualDom$node,
						nodeName,
						attributes,
						_List_fromArray(
							[
								A2(
								createNode,
								internal,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.single))
									]))
							]));
			}
		}();
		switch (parentContext.$) {
			case 'AsRow':
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignRight, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerX, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX])))
						]),
					_List_fromArray(
						[html])) : html));
			case 'AsColumn':
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerY, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignBottom, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom])))
						]),
					_List_fromArray(
						[html])) : html));
			default:
				return html;
		}
	});
var $mdgriffith$elm_ui$Internal$Model$textElementClasses = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthContent + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.heightContent)))));
var $mdgriffith$elm_ui$Internal$Model$textElement = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$textElementFillClasses = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthFill + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.heightFill)))));
var $mdgriffith$elm_ui$Internal$Model$textElementFill = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementFillClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$createElement = F3(
	function (context, children, rendered) {
		var gatherKeyed = F2(
			function (_v8, _v9) {
				var key = _v8.a;
				var child = _v8.b;
				var htmls = _v9.a;
				var existingStyles = _v9.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str)),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		var gather = F2(
			function (child, _v6) {
				var htmls = _v6.a;
				var existingStyles = _v6.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		if (children.$ === 'Keyed') {
			var keyedChildren = children.a;
			var _v1 = A3(
				$elm$core$List$foldr,
				gatherKeyed,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				keyedChildren);
			var keyed = _v1.a;
			var styles = _v1.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						$mdgriffith$elm_ui$Internal$Model$Keyed(
							A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							$mdgriffith$elm_ui$Internal$Model$Keyed(
								A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children))),
						styles: allStyles
					});
			}
		} else {
			var unkeyedChildren = children.a;
			var _v3 = A3(
				$elm$core$List$foldr,
				gather,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				unkeyedChildren);
			var unkeyed = _v3.a;
			var styles = _v3.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.children)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							$mdgriffith$elm_ui$Internal$Model$Unkeyed(
								A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.children))),
						styles: allStyles
					});
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Single = F3(
	function (a, b, c) {
		return {$: 'Single', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$Transform = function (a) {
	return {$: 'Transform', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $mdgriffith$elm_ui$Internal$Flag$add = F2(
	function (myFlag, _v0) {
		var one = _v0.a;
		var two = _v0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, first | one, two);
		} else {
			var second = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, one, second | two);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehind = function (a) {
	return {$: 'ChildrenBehind', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront = F2(
	function (a, b) {
		return {$: 'ChildrenBehindAndInFront', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenInFront = function (a) {
	return {$: 'ChildrenInFront', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$nearbyElement = F2(
	function (location, elem) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					function () {
						switch (location.$) {
							case 'Above':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.above]));
							case 'Below':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.below]));
							case 'OnRight':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.onRight]));
							case 'OnLeft':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.onLeft]));
							case 'InFront':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.inFront]));
							default:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.behind]));
						}
					}())
				]),
			_List_fromArray(
				[
					function () {
					switch (elem.$) {
						case 'Empty':
							return $elm$virtual_dom$VirtualDom$text('');
						case 'Text':
							var str = elem.a;
							return $mdgriffith$elm_ui$Internal$Model$textElement(str);
						case 'Unstyled':
							var html = elem.a;
							return html($mdgriffith$elm_ui$Internal$Model$asEl);
						default:
							var styled = elem.a;
							return A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, $mdgriffith$elm_ui$Internal$Model$asEl);
					}
				}()
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$addNearbyElement = F3(
	function (location, elem, existing) {
		var nearby = A2($mdgriffith$elm_ui$Internal$Model$nearbyElement, location, elem);
		switch (existing.$) {
			case 'NoNearbyChildren':
				if (location.$ === 'Behind') {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						_List_fromArray(
							[nearby]));
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenBehind':
				var existingBehind = existing.a;
				if (location.$ === 'Behind') {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						A2($elm$core$List$cons, nearby, existingBehind));
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenInFront':
				var existingInFront = existing.a;
				if (location.$ === 'Behind') {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						_List_fromArray(
							[nearby]),
						existingInFront);
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						A2($elm$core$List$cons, nearby, existingInFront));
				}
			default:
				var existingBehind = existing.a;
				var existingInFront = existing.b;
				if (location.$ === 'Behind') {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						A2($elm$core$List$cons, nearby, existingBehind),
						existingInFront);
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						A2($elm$core$List$cons, nearby, existingInFront));
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Embedded = F2(
	function (a, b) {
		return {$: 'Embedded', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$NodeName = function (a) {
	return {$: 'NodeName', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addNodeName = F2(
	function (newNode, old) {
		switch (old.$) {
			case 'Generic':
				return $mdgriffith$elm_ui$Internal$Model$NodeName(newNode);
			case 'NodeName':
				var name = old.a;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, name, newNode);
			default:
				var x = old.a;
				var y = old.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, x, y);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$alignXName = function (align) {
	switch (align.$) {
		case 'Left':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
		case 'Right':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignRight);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
	}
};
var $mdgriffith$elm_ui$Internal$Model$alignYName = function (align) {
	switch (align.$) {
		case 'Top':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignTop);
		case 'Bottom':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
	}
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Model$FullTransform = F4(
	function (a, b, c, d) {
		return {$: 'FullTransform', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$Moved = function (a) {
	return {$: 'Moved', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$composeTransformation = F2(
	function (transform, component) {
		switch (transform.$) {
			case 'Untransformed':
				switch (component.$) {
					case 'MoveX':
						var x = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, 0, 0));
					case 'MoveY':
						var y = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, y, 0));
					case 'MoveZ':
						var z = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, 0, z));
					case 'MoveXYZ':
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var xyz = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							xyz,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			case 'Moved':
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(newX, y, z));
					case 'MoveY':
						var newY = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, newY, z));
					case 'MoveZ':
						var newZ = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, y, newZ));
					case 'MoveXYZ':
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var scale = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							scale,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			default:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				var scaled = transform.b;
				var origin = transform.c;
				var angle = transform.d;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(newX, y, z),
							scaled,
							origin,
							angle);
					case 'MoveY':
						var newY = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, newY, z),
							scaled,
							origin,
							angle);
					case 'MoveZ':
						var newZ = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, y, newZ),
							scaled,
							origin,
							angle);
					case 'MoveXYZ':
						var newMove = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, newMove, scaled, origin, angle);
					case 'Rotate':
						var newOrigin = component.a;
						var newAngle = component.b;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, scaled, newOrigin, newAngle);
					default:
						var newScale = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, newScale, origin, angle);
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$height = $mdgriffith$elm_ui$Internal$Flag$flag(7);
var $mdgriffith$elm_ui$Internal$Flag$heightContent = $mdgriffith$elm_ui$Internal$Flag$flag(36);
var $mdgriffith$elm_ui$Internal$Flag$merge = F2(
	function (_v0, _v1) {
		var one = _v0.a;
		var two = _v0.b;
		var three = _v1.a;
		var four = _v1.b;
		return A2($mdgriffith$elm_ui$Internal$Flag$Field, one | three, two | four);
	});
var $mdgriffith$elm_ui$Internal$Flag$none = A2($mdgriffith$elm_ui$Internal$Flag$Field, 0, 0);
var $mdgriffith$elm_ui$Internal$Model$renderHeight = function (h) {
	switch (h.$) {
		case 'Px':
			var px = h.a;
			var val = $elm$core$String$fromInt(px);
			var name = 'height-px-' + val;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.heightExact + (' ' + name),
				_List_fromArray(
					[
						A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height', val + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightContent,
				_List_Nil);
		case 'Fill':
			var portion = h.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightFill,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (' height-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.column + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'height-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = h.a;
			var len = h.b;
			var cls = 'min-height-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-height',
				$elm$core$String$fromInt(minSize) + 'px !important');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = h.a;
			var len = h.b;
			var cls = 'max-height-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-height',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$widthContent = $mdgriffith$elm_ui$Internal$Flag$flag(38);
var $mdgriffith$elm_ui$Internal$Model$renderWidth = function (w) {
	switch (w.$) {
		case 'Px':
			var px = w.a;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.widthExact + (' width-px-' + $elm$core$String$fromInt(px)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						'width-px-' + $elm$core$String$fromInt(px),
						'width',
						$elm$core$String$fromInt(px) + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthContent,
				_List_Nil);
		case 'Fill':
			var portion = w.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthFill,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (' width-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.row + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'width-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = w.a;
			var len = w.b;
			var cls = 'min-width-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-width',
				$elm$core$String$fromInt(minSize) + 'px');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = w.a;
			var len = w.b;
			var cls = 'max-width-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-width',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$borderWidth = $mdgriffith$elm_ui$Internal$Flag$flag(27);
var $mdgriffith$elm_ui$Internal$Model$skippable = F2(
	function (flag, style) {
		if (_Utils_eq(flag, $mdgriffith$elm_ui$Internal$Flag$borderWidth)) {
			if (style.$ === 'Single') {
				var val = style.c;
				switch (val) {
					case '0px':
						return true;
					case '1px':
						return true;
					case '2px':
						return true;
					case '3px':
						return true;
					case '4px':
						return true;
					case '5px':
						return true;
					case '6px':
						return true;
					default:
						return false;
				}
			} else {
				return false;
			}
		} else {
			switch (style.$) {
				case 'FontSize':
					var i = style.a;
					return (i >= 8) && (i <= 32);
				case 'PaddingStyle':
					var name = style.a;
					var t = style.b;
					var r = style.c;
					var b = style.d;
					var l = style.e;
					return _Utils_eq(t, b) && (_Utils_eq(t, r) && (_Utils_eq(t, l) && ((t >= 0) && (t <= 24))));
				default:
					return false;
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$width = $mdgriffith$elm_ui$Internal$Flag$flag(6);
var $mdgriffith$elm_ui$Internal$Flag$xAlign = $mdgriffith$elm_ui$Internal$Flag$flag(30);
var $mdgriffith$elm_ui$Internal$Flag$yAlign = $mdgriffith$elm_ui$Internal$Flag$flag(29);
var $mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive = F8(
	function (classes, node, has, transform, styles, attrs, children, elementAttrs) {
		gatherAttrRecursive:
		while (true) {
			if (!elementAttrs.b) {
				var _v1 = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				if (_v1.$ === 'Nothing') {
					return {
						attributes: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: styles
					};
				} else {
					var _class = _v1.a;
					return {
						attributes: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes + (' ' + _class)),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$Transform(transform),
							styles)
					};
				}
			} else {
				var attribute = elementAttrs.a;
				var remaining = elementAttrs.b;
				switch (attribute.$) {
					case 'NoAttribute':
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Class':
						var flag = attribute.a;
						var exactClassName = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = exactClassName + (' ' + classes),
								$temp$node = node,
								$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					case 'Attr':
						var actualAttribute = attribute.a;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = A2($elm$core$List$cons, actualAttribute, attrs),
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'StyleClass':
						var flag = attribute.a;
						var style = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							if (A2($mdgriffith$elm_ui$Internal$Model$skippable, flag, style)) {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							} else {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = A2($elm$core$List$cons, style, styles),
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							}
						}
					case 'TransformComponent':
						var flag = attribute.a;
						var component = attribute.b;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
							$temp$transform = A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, transform, component),
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Width':
						var width = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$width, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (width.$) {
								case 'Px':
									var px = width.a;
									var $temp$classes = ($mdgriffith$elm_ui$Internal$Style$classes.widthExact + (' width-px-' + $elm$core$String$fromInt(px))) + (' ' + classes),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3(
											$mdgriffith$elm_ui$Internal$Model$Single,
											'width-px-' + $elm$core$String$fromInt(px),
											'width',
											$elm$core$String$fromInt(px) + 'px'),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.widthContent),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$widthContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = width.a;
									if (portion === 1) {
										var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.widthFill),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (' width-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.row + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'width-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v4 = $mdgriffith$elm_ui$Internal$Model$renderWidth(width);
									var addToFlags = _v4.a;
									var newClass = _v4.b;
									var newStyles = _v4.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Height':
						var height = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$height, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (height.$) {
								case 'Px':
									var px = height.a;
									var val = $elm$core$String$fromInt(px) + 'px';
									var name = 'height-px-' + val;
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightExact + (' ' + (name + (' ' + classes))),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height ', val),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightContent + (' ' + classes),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$heightContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = height.a;
									if (portion === 1) {
										var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightFill + (' ' + classes),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (' height-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.column + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'height-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v6 = $mdgriffith$elm_ui$Internal$Model$renderHeight(height);
									var addToFlags = _v6.a;
									var newClass = _v6.b;
									var newStyles = _v6.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Describe':
						var description = attribute.a;
						switch (description.$) {
							case 'Main':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'main', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Navigation':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'nav', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'ContentInfo':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'footer', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Complementary':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'aside', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Heading':
								var i = description.a;
								if (i <= 1) {
									var $temp$classes = classes,
										$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h1', node),
										$temp$has = has,
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								} else {
									if (i < 7) {
										var $temp$classes = classes,
											$temp$node = A2(
											$mdgriffith$elm_ui$Internal$Model$addNodeName,
											'h' + $elm$core$String$fromInt(i),
											node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes,
											$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h6', node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								}
							case 'Paragraph':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Button':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'role', 'button'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Label':
								var label = description.a;
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-label', label),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'LivePolite':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'polite'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							default:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'assertive'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
						}
					case 'Nearby':
						var location = attribute.a;
						var elem = attribute.b;
						var newStyles = function () {
							switch (elem.$) {
								case 'Empty':
									return styles;
								case 'Text':
									var str = elem.a;
									return styles;
								case 'Unstyled':
									var html = elem.a;
									return styles;
								default:
									var styled = elem.a;
									return _Utils_ap(styles, styled.styles);
							}
						}();
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = newStyles,
							$temp$attrs = attrs,
							$temp$children = A3($mdgriffith$elm_ui$Internal$Model$addNearbyElement, location, elem, children),
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'AlignX':
						var x = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignXName(x) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (x.$) {
									case 'CenterX':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerX, flags);
									case 'Right':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignRight, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					default:
						var y = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignYName(y) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (y.$) {
									case 'CenterY':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerY, flags);
									case 'Bottom':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignBottom, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Untransformed = {$: 'Untransformed'};
var $mdgriffith$elm_ui$Internal$Model$untransformed = $mdgriffith$elm_ui$Internal$Model$Untransformed;
var $mdgriffith$elm_ui$Internal$Model$element = F4(
	function (context, node, attributes, children) {
		return A3(
			$mdgriffith$elm_ui$Internal$Model$createElement,
			context,
			children,
			A8(
				$mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive,
				$mdgriffith$elm_ui$Internal$Model$contextClasses(context),
				node,
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Model$untransformed,
				_List_Nil,
				_List_Nil,
				$mdgriffith$elm_ui$Internal$Model$NoNearbyChildren,
				$elm$core$List$reverse(attributes)));
	});
var $mdgriffith$elm_ui$Internal$Model$SpacingStyle = F3(
	function (a, b, c) {
		return {$: 'SpacingStyle', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$StyleClass = F2(
	function (a, b) {
		return {$: 'StyleClass', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$spacing = $mdgriffith$elm_ui$Internal$Flag$flag(3);
var $mdgriffith$elm_ui$Internal$Model$spacingName = F2(
	function (x, y) {
		return 'spacing-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y)));
	});
var $mdgriffith$elm_ui$Element$spacing = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$spacing,
		A3(
			$mdgriffith$elm_ui$Internal$Model$SpacingStyle,
			A2($mdgriffith$elm_ui$Internal$Model$spacingName, x, x),
			x,
			x));
};
var $mdgriffith$elm_ui$Internal$Model$Width = function (a) {
	return {$: 'Width', a: a};
};
var $mdgriffith$elm_ui$Element$width = $mdgriffith$elm_ui$Internal$Model$Width;
var $mdgriffith$elm_ui$Element$paragraph = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asParagraph,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Paragraph),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$spacing(5),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $dillonkearns$elm_markdown$Markdown$Block$BlockQuote = function (a) {
	return {$: 'BlockQuote', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Cdata = function (a) {
	return {$: 'Cdata', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$CodeBlock = function (a) {
	return {$: 'CodeBlock', a: a};
};
var $dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock = function (a) {
	return {$: 'CodeBlock', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$CodeSpan = function (a) {
	return {$: 'CodeSpan', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$CompletedTask = {$: 'CompletedTask'};
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 'Done', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Emphasis = function (a) {
	return {$: 'Emphasis', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Parser$EmptyBlock = {$: 'EmptyBlock'};
var $dillonkearns$elm_markdown$Markdown$Block$HardLineBreak = {$: 'HardLineBreak'};
var $dillonkearns$elm_markdown$Markdown$Block$Heading = F2(
	function (a, b) {
		return {$: 'Heading', a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$RawBlock$Html = function (a) {
	return {$: 'Html', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$HtmlBlock = function (a) {
	return {$: 'HtmlBlock', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$HtmlComment = function (a) {
	return {$: 'HtmlComment', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration = F2(
	function (a, b) {
		return {$: 'HtmlDeclaration', a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Block$HtmlElement = F3(
	function (a, b, c) {
		return {$: 'HtmlElement', a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Block$HtmlInline = function (a) {
	return {$: 'HtmlInline', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Image = F3(
	function (a, b, c) {
		return {$: 'Image', a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Block$IncompleteTask = {$: 'IncompleteTask'};
var $dillonkearns$elm_markdown$Markdown$Parser$InlineProblem = function (a) {
	return {$: 'InlineProblem', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Link = F3(
	function (a, b, c) {
		return {$: 'Link', a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Block$ListItem = F2(
	function (a, b) {
		return {$: 'ListItem', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$NoTask = {$: 'NoTask'};
var $dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph = function (a) {
	return {$: 'OpenBlockOrParagraph', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$OrderedList = F2(
	function (a, b) {
		return {$: 'OrderedList', a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Block$Paragraph = function (a) {
	return {$: 'Paragraph', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock = function (a) {
	return {$: 'ParsedBlock', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction = function (a) {
	return {$: 'ProcessingInstruction', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Strong = function (a) {
	return {$: 'Strong', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Table = F2(
	function (a, b) {
		return {$: 'Table', a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Block$Text = function (a) {
	return {$: 'Text', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$ThematicBreak = {$: 'ThematicBreak'};
var $dillonkearns$elm_markdown$Markdown$RawBlock$ThematicBreak = {$: 'ThematicBreak'};
var $dillonkearns$elm_markdown$Markdown$Block$UnorderedList = function (a) {
	return {$: 'UnorderedList', a: a};
};
var $dillonkearns$elm_markdown$Markdown$RawBlock$UnparsedInlines = function (a) {
	return {$: 'UnparsedInlines', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Parser$addReference = F2(
	function (state, linkRef) {
		return {
			linkReferenceDefinitions: A2($elm$core$List$cons, linkRef, state.linkReferenceDefinitions),
			rawBlocks: state.rawBlocks
		};
	});
var $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine = {$: 'BlankLine'};
var $dillonkearns$elm_markdown$Helpers$isSpaceOrTab = function (c) {
	switch (c.valueOf()) {
		case ' ':
			return true;
		case '\t':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Parser$Token$newline = A2(
	$elm$parser$Parser$Advanced$Token,
	'\n',
	$elm$parser$Parser$Expecting('a newline'));
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $dillonkearns$elm_markdown$Markdown$Parser$blankLine = A2(
	$elm$parser$Parser$Advanced$map,
	function (_v0) {
		return $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine;
	},
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$backtrackable(
			$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Helpers$isSpaceOrTab)),
		$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$newline)));
var $dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote = function (a) {
	return {$: 'BlockQuote', a: a};
};
var $dillonkearns$elm_markdown$Parser$Token$space = A2(
	$elm$parser$Parser$Advanced$Token,
	' ',
	$elm$parser$Parser$Expecting('a space'));
var $dillonkearns$elm_markdown$Markdown$Parser$blockQuoteStarts = _List_fromArray(
	[
		$elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			'>',
			$elm$parser$Parser$Expecting('>'))),
		A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$backtrackable(
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$space)),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'>',
						$elm$parser$Parser$Expecting(' >'))),
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						' >',
						$elm$parser$Parser$Expecting('  >'))),
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'  >',
						$elm$parser$Parser$Expecting('   >')))
				])))
	]);
var $elm$parser$Parser$Advanced$chompUntilEndOr = function (str) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v0 = A5(_Parser_findSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v0.a;
			var newRow = _v0.b;
			var newCol = _v0.c;
			var adjustedOffset = (newOffset < 0) ? $elm$core$String$length(s.src) : newOffset;
			return A3(
				$elm$parser$Parser$Advanced$Good,
				_Utils_cmp(s.offset, adjustedOffset) < 0,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: adjustedOffset, row: newRow, src: s.src});
		});
};
var $dillonkearns$elm_markdown$Helpers$endOfFile = $elm$parser$Parser$Advanced$end(
	$elm$parser$Parser$Expecting('end of input'));
var $dillonkearns$elm_markdown$Helpers$endOfLineOrFile = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$newline),
			$dillonkearns$elm_markdown$Helpers$endOfFile
		]));
var $dillonkearns$elm_markdown$Markdown$Parser$blockQuote = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote),
			$elm$parser$Parser$Advanced$oneOf($dillonkearns$elm_markdown$Markdown$Parser$blockQuoteStarts)),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$space),
					$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)
				]))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntilEndOr('\n')),
		$dillonkearns$elm_markdown$Helpers$endOfLineOrFile));
var $dillonkearns$elm_markdown$Markdown$RawBlock$Heading = F2(
	function (a, b) {
		return {$: 'Heading', a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$RawBlock$IndentedCodeBlock = function (a) {
	return {$: 'IndentedCodeBlock', a: a};
};
var $dillonkearns$elm_markdown$Markdown$RawBlock$Table = function (a) {
	return {$: 'Table', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Table$Table = F2(
	function (a, b) {
		return {$: 'Table', a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Table$TableDelimiterRow = F2(
	function (a, b) {
		return {$: 'TableDelimiterRow', a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith = F3(
	function (joinWith, string1, string2) {
		var _v0 = _Utils_Tuple2(string1, string2);
		if (_v0.a === '') {
			return string2;
		} else {
			if (_v0.b === '') {
				return string1;
			} else {
				return _Utils_ap(
					string1,
					_Utils_ap(joinWith, string2));
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll = F2(
	function (string1, string2) {
		return string1 + ('\n' + string2);
	});
var $dillonkearns$elm_markdown$Markdown$Table$TableHeader = function (a) {
	return {$: 'TableHeader', a: a};
};
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0.a;
			var _v1 = parse(s0);
			if (_v1.$ === 'Good') {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (step.$ === 'Loop') {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
			});
	});
var $dillonkearns$elm_markdown$Parser$Extra$tokenHelp = function (_char) {
	return $elm$parser$Parser$Advanced$token(
		A2(
			$elm$parser$Parser$Advanced$Token,
			_char,
			$elm$parser$Parser$Expecting(_char)));
};
var $dillonkearns$elm_markdown$Markdown$TableParser$parseCellHelper = function (_v0) {
	var curr = _v0.a;
	var acc = _v0.b;
	var _return = A2(
		$elm$core$Maybe$withDefault,
		$elm$parser$Parser$Advanced$Done(acc),
		A2(
			$elm$core$Maybe$map,
			function (cell) {
				return $elm$parser$Parser$Advanced$Done(
					A2($elm$core$List$cons, cell, acc));
			},
			curr));
	var finishCell = A2(
		$elm$core$Maybe$withDefault,
		$elm$parser$Parser$Advanced$Loop(
			_Utils_Tuple2($elm$core$Maybe$Nothing, acc)),
		A2(
			$elm$core$Maybe$map,
			function (cell) {
				return $elm$parser$Parser$Advanced$Loop(
					_Utils_Tuple2(
						$elm$core$Maybe$Nothing,
						A2($elm$core$List$cons, cell, acc)));
			},
			curr));
	var addToCurrent = function (c) {
		return _Utils_ap(
			A2($elm$core$Maybe$withDefault, '', curr),
			c);
	};
	var continueCell = function (c) {
		return $elm$parser$Parser$Advanced$Loop(
			_Utils_Tuple2(
				$elm$core$Maybe$Just(
					addToCurrent(c)),
				acc));
	};
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v1) {
					return _return;
				},
				$dillonkearns$elm_markdown$Parser$Extra$tokenHelp('|\n')),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v2) {
					return _return;
				},
				$dillonkearns$elm_markdown$Parser$Extra$tokenHelp('\n')),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v3) {
					return _return;
				},
				$elm$parser$Parser$Advanced$end(
					$elm$parser$Parser$Expecting('end'))),
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$backtrackable(
					$elm$parser$Parser$Advanced$succeed(
						continueCell('|'))),
				$dillonkearns$elm_markdown$Parser$Extra$tokenHelp('\\\\|')),
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$backtrackable(
					$elm$parser$Parser$Advanced$succeed(
						continueCell('\\'))),
				$dillonkearns$elm_markdown$Parser$Extra$tokenHelp('\\\\')),
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$backtrackable(
					$elm$parser$Parser$Advanced$succeed(
						continueCell('|'))),
				$dillonkearns$elm_markdown$Parser$Extra$tokenHelp('\\|')),
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$backtrackable(
					$elm$parser$Parser$Advanced$succeed(finishCell)),
				$dillonkearns$elm_markdown$Parser$Extra$tokenHelp('|')),
				A2(
				$elm$parser$Parser$Advanced$mapChompedString,
				F2(
					function (_char, _v4) {
						return continueCell(_char);
					}),
				A2(
					$elm$parser$Parser$Advanced$chompIf,
					$elm$core$Basics$always(true),
					$elm$parser$Parser$Problem('No character found')))
			]));
};
var $elm$core$String$trim = _String_trim;
var $dillonkearns$elm_markdown$Markdown$TableParser$parseCells = A2(
	$elm$parser$Parser$Advanced$map,
	A2(
		$elm$core$List$foldl,
		F2(
			function (cell, acc) {
				return A2(
					$elm$core$List$cons,
					$elm$core$String$trim(cell),
					acc);
			}),
		_List_Nil),
	A2(
		$elm$parser$Parser$Advanced$loop,
		_Utils_Tuple2($elm$core$Maybe$Nothing, _List_Nil),
		$dillonkearns$elm_markdown$Markdown$TableParser$parseCellHelper));
var $dillonkearns$elm_markdown$Markdown$TableParser$rowParser = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$dillonkearns$elm_markdown$Parser$Extra$tokenHelp('|'),
					$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)
				]))),
	$dillonkearns$elm_markdown$Markdown$TableParser$parseCells);
var $dillonkearns$elm_markdown$Markdown$TableParser$parseHeader = F2(
	function (_v0, headersRow) {
		var columnAlignments = _v0.b;
		var headersWithAlignment = function (headers) {
			return A3(
				$elm$core$List$map2,
				F2(
					function (headerCell, alignment) {
						return {alignment: alignment, label: headerCell};
					}),
				headers,
				columnAlignments);
		};
		var combineHeaderAndDelimiter = function (headers) {
			return _Utils_eq(
				$elm$core$List$length(headers),
				$elm$core$List$length(columnAlignments)) ? $elm$core$Result$Ok(
				$dillonkearns$elm_markdown$Markdown$Table$TableHeader(
					headersWithAlignment(headers))) : $elm$core$Result$Err(
				'Tables must have the same number of header columns (' + ($elm$core$String$fromInt(
					$elm$core$List$length(headers)) + (') as delimiter columns (' + ($elm$core$String$fromInt(
					$elm$core$List$length(columnAlignments)) + ')'))));
		};
		var _v1 = A2($elm$parser$Parser$Advanced$run, $dillonkearns$elm_markdown$Markdown$TableParser$rowParser, headersRow);
		if (_v1.$ === 'Ok') {
			var headers = _v1.a;
			return combineHeaderAndDelimiter(headers);
		} else {
			return $elm$core$Result$Err('Unable to parse previous line as a table header');
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks = F2(
	function (state, newRawBlock) {
		return {
			linkReferenceDefinitions: state.linkReferenceDefinitions,
			rawBlocks: function () {
				var _v0 = _Utils_Tuple2(newRawBlock, state.rawBlocks);
				_v0$9:
				while (true) {
					if (_v0.b.b) {
						switch (_v0.b.a.$) {
							case 'CodeBlock':
								if (_v0.a.$ === 'CodeBlock') {
									var block1 = _v0.a.a;
									var _v1 = _v0.b;
									var block2 = _v1.a.a;
									var rest = _v1.b;
									return A2(
										$elm$core$List$cons,
										$dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock(
											{
												body: A2($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll, block2.body, block1.body),
												language: $elm$core$Maybe$Nothing
											}),
										rest);
								} else {
									break _v0$9;
								}
							case 'IndentedCodeBlock':
								if (_v0.a.$ === 'IndentedCodeBlock') {
									var block1 = _v0.a.a;
									var _v2 = _v0.b;
									var block2 = _v2.a.a;
									var rest = _v2.b;
									return A2(
										$elm$core$List$cons,
										$dillonkearns$elm_markdown$Markdown$RawBlock$IndentedCodeBlock(
											A2($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll, block2, block1)),
										rest);
								} else {
									break _v0$9;
								}
							case 'BlockQuote':
								switch (_v0.a.$) {
									case 'OpenBlockOrParagraph':
										var body1 = _v0.a.a.a;
										var _v3 = _v0.b;
										var body2 = _v3.a.a;
										var rest = _v3.b;
										return A2(
											$elm$core$List$cons,
											$dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote(
												A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '\n', body2, body1)),
											rest);
									case 'BlockQuote':
										var body1 = _v0.a.a;
										var _v4 = _v0.b;
										var body2 = _v4.a.a;
										var rest = _v4.b;
										return A2(
											$elm$core$List$cons,
											$dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote(
												A2($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll, body2, body1)),
											rest);
									default:
										break _v0$9;
								}
							case 'OpenBlockOrParagraph':
								switch (_v0.a.$) {
									case 'OpenBlockOrParagraph':
										var body1 = _v0.a.a.a;
										var _v5 = _v0.b;
										var body2 = _v5.a.a.a;
										var rest = _v5.b;
										return A2(
											$elm$core$List$cons,
											$dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph(
												$dillonkearns$elm_markdown$Markdown$RawBlock$UnparsedInlines(
													A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '\n', body2, body1))),
											rest);
									case 'SetextLine':
										if (_v0.a.a.$ === 'LevelOne') {
											var _v6 = _v0.a;
											var _v7 = _v6.a;
											var _v8 = _v0.b;
											var unparsedInlines = _v8.a.a;
											var rest = _v8.b;
											return A2(
												$elm$core$List$cons,
												A2($dillonkearns$elm_markdown$Markdown$RawBlock$Heading, 1, unparsedInlines),
												rest);
										} else {
											var _v9 = _v0.a;
											var _v10 = _v9.a;
											var _v11 = _v0.b;
											var unparsedInlines = _v11.a.a;
											var rest = _v11.b;
											return A2(
												$elm$core$List$cons,
												A2($dillonkearns$elm_markdown$Markdown$RawBlock$Heading, 2, unparsedInlines),
												rest);
										}
									case 'TableDelimiter':
										var _v12 = _v0.a.a;
										var text = _v12.a;
										var alignments = _v12.b;
										var _v13 = _v0.b;
										var rawHeaders = _v13.a.a.a;
										var rest = _v13.b;
										var _v14 = A2(
											$dillonkearns$elm_markdown$Markdown$TableParser$parseHeader,
											A2($dillonkearns$elm_markdown$Markdown$Table$TableDelimiterRow, text, alignments),
											rawHeaders);
										if (_v14.$ === 'Ok') {
											var headers = _v14.a.a;
											return A2(
												$elm$core$List$cons,
												$dillonkearns$elm_markdown$Markdown$RawBlock$Table(
													A2($dillonkearns$elm_markdown$Markdown$Table$Table, headers, _List_Nil)),
												rest);
										} else {
											return A2(
												$elm$core$List$cons,
												$dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph(
													$dillonkearns$elm_markdown$Markdown$RawBlock$UnparsedInlines(
														A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '\n', rawHeaders, text.raw))),
												rest);
										}
									default:
										break _v0$9;
								}
							case 'Table':
								if (_v0.a.$ === 'Table') {
									var updatedTable = _v0.a.a;
									var _v15 = _v0.b;
									var rest = _v15.b;
									return A2(
										$elm$core$List$cons,
										$dillonkearns$elm_markdown$Markdown$RawBlock$Table(updatedTable),
										rest);
								} else {
									break _v0$9;
								}
							default:
								break _v0$9;
						}
					} else {
						break _v0$9;
					}
				}
				return A2($elm$core$List$cons, newRawBlock, state.rawBlocks);
			}()
		};
	});
var $dillonkearns$elm_markdown$Markdown$Parser$problemToString = function (problem) {
	switch (problem.$) {
		case 'Expecting':
			var string = problem.a;
			return 'Expecting ' + string;
		case 'ExpectingInt':
			return 'Expecting int';
		case 'ExpectingHex':
			return 'Expecting hex';
		case 'ExpectingOctal':
			return 'Expecting octal';
		case 'ExpectingBinary':
			return 'Expecting binary';
		case 'ExpectingFloat':
			return 'Expecting float';
		case 'ExpectingNumber':
			return 'Expecting number';
		case 'ExpectingVariable':
			return 'Expecting variable';
		case 'ExpectingSymbol':
			var string = problem.a;
			return 'Expecting symbol ' + string;
		case 'ExpectingKeyword':
			var string = problem.a;
			return 'Expecting keyword ' + string;
		case 'ExpectingEnd':
			return 'Expecting keyword end';
		case 'UnexpectedChar':
			return 'Unexpected char';
		case 'Problem':
			var problemDescription = problem.a;
			return problemDescription;
		default:
			return 'Bad repeat';
	}
};
var $dillonkearns$elm_markdown$Markdown$Parser$deadEndToString = function (deadEnd) {
	return 'Problem at row ' + ($elm$core$String$fromInt(deadEnd.row) + ('\n' + $dillonkearns$elm_markdown$Markdown$Parser$problemToString(deadEnd.problem)));
};
var $dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString = function (deadEnds) {
	return A2(
		$elm$core$String$join,
		'\n',
		A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$deadEndToString, deadEnds));
};
var $dillonkearns$elm_markdown$HtmlParser$Cdata = function (a) {
	return {$: 'Cdata', a: a};
};
var $dillonkearns$elm_markdown$HtmlParser$Element = F3(
	function (a, b, c) {
		return {$: 'Element', a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$HtmlParser$Text = function (a) {
	return {$: 'Text', a: a};
};
var $dillonkearns$elm_markdown$HtmlParser$expectTagNameCharacter = $elm$parser$Parser$Expecting('at least 1 tag name character');
var $dillonkearns$elm_markdown$HtmlParser$tagNameCharacter = function (c) {
	switch (c.valueOf()) {
		case ' ':
			return false;
		case '\u000D':
			return false;
		case '\n':
			return false;
		case '\t':
			return false;
		case '/':
			return false;
		case '<':
			return false;
		case '>':
			return false;
		case '\"':
			return false;
		case '\'':
			return false;
		case '=':
			return false;
		default:
			return true;
	}
};
var $dillonkearns$elm_markdown$HtmlParser$tagName = A2(
	$elm$parser$Parser$Advanced$mapChompedString,
	F2(
		function (name, _v0) {
			return $elm$core$String$toLower(name);
		}),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2($elm$parser$Parser$Advanced$chompIf, $dillonkearns$elm_markdown$HtmlParser$tagNameCharacter, $dillonkearns$elm_markdown$HtmlParser$expectTagNameCharacter),
		$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$HtmlParser$tagNameCharacter)));
var $dillonkearns$elm_markdown$HtmlParser$attributeName = $dillonkearns$elm_markdown$HtmlParser$tagName;
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 'ExpectingSymbol', a: a};
};
var $dillonkearns$elm_markdown$HtmlParser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$token(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $dillonkearns$elm_markdown$HtmlParser$entities = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			'amp',
			_Utils_chr('&')),
			_Utils_Tuple2(
			'lt',
			_Utils_chr('<')),
			_Utils_Tuple2(
			'gt',
			_Utils_chr('>')),
			_Utils_Tuple2(
			'apos',
			_Utils_chr('\'')),
			_Utils_Tuple2(
			'quot',
			_Utils_chr('\"'))
		]));
var $elm$core$Char$fromCode = _Char_fromCode;
var $elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (maybe.$ === 'Just') {
			var v = maybe.a;
			return $elm$core$Result$Ok(v);
		} else {
			return $elm$core$Result$Err(err);
		}
	});
var $elm$core$Basics$pow = _Basics_pow;
var $rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return $elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char.valueOf()) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return $elm$core$Result$Err(
							$elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
			}
		}
	});
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $rtfeldman$elm_hex$Hex$fromString = function (str) {
	if ($elm$core$String$isEmpty(str)) {
		return $elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2($elm$core$String$startsWith, '-', str)) {
				var list = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					$elm$core$List$tail(
						$elm$core$String$toList(str)));
				return A2(
					$elm$core$Result$map,
					$elm$core$Basics$negate,
					A3(
						$rtfeldman$elm_hex$Hex$fromStringHelp,
						$elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					$rtfeldman$elm_hex$Hex$fromStringHelp,
					$elm$core$String$length(str) - 1,
					$elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					['\"' + (str + '\"'), 'is not a valid hexadecimal string because', err]));
		};
		return A2($elm$core$Result$mapError, formatError, result);
	}
};
var $dillonkearns$elm_markdown$HtmlParser$decodeEscape = function (s) {
	return A2($elm$core$String$startsWith, '#x', s) ? A2(
		$elm$core$Result$mapError,
		$elm$parser$Parser$Problem,
		A2(
			$elm$core$Result$map,
			$elm$core$Char$fromCode,
			$rtfeldman$elm_hex$Hex$fromString(
				A2($elm$core$String$dropLeft, 2, s)))) : (A2($elm$core$String$startsWith, '#', s) ? A2(
		$elm$core$Result$fromMaybe,
		$elm$parser$Parser$Problem('Invalid escaped character: ' + s),
		A2(
			$elm$core$Maybe$map,
			$elm$core$Char$fromCode,
			$elm$core$String$toInt(
				A2($elm$core$String$dropLeft, 1, s)))) : A2(
		$elm$core$Result$fromMaybe,
		$elm$parser$Parser$Problem('No entity named \"&' + (s + ';\" found.')),
		A2($elm$core$Dict$get, s, $dillonkearns$elm_markdown$HtmlParser$entities)));
};
var $dillonkearns$elm_markdown$HtmlParser$escapedChar = function (end_) {
	var process = function (entityStr) {
		var _v0 = $dillonkearns$elm_markdown$HtmlParser$decodeEscape(entityStr);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			return $elm$parser$Parser$Advanced$succeed(c);
		} else {
			var e = _v0.a;
			return $elm$parser$Parser$Advanced$problem(e);
		}
	};
	var isEntityChar = function (c) {
		return (!_Utils_eq(c, end_)) && (!_Utils_eq(
			c,
			_Utils_chr(';')));
	};
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$dillonkearns$elm_markdown$HtmlParser$symbol('&')),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$andThen,
				process,
				$elm$parser$Parser$Advanced$getChompedString(
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$chompIf,
							isEntityChar,
							$elm$parser$Parser$Expecting('an entity character')),
						$elm$parser$Parser$Advanced$chompWhile(isEntityChar)))),
			$dillonkearns$elm_markdown$HtmlParser$symbol(';')));
};
var $dillonkearns$elm_markdown$HtmlParser$textStringStep = F3(
	function (closingChar, predicate, accum) {
		return A2(
			$elm$parser$Parser$Advanced$andThen,
			function (soFar) {
				return $elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$Advanced$map,
							function (escaped) {
								return $elm$parser$Parser$Advanced$Loop(
									_Utils_ap(
										accum,
										_Utils_ap(
											soFar,
											$elm$core$String$fromChar(escaped))));
							},
							$dillonkearns$elm_markdown$HtmlParser$escapedChar(closingChar)),
							$elm$parser$Parser$Advanced$succeed(
							$elm$parser$Parser$Advanced$Done(
								_Utils_ap(accum, soFar)))
						]));
			},
			$elm$parser$Parser$Advanced$getChompedString(
				$elm$parser$Parser$Advanced$chompWhile(predicate)));
	});
var $dillonkearns$elm_markdown$HtmlParser$textString = function (closingChar) {
	var predicate = function (c) {
		return (!_Utils_eq(c, closingChar)) && (!_Utils_eq(
			c,
			_Utils_chr('&')));
	};
	return A2(
		$elm$parser$Parser$Advanced$loop,
		'',
		A2($dillonkearns$elm_markdown$HtmlParser$textStringStep, closingChar, predicate));
};
var $dillonkearns$elm_markdown$HtmlParser$attributeValue = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$dillonkearns$elm_markdown$HtmlParser$symbol('\"')),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$dillonkearns$elm_markdown$HtmlParser$textString(
					_Utils_chr('\"')),
				$dillonkearns$elm_markdown$HtmlParser$symbol('\"'))),
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$dillonkearns$elm_markdown$HtmlParser$symbol('\'')),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$dillonkearns$elm_markdown$HtmlParser$textString(
					_Utils_chr('\'')),
				$dillonkearns$elm_markdown$HtmlParser$symbol('\'')))
		]));
var $dillonkearns$elm_markdown$HtmlParser$keepOldest = F2(
	function (_new, mValue) {
		if (mValue.$ === 'Just') {
			var v = mValue.a;
			return $elm$core$Maybe$Just(v);
		} else {
			return $elm$core$Maybe$Just(_new);
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $dillonkearns$elm_markdown$HtmlParser$isWhitespace = function (c) {
	switch (c.valueOf()) {
		case ' ':
			return true;
		case '\u000D':
			return true;
		case '\n':
			return true;
		case '\t':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$HtmlParser$whiteSpace = $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$HtmlParser$isWhitespace);
var $dillonkearns$elm_markdown$HtmlParser$attributesStep = function (attrs) {
	var process = F2(
		function (name, value) {
			return $elm$parser$Parser$Advanced$Loop(
				A3(
					$elm$core$Dict$update,
					$elm$core$String$toLower(name),
					$dillonkearns$elm_markdown$HtmlParser$keepOldest(value),
					attrs));
		});
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(process),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2($elm$parser$Parser$Advanced$ignorer, $dillonkearns$elm_markdown$HtmlParser$attributeName, $dillonkearns$elm_markdown$HtmlParser$whiteSpace),
							$dillonkearns$elm_markdown$HtmlParser$symbol('=')),
						$dillonkearns$elm_markdown$HtmlParser$whiteSpace)),
				A2($elm$parser$Parser$Advanced$ignorer, $dillonkearns$elm_markdown$HtmlParser$attributeValue, $dillonkearns$elm_markdown$HtmlParser$whiteSpace)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(attrs))
			]));
};
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $dillonkearns$elm_markdown$HtmlParser$attributes = A2(
	$elm$parser$Parser$Advanced$map,
	A2(
		$elm$core$Dict$foldl,
		F3(
			function (key, value, accum) {
				return A2(
					$elm$core$List$cons,
					{name: key, value: value},
					accum);
			}),
		_List_Nil),
	A2($elm$parser$Parser$Advanced$loop, $elm$core$Dict$empty, $dillonkearns$elm_markdown$HtmlParser$attributesStep));
var $dillonkearns$elm_markdown$HtmlParser$cdata = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
		$dillonkearns$elm_markdown$HtmlParser$symbol('<![CDATA[')),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntilEndOr(']]>')),
		$dillonkearns$elm_markdown$HtmlParser$symbol(']]>')));
var $dillonkearns$elm_markdown$HtmlParser$childrenStep = F2(
	function (options, accum) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (f) {
				return f(accum);
			},
			$elm$parser$Parser$Advanced$oneOf(options));
	});
var $dillonkearns$elm_markdown$HtmlParser$fail = function (str) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(str));
};
var $dillonkearns$elm_markdown$HtmlParser$closingTag = function (startTagName) {
	var closingTagName = A2(
		$elm$parser$Parser$Advanced$andThen,
		function (endTagName) {
			return _Utils_eq(startTagName, endTagName) ? $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0) : $dillonkearns$elm_markdown$HtmlParser$fail('tag name mismatch: ' + (startTagName + (' and ' + endTagName)));
		},
		$dillonkearns$elm_markdown$HtmlParser$tagName);
	return A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$dillonkearns$elm_markdown$HtmlParser$symbol('</'),
					$dillonkearns$elm_markdown$HtmlParser$whiteSpace),
				closingTagName),
			$dillonkearns$elm_markdown$HtmlParser$whiteSpace),
		$dillonkearns$elm_markdown$HtmlParser$symbol('>'));
};
var $dillonkearns$elm_markdown$HtmlParser$Comment = function (a) {
	return {$: 'Comment', a: a};
};
var $dillonkearns$elm_markdown$HtmlParser$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $dillonkearns$elm_markdown$HtmlParser$comment = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$HtmlParser$Comment),
		$elm$parser$Parser$Advanced$token(
			$dillonkearns$elm_markdown$HtmlParser$toToken('<!--'))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntilEndOr('-->')),
		$elm$parser$Parser$Advanced$token(
			$dillonkearns$elm_markdown$HtmlParser$toToken('-->'))));
var $dillonkearns$elm_markdown$HtmlParser$Declaration = F2(
	function (a, b) {
		return {$: 'Declaration', a: a, b: b};
	});
var $dillonkearns$elm_markdown$HtmlParser$expectUppercaseCharacter = $elm$parser$Parser$Expecting('at least 1 uppercase character');
var $dillonkearns$elm_markdown$HtmlParser$allUppercase = $elm$parser$Parser$Advanced$getChompedString(
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2($elm$parser$Parser$Advanced$chompIf, $elm$core$Char$isUpper, $dillonkearns$elm_markdown$HtmlParser$expectUppercaseCharacter),
		$elm$parser$Parser$Advanced$chompWhile($elm$core$Char$isUpper)));
var $dillonkearns$elm_markdown$HtmlParser$oneOrMoreWhiteSpace = A2(
	$elm$parser$Parser$Advanced$ignorer,
	A2(
		$elm$parser$Parser$Advanced$chompIf,
		$dillonkearns$elm_markdown$HtmlParser$isWhitespace,
		$elm$parser$Parser$Expecting('at least one whitespace')),
	$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$HtmlParser$isWhitespace));
var $dillonkearns$elm_markdown$HtmlParser$docType = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$HtmlParser$Declaration),
			$dillonkearns$elm_markdown$HtmlParser$symbol('<!')),
		A2($elm$parser$Parser$Advanced$ignorer, $dillonkearns$elm_markdown$HtmlParser$allUppercase, $dillonkearns$elm_markdown$HtmlParser$oneOrMoreWhiteSpace)),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntilEndOr('>')),
		$dillonkearns$elm_markdown$HtmlParser$symbol('>')));
var $dillonkearns$elm_markdown$HtmlParser$ProcessingInstruction = function (a) {
	return {$: 'ProcessingInstruction', a: a};
};
var $dillonkearns$elm_markdown$HtmlParser$processingInstruction = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$HtmlParser$ProcessingInstruction),
		$dillonkearns$elm_markdown$HtmlParser$symbol('<?')),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntilEndOr('?>')),
		$dillonkearns$elm_markdown$HtmlParser$symbol('?>')));
var $dillonkearns$elm_markdown$HtmlParser$isNotTextNodeIgnoreChar = function (c) {
	switch (c.valueOf()) {
		case '<':
			return false;
		case '&':
			return false;
		default:
			return true;
	}
};
var $dillonkearns$elm_markdown$HtmlParser$textNodeStringStepOptions = _List_fromArray(
	[
		A2(
		$elm$parser$Parser$Advanced$map,
		function (_v0) {
			return $elm$parser$Parser$Advanced$Loop(_Utils_Tuple0);
		},
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$chompIf,
				$dillonkearns$elm_markdown$HtmlParser$isNotTextNodeIgnoreChar,
				$elm$parser$Parser$Expecting('is not & or <')),
			$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$HtmlParser$isNotTextNodeIgnoreChar))),
		A2(
		$elm$parser$Parser$Advanced$map,
		function (_v1) {
			return $elm$parser$Parser$Advanced$Loop(_Utils_Tuple0);
		},
		$dillonkearns$elm_markdown$HtmlParser$escapedChar(
			_Utils_chr('<'))),
		$elm$parser$Parser$Advanced$succeed(
		$elm$parser$Parser$Advanced$Done(_Utils_Tuple0))
	]);
var $dillonkearns$elm_markdown$HtmlParser$textNodeStringStep = function (_v0) {
	return $elm$parser$Parser$Advanced$oneOf($dillonkearns$elm_markdown$HtmlParser$textNodeStringStepOptions);
};
var $dillonkearns$elm_markdown$HtmlParser$textNodeString = $elm$parser$Parser$Advanced$getChompedString(
	A2($elm$parser$Parser$Advanced$loop, _Utils_Tuple0, $dillonkearns$elm_markdown$HtmlParser$textNodeStringStep));
var $dillonkearns$elm_markdown$HtmlParser$children = function (startTagName) {
	return A2(
		$elm$parser$Parser$Advanced$loop,
		_List_Nil,
		$dillonkearns$elm_markdown$HtmlParser$childrenStep(
			$dillonkearns$elm_markdown$HtmlParser$childrenStepOptions(startTagName)));
};
var $dillonkearns$elm_markdown$HtmlParser$childrenStepOptions = function (startTagName) {
	return _List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$map,
			F2(
				function (_v1, accum) {
					return $elm$parser$Parser$Advanced$Done(
						$elm$core$List$reverse(accum));
				}),
			$dillonkearns$elm_markdown$HtmlParser$closingTag(startTagName)),
			A2(
			$elm$parser$Parser$Advanced$andThen,
			function (text) {
				return $elm$core$String$isEmpty(text) ? A2(
					$elm$parser$Parser$Advanced$map,
					F2(
						function (_v2, accum) {
							return $elm$parser$Parser$Advanced$Done(
								$elm$core$List$reverse(accum));
						}),
					$dillonkearns$elm_markdown$HtmlParser$closingTag(startTagName)) : $elm$parser$Parser$Advanced$succeed(
					function (accum) {
						return $elm$parser$Parser$Advanced$Loop(
							A2(
								$elm$core$List$cons,
								$dillonkearns$elm_markdown$HtmlParser$Text(text),
								accum));
					});
			},
			$dillonkearns$elm_markdown$HtmlParser$textNodeString),
			A2(
			$elm$parser$Parser$Advanced$map,
			F2(
				function (_new, accum) {
					return $elm$parser$Parser$Advanced$Loop(
						A2($elm$core$List$cons, _new, accum));
				}),
			$dillonkearns$elm_markdown$HtmlParser$cyclic$html())
		]);
};
var $dillonkearns$elm_markdown$HtmlParser$elementContinuation = function (startTagName) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed(
					$dillonkearns$elm_markdown$HtmlParser$Element(startTagName)),
				$dillonkearns$elm_markdown$HtmlParser$whiteSpace),
			A2($elm$parser$Parser$Advanced$ignorer, $dillonkearns$elm_markdown$HtmlParser$attributes, $dillonkearns$elm_markdown$HtmlParser$whiteSpace)),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return _List_Nil;
					},
					$dillonkearns$elm_markdown$HtmlParser$symbol('/>')),
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
						$dillonkearns$elm_markdown$HtmlParser$symbol('>')),
					$dillonkearns$elm_markdown$HtmlParser$children(startTagName))
				])));
};
function $dillonkearns$elm_markdown$HtmlParser$cyclic$html() {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2($elm$parser$Parser$Advanced$map, $dillonkearns$elm_markdown$HtmlParser$Cdata, $dillonkearns$elm_markdown$HtmlParser$cdata),
				$dillonkearns$elm_markdown$HtmlParser$processingInstruction,
				$dillonkearns$elm_markdown$HtmlParser$comment,
				$dillonkearns$elm_markdown$HtmlParser$docType,
				$dillonkearns$elm_markdown$HtmlParser$cyclic$element()
			]));
}
function $dillonkearns$elm_markdown$HtmlParser$cyclic$element() {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$dillonkearns$elm_markdown$HtmlParser$symbol('<')),
		A2($elm$parser$Parser$Advanced$andThen, $dillonkearns$elm_markdown$HtmlParser$elementContinuation, $dillonkearns$elm_markdown$HtmlParser$tagName));
}
try {
	var $dillonkearns$elm_markdown$HtmlParser$html = $dillonkearns$elm_markdown$HtmlParser$cyclic$html();
	$dillonkearns$elm_markdown$HtmlParser$cyclic$html = function () {
		return $dillonkearns$elm_markdown$HtmlParser$html;
	};
	var $dillonkearns$elm_markdown$HtmlParser$element = $dillonkearns$elm_markdown$HtmlParser$cyclic$element();
	$dillonkearns$elm_markdown$HtmlParser$cyclic$element = function () {
		return $dillonkearns$elm_markdown$HtmlParser$element;
	};
} catch ($) {
	throw 'Some top-level definitions from `HtmlParser` are causing infinite recursion:\n\n  ?????????????????????\n  ???    children\n  ???     ???\n  ???    childrenStepOptions\n  ???     ???\n  ???    html\n  ???     ???\n  ???    element\n  ???     ???\n  ???    elementContinuation\n  ?????????????????????\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $dillonkearns$elm_markdown$Parser$Token$tab = A2(
	$elm$parser$Parser$Advanced$Token,
	'\t',
	$elm$parser$Parser$Expecting('a tab'));
var $dillonkearns$elm_markdown$Markdown$Parser$exactlyFourSpaces = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$tab),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$backtrackable(
				$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$space)),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$Advanced$symbol(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'   ',
							$elm$parser$Parser$ExpectingSymbol('Indentation'))),
						$elm$parser$Parser$Advanced$symbol(
						A2(
							$elm$parser$Parser$Advanced$Token,
							' \t',
							$elm$parser$Parser$ExpectingSymbol('Indentation'))),
						$elm$parser$Parser$Advanced$symbol(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'  \t',
							$elm$parser$Parser$ExpectingSymbol('Indentation')))
					])))
		]));
var $dillonkearns$elm_markdown$Markdown$Parser$indentedCodeBlock = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$IndentedCodeBlock),
		$dillonkearns$elm_markdown$Markdown$Parser$exactlyFourSpaces),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntilEndOr('\n')),
		$dillonkearns$elm_markdown$Helpers$endOfLineOrFile));
var $dillonkearns$elm_markdown$Markdown$Parser$innerParagraphParser = A2(
	$elm$parser$Parser$Advanced$mapChompedString,
	F2(
		function (rawLine, _v0) {
			return $dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph(
				$dillonkearns$elm_markdown$Markdown$RawBlock$UnparsedInlines(rawLine));
		}),
	$elm$parser$Parser$Advanced$chompUntilEndOr('\n'));
var $dillonkearns$elm_markdown$Markdown$Parser$openBlockOrParagraphParser = A2($elm$parser$Parser$Advanced$ignorer, $dillonkearns$elm_markdown$Markdown$Parser$innerParagraphParser, $dillonkearns$elm_markdown$Helpers$endOfLineOrFile);
var $dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock = F2(
	function (a, b) {
		return {$: 'OrderedListBlock', a: a, b: b};
	});
var $dillonkearns$elm_markdown$Parser$Token$closingParen = A2(
	$elm$parser$Parser$Advanced$Token,
	')',
	$elm$parser$Parser$Expecting('a `)`'));
var $dillonkearns$elm_markdown$Parser$Token$dot = A2(
	$elm$parser$Parser$Advanced$Token,
	'.',
	$elm$parser$Parser$Expecting('a `.`'));
var $dillonkearns$elm_markdown$Markdown$OrderedList$endOrNewline = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$newline),
			$elm$parser$Parser$Advanced$end(
			$elm$parser$Parser$Expecting('end of input'))
		]));
var $dillonkearns$elm_markdown$Parser$Extra$oneOrMore = function (condition) {
	return A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$chompIf,
			condition,
			$elm$parser$Parser$Problem('Expected one or more character')),
		$elm$parser$Parser$Advanced$chompWhile(condition));
};
var $dillonkearns$elm_markdown$Markdown$OrderedList$itemBody = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$dillonkearns$elm_markdown$Parser$Extra$oneOrMore($dillonkearns$elm_markdown$Helpers$isSpaceOrTab)),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$getChompedString(
					$elm$parser$Parser$Advanced$chompUntilEndOr('\n')),
				$dillonkearns$elm_markdown$Markdown$OrderedList$endOrNewline)),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(''),
			$dillonkearns$elm_markdown$Markdown$OrderedList$endOrNewline)
		]));
var $dillonkearns$elm_markdown$Parser$Extra$positiveInteger = A2(
	$elm$parser$Parser$Advanced$mapChompedString,
	F2(
		function (str, _v0) {
			return A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(str));
		}),
	$dillonkearns$elm_markdown$Parser$Extra$oneOrMore($elm$core$Char$isDigit));
var $dillonkearns$elm_markdown$Markdown$OrderedList$singleItemParser = function (listMarker) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$Advanced$backtrackable(
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$dillonkearns$elm_markdown$Parser$Extra$positiveInteger,
					$elm$parser$Parser$Advanced$symbol(listMarker)))),
		$dillonkearns$elm_markdown$Markdown$OrderedList$itemBody);
};
var $dillonkearns$elm_markdown$Markdown$OrderedList$statementsHelp = F2(
	function (itemParser, revStmts) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$map,
					function (stmt) {
						return $elm$parser$Parser$Advanced$Loop(
							A2($elm$core$List$cons, stmt, revStmts));
					},
					itemParser),
					$elm$parser$Parser$Advanced$succeed(
					$elm$parser$Parser$Advanced$Done(
						$elm$core$List$reverse(revStmts)))
				]));
	});
var $dillonkearns$elm_markdown$Markdown$OrderedList$parseSubsequentItems = F3(
	function (startingIndex, listMarker, firstItem) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (items) {
				return _Utils_Tuple2(
					startingIndex,
					A2($elm$core$List$cons, firstItem, items));
			},
			A2(
				$elm$parser$Parser$Advanced$loop,
				_List_Nil,
				$dillonkearns$elm_markdown$Markdown$OrderedList$statementsHelp(
					$dillonkearns$elm_markdown$Markdown$OrderedList$singleItemParser(listMarker))));
	});
var $dillonkearns$elm_markdown$Markdown$OrderedList$positiveIntegerMaxOf9Digits = A2(
	$elm$parser$Parser$Advanced$andThen,
	function (parsed) {
		return (parsed <= 999999999) ? $elm$parser$Parser$Advanced$succeed(parsed) : $elm$parser$Parser$Advanced$problem(
			$elm$parser$Parser$Problem('Starting numbers must be nine digits or less.'));
	},
	$dillonkearns$elm_markdown$Parser$Extra$positiveInteger);
var $dillonkearns$elm_markdown$Markdown$OrderedList$validateStartsWith1 = function (parsed) {
	if (parsed === 1) {
		return $elm$parser$Parser$Advanced$succeed(parsed);
	} else {
		return $elm$parser$Parser$Advanced$problem(
			$elm$parser$Parser$Problem('Lists inside a paragraph or after a paragraph without a blank line must start with 1'));
	}
};
var $dillonkearns$elm_markdown$Markdown$OrderedList$parser = function (previousWasBody) {
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		$elm$core$Basics$identity,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$OrderedList$parseSubsequentItems),
					$elm$parser$Parser$Advanced$backtrackable(
						previousWasBody ? A2($elm$parser$Parser$Advanced$andThen, $dillonkearns$elm_markdown$Markdown$OrderedList$validateStartsWith1, $dillonkearns$elm_markdown$Markdown$OrderedList$positiveIntegerMaxOf9Digits) : $dillonkearns$elm_markdown$Markdown$OrderedList$positiveIntegerMaxOf9Digits)),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$backtrackable(
						$elm$parser$Parser$Advanced$oneOf(
							_List_fromArray(
								[
									A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Parser$Token$dot),
									$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$dot)),
									A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Parser$Token$closingParen),
									$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$closingParen))
								]))),
					$dillonkearns$elm_markdown$Parser$Extra$oneOrMore($dillonkearns$elm_markdown$Helpers$isSpaceOrTab))),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$getChompedString(
					$elm$parser$Parser$Advanced$chompUntilEndOr('\n')),
				$dillonkearns$elm_markdown$Markdown$OrderedList$endOrNewline)));
};
var $dillonkearns$elm_markdown$Markdown$Parser$orderedListBlock = function (previousWasBody) {
	return A2(
		$elm$parser$Parser$Advanced$map,
		function (_v0) {
			var startingIndex = _v0.a;
			var unparsedLines = _v0.b;
			return A2(
				$dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock,
				startingIndex,
				A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$RawBlock$UnparsedInlines, unparsedLines));
		},
		$dillonkearns$elm_markdown$Markdown$OrderedList$parser(previousWasBody));
};
var $dillonkearns$elm_markdown$Markdown$Inline$CodeInline = function (a) {
	return {$: 'CodeInline', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Inline$Emphasis = F2(
	function (a, b) {
		return {$: 'Emphasis', a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Inline$HardLineBreak = {$: 'HardLineBreak'};
var $dillonkearns$elm_markdown$Markdown$Inline$HtmlInline = function (a) {
	return {$: 'HtmlInline', a: a};
};
var $dillonkearns$elm_markdown$Markdown$Inline$Image = F3(
	function (a, b, c) {
		return {$: 'Image', a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Inline$Link = F3(
	function (a, b, c) {
		return {$: 'Link', a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Inline$Text = function (a) {
	return {$: 'Text', a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$matchToInline = function (_v0) {
	var match = _v0.a;
	var _v1 = match.type_;
	switch (_v1.$) {
		case 'NormalType':
			return $dillonkearns$elm_markdown$Markdown$Inline$Text(match.text);
		case 'HardLineBreakType':
			return $dillonkearns$elm_markdown$Markdown$Inline$HardLineBreak;
		case 'CodeType':
			return $dillonkearns$elm_markdown$Markdown$Inline$CodeInline(match.text);
		case 'AutolinkType':
			var _v2 = _v1.a;
			var text = _v2.a;
			var url = _v2.b;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Inline$Link,
				url,
				$elm$core$Maybe$Nothing,
				_List_fromArray(
					[
						$dillonkearns$elm_markdown$Markdown$Inline$Text(text)
					]));
		case 'LinkType':
			var _v3 = _v1.a;
			var url = _v3.a;
			var maybeTitle = _v3.b;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Inline$Link,
				url,
				maybeTitle,
				$dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(match.matches));
		case 'ImageType':
			var _v4 = _v1.a;
			var url = _v4.a;
			var maybeTitle = _v4.b;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Inline$Image,
				url,
				maybeTitle,
				$dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(match.matches));
		case 'HtmlType':
			var model = _v1.a;
			return $dillonkearns$elm_markdown$Markdown$Inline$HtmlInline(model);
		default:
			var length = _v1.a;
			return A2(
				$dillonkearns$elm_markdown$Markdown$Inline$Emphasis,
				length,
				$dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(match.matches));
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines = function (matches) {
	return A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$InlineParser$matchToInline, matches);
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$Match = function (a) {
	return {$: 'Match', a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$prepareChildMatch = F2(
	function (parentMatch, childMatch) {
		return $dillonkearns$elm_markdown$Markdown$InlineParser$Match(
			{end: childMatch.end - parentMatch.textStart, matches: childMatch.matches, start: childMatch.start - parentMatch.textStart, text: childMatch.text, textEnd: childMatch.textEnd - parentMatch.textStart, textStart: childMatch.textStart - parentMatch.textStart, type_: childMatch.type_});
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$addChild = F2(
	function (parentMatch, childMatch) {
		return $dillonkearns$elm_markdown$Markdown$InlineParser$Match(
			{
				end: parentMatch.end,
				matches: A2(
					$elm$core$List$cons,
					A2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareChildMatch, parentMatch, childMatch),
					parentMatch.matches),
				start: parentMatch.start,
				text: parentMatch.text,
				textEnd: parentMatch.textEnd,
				textStart: parentMatch.textStart,
				type_: parentMatch.type_
			});
	});
var $elm$core$List$sortBy = _List_sortBy;
var $dillonkearns$elm_markdown$Markdown$InlineParser$organizeChildren = function (_v4) {
	var match = _v4.a;
	return $dillonkearns$elm_markdown$Markdown$InlineParser$Match(
		{
			end: match.end,
			matches: $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatches(match.matches),
			start: match.start,
			text: match.text,
			textEnd: match.textEnd,
			textStart: match.textStart,
			type_: match.type_
		});
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatches = function (matches) {
	var _v2 = A2(
		$elm$core$List$sortBy,
		function (_v3) {
			var match = _v3.a;
			return match.start;
		},
		matches);
	if (!_v2.b) {
		return _List_Nil;
	} else {
		var first = _v2.a;
		var rest = _v2.b;
		return A3($dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatchesHelp, rest, first, _List_Nil);
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatchesHelp = F3(
	function (remaining, _v0, matchesTail) {
		organizeMatchesHelp:
		while (true) {
			var prevMatch = _v0.a;
			if (!remaining.b) {
				return A2(
					$elm$core$List$cons,
					$dillonkearns$elm_markdown$Markdown$InlineParser$organizeChildren(
						$dillonkearns$elm_markdown$Markdown$InlineParser$Match(prevMatch)),
					matchesTail);
			} else {
				var match = remaining.a.a;
				var rest = remaining.b;
				if (_Utils_cmp(prevMatch.end, match.start) < 1) {
					var $temp$remaining = rest,
						$temp$_v0 = $dillonkearns$elm_markdown$Markdown$InlineParser$Match(match),
						$temp$matchesTail = A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$InlineParser$organizeChildren(
							$dillonkearns$elm_markdown$Markdown$InlineParser$Match(prevMatch)),
						matchesTail);
					remaining = $temp$remaining;
					_v0 = $temp$_v0;
					matchesTail = $temp$matchesTail;
					continue organizeMatchesHelp;
				} else {
					if ((_Utils_cmp(prevMatch.start, match.start) < 0) && (_Utils_cmp(prevMatch.end, match.end) > 0)) {
						var $temp$remaining = rest,
							$temp$_v0 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$addChild, prevMatch, match),
							$temp$matchesTail = matchesTail;
						remaining = $temp$remaining;
						_v0 = $temp$_v0;
						matchesTail = $temp$matchesTail;
						continue organizeMatchesHelp;
					} else {
						var $temp$remaining = rest,
							$temp$_v0 = $dillonkearns$elm_markdown$Markdown$InlineParser$Match(prevMatch),
							$temp$matchesTail = matchesTail;
						remaining = $temp$remaining;
						_v0 = $temp$_v0;
						matchesTail = $temp$matchesTail;
						continue organizeMatchesHelp;
					}
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$NormalType = {$: 'NormalType'};
var $elm$core$String$contains = _String_contains;
var $dillonkearns$elm_markdown$Markdown$Helpers$containsAmpersand = function (string) {
	return A2($elm$core$String$contains, '&', string);
};
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {index: index, match: match, number: number, submatches: submatches};
	});
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: false, multiline: false},
		string);
};
var $elm$regex$Regex$never = _Regex_never;
var $dillonkearns$elm_markdown$Markdown$Entity$decimalRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('&#([0-9]{1,8});'));
var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var $dillonkearns$elm_markdown$Markdown$Entity$isBadEndUnicode = function (_int) {
	var remain_ = A2($elm$core$Basics$modBy, 16, _int);
	var remain = A2($elm$core$Basics$modBy, 131070, _int);
	return (_int >= 131070) && ((((0 <= remain) && (remain <= 15)) || ((65536 <= remain) && (remain <= 65551))) && ((remain_ === 14) || (remain_ === 15)));
};
var $dillonkearns$elm_markdown$Markdown$Entity$isValidUnicode = function (_int) {
	return (_int === 9) || ((_int === 10) || ((_int === 13) || ((_int === 133) || (((32 <= _int) && (_int <= 126)) || (((160 <= _int) && (_int <= 55295)) || (((57344 <= _int) && (_int <= 64975)) || (((65008 <= _int) && (_int <= 65533)) || ((65536 <= _int) && (_int <= 1114109)))))))));
};
var $dillonkearns$elm_markdown$Markdown$Entity$validUnicode = function (_int) {
	return ($dillonkearns$elm_markdown$Markdown$Entity$isValidUnicode(_int) && (!$dillonkearns$elm_markdown$Markdown$Entity$isBadEndUnicode(_int))) ? $elm$core$String$fromChar(
		$elm$core$Char$fromCode(_int)) : $elm$core$String$fromChar(
		$elm$core$Char$fromCode(65533));
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceDecimal = function (match) {
	var _v0 = match.submatches;
	if (_v0.b && (_v0.a.$ === 'Just')) {
		var first = _v0.a.a;
		var _v1 = $elm$core$String$toInt(first);
		if (_v1.$ === 'Just') {
			var v = _v1.a;
			return $dillonkearns$elm_markdown$Markdown$Entity$validUnicode(v);
		} else {
			return match.match;
		}
	} else {
		return match.match;
	}
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceDecimals = A2($elm$regex$Regex$replace, $dillonkearns$elm_markdown$Markdown$Entity$decimalRegex, $dillonkearns$elm_markdown$Markdown$Entity$replaceDecimal);
var $dillonkearns$elm_markdown$Markdown$Entity$entitiesRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('&([0-9a-zA-Z]+);'));
var $dillonkearns$elm_markdown$Markdown$Entity$entities = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('quot', 34),
			_Utils_Tuple2('amp', 38),
			_Utils_Tuple2('apos', 39),
			_Utils_Tuple2('lt', 60),
			_Utils_Tuple2('gt', 62),
			_Utils_Tuple2('nbsp', 160),
			_Utils_Tuple2('iexcl', 161),
			_Utils_Tuple2('cent', 162),
			_Utils_Tuple2('pound', 163),
			_Utils_Tuple2('curren', 164),
			_Utils_Tuple2('yen', 165),
			_Utils_Tuple2('brvbar', 166),
			_Utils_Tuple2('sect', 167),
			_Utils_Tuple2('uml', 168),
			_Utils_Tuple2('copy', 169),
			_Utils_Tuple2('ordf', 170),
			_Utils_Tuple2('laquo', 171),
			_Utils_Tuple2('not', 172),
			_Utils_Tuple2('shy', 173),
			_Utils_Tuple2('reg', 174),
			_Utils_Tuple2('macr', 175),
			_Utils_Tuple2('deg', 176),
			_Utils_Tuple2('plusmn', 177),
			_Utils_Tuple2('sup2', 178),
			_Utils_Tuple2('sup3', 179),
			_Utils_Tuple2('acute', 180),
			_Utils_Tuple2('micro', 181),
			_Utils_Tuple2('para', 182),
			_Utils_Tuple2('middot', 183),
			_Utils_Tuple2('cedil', 184),
			_Utils_Tuple2('sup1', 185),
			_Utils_Tuple2('ordm', 186),
			_Utils_Tuple2('raquo', 187),
			_Utils_Tuple2('frac14', 188),
			_Utils_Tuple2('frac12', 189),
			_Utils_Tuple2('frac34', 190),
			_Utils_Tuple2('iquest', 191),
			_Utils_Tuple2('Agrave', 192),
			_Utils_Tuple2('Aacute', 193),
			_Utils_Tuple2('Acirc', 194),
			_Utils_Tuple2('Atilde', 195),
			_Utils_Tuple2('Auml', 196),
			_Utils_Tuple2('Aring', 197),
			_Utils_Tuple2('AElig', 198),
			_Utils_Tuple2('Ccedil', 199),
			_Utils_Tuple2('Egrave', 200),
			_Utils_Tuple2('Eacute', 201),
			_Utils_Tuple2('Ecirc', 202),
			_Utils_Tuple2('Euml', 203),
			_Utils_Tuple2('Igrave', 204),
			_Utils_Tuple2('Iacute', 205),
			_Utils_Tuple2('Icirc', 206),
			_Utils_Tuple2('Iuml', 207),
			_Utils_Tuple2('ETH', 208),
			_Utils_Tuple2('Ntilde', 209),
			_Utils_Tuple2('Ograve', 210),
			_Utils_Tuple2('Oacute', 211),
			_Utils_Tuple2('Ocirc', 212),
			_Utils_Tuple2('Otilde', 213),
			_Utils_Tuple2('Ouml', 214),
			_Utils_Tuple2('times', 215),
			_Utils_Tuple2('Oslash', 216),
			_Utils_Tuple2('Ugrave', 217),
			_Utils_Tuple2('Uacute', 218),
			_Utils_Tuple2('Ucirc', 219),
			_Utils_Tuple2('Uuml', 220),
			_Utils_Tuple2('Yacute', 221),
			_Utils_Tuple2('THORN', 222),
			_Utils_Tuple2('szlig', 223),
			_Utils_Tuple2('agrave', 224),
			_Utils_Tuple2('aacute', 225),
			_Utils_Tuple2('acirc', 226),
			_Utils_Tuple2('atilde', 227),
			_Utils_Tuple2('auml', 228),
			_Utils_Tuple2('aring', 229),
			_Utils_Tuple2('aelig', 230),
			_Utils_Tuple2('ccedil', 231),
			_Utils_Tuple2('egrave', 232),
			_Utils_Tuple2('eacute', 233),
			_Utils_Tuple2('ecirc', 234),
			_Utils_Tuple2('euml', 235),
			_Utils_Tuple2('igrave', 236),
			_Utils_Tuple2('iacute', 237),
			_Utils_Tuple2('icirc', 238),
			_Utils_Tuple2('iuml', 239),
			_Utils_Tuple2('eth', 240),
			_Utils_Tuple2('ntilde', 241),
			_Utils_Tuple2('ograve', 242),
			_Utils_Tuple2('oacute', 243),
			_Utils_Tuple2('ocirc', 244),
			_Utils_Tuple2('otilde', 245),
			_Utils_Tuple2('ouml', 246),
			_Utils_Tuple2('divide', 247),
			_Utils_Tuple2('oslash', 248),
			_Utils_Tuple2('ugrave', 249),
			_Utils_Tuple2('uacute', 250),
			_Utils_Tuple2('ucirc', 251),
			_Utils_Tuple2('uuml', 252),
			_Utils_Tuple2('yacute', 253),
			_Utils_Tuple2('thorn', 254),
			_Utils_Tuple2('yuml', 255),
			_Utils_Tuple2('OElig', 338),
			_Utils_Tuple2('oelig', 339),
			_Utils_Tuple2('Scaron', 352),
			_Utils_Tuple2('scaron', 353),
			_Utils_Tuple2('Yuml', 376),
			_Utils_Tuple2('fnof', 402),
			_Utils_Tuple2('circ', 710),
			_Utils_Tuple2('tilde', 732),
			_Utils_Tuple2('Alpha', 913),
			_Utils_Tuple2('Beta', 914),
			_Utils_Tuple2('Gamma', 915),
			_Utils_Tuple2('Delta', 916),
			_Utils_Tuple2('Epsilon', 917),
			_Utils_Tuple2('Zeta', 918),
			_Utils_Tuple2('Eta', 919),
			_Utils_Tuple2('Theta', 920),
			_Utils_Tuple2('Iota', 921),
			_Utils_Tuple2('Kappa', 922),
			_Utils_Tuple2('Lambda', 923),
			_Utils_Tuple2('Mu', 924),
			_Utils_Tuple2('Nu', 925),
			_Utils_Tuple2('Xi', 926),
			_Utils_Tuple2('Omicron', 927),
			_Utils_Tuple2('Pi', 928),
			_Utils_Tuple2('Rho', 929),
			_Utils_Tuple2('Sigma', 931),
			_Utils_Tuple2('Tau', 932),
			_Utils_Tuple2('Upsilon', 933),
			_Utils_Tuple2('Phi', 934),
			_Utils_Tuple2('Chi', 935),
			_Utils_Tuple2('Psi', 936),
			_Utils_Tuple2('Omega', 937),
			_Utils_Tuple2('alpha', 945),
			_Utils_Tuple2('beta', 946),
			_Utils_Tuple2('gamma', 947),
			_Utils_Tuple2('delta', 948),
			_Utils_Tuple2('epsilon', 949),
			_Utils_Tuple2('zeta', 950),
			_Utils_Tuple2('eta', 951),
			_Utils_Tuple2('theta', 952),
			_Utils_Tuple2('iota', 953),
			_Utils_Tuple2('kappa', 954),
			_Utils_Tuple2('lambda', 955),
			_Utils_Tuple2('mu', 956),
			_Utils_Tuple2('nu', 957),
			_Utils_Tuple2('xi', 958),
			_Utils_Tuple2('omicron', 959),
			_Utils_Tuple2('pi', 960),
			_Utils_Tuple2('rho', 961),
			_Utils_Tuple2('sigmaf', 962),
			_Utils_Tuple2('sigma', 963),
			_Utils_Tuple2('tau', 964),
			_Utils_Tuple2('upsilon', 965),
			_Utils_Tuple2('phi', 966),
			_Utils_Tuple2('chi', 967),
			_Utils_Tuple2('psi', 968),
			_Utils_Tuple2('omega', 969),
			_Utils_Tuple2('thetasym', 977),
			_Utils_Tuple2('upsih', 978),
			_Utils_Tuple2('piv', 982),
			_Utils_Tuple2('ensp', 8194),
			_Utils_Tuple2('emsp', 8195),
			_Utils_Tuple2('thinsp', 8201),
			_Utils_Tuple2('zwnj', 8204),
			_Utils_Tuple2('zwj', 8205),
			_Utils_Tuple2('lrm', 8206),
			_Utils_Tuple2('rlm', 8207),
			_Utils_Tuple2('ndash', 8211),
			_Utils_Tuple2('mdash', 8212),
			_Utils_Tuple2('lsquo', 8216),
			_Utils_Tuple2('rsquo', 8217),
			_Utils_Tuple2('sbquo', 8218),
			_Utils_Tuple2('ldquo', 8220),
			_Utils_Tuple2('rdquo', 8221),
			_Utils_Tuple2('bdquo', 8222),
			_Utils_Tuple2('dagger', 8224),
			_Utils_Tuple2('Dagger', 8225),
			_Utils_Tuple2('bull', 8226),
			_Utils_Tuple2('hellip', 8230),
			_Utils_Tuple2('permil', 8240),
			_Utils_Tuple2('prime', 8242),
			_Utils_Tuple2('Prime', 8243),
			_Utils_Tuple2('lsaquo', 8249),
			_Utils_Tuple2('rsaquo', 8250),
			_Utils_Tuple2('oline', 8254),
			_Utils_Tuple2('frasl', 8260),
			_Utils_Tuple2('euro', 8364),
			_Utils_Tuple2('image', 8465),
			_Utils_Tuple2('weierp', 8472),
			_Utils_Tuple2('real', 8476),
			_Utils_Tuple2('trade', 8482),
			_Utils_Tuple2('alefsym', 8501),
			_Utils_Tuple2('larr', 8592),
			_Utils_Tuple2('uarr', 8593),
			_Utils_Tuple2('rarr', 8594),
			_Utils_Tuple2('darr', 8595),
			_Utils_Tuple2('harr', 8596),
			_Utils_Tuple2('crarr', 8629),
			_Utils_Tuple2('lArr', 8656),
			_Utils_Tuple2('uArr', 8657),
			_Utils_Tuple2('rArr', 8658),
			_Utils_Tuple2('dArr', 8659),
			_Utils_Tuple2('hArr', 8660),
			_Utils_Tuple2('forall', 8704),
			_Utils_Tuple2('part', 8706),
			_Utils_Tuple2('exist', 8707),
			_Utils_Tuple2('empty', 8709),
			_Utils_Tuple2('nabla', 8711),
			_Utils_Tuple2('isin', 8712),
			_Utils_Tuple2('notin', 8713),
			_Utils_Tuple2('ni', 8715),
			_Utils_Tuple2('prod', 8719),
			_Utils_Tuple2('sum', 8721),
			_Utils_Tuple2('minus', 8722),
			_Utils_Tuple2('lowast', 8727),
			_Utils_Tuple2('radic', 8730),
			_Utils_Tuple2('prop', 8733),
			_Utils_Tuple2('infin', 8734),
			_Utils_Tuple2('ang', 8736),
			_Utils_Tuple2('and', 8743),
			_Utils_Tuple2('or', 8744),
			_Utils_Tuple2('cap', 8745),
			_Utils_Tuple2('cup', 8746),
			_Utils_Tuple2('int', 8747),
			_Utils_Tuple2('there4', 8756),
			_Utils_Tuple2('sim', 8764),
			_Utils_Tuple2('cong', 8773),
			_Utils_Tuple2('asymp', 8776),
			_Utils_Tuple2('ne', 8800),
			_Utils_Tuple2('equiv', 8801),
			_Utils_Tuple2('le', 8804),
			_Utils_Tuple2('ge', 8805),
			_Utils_Tuple2('sub', 8834),
			_Utils_Tuple2('sup', 8835),
			_Utils_Tuple2('nsub', 8836),
			_Utils_Tuple2('sube', 8838),
			_Utils_Tuple2('supe', 8839),
			_Utils_Tuple2('oplus', 8853),
			_Utils_Tuple2('otimes', 8855),
			_Utils_Tuple2('perp', 8869),
			_Utils_Tuple2('sdot', 8901),
			_Utils_Tuple2('lceil', 8968),
			_Utils_Tuple2('rceil', 8969),
			_Utils_Tuple2('lfloor', 8970),
			_Utils_Tuple2('rfloor', 8971),
			_Utils_Tuple2('lang', 9001),
			_Utils_Tuple2('rang', 9002),
			_Utils_Tuple2('loz', 9674),
			_Utils_Tuple2('spades', 9824),
			_Utils_Tuple2('clubs', 9827),
			_Utils_Tuple2('hearts', 9829),
			_Utils_Tuple2('diams', 9830)
		]));
var $dillonkearns$elm_markdown$Markdown$Entity$replaceEntity = function (match) {
	var _v0 = match.submatches;
	if (_v0.b && (_v0.a.$ === 'Just')) {
		var first = _v0.a.a;
		var _v1 = A2($elm$core$Dict$get, first, $dillonkearns$elm_markdown$Markdown$Entity$entities);
		if (_v1.$ === 'Just') {
			var code = _v1.a;
			return $elm$core$String$fromChar(
				$elm$core$Char$fromCode(code));
		} else {
			return match.match;
		}
	} else {
		return match.match;
	}
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceEntities = A2($elm$regex$Regex$replace, $dillonkearns$elm_markdown$Markdown$Entity$entitiesRegex, $dillonkearns$elm_markdown$Markdown$Entity$replaceEntity);
var $dillonkearns$elm_markdown$Markdown$Helpers$escapableRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\+)([!\"#$%&\\\'()*+,./:;<=>?@[\\\\\\]^_`{|}~-])'));
var $dillonkearns$elm_markdown$Markdown$Helpers$replaceEscapable = A2(
	$elm$regex$Regex$replace,
	$dillonkearns$elm_markdown$Markdown$Helpers$escapableRegex,
	function (regexMatch) {
		var _v0 = regexMatch.submatches;
		if (((_v0.b && (_v0.a.$ === 'Just')) && _v0.b.b) && (_v0.b.a.$ === 'Just')) {
			var backslashes = _v0.a.a;
			var _v1 = _v0.b;
			var escapedStr = _v1.a.a;
			return _Utils_ap(
				A2(
					$elm$core$String$repeat,
					($elm$core$String$length(backslashes) / 2) | 0,
					'\\'),
				escapedStr);
		} else {
			return regexMatch.match;
		}
	});
var $dillonkearns$elm_markdown$Markdown$Entity$hexadecimalRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('&#[Xx]([0-9a-fA-F]{1,8});'));
var $elm$core$String$foldl = _String_foldl;
var $dillonkearns$elm_markdown$Markdown$Entity$hexToInt = function (string) {
	var folder = F2(
		function (hexDigit, _int) {
			return ((_int * 16) + A2(
				$elm$core$Basics$modBy,
				39,
				$elm$core$Char$toCode(hexDigit))) - 9;
		});
	return A3(
		$elm$core$String$foldl,
		folder,
		0,
		$elm$core$String$toLower(string));
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimal = function (match) {
	var _v0 = match.submatches;
	if (_v0.b && (_v0.a.$ === 'Just')) {
		var first = _v0.a.a;
		return $dillonkearns$elm_markdown$Markdown$Entity$validUnicode(
			$dillonkearns$elm_markdown$Markdown$Entity$hexToInt(first));
	} else {
		return match.match;
	}
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimals = A2($elm$regex$Regex$replace, $dillonkearns$elm_markdown$Markdown$Entity$hexadecimalRegex, $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimal);
var $dillonkearns$elm_markdown$Markdown$Helpers$formatStr = function (str) {
	var withEscapes = $dillonkearns$elm_markdown$Markdown$Helpers$replaceEscapable(str);
	return $dillonkearns$elm_markdown$Markdown$Helpers$containsAmpersand(withEscapes) ? $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimals(
		$dillonkearns$elm_markdown$Markdown$Entity$replaceDecimals(
			$dillonkearns$elm_markdown$Markdown$Entity$replaceEntities(withEscapes))) : withEscapes;
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch = function (text) {
	return $dillonkearns$elm_markdown$Markdown$InlineParser$Match(
		{
			end: 0,
			matches: _List_Nil,
			start: 0,
			text: $dillonkearns$elm_markdown$Markdown$Helpers$formatStr(text),
			textEnd: 0,
			textStart: 0,
			type_: $dillonkearns$elm_markdown$Markdown$InlineParser$NormalType
		});
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatch = F3(
	function (rawText, _v2, parsedMatches) {
		var matchModel = _v2.a;
		var updtMatch = $dillonkearns$elm_markdown$Markdown$InlineParser$Match(
			{
				end: matchModel.end,
				matches: A3($dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatches, matchModel.text, _List_Nil, matchModel.matches),
				start: matchModel.start,
				text: matchModel.text,
				textEnd: matchModel.textEnd,
				textStart: matchModel.textStart,
				type_: matchModel.type_
			});
		if (!parsedMatches.b) {
			var finalStr = A2($elm$core$String$dropLeft, matchModel.end, rawText);
			return $elm$core$String$isEmpty(finalStr) ? _List_fromArray(
				[updtMatch]) : _List_fromArray(
				[
					updtMatch,
					$dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(finalStr)
				]);
		} else {
			var matchHead = parsedMatches.a.a;
			var matchesTail = parsedMatches.b;
			var _v4 = matchHead.type_;
			if (_v4.$ === 'NormalType') {
				return A2($elm$core$List$cons, updtMatch, parsedMatches);
			} else {
				return _Utils_eq(matchModel.end, matchHead.start) ? A2($elm$core$List$cons, updtMatch, parsedMatches) : ((_Utils_cmp(matchModel.end, matchHead.start) < 0) ? A2(
					$elm$core$List$cons,
					updtMatch,
					A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(
							A3($elm$core$String$slice, matchModel.end, matchHead.start, rawText)),
						parsedMatches)) : parsedMatches);
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatches = F3(
	function (rawText, parsedMatches, matches) {
		parseTextMatches:
		while (true) {
			if (!matches.b) {
				if (!parsedMatches.b) {
					return $elm$core$String$isEmpty(rawText) ? _List_Nil : _List_fromArray(
						[
							$dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(rawText)
						]);
				} else {
					var matchModel = parsedMatches.a.a;
					return (matchModel.start > 0) ? A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(
							A2($elm$core$String$left, matchModel.start, rawText)),
						parsedMatches) : parsedMatches;
				}
			} else {
				var match = matches.a;
				var matchesTail = matches.b;
				var $temp$rawText = rawText,
					$temp$parsedMatches = A3($dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatch, rawText, match, parsedMatches),
					$temp$matches = matchesTail;
				rawText = $temp$rawText;
				parsedMatches = $temp$parsedMatches;
				matches = $temp$matches;
				continue parseTextMatches;
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketLTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)(\\<)'));
var $elm$regex$Regex$find = _Regex_findAtMost(_Regex_infinity);
var $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketOpen = {$: 'AngleBracketOpen'};
var $dillonkearns$elm_markdown$Markdown$Helpers$isEven = function (_int) {
	return !A2($elm$core$Basics$modBy, 2, _int);
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketLToken = function (regMatch) {
	var _v0 = regMatch.submatches;
	if ((_v0.b && _v0.b.b) && (_v0.b.a.$ === 'Just')) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var delimiter = _v1.a.a;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		return $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $elm$core$Maybe$Just(
			{index: regMatch.index + backslashesLength, length: 1, meaning: $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketOpen}) : $elm$core$Maybe$Nothing;
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketLTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketLToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketLTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketRTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)(\\>)'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketClose = function (a) {
	return {$: 'AngleBracketClose', a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$Escaped = {$: 'Escaped'};
var $dillonkearns$elm_markdown$Markdown$InlineParser$NotEscaped = {$: 'NotEscaped'};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketRToken = function (regMatch) {
	var _v0 = regMatch.submatches;
	if ((_v0.b && _v0.b.b) && (_v0.b.a.$ === 'Just')) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		return $elm$core$Maybe$Just(
			{
				index: regMatch.index + backslashesLength,
				length: 1,
				meaning: $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketClose($dillonkearns$elm_markdown$Markdown$InlineParser$NotEscaped) : $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketClose($dillonkearns$elm_markdown$Markdown$InlineParser$Escaped)
			});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketRTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketRToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketRTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$asteriskEmphasisTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)([^*])?(\\*+)([^*])?'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisToken = F2(
	function (a, b) {
		return {$: 'EmphasisToken', a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$isPunctuation = function (c) {
	switch (c.valueOf()) {
		case '!':
			return true;
		case '\"':
			return true;
		case '#':
			return true;
		case '%':
			return true;
		case '&':
			return true;
		case '\'':
			return true;
		case '(':
			return true;
		case ')':
			return true;
		case '*':
			return true;
		case ',':
			return true;
		case '-':
			return true;
		case '.':
			return true;
		case '/':
			return true;
		case ':':
			return true;
		case ';':
			return true;
		case '?':
			return true;
		case '@':
			return true;
		case '[':
			return true;
		case ']':
			return true;
		case '_':
			return true;
		case '{':
			return true;
		case '}':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$containPunctuation = A2(
	$elm$core$String$foldl,
	F2(
		function (c, accum) {
			return accum || $dillonkearns$elm_markdown$Markdown$InlineParser$isPunctuation(c);
		}),
	false);
var $dillonkearns$elm_markdown$Markdown$InlineParser$isWhitespace = function (c) {
	switch (c.valueOf()) {
		case ' ':
			return true;
		case '\u000C':
			return true;
		case '\n':
			return true;
		case '\u000D':
			return true;
		case '\t':
			return true;
		case '\u000B':
			return true;
		case '\u00A0':
			return true;
		case '\u2028':
			return true;
		case '\u2029':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$containSpace = A2(
	$elm$core$String$foldl,
	F2(
		function (c, accum) {
			return accum || $dillonkearns$elm_markdown$Markdown$InlineParser$isWhitespace(c);
		}),
	false);
var $dillonkearns$elm_markdown$Markdown$InlineParser$getFringeRank = function (mstring) {
	if (mstring.$ === 'Just') {
		var string = mstring.a;
		return ($elm$core$String$isEmpty(string) || $dillonkearns$elm_markdown$Markdown$InlineParser$containSpace(string)) ? 0 : ($dillonkearns$elm_markdown$Markdown$InlineParser$containPunctuation(string) ? 1 : 2);
	} else {
		return 0;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToEmphasisToken = F3(
	function (_char, rawText, regMatch) {
		var _v0 = regMatch.submatches;
		if ((((_v0.b && _v0.b.b) && _v0.b.b.b) && (_v0.b.b.a.$ === 'Just')) && _v0.b.b.b.b) {
			var maybeBackslashes = _v0.a;
			var _v1 = _v0.b;
			var maybeLeftFringe = _v1.a;
			var _v2 = _v1.b;
			var delimiter = _v2.a.a;
			var _v3 = _v2.b;
			var maybeRightFringe = _v3.a;
			var rFringeRank = $dillonkearns$elm_markdown$Markdown$InlineParser$getFringeRank(maybeRightFringe);
			var leftFringeLength = function () {
				if (maybeLeftFringe.$ === 'Just') {
					var left = maybeLeftFringe.a;
					return $elm$core$String$length(left);
				} else {
					return 0;
				}
			}();
			var mLeftFringe = ((!(!regMatch.index)) && (!leftFringeLength)) ? $elm$core$Maybe$Just(
				A3($elm$core$String$slice, regMatch.index - 1, regMatch.index, rawText)) : maybeLeftFringe;
			var backslashesLength = function () {
				if (maybeBackslashes.$ === 'Just') {
					var backslashes = maybeBackslashes.a;
					return $elm$core$String$length(backslashes);
				} else {
					return 0;
				}
			}();
			var isEscaped = ((!$dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength)) && (!leftFringeLength)) || function () {
				if ((mLeftFringe.$ === 'Just') && (mLeftFringe.a === '\\')) {
					return true;
				} else {
					return false;
				}
			}();
			var delimiterLength = isEscaped ? ($elm$core$String$length(delimiter) - 1) : $elm$core$String$length(delimiter);
			var lFringeRank = isEscaped ? 1 : $dillonkearns$elm_markdown$Markdown$InlineParser$getFringeRank(mLeftFringe);
			if ((delimiterLength <= 0) || (_Utils_eq(
				_char,
				_Utils_chr('_')) && ((lFringeRank === 2) && (rFringeRank === 2)))) {
				return $elm$core$Maybe$Nothing;
			} else {
				var index = ((regMatch.index + backslashesLength) + leftFringeLength) + (isEscaped ? 1 : 0);
				return $elm$core$Maybe$Just(
					{
						index: index,
						length: delimiterLength,
						meaning: A2(
							$dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisToken,
							_char,
							{leftFringeRank: lFringeRank, rightFringeRank: rFringeRank})
					});
			}
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$findAsteriskEmphasisTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		A2(
			$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToEmphasisToken,
			_Utils_chr('*'),
			str),
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$asteriskEmphasisTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$codeTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)(\\`+)'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$CodeToken = function (a) {
	return {$: 'CodeToken', a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToCodeToken = function (regMatch) {
	var _v0 = regMatch.submatches;
	if ((_v0.b && _v0.b.b) && (_v0.b.a.$ === 'Just')) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var backtick = _v1.a.a;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		return $elm$core$Maybe$Just(
			{
				index: regMatch.index + backslashesLength,
				length: $elm$core$String$length(backtick),
				meaning: $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $dillonkearns$elm_markdown$Markdown$InlineParser$CodeToken($dillonkearns$elm_markdown$Markdown$InlineParser$NotEscaped) : $dillonkearns$elm_markdown$Markdown$InlineParser$CodeToken($dillonkearns$elm_markdown$Markdown$InlineParser$Escaped)
			});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findCodeTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToCodeToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$codeTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$hardBreakTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(?:(\\\\+)|( {2,}))\\n'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken = {$: 'HardLineBreakToken'};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToHardBreakToken = function (regMatch) {
	var _v0 = regMatch.submatches;
	_v0$2:
	while (true) {
		if (_v0.b) {
			if (_v0.a.$ === 'Just') {
				var backslashes = _v0.a.a;
				var backslashesLength = $elm$core$String$length(backslashes);
				return (!$dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength)) ? $elm$core$Maybe$Just(
					{index: (regMatch.index + backslashesLength) - 1, length: 2, meaning: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken}) : $elm$core$Maybe$Nothing;
			} else {
				if (_v0.b.b && (_v0.b.a.$ === 'Just')) {
					var _v1 = _v0.b;
					return $elm$core$Maybe$Just(
						{
							index: regMatch.index,
							length: $elm$core$String$length(regMatch.match),
							meaning: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken
						});
				} else {
					break _v0$2;
				}
			}
		} else {
			break _v0$2;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToSoftHardBreakToken = function (regMatch) {
	var _v0 = regMatch.submatches;
	_v0$2:
	while (true) {
		if (_v0.b) {
			if (_v0.a.$ === 'Just') {
				var backslashes = _v0.a.a;
				var backslashesLength = $elm$core$String$length(backslashes);
				return $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $elm$core$Maybe$Just(
					{index: regMatch.index + backslashesLength, length: 1, meaning: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken}) : $elm$core$Maybe$Just(
					{index: (regMatch.index + backslashesLength) - 1, length: 2, meaning: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken});
			} else {
				if (_v0.b.b) {
					var _v1 = _v0.b;
					var maybeSpaces = _v1.a;
					return $elm$core$Maybe$Just(
						{
							index: regMatch.index,
							length: $elm$core$String$length(regMatch.match),
							meaning: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken
						});
				} else {
					break _v0$2;
				}
			}
		} else {
			break _v0$2;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreak = false;
var $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreakTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(?:(\\\\+)|( *))\\n'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$findHardBreakTokens = function (str) {
	return $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreak ? A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToSoftHardBreakToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreakTokenRegex, str)) : A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToHardBreakToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$hardBreakTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageCloseTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)(\\])'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$SquareBracketClose = {$: 'SquareBracketClose'};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageCloseToken = function (regMatch) {
	var _v0 = regMatch.submatches;
	if ((_v0.b && _v0.b.b) && (_v0.b.a.$ === 'Just')) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		return $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $elm$core$Maybe$Just(
			{index: regMatch.index + backslashesLength, length: 1, meaning: $dillonkearns$elm_markdown$Markdown$InlineParser$SquareBracketClose}) : $elm$core$Maybe$Nothing;
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageCloseTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageCloseToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageCloseTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageOpenTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)(\\!)?(\\[)'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$Active = {$: 'Active'};
var $dillonkearns$elm_markdown$Markdown$InlineParser$ImageOpenToken = {$: 'ImageOpenToken'};
var $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken = function (a) {
	return {$: 'LinkOpenToken', a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageOpenToken = function (regMatch) {
	var _v0 = regMatch.submatches;
	if (((_v0.b && _v0.b.b) && _v0.b.b.b) && (_v0.b.b.a.$ === 'Just')) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var maybeImageOpen = _v1.a;
		var _v2 = _v1.b;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		var isEscaped = !$dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength);
		var index = isEscaped ? ((regMatch.index + backslashesLength) + 1) : (regMatch.index + backslashesLength);
		if (isEscaped) {
			if (maybeImageOpen.$ === 'Just') {
				return $elm$core$Maybe$Just(
					{
						index: index,
						length: 1,
						meaning: $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken($dillonkearns$elm_markdown$Markdown$InlineParser$Active)
					});
			} else {
				return $elm$core$Maybe$Nothing;
			}
		} else {
			if (maybeImageOpen.$ === 'Just') {
				return $elm$core$Maybe$Just(
					{index: index, length: 2, meaning: $dillonkearns$elm_markdown$Markdown$InlineParser$ImageOpenToken});
			} else {
				return $elm$core$Maybe$Just(
					{
						index: index,
						length: 1,
						meaning: $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken($dillonkearns$elm_markdown$Markdown$InlineParser$Active)
					});
			}
		}
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageOpenTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageOpenToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageOpenTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$underlineEmphasisTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)([^_])?(\\_+)([^_])?'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$findUnderlineEmphasisTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		A2(
			$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToEmphasisToken,
			_Utils_chr('_'),
			str),
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$underlineEmphasisTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex = F2(
	function (left, right) {
		if (left.b) {
			var lfirst = left.a;
			var lrest = left.b;
			if (right.b) {
				var rfirst = right.a;
				var rrest = right.b;
				return (_Utils_cmp(lfirst.index, rfirst.index) < 0) ? A2(
					$elm$core$List$cons,
					lfirst,
					A2($dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex, lrest, right)) : A2(
					$elm$core$List$cons,
					rfirst,
					A2($dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex, left, rrest));
			} else {
				return left;
			}
		} else {
			return right;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$tokenize = function (rawText) {
	return A2(
		$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
		$dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketRTokens(rawText),
		A2(
			$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
			$dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketLTokens(rawText),
			A2(
				$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
				$dillonkearns$elm_markdown$Markdown$InlineParser$findHardBreakTokens(rawText),
				A2(
					$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
					$dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageCloseTokens(rawText),
					A2(
						$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
						$dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageOpenTokens(rawText),
						A2(
							$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
							$dillonkearns$elm_markdown$Markdown$InlineParser$findUnderlineEmphasisTokens(rawText),
							A2(
								$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
								$dillonkearns$elm_markdown$Markdown$InlineParser$findAsteriskEmphasisTokens(rawText),
								$dillonkearns$elm_markdown$Markdown$InlineParser$findCodeTokens(rawText))))))));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$CodeType = {$: 'CodeType'};
var $dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisType = function (a) {
	return {$: 'EmphasisType', a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$HtmlType = function (a) {
	return {$: 'HtmlType', a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType = function (a) {
	return {$: 'ImageType', a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$Inactive = {$: 'Inactive'};
var $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType = function (a) {
	return {$: 'LinkType', a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$AutolinkType = function (a) {
	return {$: 'AutolinkType', a: a};
};
var $elm$regex$Regex$contains = _Regex_contains;
var $dillonkearns$elm_markdown$Markdown$InlineParser$decodeUrlRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('%(?:3B|2C|2F|3F|3A|40|26|3D|2B|24|23|25)'));
var $elm$url$Url$percentDecode = _Url_percentDecode;
var $elm$url$Url$percentEncode = _Url_percentEncode;
var $dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl = A2(
	$elm$core$Basics$composeR,
	$elm$url$Url$percentEncode,
	A2(
		$elm$regex$Regex$replace,
		$dillonkearns$elm_markdown$Markdown$InlineParser$decodeUrlRegex,
		function (match) {
			return A2(
				$elm$core$Maybe$withDefault,
				match.match,
				$elm$url$Url$percentDecode(match.match));
		}));
var $dillonkearns$elm_markdown$Markdown$InlineParser$urlRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^([A-Za-z][A-Za-z0-9.+\\-]{1,31}:[^<>\\x00-\\x20]*)$'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$autolinkToMatch = function (_v0) {
	var match = _v0.a;
	return A2($elm$regex$Regex$contains, $dillonkearns$elm_markdown$Markdown$InlineParser$urlRegex, match.text) ? $elm$core$Result$Ok(
		$dillonkearns$elm_markdown$Markdown$InlineParser$Match(
			_Utils_update(
				match,
				{
					type_: $dillonkearns$elm_markdown$Markdown$InlineParser$AutolinkType(
						_Utils_Tuple2(
							match.text,
							$dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl(match.text)))
				}))) : $elm$core$Result$Err(
		$dillonkearns$elm_markdown$Markdown$InlineParser$Match(match));
};
var $elm$regex$Regex$findAtMost = _Regex_findAtMost;
var $dillonkearns$elm_markdown$Markdown$Helpers$insideSquareBracketRegex = '[^\\[\\]\\\\]*(?:\\\\.[^\\[\\]\\\\]*)*';
var $dillonkearns$elm_markdown$Markdown$InlineParser$refLabelRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^\\[\\s*(' + ($dillonkearns$elm_markdown$Markdown$Helpers$insideSquareBracketRegex + ')\\s*\\]')));
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$Helpers$cleanWhitespaces = function (original) {
	return original;
};
var $dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel = A2($elm$core$Basics$composeR, $dillonkearns$elm_markdown$Markdown$Helpers$cleanWhitespaces, $elm$core$String$toLower);
var $dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle = F2(
	function (rawUrl, maybeTitle) {
		return _Utils_Tuple2(
			$dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl(
				$dillonkearns$elm_markdown$Markdown$Helpers$formatStr(rawUrl)),
			A2($elm$core$Maybe$map, $dillonkearns$elm_markdown$Markdown$Helpers$formatStr, maybeTitle));
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$refRegexToMatch = F3(
	function (matchModel, references, maybeRegexMatch) {
		var refLabel = function (str) {
			return $elm$core$String$isEmpty(str) ? matchModel.text : str;
		}(
			A2(
				$elm$core$Maybe$withDefault,
				matchModel.text,
				A2(
					$elm$core$Maybe$withDefault,
					$elm$core$Maybe$Nothing,
					A2(
						$elm$core$Maybe$andThen,
						A2(
							$elm$core$Basics$composeR,
							function ($) {
								return $.submatches;
							},
							$elm$core$List$head),
						maybeRegexMatch))));
		var _v0 = A2(
			$elm$core$Dict$get,
			$dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel(refLabel),
			references);
		if (_v0.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v1 = _v0.a;
			var rawUrl = _v1.a;
			var maybeTitle = _v1.b;
			var type_ = function () {
				var _v3 = matchModel.type_;
				if (_v3.$ === 'ImageType') {
					return $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType(
						A2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle, rawUrl, maybeTitle));
				} else {
					return $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType(
						A2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle, rawUrl, maybeTitle));
				}
			}();
			var regexMatchLength = function () {
				if (maybeRegexMatch.$ === 'Just') {
					var match = maybeRegexMatch.a.match;
					return $elm$core$String$length(match);
				} else {
					return 0;
				}
			}();
			return $elm$core$Maybe$Just(
				$dillonkearns$elm_markdown$Markdown$InlineParser$Match(
					_Utils_update(
						matchModel,
						{end: matchModel.end + regexMatchLength, type_: type_})));
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineReferences = F3(
	function (remainText, _v0, references) {
		var tempMatch = _v0.a;
		var matches = A3($elm$regex$Regex$findAtMost, 1, $dillonkearns$elm_markdown$Markdown$InlineParser$refLabelRegex, remainText);
		return A3(
			$dillonkearns$elm_markdown$Markdown$InlineParser$refRegexToMatch,
			tempMatch,
			references,
			$elm$core$List$head(matches));
	});
var $dillonkearns$elm_markdown$Markdown$Helpers$lineEndChars = '\\f\\v\\r\\n';
var $dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars = ' \\t\\f\\v\\r\\n';
var $dillonkearns$elm_markdown$Markdown$InlineParser$hrefRegex = '(?:<([^<>' + ($dillonkearns$elm_markdown$Markdown$Helpers$lineEndChars + (']*)>|([^' + ($dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars + ('\\(\\)\\\\]*(?:\\\\.[^' + ($dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars + '\\(\\)\\\\]*)*))')))));
var $dillonkearns$elm_markdown$Markdown$Helpers$titleRegex = '(?:[' + ($dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars + (']+' + ('(?:\'([^\'\\\\]*(?:\\\\.[^\'\\\\]*)*)\'|' + ('\"([^\"\\\\]*(?:\\\\.[^\"\\\\]*)*)\"|' + '\\(([^\\)\\\\]*(?:\\\\.[^\\)\\\\]*)*)\\)))?'))));
var $dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^\\(\\s*' + ($dillonkearns$elm_markdown$Markdown$InlineParser$hrefRegex + ($dillonkearns$elm_markdown$Markdown$Helpers$titleRegex + '\\s*\\)'))));
var $dillonkearns$elm_markdown$Markdown$Helpers$returnFirstJust = function (maybes) {
	var process = F2(
		function (a, maybeFound) {
			if (maybeFound.$ === 'Just') {
				var found = maybeFound.a;
				return $elm$core$Maybe$Just(found);
			} else {
				return a;
			}
		});
	return A3($elm$core$List$foldl, process, $elm$core$Maybe$Nothing, maybes);
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegexToMatch = F2(
	function (matchModel, regexMatch) {
		var _v0 = regexMatch.submatches;
		if ((((_v0.b && _v0.b.b) && _v0.b.b.b) && _v0.b.b.b.b) && _v0.b.b.b.b.b) {
			var maybeRawUrlAngleBrackets = _v0.a;
			var _v1 = _v0.b;
			var maybeRawUrlWithoutBrackets = _v1.a;
			var _v2 = _v1.b;
			var maybeTitleSingleQuotes = _v2.a;
			var _v3 = _v2.b;
			var maybeTitleDoubleQuotes = _v3.a;
			var _v4 = _v3.b;
			var maybeTitleParenthesis = _v4.a;
			var maybeTitle = $dillonkearns$elm_markdown$Markdown$Helpers$returnFirstJust(
				_List_fromArray(
					[maybeTitleSingleQuotes, maybeTitleDoubleQuotes, maybeTitleParenthesis]));
			var toMatch = function (rawUrl) {
				return $dillonkearns$elm_markdown$Markdown$InlineParser$Match(
					_Utils_update(
						matchModel,
						{
							end: matchModel.end + $elm$core$String$length(regexMatch.match),
							type_: function () {
								var _v5 = matchModel.type_;
								if (_v5.$ === 'ImageType') {
									return $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType;
								} else {
									return $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType;
								}
							}()(
								A2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle, rawUrl, maybeTitle))
						}));
			};
			var maybeRawUrl = $dillonkearns$elm_markdown$Markdown$Helpers$returnFirstJust(
				_List_fromArray(
					[maybeRawUrlAngleBrackets, maybeRawUrlWithoutBrackets]));
			return $elm$core$Maybe$Just(
				toMatch(
					A2($elm$core$Maybe$withDefault, '', maybeRawUrl)));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineLinkTypeOrImageType = F3(
	function (remainText, _v0, refs) {
		var tempMatch = _v0.a;
		var _v1 = A3($elm$regex$Regex$findAtMost, 1, $dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegex, remainText);
		if (_v1.b) {
			var first = _v1.a;
			var _v2 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegexToMatch, tempMatch, first);
			if (_v2.$ === 'Just') {
				var match = _v2.a;
				return $elm$core$Maybe$Just(match);
			} else {
				return A3(
					$dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineReferences,
					remainText,
					$dillonkearns$elm_markdown$Markdown$InlineParser$Match(tempMatch),
					refs);
			}
		} else {
			return A3(
				$dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineReferences,
				remainText,
				$dillonkearns$elm_markdown$Markdown$InlineParser$Match(tempMatch),
				refs);
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$checkParsedAheadOverlapping = F2(
	function (_v0, remainMatches) {
		var match = _v0.a;
		var overlappingMatches = $elm$core$List$filter(
			function (_v1) {
				var testMatch = _v1.a;
				return (_Utils_cmp(match.end, testMatch.start) > 0) && (_Utils_cmp(match.end, testMatch.end) < 0);
			});
		return ($elm$core$List$isEmpty(remainMatches) || $elm$core$List$isEmpty(
			overlappingMatches(remainMatches))) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$List$cons,
				$dillonkearns$elm_markdown$Markdown$InlineParser$Match(match),
				remainMatches)) : $elm$core$Maybe$Nothing;
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$emailRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^([a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~\\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?)*)$'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$emailAutolinkTypeToMatch = function (_v0) {
	var match = _v0.a;
	return A2($elm$regex$Regex$contains, $dillonkearns$elm_markdown$Markdown$InlineParser$emailRegex, match.text) ? $elm$core$Result$Ok(
		$dillonkearns$elm_markdown$Markdown$InlineParser$Match(
			_Utils_update(
				match,
				{
					type_: $dillonkearns$elm_markdown$Markdown$InlineParser$AutolinkType(
						_Utils_Tuple2(
							match.text,
							'mailto:' + $dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl(match.text)))
				}))) : $elm$core$Result$Err(
		$dillonkearns$elm_markdown$Markdown$InlineParser$Match(match));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findTokenHelp = F3(
	function (innerTokens, isToken, tokens) {
		findTokenHelp:
		while (true) {
			if (!tokens.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var nextToken = tokens.a;
				var remainingTokens = tokens.b;
				if (isToken(nextToken)) {
					return $elm$core$Maybe$Just(
						_Utils_Tuple3(
							nextToken,
							$elm$core$List$reverse(innerTokens),
							remainingTokens));
				} else {
					var $temp$innerTokens = A2($elm$core$List$cons, nextToken, innerTokens),
						$temp$isToken = isToken,
						$temp$tokens = remainingTokens;
					innerTokens = $temp$innerTokens;
					isToken = $temp$isToken;
					tokens = $temp$tokens;
					continue findTokenHelp;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$findToken = F2(
	function (isToken, tokens) {
		return A3($dillonkearns$elm_markdown$Markdown$InlineParser$findTokenHelp, _List_Nil, isToken, tokens);
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$HtmlToken = F2(
	function (a, b) {
		return {$: 'HtmlToken', a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$NotOpening = {$: 'NotOpening'};
var $dillonkearns$elm_markdown$Markdown$InlineParser$htmlToToken = F2(
	function (rawText, _v0) {
		var match = _v0.a;
		var consumedCharacters = A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						F3(
							function (startOffset, htmlTag, endOffset) {
								return {htmlTag: htmlTag, length: endOffset - startOffset};
							})),
					$elm$parser$Parser$Advanced$getOffset),
				$dillonkearns$elm_markdown$HtmlParser$html),
			$elm$parser$Parser$Advanced$getOffset);
		var parsed = A2(
			$elm$parser$Parser$Advanced$run,
			consumedCharacters,
			A2($elm$core$String$dropLeft, match.start, rawText));
		if (parsed.$ === 'Ok') {
			var htmlTag = parsed.a.htmlTag;
			var length = parsed.a.length;
			var htmlToken = A2($dillonkearns$elm_markdown$Markdown$InlineParser$HtmlToken, $dillonkearns$elm_markdown$Markdown$InlineParser$NotOpening, htmlTag);
			return $elm$core$Maybe$Just(
				{index: match.start, length: length, meaning: htmlToken});
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$Helpers$ifError = F2(
	function (_function, result) {
		if (result.$ === 'Ok') {
			return result;
		} else {
			var err = result.a;
			return _function(err);
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$isCloseToken = F2(
	function (htmlModel, token) {
		return false;
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$isCodeTokenPair = F2(
	function (closeToken, openToken) {
		var _v0 = openToken.meaning;
		if (_v0.$ === 'CodeToken') {
			if (_v0.a.$ === 'Escaped') {
				var _v1 = _v0.a;
				return _Utils_eq(openToken.length - 1, closeToken.length);
			} else {
				var _v2 = _v0.a;
				return _Utils_eq(openToken.length, closeToken.length);
			}
		} else {
			return false;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$isLinkTypeOrImageOpenToken = function (token) {
	var _v0 = token.meaning;
	switch (_v0.$) {
		case 'LinkOpenToken':
			return true;
		case 'ImageOpenToken':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$isOpenEmphasisToken = F2(
	function (closeToken, openToken) {
		var _v0 = openToken.meaning;
		if (_v0.$ === 'EmphasisToken') {
			var openChar = _v0.a;
			var open = _v0.b;
			var _v1 = closeToken.meaning;
			if (_v1.$ === 'EmphasisToken') {
				var closeChar = _v1.a;
				var close = _v1.b;
				return _Utils_eq(openChar, closeChar) ? ((_Utils_eq(open.leftFringeRank, open.rightFringeRank) || _Utils_eq(close.leftFringeRank, close.rightFringeRank)) ? (!(!A2($elm$core$Basics$modBy, 3, closeToken.length + openToken.length))) : true) : false;
			} else {
				return false;
			}
		} else {
			return false;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakType = {$: 'HardLineBreakType'};
var $dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch = F2(
	function (token, type_) {
		return $dillonkearns$elm_markdown$Markdown$InlineParser$Match(
			{end: token.index + token.length, matches: _List_Nil, start: token.index, text: '', textEnd: 0, textStart: 0, type_: type_});
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$lineBreakTTM = F5(
	function (remaining, tokens, matches, refs, rawText) {
		lineBreakTTM:
		while (true) {
			if (!remaining.b) {
				return matches;
			} else {
				var token = remaining.a;
				var tokensTail = remaining.b;
				var _v1 = token.meaning;
				if (_v1.$ === 'HardLineBreakToken') {
					var $temp$remaining = tokensTail,
						$temp$tokens = tokens,
						$temp$matches = A2(
						$elm$core$List$cons,
						A2($dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch, token, $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakType),
						matches),
						$temp$refs = refs,
						$temp$rawText = rawText;
					remaining = $temp$remaining;
					tokens = $temp$tokens;
					matches = $temp$matches;
					refs = $temp$refs;
					rawText = $temp$rawText;
					continue lineBreakTTM;
				} else {
					var $temp$remaining = tokensTail,
						$temp$tokens = A2($elm$core$List$cons, token, tokens),
						$temp$matches = matches,
						$temp$refs = refs,
						$temp$rawText = rawText;
					remaining = $temp$remaining;
					tokens = $temp$tokens;
					matches = $temp$matches;
					refs = $temp$refs;
					rawText = $temp$rawText;
					continue lineBreakTTM;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$removeParsedAheadTokens = F2(
	function (_v0, tokensTail) {
		var match = _v0.a;
		return A2(
			$elm$core$List$filter,
			function (token) {
				return _Utils_cmp(token.index, match.end) > -1;
			},
			tokensTail);
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketsToMatch = F6(
	function (closeToken, escaped, matches, references, rawText, _v39) {
		var openToken = _v39.a;
		var remainTokens = _v39.c;
		var result = A2(
			$dillonkearns$elm_markdown$Markdown$Helpers$ifError,
			$dillonkearns$elm_markdown$Markdown$InlineParser$emailAutolinkTypeToMatch,
			$dillonkearns$elm_markdown$Markdown$InlineParser$autolinkToMatch(
				A7(
					$dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch,
					references,
					rawText,
					function (s) {
						return s;
					},
					$dillonkearns$elm_markdown$Markdown$InlineParser$CodeType,
					openToken,
					closeToken,
					_List_Nil)));
		if (result.$ === 'Err') {
			var tempMatch = result.a;
			if (escaped.$ === 'NotEscaped') {
				var _v42 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$htmlToToken, rawText, tempMatch);
				if (_v42.$ === 'Just') {
					var newToken = _v42.a;
					return $elm$core$Maybe$Just(
						_Utils_Tuple2(
							A2($elm$core$List$cons, newToken, remainTokens),
							matches));
				} else {
					return $elm$core$Maybe$Nothing;
				}
			} else {
				return $elm$core$Maybe$Nothing;
			}
		} else {
			var newMatch = result.a;
			return $elm$core$Maybe$Just(
				_Utils_Tuple2(
					remainTokens,
					A2($elm$core$List$cons, newMatch, matches)));
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$codeAutolinkTypeHtmlTagTTM = F5(
	function (remaining, tokens, matches, references, rawText) {
		codeAutolinkTypeHtmlTagTTM:
		while (true) {
			if (!remaining.b) {
				return A5(
					$dillonkearns$elm_markdown$Markdown$InlineParser$htmlElementTTM,
					$elm$core$List$reverse(tokens),
					_List_Nil,
					matches,
					references,
					rawText);
			} else {
				var token = remaining.a;
				var tokensTail = remaining.b;
				var _v31 = token.meaning;
				switch (_v31.$) {
					case 'CodeToken':
						var isEscaped = _v31.a;
						var _v32 = A2(
							$dillonkearns$elm_markdown$Markdown$InlineParser$findToken,
							$dillonkearns$elm_markdown$Markdown$InlineParser$isCodeTokenPair(token),
							tokens);
						if (_v32.$ === 'Just') {
							var code = _v32.a;
							var _v33 = A5($dillonkearns$elm_markdown$Markdown$InlineParser$codeToMatch, token, matches, references, rawText, code);
							var newTokens = _v33.a;
							var newMatches = _v33.b;
							var $temp$remaining = tokensTail,
								$temp$tokens = newTokens,
								$temp$matches = newMatches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue codeAutolinkTypeHtmlTagTTM;
						} else {
							var $temp$remaining = tokensTail,
								$temp$tokens = A2($elm$core$List$cons, token, tokens),
								$temp$matches = matches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue codeAutolinkTypeHtmlTagTTM;
						}
					case 'AngleBracketClose':
						var isEscaped = _v31.a;
						var isAngleBracketOpen = function (_v38) {
							var meaning = _v38.meaning;
							if (meaning.$ === 'AngleBracketOpen') {
								return true;
							} else {
								return false;
							}
						};
						var _v34 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$findToken, isAngleBracketOpen, tokens);
						if (_v34.$ === 'Just') {
							var found = _v34.a;
							var _v35 = A6($dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketsToMatch, token, isEscaped, matches, references, rawText, found);
							if (_v35.$ === 'Just') {
								var _v36 = _v35.a;
								var newTokens = _v36.a;
								var newMatches = _v36.b;
								var $temp$remaining = tokensTail,
									$temp$tokens = A2(
									$elm$core$List$filter,
									A2($elm$core$Basics$composeL, $elm$core$Basics$not, isAngleBracketOpen),
									newTokens),
									$temp$matches = newMatches,
									$temp$references = references,
									$temp$rawText = rawText;
								remaining = $temp$remaining;
								tokens = $temp$tokens;
								matches = $temp$matches;
								references = $temp$references;
								rawText = $temp$rawText;
								continue codeAutolinkTypeHtmlTagTTM;
							} else {
								var $temp$remaining = tokensTail,
									$temp$tokens = A2(
									$elm$core$List$filter,
									A2($elm$core$Basics$composeL, $elm$core$Basics$not, isAngleBracketOpen),
									tokens),
									$temp$matches = matches,
									$temp$references = references,
									$temp$rawText = rawText;
								remaining = $temp$remaining;
								tokens = $temp$tokens;
								matches = $temp$matches;
								references = $temp$references;
								rawText = $temp$rawText;
								continue codeAutolinkTypeHtmlTagTTM;
							}
						} else {
							var $temp$remaining = tokensTail,
								$temp$tokens = A2(
								$elm$core$List$filter,
								A2($elm$core$Basics$composeL, $elm$core$Basics$not, isAngleBracketOpen),
								tokens),
								$temp$matches = matches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue codeAutolinkTypeHtmlTagTTM;
						}
					default:
						var $temp$remaining = tokensTail,
							$temp$tokens = A2($elm$core$List$cons, token, tokens),
							$temp$matches = matches,
							$temp$references = references,
							$temp$rawText = rawText;
						remaining = $temp$remaining;
						tokens = $temp$tokens;
						matches = $temp$matches;
						references = $temp$references;
						rawText = $temp$rawText;
						continue codeAutolinkTypeHtmlTagTTM;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$codeToMatch = F5(
	function (closeToken, matches, references, rawText, _v27) {
		var openToken = _v27.a;
		var remainTokens = _v27.c;
		var updatedOpenToken = function () {
			var _v28 = openToken.meaning;
			if ((_v28.$ === 'CodeToken') && (_v28.a.$ === 'Escaped')) {
				var _v29 = _v28.a;
				return _Utils_update(
					openToken,
					{index: openToken.index + 1, length: openToken.length - 1});
			} else {
				return openToken;
			}
		}();
		var match = A7($dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch, references, rawText, $dillonkearns$elm_markdown$Markdown$Helpers$cleanWhitespaces, $dillonkearns$elm_markdown$Markdown$InlineParser$CodeType, updatedOpenToken, closeToken, _List_Nil);
		return _Utils_Tuple2(
			remainTokens,
			A2($elm$core$List$cons, match, matches));
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$emphasisTTM = F5(
	function (remaining, tokens, matches, references, rawText) {
		emphasisTTM:
		while (true) {
			if (!remaining.b) {
				return A5(
					$dillonkearns$elm_markdown$Markdown$InlineParser$lineBreakTTM,
					$elm$core$List$reverse(tokens),
					_List_Nil,
					matches,
					references,
					rawText);
			} else {
				var token = remaining.a;
				var tokensTail = remaining.b;
				var _v22 = token.meaning;
				if (_v22.$ === 'EmphasisToken') {
					var _char = _v22.a;
					var leftFringeRank = _v22.b.leftFringeRank;
					var rightFringeRank = _v22.b.rightFringeRank;
					if (_Utils_eq(leftFringeRank, rightFringeRank)) {
						if ((!(!rightFringeRank)) && ((!_Utils_eq(
							_char,
							_Utils_chr('_'))) || (rightFringeRank === 1))) {
							var _v23 = A2(
								$dillonkearns$elm_markdown$Markdown$InlineParser$findToken,
								$dillonkearns$elm_markdown$Markdown$InlineParser$isOpenEmphasisToken(token),
								tokens);
							if (_v23.$ === 'Just') {
								var found = _v23.a;
								var _v24 = A5($dillonkearns$elm_markdown$Markdown$InlineParser$emphasisToMatch, references, rawText, token, tokensTail, found);
								var newRemaining = _v24.a;
								var match = _v24.b;
								var newTokens = _v24.c;
								var $temp$remaining = newRemaining,
									$temp$tokens = newTokens,
									$temp$matches = A2($elm$core$List$cons, match, matches),
									$temp$references = references,
									$temp$rawText = rawText;
								remaining = $temp$remaining;
								tokens = $temp$tokens;
								matches = $temp$matches;
								references = $temp$references;
								rawText = $temp$rawText;
								continue emphasisTTM;
							} else {
								var $temp$remaining = tokensTail,
									$temp$tokens = A2($elm$core$List$cons, token, tokens),
									$temp$matches = matches,
									$temp$references = references,
									$temp$rawText = rawText;
								remaining = $temp$remaining;
								tokens = $temp$tokens;
								matches = $temp$matches;
								references = $temp$references;
								rawText = $temp$rawText;
								continue emphasisTTM;
							}
						} else {
							var $temp$remaining = tokensTail,
								$temp$tokens = tokens,
								$temp$matches = matches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue emphasisTTM;
						}
					} else {
						if (_Utils_cmp(leftFringeRank, rightFringeRank) < 0) {
							var $temp$remaining = tokensTail,
								$temp$tokens = A2($elm$core$List$cons, token, tokens),
								$temp$matches = matches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue emphasisTTM;
						} else {
							var _v25 = A2(
								$dillonkearns$elm_markdown$Markdown$InlineParser$findToken,
								$dillonkearns$elm_markdown$Markdown$InlineParser$isOpenEmphasisToken(token),
								tokens);
							if (_v25.$ === 'Just') {
								var found = _v25.a;
								var _v26 = A5($dillonkearns$elm_markdown$Markdown$InlineParser$emphasisToMatch, references, rawText, token, tokensTail, found);
								var newRemaining = _v26.a;
								var match = _v26.b;
								var newTokens = _v26.c;
								var $temp$remaining = newRemaining,
									$temp$tokens = newTokens,
									$temp$matches = A2($elm$core$List$cons, match, matches),
									$temp$references = references,
									$temp$rawText = rawText;
								remaining = $temp$remaining;
								tokens = $temp$tokens;
								matches = $temp$matches;
								references = $temp$references;
								rawText = $temp$rawText;
								continue emphasisTTM;
							} else {
								var $temp$remaining = tokensTail,
									$temp$tokens = tokens,
									$temp$matches = matches,
									$temp$references = references,
									$temp$rawText = rawText;
								remaining = $temp$remaining;
								tokens = $temp$tokens;
								matches = $temp$matches;
								references = $temp$references;
								rawText = $temp$rawText;
								continue emphasisTTM;
							}
						}
					}
				} else {
					var $temp$remaining = tokensTail,
						$temp$tokens = A2($elm$core$List$cons, token, tokens),
						$temp$matches = matches,
						$temp$references = references,
						$temp$rawText = rawText;
					remaining = $temp$remaining;
					tokens = $temp$tokens;
					matches = $temp$matches;
					references = $temp$references;
					rawText = $temp$rawText;
					continue emphasisTTM;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$emphasisToMatch = F5(
	function (references, rawText, closeToken, tokensTail, _v20) {
		var openToken = _v20.a;
		var innerTokens = _v20.b;
		var remainTokens = _v20.c;
		var remainLength = openToken.length - closeToken.length;
		var updt = (!remainLength) ? {closeToken: closeToken, openToken: openToken, remainTokens: remainTokens, tokensTail: tokensTail} : ((remainLength > 0) ? {
			closeToken: closeToken,
			openToken: _Utils_update(
				openToken,
				{index: openToken.index + remainLength, length: closeToken.length}),
			remainTokens: A2(
				$elm$core$List$cons,
				_Utils_update(
					openToken,
					{length: remainLength}),
				remainTokens),
			tokensTail: tokensTail
		} : {
			closeToken: _Utils_update(
				closeToken,
				{length: openToken.length}),
			openToken: openToken,
			remainTokens: remainTokens,
			tokensTail: A2(
				$elm$core$List$cons,
				_Utils_update(
					closeToken,
					{index: closeToken.index + openToken.length, length: -remainLength}),
				tokensTail)
		});
		var match = A7(
			$dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch,
			references,
			rawText,
			function (s) {
				return s;
			},
			$dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisType(updt.openToken.length),
			updt.openToken,
			updt.closeToken,
			$elm$core$List$reverse(innerTokens));
		return _Utils_Tuple3(updt.tokensTail, match, updt.remainTokens);
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$htmlElementTTM = F5(
	function (remaining, tokens, matches, references, rawText) {
		htmlElementTTM:
		while (true) {
			if (!remaining.b) {
				return A5(
					$dillonkearns$elm_markdown$Markdown$InlineParser$linkImageTypeTTM,
					$elm$core$List$reverse(tokens),
					_List_Nil,
					matches,
					references,
					rawText);
			} else {
				var token = remaining.a;
				var tokensTail = remaining.b;
				var _v16 = token.meaning;
				if (_v16.$ === 'HtmlToken') {
					var isOpen = _v16.a;
					var htmlModel = _v16.b;
					if (isOpen.$ === 'NotOpening') {
						var $temp$remaining = tokensTail,
							$temp$tokens = tokens,
							$temp$matches = A2(
							$elm$core$List$cons,
							A2(
								$dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch,
								token,
								$dillonkearns$elm_markdown$Markdown$InlineParser$HtmlType(htmlModel)),
							matches),
							$temp$references = references,
							$temp$rawText = rawText;
						remaining = $temp$remaining;
						tokens = $temp$tokens;
						matches = $temp$matches;
						references = $temp$references;
						rawText = $temp$rawText;
						continue htmlElementTTM;
					} else {
						var _v18 = A2(
							$dillonkearns$elm_markdown$Markdown$InlineParser$findToken,
							$dillonkearns$elm_markdown$Markdown$InlineParser$isCloseToken(htmlModel),
							tokensTail);
						if (_v18.$ === 'Nothing') {
							var $temp$remaining = tokensTail,
								$temp$tokens = tokens,
								$temp$matches = A2(
								$elm$core$List$cons,
								A2(
									$dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch,
									token,
									$dillonkearns$elm_markdown$Markdown$InlineParser$HtmlType(htmlModel)),
								matches),
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue htmlElementTTM;
						} else {
							var _v19 = _v18.a;
							var closeToken = _v19.a;
							var innerTokens = _v19.b;
							var newTail = _v19.c;
							var newMatch = A7(
								$dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch,
								references,
								rawText,
								function (s) {
									return s;
								},
								$dillonkearns$elm_markdown$Markdown$InlineParser$HtmlType(htmlModel),
								token,
								closeToken,
								innerTokens);
							var $temp$remaining = newTail,
								$temp$tokens = tokens,
								$temp$matches = A2($elm$core$List$cons, newMatch, matches),
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue htmlElementTTM;
						}
					}
				} else {
					var $temp$remaining = tokensTail,
						$temp$tokens = A2($elm$core$List$cons, token, tokens),
						$temp$matches = matches,
						$temp$references = references,
						$temp$rawText = rawText;
					remaining = $temp$remaining;
					tokens = $temp$tokens;
					matches = $temp$matches;
					references = $temp$references;
					rawText = $temp$rawText;
					continue htmlElementTTM;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageTypeTTM = F5(
	function (remaining, tokens, matches, references, rawText) {
		linkImageTypeTTM:
		while (true) {
			if (!remaining.b) {
				return A5(
					$dillonkearns$elm_markdown$Markdown$InlineParser$emphasisTTM,
					$elm$core$List$reverse(tokens),
					_List_Nil,
					matches,
					references,
					rawText);
			} else {
				var token = remaining.a;
				var tokensTail = remaining.b;
				var _v11 = token.meaning;
				if (_v11.$ === 'SquareBracketClose') {
					var _v12 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$findToken, $dillonkearns$elm_markdown$Markdown$InlineParser$isLinkTypeOrImageOpenToken, tokens);
					if (_v12.$ === 'Just') {
						var found = _v12.a;
						var _v13 = A6($dillonkearns$elm_markdown$Markdown$InlineParser$linkOrImageTypeToMatch, token, tokensTail, matches, references, rawText, found);
						if (_v13.$ === 'Just') {
							var _v14 = _v13.a;
							var x = _v14.a;
							var newMatches = _v14.b;
							var newTokens = _v14.c;
							var $temp$remaining = x,
								$temp$tokens = newTokens,
								$temp$matches = newMatches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue linkImageTypeTTM;
						} else {
							var $temp$remaining = tokensTail,
								$temp$tokens = tokens,
								$temp$matches = matches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue linkImageTypeTTM;
						}
					} else {
						var $temp$remaining = tokensTail,
							$temp$tokens = tokens,
							$temp$matches = matches,
							$temp$references = references,
							$temp$rawText = rawText;
						remaining = $temp$remaining;
						tokens = $temp$tokens;
						matches = $temp$matches;
						references = $temp$references;
						rawText = $temp$rawText;
						continue linkImageTypeTTM;
					}
				} else {
					var $temp$remaining = tokensTail,
						$temp$tokens = A2($elm$core$List$cons, token, tokens),
						$temp$matches = matches,
						$temp$references = references,
						$temp$rawText = rawText;
					remaining = $temp$remaining;
					tokens = $temp$tokens;
					matches = $temp$matches;
					references = $temp$references;
					rawText = $temp$rawText;
					continue linkImageTypeTTM;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$linkOrImageTypeToMatch = F6(
	function (closeToken, tokensTail, oldMatches, references, rawText, _v1) {
		var openToken = _v1.a;
		var innerTokens = _v1.b;
		var remainTokens = _v1.c;
		var removeOpenToken = _Utils_Tuple3(
			tokensTail,
			oldMatches,
			_Utils_ap(innerTokens, remainTokens));
		var remainText = A2($elm$core$String$dropLeft, closeToken.index + 1, rawText);
		var inactivateLinkOpenToken = function (token) {
			var _v9 = token.meaning;
			if (_v9.$ === 'LinkOpenToken') {
				return _Utils_update(
					token,
					{
						meaning: $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken($dillonkearns$elm_markdown$Markdown$InlineParser$Inactive)
					});
			} else {
				return token;
			}
		};
		var findTempMatch = function (isLinkType) {
			return A7(
				$dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch,
				references,
				rawText,
				function (s) {
					return s;
				},
				isLinkType ? $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType(
					_Utils_Tuple2('', $elm$core$Maybe$Nothing)) : $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType(
					_Utils_Tuple2('', $elm$core$Maybe$Nothing)),
				openToken,
				closeToken,
				$elm$core$List$reverse(innerTokens));
		};
		var _v2 = openToken.meaning;
		switch (_v2.$) {
			case 'ImageOpenToken':
				var tempMatch = findTempMatch(false);
				var _v3 = A3($dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineLinkTypeOrImageType, remainText, tempMatch, references);
				if (_v3.$ === 'Nothing') {
					return $elm$core$Maybe$Just(removeOpenToken);
				} else {
					var match = _v3.a;
					var _v4 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$checkParsedAheadOverlapping, match, oldMatches);
					if (_v4.$ === 'Just') {
						var matches = _v4.a;
						return $elm$core$Maybe$Just(
							_Utils_Tuple3(
								A2($dillonkearns$elm_markdown$Markdown$InlineParser$removeParsedAheadTokens, match, tokensTail),
								matches,
								remainTokens));
					} else {
						return $elm$core$Maybe$Just(removeOpenToken);
					}
				}
			case 'LinkOpenToken':
				if (_v2.a.$ === 'Active') {
					var _v5 = _v2.a;
					var tempMatch = findTempMatch(true);
					var _v6 = A3($dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineLinkTypeOrImageType, remainText, tempMatch, references);
					if (_v6.$ === 'Nothing') {
						return $elm$core$Maybe$Just(removeOpenToken);
					} else {
						var match = _v6.a;
						var _v7 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$checkParsedAheadOverlapping, match, oldMatches);
						if (_v7.$ === 'Just') {
							var matches = _v7.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple3(
									A2($dillonkearns$elm_markdown$Markdown$InlineParser$removeParsedAheadTokens, match, tokensTail),
									matches,
									A2($elm$core$List$map, inactivateLinkOpenToken, remainTokens)));
						} else {
							return $elm$core$Maybe$Just(removeOpenToken);
						}
					}
				} else {
					var _v8 = _v2.a;
					return $elm$core$Maybe$Just(removeOpenToken);
				}
			default:
				return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch = F7(
	function (references, rawText, processText, type_, openToken, closeToken, innerTokens) {
		var textStart = openToken.index + openToken.length;
		var textEnd = closeToken.index;
		var text = processText(
			A3($elm$core$String$slice, textStart, textEnd, rawText));
		var start = openToken.index;
		var end = closeToken.index + closeToken.length;
		var match = {end: end, matches: _List_Nil, start: start, text: text, textEnd: textEnd, textStart: textStart, type_: type_};
		var matches = A2(
			$elm$core$List$map,
			function (_v0) {
				var matchModel = _v0.a;
				return A2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareChildMatch, match, matchModel);
			},
			A4($dillonkearns$elm_markdown$Markdown$InlineParser$tokensToMatches, innerTokens, _List_Nil, references, rawText));
		return $dillonkearns$elm_markdown$Markdown$InlineParser$Match(
			{end: end, matches: matches, start: start, text: text, textEnd: textEnd, textStart: textStart, type_: type_});
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$tokensToMatches = F4(
	function (tokens, matches, references, rawText) {
		return A5($dillonkearns$elm_markdown$Markdown$InlineParser$codeAutolinkTypeHtmlTagTTM, tokens, _List_Nil, matches, references, rawText);
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$parse = F2(
	function (refs, rawText_) {
		var rawText = $elm$core$String$trim(rawText_);
		var tokens = $dillonkearns$elm_markdown$Markdown$InlineParser$tokenize(rawText);
		return $dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(
			A3(
				$dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatches,
				rawText,
				_List_Nil,
				$dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatches(
					A4($dillonkearns$elm_markdown$Markdown$InlineParser$tokensToMatches, tokens, _List_Nil, refs, rawText))));
	});
var $dillonkearns$elm_markdown$Markdown$Parser$thisIsDefinitelyNotAnHtmlTag = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$Advanced$token(
			A2(
				$elm$parser$Parser$Advanced$Token,
				' ',
				$elm$parser$Parser$Expecting(' '))),
			$elm$parser$Parser$Advanced$token(
			A2(
				$elm$parser$Parser$Advanced$Token,
				'>',
				$elm$parser$Parser$Expecting('>'))),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$chompIf,
					$elm$core$Char$isAlpha,
					$elm$parser$Parser$Expecting('Alpha')),
				$elm$parser$Parser$Advanced$chompWhile(
					function (c) {
						return $elm$core$Char$isAlphaNum(c) || _Utils_eq(
							c,
							_Utils_chr('-'));
					})),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							':',
							$elm$parser$Parser$Expecting(':'))),
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'@',
							$elm$parser$Parser$Expecting('@'))),
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'\\',
							$elm$parser$Parser$Expecting('\\'))),
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'+',
							$elm$parser$Parser$Expecting('+'))),
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'.',
							$elm$parser$Parser$Expecting('.')))
					])))
		]));
var $dillonkearns$elm_markdown$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock = $elm$parser$Parser$Advanced$backtrackable(
	A2(
		$elm$parser$Parser$Advanced$mapChompedString,
		F2(
			function (rawLine, _v0) {
				return $dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph(
					$dillonkearns$elm_markdown$Markdown$RawBlock$UnparsedInlines(rawLine));
			}),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'<',
							$elm$parser$Parser$Expecting('<'))),
					$dillonkearns$elm_markdown$Markdown$Parser$thisIsDefinitelyNotAnHtmlTag),
				$elm$parser$Parser$Advanced$chompUntilEndOr('\n')),
			$dillonkearns$elm_markdown$Helpers$endOfLineOrFile)));
var $elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
var $elm$parser$Parser$Advanced$fromInfo = F4(
	function (row, col, x, context) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
	});
var $elm$parser$Parser$Advanced$chompUntil = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$findSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A4($elm$parser$Parser$Advanced$fromInfo, newRow, newCol, expecting, s.context)) : A3(
				$elm$parser$Parser$Advanced$Good,
				_Utils_cmp(s.offset, newOffset) < 0,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $dillonkearns$elm_markdown$Markdown$CodeBlock$openingCodeFence = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$map,
			function (delimiter) {
				return _Utils_Tuple2(
					_Utils_chr('`'),
					delimiter);
			},
			$elm$parser$Parser$Advanced$getChompedString(
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$symbol(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'```',
							$elm$parser$Parser$ExpectingSymbol('```'))),
					$elm$parser$Parser$Advanced$chompWhile(
						function (c) {
							return _Utils_eq(
								c,
								_Utils_chr('`'));
						})))),
			A2(
			$elm$parser$Parser$Advanced$map,
			function (delimiter) {
				return _Utils_Tuple2(
					_Utils_chr('~'),
					delimiter);
			},
			$elm$parser$Parser$Advanced$getChompedString(
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$symbol(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'~~~',
							$elm$parser$Parser$ExpectingSymbol('~~~'))),
					$elm$parser$Parser$Advanced$chompWhile(
						function (c) {
							return _Utils_eq(
								c,
								_Utils_chr('~'));
						}))))
		]));
var $dillonkearns$elm_markdown$Markdown$CodeBlock$parserHelp = A2(
	$elm$parser$Parser$Advanced$andThen,
	function (_v0) {
		var _char = _v0.a;
		var delimiter = _v0.b;
		return A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(
					F2(
						function (language, body) {
							return {
								body: body,
								language: $elm$core$String$isEmpty(language) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(language)
							};
						})),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$getChompedString(
						$elm$parser$Parser$Advanced$chompUntil(
							A2(
								$elm$parser$Parser$Advanced$Token,
								'\n',
								$elm$parser$Parser$Problem('Expecting newline')))),
					$elm$parser$Parser$Advanced$symbol(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'\n',
							$elm$parser$Parser$ExpectingSymbol('\n'))))),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$getChompedString(
						$elm$parser$Parser$Advanced$chompUntilEndOr('\n' + delimiter)),
					$elm$parser$Parser$Advanced$symbol(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'\n' + delimiter,
							$elm$parser$Parser$ExpectingSymbol(delimiter)))),
				$elm$parser$Parser$Advanced$chompWhile(
					function (c) {
						return _Utils_eq(c, _char);
					})));
	},
	$dillonkearns$elm_markdown$Markdown$CodeBlock$openingCodeFence);
var $dillonkearns$elm_markdown$Markdown$CodeBlock$parser = $dillonkearns$elm_markdown$Markdown$CodeBlock$parserHelp;
var $elm$core$String$trimRight = _String_trimRight;
var $dillonkearns$elm_markdown$Markdown$Heading$dropTrailingHashes = function (headingString) {
	return A2($elm$core$String$endsWith, '#', headingString) ? $dillonkearns$elm_markdown$Markdown$Heading$dropTrailingHashes(
		$elm$core$String$trimRight(
			A2($elm$core$String$dropRight, 1, headingString))) : headingString;
};
var $dillonkearns$elm_markdown$Parser$Token$hash = A2(
	$elm$parser$Parser$Advanced$Token,
	'#',
	$elm$parser$Parser$Expecting('a `#`'));
var $dillonkearns$elm_markdown$Markdown$Heading$isHash = function (c) {
	if ('#' === c.valueOf()) {
		return true;
	} else {
		return false;
	}
};
var $elm$parser$Parser$Advanced$spaces = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return _Utils_eq(
			c,
			_Utils_chr(' ')) || (_Utils_eq(
			c,
			_Utils_chr('\n')) || _Utils_eq(
			c,
			_Utils_chr('\r')));
	});
var $elm$core$String$trimLeft = _String_trimLeft;
var $dillonkearns$elm_markdown$Markdown$Heading$parser = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$Heading),
				A2(
					$elm$parser$Parser$Advanced$andThen,
					function (startingSpaces) {
						var startSpace = $elm$core$String$length(startingSpaces);
						return (startSpace >= 4) ? $elm$parser$Parser$Advanced$problem(
							$elm$parser$Parser$Expecting('heading with < 4 spaces in front')) : $elm$parser$Parser$Advanced$succeed(startSpace);
					},
					$elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$spaces))),
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$hash)),
		A2(
			$elm$parser$Parser$Advanced$andThen,
			function (additionalHashes) {
				var level = $elm$core$String$length(additionalHashes) + 1;
				return (level >= 7) ? $elm$parser$Parser$Advanced$problem(
					$elm$parser$Parser$Expecting('heading with < 7 #\'s')) : $elm$parser$Parser$Advanced$succeed(level);
			},
			$elm$parser$Parser$Advanced$getChompedString(
				$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Markdown$Heading$isHash)))),
	A2(
		$elm$parser$Parser$Advanced$mapChompedString,
		F2(
			function (headingText, _v0) {
				return $dillonkearns$elm_markdown$Markdown$RawBlock$UnparsedInlines(
					$dillonkearns$elm_markdown$Markdown$Heading$dropTrailingHashes(
						$elm$core$String$trimLeft(headingText)));
			}),
		$elm$parser$Parser$Advanced$chompUntilEndOr('\n')));
var $dillonkearns$elm_markdown$Parser$Token$greaterThan = A2(
	$elm$parser$Parser$Advanced$Token,
	'>',
	$elm$parser$Parser$Expecting('a `>`'));
var $elm$parser$Parser$Advanced$Located = F3(
	function (row, col, context) {
		return {col: col, context: context, row: row};
	});
var $elm$parser$Parser$Advanced$changeContext = F2(
	function (newContext, s) {
		return {col: s.col, context: newContext, indent: s.indent, offset: s.offset, row: s.row, src: s.src};
	});
var $elm$parser$Parser$Advanced$inContext = F2(
	function (context, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(
					A2(
						$elm$parser$Parser$Advanced$changeContext,
						A2(
							$elm$core$List$cons,
							A3($elm$parser$Parser$Advanced$Located, s0.row, s0.col, context),
							s0.context),
						s0));
				if (_v1.$ === 'Good') {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						a,
						A2($elm$parser$Parser$Advanced$changeContext, s0.context, s1));
				} else {
					var step = _v1;
					return step;
				}
			});
	});
var $dillonkearns$elm_markdown$Helpers$isGfmWhitespace = function (_char) {
	switch (_char.valueOf()) {
		case ' ':
			return true;
		case '\n':
			return true;
		case '\t':
			return true;
		case '\u000B':
			return true;
		case '\u000C':
			return true;
		case '\u000D':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Parser$Token$lessThan = A2(
	$elm$parser$Parser$Advanced$Token,
	'<',
	$elm$parser$Parser$Expecting('a `<`'));
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$destinationParser = A2(
	$elm$parser$Parser$Advanced$inContext,
	'link destination',
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$url$Url$percentEncode),
					$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$lessThan)),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$getChompedString(
						$elm$parser$Parser$Advanced$chompUntil($dillonkearns$elm_markdown$Parser$Token$greaterThan)),
					$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$greaterThan))),
				$elm$parser$Parser$Advanced$getChompedString(
				$dillonkearns$elm_markdown$Parser$Extra$oneOrMore(
					function (c) {
						return !$dillonkearns$elm_markdown$Helpers$isGfmWhitespace(c);
					}))
			])));
var $dillonkearns$elm_markdown$Parser$Token$closingSquareBracket = A2(
	$elm$parser$Parser$Advanced$Token,
	']',
	$elm$parser$Parser$Expecting('a `]`'));
var $dillonkearns$elm_markdown$Parser$Token$openingSquareBracket = A2(
	$elm$parser$Parser$Advanced$Token,
	'[',
	$elm$parser$Parser$Expecting('a `[`'));
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$labelParser = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel),
		$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$openingSquareBracket)),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntil($dillonkearns$elm_markdown$Parser$Token$closingSquareBracket)),
		$elm$parser$Parser$Advanced$symbol(
			A2(
				$elm$parser$Parser$Advanced$Token,
				']:',
				$elm$parser$Parser$Expecting(']:')))));
var $dillonkearns$elm_markdown$Parser$Token$doubleQuote = A2(
	$elm$parser$Parser$Advanced$Token,
	'\"',
	$elm$parser$Parser$Expecting('a double quote'));
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$hasNoBlankLine = function (str) {
	return A2($elm$core$String$contains, '\n\n', str) ? $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Expecting('no blank line')) : $elm$parser$Parser$Advanced$succeed(str);
};
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$chompWhile(
		function (c) {
			return (!_Utils_eq(
				c,
				_Utils_chr('\n'))) && $dillonkearns$elm_markdown$Helpers$isGfmWhitespace(c);
		}),
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$newline),
				$elm$parser$Parser$Advanced$end(
				$elm$parser$Parser$Expecting('end of file'))
			])));
var $dillonkearns$elm_markdown$Helpers$requiredWhitespace = A2(
	$elm$parser$Parser$Advanced$ignorer,
	A2(
		$elm$parser$Parser$Advanced$chompIf,
		$dillonkearns$elm_markdown$Helpers$isGfmWhitespace,
		$elm$parser$Parser$Expecting('gfm whitespace')),
	$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Helpers$isGfmWhitespace));
var $dillonkearns$elm_markdown$Parser$Token$singleQuote = A2(
	$elm$parser$Parser$Advanced$Token,
	'\'',
	$elm$parser$Parser$Expecting('a single quote'));
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$titleParser = function () {
	var inSingleQuotes = A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Just),
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$singleQuote)),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$andThen,
					$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$hasNoBlankLine,
					$elm$parser$Parser$Advanced$getChompedString(
						$elm$parser$Parser$Advanced$chompUntil($dillonkearns$elm_markdown$Parser$Token$singleQuote))),
				$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$singleQuote)),
			$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline));
	var inDoubleQuotes = A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Just),
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$doubleQuote)),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$andThen,
					$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$hasNoBlankLine,
					$elm$parser$Parser$Advanced$getChompedString(
						$elm$parser$Parser$Advanced$chompUntil($dillonkearns$elm_markdown$Parser$Token$doubleQuote))),
				$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$doubleQuote)),
			$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline));
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		'title',
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$Advanced$backtrackable(
					A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
							$dillonkearns$elm_markdown$Helpers$requiredWhitespace),
						$elm$parser$Parser$Advanced$oneOf(
							_List_fromArray(
								[
									inDoubleQuotes,
									inSingleQuotes,
									$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing)
								])))),
					A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing),
					$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline)
				])));
}();
var $dillonkearns$elm_markdown$Helpers$spaceOrTab = A2(
	$elm$parser$Parser$Advanced$chompIf,
	$dillonkearns$elm_markdown$Helpers$isSpaceOrTab,
	$elm$parser$Parser$Expecting('space or tab'));
var $dillonkearns$elm_markdown$Helpers$upToThreeSpaces = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$dillonkearns$elm_markdown$Helpers$spaceOrTab,
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							$dillonkearns$elm_markdown$Helpers$spaceOrTab,
							$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)
						]))),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						$dillonkearns$elm_markdown$Helpers$spaceOrTab,
						$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)
					]))),
			$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)
		]));
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$parser = A2(
	$elm$parser$Parser$Advanced$inContext,
	'link reference definition',
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						F3(
							function (label, destination, title) {
								return _Utils_Tuple2(
									label,
									{destination: destination, title: title});
							})),
					$dillonkearns$elm_markdown$Helpers$upToThreeSpaces),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$labelParser,
							$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Helpers$isSpaceOrTab)),
						$elm$parser$Parser$Advanced$oneOf(
							_List_fromArray(
								[
									$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$newline),
									$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)
								]))),
					$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Helpers$isSpaceOrTab))),
			$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$destinationParser),
		$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$titleParser));
var $dillonkearns$elm_markdown$ThematicBreak$ThematicBreak = {$: 'ThematicBreak'};
var $dillonkearns$elm_markdown$ThematicBreak$isSpace = function (c) {
	switch (c.valueOf()) {
		case ' ':
			return true;
		case '\t':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$ThematicBreak$whitespace = $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$ThematicBreak$isSpace);
var $dillonkearns$elm_markdown$ThematicBreak$withChar = function (tchar) {
	var token = $dillonkearns$elm_markdown$Parser$Extra$tokenHelp(
		$elm$core$String$fromChar(tchar));
	return A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$ThematicBreak$ThematicBreak),
								token),
							$dillonkearns$elm_markdown$ThematicBreak$whitespace),
						token),
					$dillonkearns$elm_markdown$ThematicBreak$whitespace),
				token),
			$elm$parser$Parser$Advanced$chompWhile(
				function (c) {
					return _Utils_eq(c, tchar) || $dillonkearns$elm_markdown$ThematicBreak$isSpace(c);
				})),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$dillonkearns$elm_markdown$Parser$Extra$tokenHelp('\n'),
					$elm$parser$Parser$Advanced$end(
					$elm$parser$Parser$Expecting('end'))
				])));
};
var $dillonkearns$elm_markdown$ThematicBreak$parseThematicBreak = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$dillonkearns$elm_markdown$ThematicBreak$withChar(
			_Utils_chr('-')),
			$dillonkearns$elm_markdown$ThematicBreak$withChar(
			_Utils_chr('*')),
			$dillonkearns$elm_markdown$ThematicBreak$withChar(
			_Utils_chr('_'))
		]));
var $dillonkearns$elm_markdown$ThematicBreak$singleSpace = A2(
	$elm$parser$Parser$Advanced$chompIf,
	$dillonkearns$elm_markdown$ThematicBreak$isSpace,
	$elm$parser$Parser$Expecting('Space'));
var $dillonkearns$elm_markdown$ThematicBreak$parser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
						$dillonkearns$elm_markdown$ThematicBreak$singleSpace),
					$elm$parser$Parser$Advanced$oneOf(
						_List_fromArray(
							[
								$dillonkearns$elm_markdown$ThematicBreak$singleSpace,
								$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)
							]))),
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							$dillonkearns$elm_markdown$ThematicBreak$singleSpace,
							$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)
						]))),
			$dillonkearns$elm_markdown$ThematicBreak$parseThematicBreak),
			$dillonkearns$elm_markdown$ThematicBreak$parseThematicBreak
		]));
var $dillonkearns$elm_markdown$Markdown$RawBlock$LevelOne = {$: 'LevelOne'};
var $dillonkearns$elm_markdown$Markdown$RawBlock$LevelTwo = {$: 'LevelTwo'};
var $dillonkearns$elm_markdown$Markdown$RawBlock$SetextLine = F2(
	function (a, b) {
		return {$: 'SetextLine', a: a, b: b};
	});
var $dillonkearns$elm_markdown$Parser$Token$equals = A2(
	$elm$parser$Parser$Advanced$Token,
	'=',
	$elm$parser$Parser$Expecting('a `=`'));
var $dillonkearns$elm_markdown$Parser$Token$minus = A2(
	$elm$parser$Parser$Advanced$Token,
	'-',
	$elm$parser$Parser$Expecting('a `-`'));
var $dillonkearns$elm_markdown$Markdown$Parser$setextLineParser = function () {
	var setextLevel = F3(
		function (level, levelToken, levelChar) {
			return A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(level),
					$elm$parser$Parser$Advanced$token(levelToken)),
				$elm$parser$Parser$Advanced$chompWhile(
					$elm$core$Basics$eq(levelChar)));
		});
	return A2(
		$elm$parser$Parser$Advanced$mapChompedString,
		F2(
			function (raw, level) {
				return A2($dillonkearns$elm_markdown$Markdown$RawBlock$SetextLine, level, raw);
			}),
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$dillonkearns$elm_markdown$Helpers$upToThreeSpaces),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$oneOf(
						_List_fromArray(
							[
								A3(
								setextLevel,
								$dillonkearns$elm_markdown$Markdown$RawBlock$LevelOne,
								$dillonkearns$elm_markdown$Parser$Token$equals,
								_Utils_chr('=')),
								A3(
								setextLevel,
								$dillonkearns$elm_markdown$Markdown$RawBlock$LevelTwo,
								$dillonkearns$elm_markdown$Parser$Token$minus,
								_Utils_chr('-'))
							])),
					$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Helpers$isSpaceOrTab)),
				$dillonkearns$elm_markdown$Helpers$endOfLineOrFile)));
}();
var $dillonkearns$elm_markdown$Markdown$RawBlock$TableDelimiter = function (a) {
	return {$: 'TableDelimiter', a: a};
};
var $dillonkearns$elm_markdown$Markdown$TableParser$chompSinglelineWhitespace = $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Helpers$isSpaceOrTab);
var $dillonkearns$elm_markdown$Parser$Extra$maybeChomp = function (condition) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$chompIf,
				condition,
				$elm$parser$Parser$Problem('Character not found')),
				$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)
			]));
};
var $dillonkearns$elm_markdown$Markdown$TableParser$requirePipeIfNotFirst = function (columns) {
	return $elm$core$List$isEmpty(columns) ? $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$dillonkearns$elm_markdown$Parser$Extra$tokenHelp('|'),
				$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)
			])) : $dillonkearns$elm_markdown$Parser$Extra$tokenHelp('|');
};
var $dillonkearns$elm_markdown$Markdown$TableParser$delimiterRowHelp = function (revDelimiterColumns) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$elm$parser$Parser$Advanced$backtrackable(
				A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(revDelimiterColumns);
					},
					$dillonkearns$elm_markdown$Parser$Extra$tokenHelp('|\n'))),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v1) {
					return $elm$parser$Parser$Advanced$Done(revDelimiterColumns);
				},
				$dillonkearns$elm_markdown$Parser$Extra$tokenHelp('\n')),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v2) {
					return $elm$parser$Parser$Advanced$Done(revDelimiterColumns);
				},
				$elm$parser$Parser$Advanced$end(
					$elm$parser$Parser$Expecting('end'))),
				$elm$parser$Parser$Advanced$backtrackable(
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							$elm$parser$Parser$Advanced$Done(revDelimiterColumns)),
						$dillonkearns$elm_markdown$Parser$Extra$tokenHelp('|')),
					$elm$parser$Parser$Advanced$end(
						$elm$parser$Parser$Expecting('end')))),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							function (column) {
								return $elm$parser$Parser$Advanced$Loop(
									A2($elm$core$List$cons, column, revDelimiterColumns));
							}),
						$dillonkearns$elm_markdown$Markdown$TableParser$requirePipeIfNotFirst(revDelimiterColumns)),
					$dillonkearns$elm_markdown$Markdown$TableParser$chompSinglelineWhitespace),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$getChompedString(
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0),
									$dillonkearns$elm_markdown$Parser$Extra$maybeChomp(
										function (c) {
											return _Utils_eq(
												c,
												_Utils_chr(':'));
										})),
								$dillonkearns$elm_markdown$Parser$Extra$oneOrMore(
									function (c) {
										return _Utils_eq(
											c,
											_Utils_chr('-'));
									})),
							$dillonkearns$elm_markdown$Parser$Extra$maybeChomp(
								function (c) {
									return _Utils_eq(
										c,
										_Utils_chr(':'));
								}))),
					$dillonkearns$elm_markdown$Markdown$TableParser$chompSinglelineWhitespace))
			]));
};
var $dillonkearns$elm_markdown$Markdown$Block$AlignCenter = {$: 'AlignCenter'};
var $dillonkearns$elm_markdown$Markdown$Block$AlignLeft = {$: 'AlignLeft'};
var $dillonkearns$elm_markdown$Markdown$Block$AlignRight = {$: 'AlignRight'};
var $dillonkearns$elm_markdown$Markdown$TableParser$delimiterToAlignment = function (cell) {
	var _v0 = _Utils_Tuple2(
		A2($elm$core$String$startsWith, ':', cell),
		A2($elm$core$String$endsWith, ':', cell));
	if (_v0.a) {
		if (_v0.b) {
			return $elm$core$Maybe$Just($dillonkearns$elm_markdown$Markdown$Block$AlignCenter);
		} else {
			return $elm$core$Maybe$Just($dillonkearns$elm_markdown$Markdown$Block$AlignLeft);
		}
	} else {
		if (_v0.b) {
			return $elm$core$Maybe$Just($dillonkearns$elm_markdown$Markdown$Block$AlignRight);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	}
};
var $dillonkearns$elm_markdown$Markdown$TableParser$delimiterRowParser = A2(
	$elm$parser$Parser$Advanced$andThen,
	function (delimiterRow) {
		var trimmed = delimiterRow.a.trimmed;
		var headers = delimiterRow.b;
		return $elm$core$List$isEmpty(headers) ? $elm$parser$Parser$Advanced$problem(
			$elm$parser$Parser$Expecting('Must have at least one column in delimiter row.')) : ((($elm$core$List$length(headers) === 1) && (!(A2($elm$core$String$startsWith, '|', trimmed) && A2($elm$core$String$endsWith, '|', trimmed)))) ? $elm$parser$Parser$Advanced$problem(
			$elm$parser$Parser$Problem('Tables with a single column must have pipes at the start and end of the delimiter row to avoid ambiguity.')) : $elm$parser$Parser$Advanced$succeed(delimiterRow));
	},
	A2(
		$elm$parser$Parser$Advanced$mapChompedString,
		F2(
			function (delimiterText, revDelimiterColumns) {
				return A2(
					$dillonkearns$elm_markdown$Markdown$Table$TableDelimiterRow,
					{
						raw: delimiterText,
						trimmed: $elm$core$String$trim(delimiterText)
					},
					A2(
						$elm$core$List$map,
						$dillonkearns$elm_markdown$Markdown$TableParser$delimiterToAlignment,
						$elm$core$List$reverse(revDelimiterColumns)));
			}),
		A2($elm$parser$Parser$Advanced$loop, _List_Nil, $dillonkearns$elm_markdown$Markdown$TableParser$delimiterRowHelp)));
var $dillonkearns$elm_markdown$Markdown$Parser$tableDelimiterInOpenParagraph = A2($elm$parser$Parser$Advanced$map, $dillonkearns$elm_markdown$Markdown$RawBlock$TableDelimiter, $dillonkearns$elm_markdown$Markdown$TableParser$delimiterRowParser);
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $dillonkearns$elm_markdown$Markdown$TableParser$standardizeRowLength = F2(
	function (expectedLength, row) {
		var rowLength = $elm$core$List$length(row);
		var _v0 = A2($elm$core$Basics$compare, expectedLength, rowLength);
		switch (_v0.$) {
			case 'LT':
				return A2($elm$core$List$take, expectedLength, row);
			case 'EQ':
				return row;
			default:
				return _Utils_ap(
					row,
					A2($elm$core$List$repeat, expectedLength - rowLength, ''));
		}
	});
var $dillonkearns$elm_markdown$Markdown$TableParser$bodyRowParser = function (expectedRowLength) {
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		function (row) {
			return ($elm$core$List$isEmpty(row) || A2($elm$core$List$all, $elm$core$String$isEmpty, row)) ? $elm$parser$Parser$Advanced$problem(
				$elm$parser$Parser$Problem('A line must have at least one column')) : $elm$parser$Parser$Advanced$succeed(
				A2($dillonkearns$elm_markdown$Markdown$TableParser$standardizeRowLength, expectedRowLength, row));
		},
		$dillonkearns$elm_markdown$Markdown$TableParser$rowParser);
};
var $dillonkearns$elm_markdown$Markdown$Parser$tableRowIfTableStarted = function (_v0) {
	var headers = _v0.a;
	var body = _v0.b;
	return A2(
		$elm$parser$Parser$Advanced$map,
		function (row) {
			return $dillonkearns$elm_markdown$Markdown$RawBlock$Table(
				A2(
					$dillonkearns$elm_markdown$Markdown$Table$Table,
					headers,
					_Utils_ap(
						body,
						_List_fromArray(
							[row]))));
		},
		$dillonkearns$elm_markdown$Markdown$TableParser$bodyRowParser(
			$elm$core$List$length(headers)));
};
var $dillonkearns$elm_markdown$Markdown$Block$H1 = {$: 'H1'};
var $dillonkearns$elm_markdown$Markdown$Block$H2 = {$: 'H2'};
var $dillonkearns$elm_markdown$Markdown$Block$H3 = {$: 'H3'};
var $dillonkearns$elm_markdown$Markdown$Block$H4 = {$: 'H4'};
var $dillonkearns$elm_markdown$Markdown$Block$H5 = {$: 'H5'};
var $dillonkearns$elm_markdown$Markdown$Block$H6 = {$: 'H6'};
var $dillonkearns$elm_markdown$Markdown$Parser$toHeading = function (level) {
	switch (level) {
		case 1:
			return $elm$core$Result$Ok($dillonkearns$elm_markdown$Markdown$Block$H1);
		case 2:
			return $elm$core$Result$Ok($dillonkearns$elm_markdown$Markdown$Block$H2);
		case 3:
			return $elm$core$Result$Ok($dillonkearns$elm_markdown$Markdown$Block$H3);
		case 4:
			return $elm$core$Result$Ok($dillonkearns$elm_markdown$Markdown$Block$H4);
		case 5:
			return $elm$core$Result$Ok($dillonkearns$elm_markdown$Markdown$Block$H5);
		case 6:
			return $elm$core$Result$Ok($dillonkearns$elm_markdown$Markdown$Block$H6);
		default:
			return $elm$core$Result$Err(
				$elm$parser$Parser$Expecting(
					'A heading with 1 to 6 #\'s, but found ' + $elm$core$String$fromInt(level)));
	}
};
var $dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock = function (a) {
	return {$: 'UnorderedListBlock', a: a};
};
var $dillonkearns$elm_markdown$Parser$Token$asterisk = A2(
	$elm$parser$Parser$Advanced$Token,
	'*',
	$elm$parser$Parser$Expecting('a `*`'));
var $dillonkearns$elm_markdown$Parser$Token$plus = A2(
	$elm$parser$Parser$Advanced$Token,
	'+',
	$elm$parser$Parser$Expecting('a `+`'));
var $dillonkearns$elm_markdown$Markdown$UnorderedList$listMarkerParser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Parser$Token$minus),
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$minus)),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Parser$Token$plus),
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$plus)),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Parser$Token$asterisk),
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$asterisk))
		]));
var $dillonkearns$elm_markdown$Markdown$ListItem$PlainItem = function (a) {
	return {$: 'PlainItem', a: a};
};
var $dillonkearns$elm_markdown$Markdown$ListItem$TaskItem = F2(
	function (a, b) {
		return {$: 'TaskItem', a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$ListItem$Complete = {$: 'Complete'};
var $dillonkearns$elm_markdown$Markdown$ListItem$Incomplete = {$: 'Incomplete'};
var $dillonkearns$elm_markdown$Markdown$ListItem$taskItemParser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$ListItem$Complete),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'[x] ',
					$elm$parser$Parser$ExpectingSymbol('[x] ')))),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$ListItem$Complete),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'[X] ',
					$elm$parser$Parser$ExpectingSymbol('[X] ')))),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$ListItem$Incomplete),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'[ ] ',
					$elm$parser$Parser$ExpectingSymbol('[ ] '))))
		]));
var $dillonkearns$elm_markdown$Parser$Extra$zeroOrMore = function (condition) {
	return $elm$parser$Parser$Advanced$chompWhile(condition);
};
var $dillonkearns$elm_markdown$Markdown$ListItem$parser = A2(
	$elm$parser$Parser$Advanced$keeper,
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$ListItem$TaskItem),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$dillonkearns$elm_markdown$Markdown$ListItem$taskItemParser,
					$dillonkearns$elm_markdown$Parser$Extra$zeroOrMore($dillonkearns$elm_markdown$Helpers$isSpaceOrTab))),
				$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$ListItem$PlainItem)
			])),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntilEndOr('\n')),
		$dillonkearns$elm_markdown$Helpers$endOfLineOrFile));
var $dillonkearns$elm_markdown$Markdown$UnorderedList$itemBody = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$Advanced$backtrackable(
					$dillonkearns$elm_markdown$Parser$Extra$oneOrMore($dillonkearns$elm_markdown$Helpers$isSpaceOrTab))),
			$dillonkearns$elm_markdown$Markdown$ListItem$parser),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(
				$dillonkearns$elm_markdown$Markdown$ListItem$PlainItem('')),
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$newline))
		]));
var $dillonkearns$elm_markdown$Markdown$UnorderedList$singleItemParser = function (listMarker) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$Advanced$backtrackable(
				$elm$parser$Parser$Advanced$symbol(listMarker))),
		$dillonkearns$elm_markdown$Markdown$UnorderedList$itemBody);
};
var $dillonkearns$elm_markdown$Markdown$UnorderedList$statementsHelp = F3(
	function (itemParser, firstItem, revStmts) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$map,
					function (stmt) {
						return $elm$parser$Parser$Advanced$Loop(
							A2($elm$core$List$cons, stmt, revStmts));
					},
					itemParser),
					$elm$parser$Parser$Advanced$succeed(
					$elm$parser$Parser$Advanced$Done(
						A2(
							$elm$core$List$cons,
							firstItem,
							$elm$core$List$reverse(revStmts))))
				]));
	});
var $dillonkearns$elm_markdown$Markdown$UnorderedList$parser = function () {
	var parseSubsequentItems = F2(
		function (listMarker, firstItem) {
			return A2(
				$elm$parser$Parser$Advanced$loop,
				_List_Nil,
				A2(
					$dillonkearns$elm_markdown$Markdown$UnorderedList$statementsHelp,
					$dillonkearns$elm_markdown$Markdown$UnorderedList$singleItemParser(listMarker),
					firstItem));
		});
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		$elm$core$Basics$identity,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(parseSubsequentItems),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$UnorderedList$listMarkerParser),
					$dillonkearns$elm_markdown$Parser$Extra$oneOrMore($dillonkearns$elm_markdown$Helpers$isSpaceOrTab))),
			$dillonkearns$elm_markdown$Markdown$ListItem$parser));
}();
var $dillonkearns$elm_markdown$Markdown$Parser$unorderedListBlock = function () {
	var parseListItem = function (unparsedListItem) {
		if (unparsedListItem.$ === 'TaskItem') {
			var completion = unparsedListItem.a;
			var body = unparsedListItem.b;
			return {
				body: $dillonkearns$elm_markdown$Markdown$RawBlock$UnparsedInlines(body),
				task: $elm$core$Maybe$Just(
					function () {
						if (completion.$ === 'Complete') {
							return true;
						} else {
							return false;
						}
					}())
			};
		} else {
			var body = unparsedListItem.a;
			return {
				body: $dillonkearns$elm_markdown$Markdown$RawBlock$UnparsedInlines(body),
				task: $elm$core$Maybe$Nothing
			};
		}
	};
	return A2(
		$elm$parser$Parser$Advanced$map,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$List$map(parseListItem),
			$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock),
		$dillonkearns$elm_markdown$Markdown$UnorderedList$parser);
}();
var $dillonkearns$elm_markdown$Markdown$Parser$childToBlocks = F2(
	function (node, blocks) {
		switch (node.$) {
			case 'Element':
				var tag = node.a;
				var attributes = node.b;
				var children = node.c;
				var _v28 = $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocks(children);
				if (_v28.$ === 'Ok') {
					var childrenAsBlocks = _v28.a;
					var block = $dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
						A3($dillonkearns$elm_markdown$Markdown$Block$HtmlElement, tag, attributes, childrenAsBlocks));
					return $elm$core$Result$Ok(
						A2($elm$core$List$cons, block, blocks));
				} else {
					var err = _v28.a;
					return $elm$core$Result$Err(err);
				}
			case 'Text':
				var innerText = node.a;
				var _v29 = $dillonkearns$elm_markdown$Markdown$Parser$parse(innerText);
				if (_v29.$ === 'Ok') {
					var value = _v29.a;
					return $elm$core$Result$Ok(
						_Utils_ap(
							$elm$core$List$reverse(value),
							blocks));
				} else {
					var error = _v29.a;
					return $elm$core$Result$Err(
						$elm$parser$Parser$Expecting(
							A2(
								$elm$core$String$join,
								'\n',
								A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$deadEndToString, error))));
				}
			case 'Comment':
				var string = node.a;
				return $elm$core$Result$Ok(
					A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
							$dillonkearns$elm_markdown$Markdown$Block$HtmlComment(string)),
						blocks));
			case 'Cdata':
				var string = node.a;
				return $elm$core$Result$Ok(
					A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
							$dillonkearns$elm_markdown$Markdown$Block$Cdata(string)),
						blocks));
			case 'ProcessingInstruction':
				var string = node.a;
				return $elm$core$Result$Ok(
					A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
							$dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction(string)),
						blocks));
			default:
				var declarationType = node.a;
				var content = node.b;
				return $elm$core$Result$Ok(
					A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
							A2($dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration, declarationType, content)),
						blocks));
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper = F2(
	function (referencesDict, _v23) {
		var unparsedInlines = _v23.a;
		var mappedReferencesDict = $elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$mapSecond(
					function (_v24) {
						var destination = _v24.destination;
						var title = _v24.title;
						return _Utils_Tuple2(destination, title);
					}),
				referencesDict));
		return A2(
			$elm$core$List$map,
			$dillonkearns$elm_markdown$Markdown$Parser$mapInline,
			A2($dillonkearns$elm_markdown$Markdown$InlineParser$parse, mappedReferencesDict, unparsedInlines));
	});
var $dillonkearns$elm_markdown$Markdown$Parser$mapInline = function (inline) {
	switch (inline.$) {
		case 'Text':
			var string = inline.a;
			return $dillonkearns$elm_markdown$Markdown$Block$Text(string);
		case 'HardLineBreak':
			return $dillonkearns$elm_markdown$Markdown$Block$HardLineBreak;
		case 'CodeInline':
			var string = inline.a;
			return $dillonkearns$elm_markdown$Markdown$Block$CodeSpan(string);
		case 'Link':
			var string = inline.a;
			var maybeString = inline.b;
			var inlines = inline.c;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Block$Link,
				string,
				maybeString,
				A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
		case 'Image':
			var string = inline.a;
			var maybeString = inline.b;
			var inlines = inline.c;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Block$Image,
				string,
				maybeString,
				A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
		case 'HtmlInline':
			var node = inline.a;
			return $dillonkearns$elm_markdown$Markdown$Block$HtmlInline(
				$dillonkearns$elm_markdown$Markdown$Parser$nodeToRawBlock(node));
		default:
			var level = inline.a;
			var inlines = inline.b;
			switch (level) {
				case 1:
					return $dillonkearns$elm_markdown$Markdown$Block$Emphasis(
						A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
				case 2:
					return $dillonkearns$elm_markdown$Markdown$Block$Strong(
						A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
				default:
					return $dillonkearns$elm_markdown$Markdown$Block$Strong(
						A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
			}
	}
};
var $dillonkearns$elm_markdown$Markdown$Parser$nodeToRawBlock = function (node) {
	switch (node.$) {
		case 'Text':
			var innerText = node.a;
			return $dillonkearns$elm_markdown$Markdown$Block$HtmlComment('TODO this never happens, but use types to drop this case.');
		case 'Element':
			var tag = node.a;
			var attributes = node.b;
			var children = node.c;
			var parseChild = function (child) {
				if (child.$ === 'Text') {
					var text = child.a;
					return $dillonkearns$elm_markdown$Markdown$Parser$textNodeToBlocks(text);
				} else {
					return _List_fromArray(
						[
							$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
							$dillonkearns$elm_markdown$Markdown$Parser$nodeToRawBlock(child))
						]);
				}
			};
			return A3(
				$dillonkearns$elm_markdown$Markdown$Block$HtmlElement,
				tag,
				attributes,
				A2($elm$core$List$concatMap, parseChild, children));
		case 'Comment':
			var string = node.a;
			return $dillonkearns$elm_markdown$Markdown$Block$HtmlComment(string);
		case 'Cdata':
			var string = node.a;
			return $dillonkearns$elm_markdown$Markdown$Block$Cdata(string);
		case 'ProcessingInstruction':
			var string = node.a;
			return $dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction(string);
		default:
			var declarationType = node.a;
			var content = node.b;
			return A2($dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration, declarationType, content);
	}
};
var $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocks = function (children) {
	return A2($dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocksHelp, children, _List_Nil);
};
var $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocksHelp = F2(
	function (remaining, soFar) {
		nodesToBlocksHelp:
		while (true) {
			if (remaining.b) {
				var node = remaining.a;
				var rest = remaining.b;
				var _v18 = A2($dillonkearns$elm_markdown$Markdown$Parser$childToBlocks, node, soFar);
				if (_v18.$ === 'Ok') {
					var newSoFar = _v18.a;
					var $temp$remaining = rest,
						$temp$soFar = newSoFar;
					remaining = $temp$remaining;
					soFar = $temp$soFar;
					continue nodesToBlocksHelp;
				} else {
					var e = _v18.a;
					return $elm$core$Result$Err(e);
				}
			} else {
				return $elm$core$Result$Ok(
					$elm$core$List$reverse(soFar));
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$parse = function (input) {
	var _v14 = A2(
		$elm$parser$Parser$Advanced$run,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
			$dillonkearns$elm_markdown$Helpers$endOfFile),
		input);
	if (_v14.$ === 'Err') {
		var e = _v14.a;
		return $elm$core$Result$Err(e);
	} else {
		var v = _v14.a;
		var _v15 = $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines(v);
		if (_v15.$ === 'Err') {
			var e = _v15.a;
			return A2(
				$elm$parser$Parser$Advanced$run,
				$elm$parser$Parser$Advanced$problem(e),
				'');
		} else {
			var blocks = _v15.a;
			var isNotEmptyParagraph = function (block) {
				if ((block.$ === 'Paragraph') && (!block.a.b)) {
					return false;
				} else {
					return true;
				}
			};
			return $elm$core$Result$Ok(
				A2($elm$core$List$filter, isNotEmptyParagraph, blocks));
		}
	}
};
var $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines = function (state) {
	return A3($dillonkearns$elm_markdown$Markdown$Parser$parseAllInlinesHelp, state, state.rawBlocks, _List_Nil);
};
var $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlinesHelp = F3(
	function (state, rawBlocks, parsedBlocks) {
		parseAllInlinesHelp:
		while (true) {
			if (rawBlocks.b) {
				var rawBlock = rawBlocks.a;
				var rest = rawBlocks.b;
				var _v13 = A2($dillonkearns$elm_markdown$Markdown$Parser$parseInlines, state.linkReferenceDefinitions, rawBlock);
				switch (_v13.$) {
					case 'ParsedBlock':
						var newParsedBlock = _v13.a;
						var $temp$state = state,
							$temp$rawBlocks = rest,
							$temp$parsedBlocks = A2($elm$core$List$cons, newParsedBlock, parsedBlocks);
						state = $temp$state;
						rawBlocks = $temp$rawBlocks;
						parsedBlocks = $temp$parsedBlocks;
						continue parseAllInlinesHelp;
					case 'EmptyBlock':
						var $temp$state = state,
							$temp$rawBlocks = rest,
							$temp$parsedBlocks = parsedBlocks;
						state = $temp$state;
						rawBlocks = $temp$rawBlocks;
						parsedBlocks = $temp$parsedBlocks;
						continue parseAllInlinesHelp;
					default:
						var e = _v13.a;
						return $elm$core$Result$Err(e);
				}
			} else {
				return $elm$core$Result$Ok(parsedBlocks);
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$parseHeaderInlines = F2(
	function (linkReferences, header) {
		return A2(
			$elm$core$List$map,
			function (_v11) {
				var label = _v11.label;
				var alignment = _v11.alignment;
				return A3(
					$dillonkearns$elm_markdown$Markdown$Parser$parseRawInline,
					linkReferences,
					function (parsedHeaderLabel) {
						return {alignment: alignment, label: parsedHeaderLabel};
					},
					$dillonkearns$elm_markdown$Markdown$RawBlock$UnparsedInlines(label));
			},
			header);
	});
var $dillonkearns$elm_markdown$Markdown$Parser$parseInlines = F2(
	function (linkReferences, rawBlock) {
		switch (rawBlock.$) {
			case 'Heading':
				var level = rawBlock.a;
				var unparsedInlines = rawBlock.b;
				var _v5 = $dillonkearns$elm_markdown$Markdown$Parser$toHeading(level);
				if (_v5.$ === 'Ok') {
					var parsedLevel = _v5.a;
					return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
						A2(
							$dillonkearns$elm_markdown$Markdown$Block$Heading,
							parsedLevel,
							A2($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper, linkReferences, unparsedInlines)));
				} else {
					var e = _v5.a;
					return $dillonkearns$elm_markdown$Markdown$Parser$InlineProblem(e);
				}
			case 'OpenBlockOrParagraph':
				var unparsedInlines = rawBlock.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$Paragraph(
						A2($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper, linkReferences, unparsedInlines)));
			case 'Html':
				var html = rawBlock.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(html));
			case 'UnorderedListBlock':
				var unparsedItems = rawBlock.a;
				var parseItem = function (unparsed) {
					var task = function () {
						var _v6 = unparsed.task;
						if (_v6.$ === 'Just') {
							if (!_v6.a) {
								return $dillonkearns$elm_markdown$Markdown$Block$IncompleteTask;
							} else {
								return $dillonkearns$elm_markdown$Markdown$Block$CompletedTask;
							}
						} else {
							return $dillonkearns$elm_markdown$Markdown$Block$NoTask;
						}
					}();
					var parsedInlines = A3($dillonkearns$elm_markdown$Markdown$Parser$parseRawInline, linkReferences, $elm$core$Basics$identity, unparsed.body);
					return A2($dillonkearns$elm_markdown$Markdown$Block$ListItem, task, parsedInlines);
				};
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$UnorderedList(
						A2($elm$core$List$map, parseItem, unparsedItems)));
			case 'OrderedListBlock':
				var startingIndex = rawBlock.a;
				var unparsedInlines = rawBlock.b;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					A2(
						$dillonkearns$elm_markdown$Markdown$Block$OrderedList,
						startingIndex,
						A2(
							$elm$core$List$map,
							A2($dillonkearns$elm_markdown$Markdown$Parser$parseRawInline, linkReferences, $elm$core$Basics$identity),
							unparsedInlines)));
			case 'CodeBlock':
				var codeBlock = rawBlock.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$CodeBlock(codeBlock));
			case 'ThematicBreak':
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock($dillonkearns$elm_markdown$Markdown$Block$ThematicBreak);
			case 'BlankLine':
				return $dillonkearns$elm_markdown$Markdown$Parser$EmptyBlock;
			case 'BlockQuote':
				var rawBlocks = rawBlock.a;
				var _v7 = A2(
					$elm$parser$Parser$Advanced$run,
					$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
					rawBlocks);
				if (_v7.$ === 'Ok') {
					var value = _v7.a;
					var _v8 = $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines(value);
					if (_v8.$ === 'Ok') {
						var parsedBlocks = _v8.a;
						return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
							$dillonkearns$elm_markdown$Markdown$Block$BlockQuote(parsedBlocks));
					} else {
						var e = _v8.a;
						return $dillonkearns$elm_markdown$Markdown$Parser$InlineProblem(e);
					}
				} else {
					var error = _v7.a;
					return $dillonkearns$elm_markdown$Markdown$Parser$InlineProblem(
						$elm$parser$Parser$Problem(
							$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(error)));
				}
			case 'IndentedCodeBlock':
				var codeBlockBody = rawBlock.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$CodeBlock(
						{body: codeBlockBody, language: $elm$core$Maybe$Nothing}));
			case 'Table':
				var _v9 = rawBlock.a;
				var header = _v9.a;
				var rows = _v9.b;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					A2(
						$dillonkearns$elm_markdown$Markdown$Block$Table,
						A2($dillonkearns$elm_markdown$Markdown$Parser$parseHeaderInlines, linkReferences, header),
						A2($dillonkearns$elm_markdown$Markdown$Parser$parseRowInlines, linkReferences, rows)));
			case 'TableDelimiter':
				var _v10 = rawBlock.a;
				var text = _v10.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$Paragraph(
						A2(
							$dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper,
							linkReferences,
							$dillonkearns$elm_markdown$Markdown$RawBlock$UnparsedInlines(text.raw))));
			default:
				var raw = rawBlock.b;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$Paragraph(
						A2(
							$dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper,
							linkReferences,
							$dillonkearns$elm_markdown$Markdown$RawBlock$UnparsedInlines(raw))));
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$parseRawInline = F3(
	function (linkReferences, wrap, unparsedInlines) {
		return wrap(
			A2($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper, linkReferences, unparsedInlines));
	});
var $dillonkearns$elm_markdown$Markdown$Parser$parseRowInlines = F2(
	function (linkReferences, rows) {
		return A2(
			$elm$core$List$map,
			function (row) {
				return A2(
					$elm$core$List$map,
					function (column) {
						return A3(
							$dillonkearns$elm_markdown$Markdown$Parser$parseRawInline,
							linkReferences,
							$elm$core$Basics$identity,
							$dillonkearns$elm_markdown$Markdown$RawBlock$UnparsedInlines(column));
					},
					row);
			},
			rows);
	});
var $dillonkearns$elm_markdown$Markdown$Parser$stepRawBlock = function (revStmts) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v2) {
					return $elm$parser$Parser$Advanced$Done(revStmts);
				},
				$dillonkearns$elm_markdown$Helpers$endOfFile),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (reference) {
					return $elm$parser$Parser$Advanced$Loop(
						A2($dillonkearns$elm_markdown$Markdown$Parser$addReference, revStmts, reference));
				},
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$parser)),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (block) {
					return $elm$parser$Parser$Advanced$Loop(
						A2($dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks, revStmts, block));
				},
				function () {
					var _v3 = revStmts.rawBlocks;
					_v3$2:
					while (true) {
						if (_v3.b) {
							switch (_v3.a.$) {
								case 'OpenBlockOrParagraph':
									return $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterOpenBlockOrParagraphParser();
								case 'Table':
									var table = _v3.a.a;
									return $elm$parser$Parser$Advanced$oneOf(
										_List_fromArray(
											[
												$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser(),
												$dillonkearns$elm_markdown$Markdown$Parser$tableRowIfTableStarted(table)
											]));
								default:
									break _v3$2;
							}
						} else {
							break _v3$2;
						}
					}
					return $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser();
				}()),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (block) {
					return $elm$parser$Parser$Advanced$Loop(
						A2($dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks, revStmts, block));
				},
				$dillonkearns$elm_markdown$Markdown$Parser$openBlockOrParagraphParser)
			]));
};
var $dillonkearns$elm_markdown$Markdown$Parser$textNodeToBlocks = function (textNodeValue) {
	return A2(
		$elm$core$Result$withDefault,
		_List_Nil,
		$dillonkearns$elm_markdown$Markdown$Parser$parse(textNodeValue));
};
var $dillonkearns$elm_markdown$Markdown$Parser$xmlNodeToHtmlNode = function (xmlNode) {
	switch (xmlNode.$) {
		case 'Text':
			var innerText = xmlNode.a;
			return $elm$parser$Parser$Advanced$succeed(
				$dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph(
					$dillonkearns$elm_markdown$Markdown$RawBlock$UnparsedInlines(innerText)));
		case 'Element':
			var tag = xmlNode.a;
			var attributes = xmlNode.b;
			var children = xmlNode.c;
			var _v1 = $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocks(children);
			if (_v1.$ === 'Ok') {
				var parsedChildren = _v1.a;
				return $elm$parser$Parser$Advanced$succeed(
					$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
						A3($dillonkearns$elm_markdown$Markdown$Block$HtmlElement, tag, attributes, parsedChildren)));
			} else {
				var err = _v1.a;
				return $elm$parser$Parser$Advanced$problem(err);
			}
		case 'Comment':
			var string = xmlNode.a;
			return $elm$parser$Parser$Advanced$succeed(
				$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
					$dillonkearns$elm_markdown$Markdown$Block$HtmlComment(string)));
		case 'Cdata':
			var string = xmlNode.a;
			return $elm$parser$Parser$Advanced$succeed(
				$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
					$dillonkearns$elm_markdown$Markdown$Block$Cdata(string)));
		case 'ProcessingInstruction':
			var string = xmlNode.a;
			return $elm$parser$Parser$Advanced$succeed(
				$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
					$dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction(string)));
		default:
			var declarationType = xmlNode.a;
			var content = xmlNode.b;
			return $elm$parser$Parser$Advanced$succeed(
				$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
					A2($dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration, declarationType, content)));
	}
};
function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser() {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$dillonkearns$elm_markdown$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock,
				$dillonkearns$elm_markdown$Markdown$Parser$blankLine,
				$dillonkearns$elm_markdown$Markdown$Parser$blockQuote,
				A2(
				$elm$parser$Parser$Advanced$map,
				$dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock,
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$CodeBlock$parser)),
				$dillonkearns$elm_markdown$Markdown$Parser$indentedCodeBlock,
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v26) {
					return $dillonkearns$elm_markdown$Markdown$RawBlock$ThematicBreak;
				},
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$ThematicBreak$parser)),
				$dillonkearns$elm_markdown$Markdown$Parser$unorderedListBlock,
				$dillonkearns$elm_markdown$Markdown$Parser$orderedListBlock(false),
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Heading$parser),
				$dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser()
			]));
}
function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterOpenBlockOrParagraphParser() {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$dillonkearns$elm_markdown$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock,
				$dillonkearns$elm_markdown$Markdown$Parser$blankLine,
				$dillonkearns$elm_markdown$Markdown$Parser$blockQuote,
				A2(
				$elm$parser$Parser$Advanced$map,
				$dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock,
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$CodeBlock$parser)),
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Parser$setextLineParser),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v25) {
					return $dillonkearns$elm_markdown$Markdown$RawBlock$ThematicBreak;
				},
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$ThematicBreak$parser)),
				$dillonkearns$elm_markdown$Markdown$Parser$unorderedListBlock,
				$dillonkearns$elm_markdown$Markdown$Parser$orderedListBlock(true),
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Heading$parser),
				$dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser(),
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Parser$tableDelimiterInOpenParagraph)
			]));
}
function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser() {
	return A2($elm$parser$Parser$Advanced$andThen, $dillonkearns$elm_markdown$Markdown$Parser$xmlNodeToHtmlNode, $dillonkearns$elm_markdown$HtmlParser$html);
}
function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser() {
	return A2(
		$elm$parser$Parser$Advanced$loop,
		{linkReferenceDefinitions: _List_Nil, rawBlocks: _List_Nil},
		$dillonkearns$elm_markdown$Markdown$Parser$stepRawBlock);
}
try {
	var $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockNotAfterOpenBlockOrParagraphParser = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser();
	$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser = function () {
		return $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockNotAfterOpenBlockOrParagraphParser;
	};
	var $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockAfterOpenBlockOrParagraphParser = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterOpenBlockOrParagraphParser();
	$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterOpenBlockOrParagraphParser = function () {
		return $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockAfterOpenBlockOrParagraphParser;
	};
	var $dillonkearns$elm_markdown$Markdown$Parser$htmlParser = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser();
	$dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser = function () {
		return $dillonkearns$elm_markdown$Markdown$Parser$htmlParser;
	};
	var $dillonkearns$elm_markdown$Markdown$Parser$rawBlockParser = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser();
	$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser = function () {
		return $dillonkearns$elm_markdown$Markdown$Parser$rawBlockParser;
	};
} catch ($) {
	throw 'Some top-level definitions from `Markdown.Parser` are causing infinite recursion:\n\n  ?????????????????????\n  ???    childToBlocks\n  ???     ???\n  ???    mergeableBlockNotAfterOpenBlockOrParagraphParser\n  ???     ???\n  ???    mergeableBlockAfterOpenBlockOrParagraphParser\n  ???     ???\n  ???    htmlParser\n  ???     ???\n  ???    inlineParseHelper\n  ???     ???\n  ???    mapInline\n  ???     ???\n  ???    nodeToRawBlock\n  ???     ???\n  ???    nodesToBlocks\n  ???     ???\n  ???    nodesToBlocksHelp\n  ???     ???\n  ???    parse\n  ???     ???\n  ???    parseAllInlines\n  ???     ???\n  ???    parseAllInlinesHelp\n  ???     ???\n  ???    parseHeaderInlines\n  ???     ???\n  ???    parseInlines\n  ???     ???\n  ???    parseRawInline\n  ???     ???\n  ???    parseRowInlines\n  ???     ???\n  ???    rawBlockParser\n  ???     ???\n  ???    stepRawBlock\n  ???     ???\n  ???    textNodeToBlocks\n  ???     ???\n  ???    xmlNodeToHtmlNode\n  ?????????????????????\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $elm$core$Result$map2 = F3(
	function (func, ra, rb) {
		if (ra.$ === 'Err') {
			var x = ra.a;
			return $elm$core$Result$Err(x);
		} else {
			var a = ra.a;
			if (rb.$ === 'Err') {
				var x = rb.a;
				return $elm$core$Result$Err(x);
			} else {
				var b = rb.a;
				return $elm$core$Result$Ok(
					A2(func, a, b));
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$combineResults = A2(
	$elm$core$List$foldr,
	$elm$core$Result$map2($elm$core$List$cons),
	$elm$core$Result$Ok(_List_Nil));
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Block$foldl = F3(
	function (_function, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var block = list.a;
				var remainingBlocks = list.b;
				switch (block.$) {
					case 'HtmlBlock':
						var html = block.a;
						if (html.$ === 'HtmlElement') {
							var children = html.c;
							var $temp$function = _function,
								$temp$acc = A2(_function, block, acc),
								$temp$list = _Utils_ap(children, remainingBlocks);
							_function = $temp$function;
							acc = $temp$acc;
							list = $temp$list;
							continue foldl;
						} else {
							var $temp$function = _function,
								$temp$acc = A2(_function, block, acc),
								$temp$list = remainingBlocks;
							_function = $temp$function;
							acc = $temp$acc;
							list = $temp$list;
							continue foldl;
						}
					case 'UnorderedList':
						var listItems = block.a;
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 'OrderedList':
						var _int = block.a;
						var lists = block.b;
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 'BlockQuote':
						var blocks = block.a;
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = _Utils_ap(blocks, remainingBlocks);
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 'Heading':
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 'Paragraph':
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 'Table':
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 'CodeBlock':
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					default:
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText = function (block) {
	switch (block.$) {
		case 'Paragraph':
			var inlines = block.a;
			return $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines);
		case 'HtmlBlock':
			var html = block.a;
			if (html.$ === 'HtmlElement') {
				var blocks = html.c;
				return A3(
					$dillonkearns$elm_markdown$Markdown$Block$foldl,
					F2(
						function (nestedBlock, soFar) {
							return _Utils_ap(
								soFar,
								$dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText(nestedBlock));
						}),
					'',
					blocks);
			} else {
				return '';
			}
		case 'UnorderedList':
			var items = block.a;
			return A2(
				$elm$core$String$join,
				'\n',
				A2(
					$elm$core$List$map,
					function (_v4) {
						var task = _v4.a;
						var inlines = _v4.b;
						return $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines);
					},
					items));
		case 'OrderedList':
			var _int = block.a;
			var items = block.b;
			return A2(
				$elm$core$String$join,
				'\n',
				A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Block$extractInlineText, items));
		case 'BlockQuote':
			var blocks = block.a;
			return A2(
				$elm$core$String$join,
				'\n',
				A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText, blocks));
		case 'Heading':
			var headingLevel = block.a;
			var inlines = block.b;
			return $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines);
		case 'Table':
			var header = block.a;
			var rows = block.b;
			return A2(
				$elm$core$String$join,
				'\n',
				$elm$core$List$concat(
					_List_fromArray(
						[
							A2(
							$elm$core$List$map,
							$dillonkearns$elm_markdown$Markdown$Block$extractInlineText,
							A2(
								$elm$core$List$map,
								function ($) {
									return $.label;
								},
								header)),
							$elm$core$List$concat(
							A2(
								$elm$core$List$map,
								$elm$core$List$map($dillonkearns$elm_markdown$Markdown$Block$extractInlineText),
								rows))
						])));
		case 'CodeBlock':
			var body = block.a.body;
			return body;
		default:
			return '';
	}
};
var $dillonkearns$elm_markdown$Markdown$Block$extractInlineText = function (inlines) {
	return A3($elm$core$List$foldl, $dillonkearns$elm_markdown$Markdown$Block$extractTextHelp, '', inlines);
};
var $dillonkearns$elm_markdown$Markdown$Block$extractTextHelp = F2(
	function (inline, text) {
		switch (inline.$) {
			case 'Text':
				var str = inline.a;
				return _Utils_ap(text, str);
			case 'HardLineBreak':
				return text + ' ';
			case 'CodeSpan':
				var str = inline.a;
				return _Utils_ap(text, str);
			case 'Link':
				var inlines = inline.c;
				return _Utils_ap(
					text,
					$dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
			case 'Image':
				var inlines = inline.c;
				return _Utils_ap(
					text,
					$dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
			case 'HtmlInline':
				var html = inline.a;
				if (html.$ === 'HtmlElement') {
					var blocks = html.c;
					return A3(
						$dillonkearns$elm_markdown$Markdown$Block$foldl,
						F2(
							function (block, soFar) {
								return _Utils_ap(
									soFar,
									$dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText(block));
							}),
						text,
						blocks);
				} else {
					return text;
				}
			case 'Strong':
				var inlines = inline.a;
				return _Utils_ap(
					text,
					$dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
			default:
				var inlines = inline.a;
				return _Utils_ap(
					text,
					$dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
		}
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderHtml = F5(
	function (tagName, attributes, children, _v0, renderedChildren) {
		var htmlRenderer = _v0.a;
		return A2(
			$elm$core$Result$andThen,
			function (okChildren) {
				return A2(
					$elm$core$Result$map,
					function (myRenderer) {
						return myRenderer(okChildren);
					},
					A3(htmlRenderer, tagName, attributes, children));
			},
			$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(renderedChildren));
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$foldThing = F3(
	function (renderer, topLevelInline, soFar) {
		var _v7 = A2($dillonkearns$elm_markdown$Markdown$Renderer$renderSingleInline, renderer, topLevelInline);
		if (_v7.$ === 'Just') {
			var inline = _v7.a;
			return A2($elm$core$List$cons, inline, soFar);
		} else {
			return soFar;
		}
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderHelper = F2(
	function (renderer, blocks) {
		return A2(
			$elm$core$List$filterMap,
			$dillonkearns$elm_markdown$Markdown$Renderer$renderHelperSingle(renderer),
			blocks);
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderHelperSingle = function (renderer) {
	return function (block) {
		switch (block.$) {
			case 'Heading':
				var level = block.a;
				var content = block.b;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						function (children) {
							return renderer.heading(
								{
									children: children,
									level: level,
									rawText: $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(content)
								});
						},
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, content)));
			case 'Paragraph':
				var content = block.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.paragraph,
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, content)));
			case 'HtmlBlock':
				var html = block.a;
				if (html.$ === 'HtmlElement') {
					var tag = html.a;
					var attributes = html.b;
					var children = html.c;
					return $elm$core$Maybe$Just(
						A4($dillonkearns$elm_markdown$Markdown$Renderer$renderHtmlNode, renderer, tag, attributes, children));
				} else {
					return $elm$core$Maybe$Nothing;
				}
			case 'UnorderedList':
				var items = block.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.unorderedList,
						$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
							A2(
								$elm$core$List$map,
								function (_v4) {
									var task = _v4.a;
									var children = _v4.b;
									return A2(
										$elm$core$Result$map,
										function (renderedBody) {
											return A2($dillonkearns$elm_markdown$Markdown$Block$ListItem, task, renderedBody);
										},
										A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, children));
								},
								items))));
			case 'OrderedList':
				var startingIndex = block.a;
				var items = block.b;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.orderedList(startingIndex),
						$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
							A2(
								$elm$core$List$map,
								$dillonkearns$elm_markdown$Markdown$Renderer$renderStyled(renderer),
								items))));
			case 'CodeBlock':
				var codeBlock = block.a;
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(
						renderer.codeBlock(codeBlock)));
			case 'ThematicBreak':
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(renderer.thematicBreak));
			case 'BlockQuote':
				var nestedBlocks = block.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.blockQuote,
						$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
							A2($dillonkearns$elm_markdown$Markdown$Renderer$renderHelper, renderer, nestedBlocks))));
			default:
				var header = block.a;
				var rows = block.b;
				var renderedHeaderCells = $dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
					A2(
						$elm$core$List$map,
						function (_v6) {
							var label = _v6.label;
							var alignment = _v6.alignment;
							return A2(
								$elm$core$Result$map,
								$elm$core$Tuple$pair(alignment),
								A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, label));
						},
						header));
				var renderedHeader = A2(
					$elm$core$Result$map,
					function (listListView) {
						return renderer.tableHeader(
							$elm$core$List$singleton(
								renderer.tableRow(
									A2(
										$elm$core$List$map,
										function (_v5) {
											var maybeAlignment = _v5.a;
											var item = _v5.b;
											return A2(renderer.tableHeaderCell, maybeAlignment, item);
										},
										listListView))));
					},
					renderedHeaderCells);
				var renderedBody = function (r) {
					return $elm$core$List$isEmpty(r) ? _List_Nil : _List_fromArray(
						[
							renderer.tableBody(r)
						]);
				};
				var alignmentForColumn = function (columnIndex) {
					return A2(
						$elm$core$Maybe$andThen,
						function ($) {
							return $.alignment;
						},
						$elm$core$List$head(
							A2($elm$core$List$drop, columnIndex, header)));
				};
				var renderRow = function (cells) {
					return A2(
						$elm$core$Result$map,
						renderer.tableRow,
						A2(
							$elm$core$Result$map,
							$elm$core$List$indexedMap(
								F2(
									function (index, cell) {
										return A2(
											renderer.tableCell,
											alignmentForColumn(index),
											cell);
									})),
							$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
								A2(
									$elm$core$List$map,
									$dillonkearns$elm_markdown$Markdown$Renderer$renderStyled(renderer),
									cells))));
				};
				var renderedRows = $dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
					A2($elm$core$List$map, renderRow, rows));
				return $elm$core$Maybe$Just(
					A3(
						$elm$core$Result$map2,
						F2(
							function (h, r) {
								return renderer.table(
									A2(
										$elm$core$List$cons,
										h,
										renderedBody(r)));
							}),
						renderedHeader,
						renderedRows));
		}
	};
};
var $dillonkearns$elm_markdown$Markdown$Renderer$renderHtmlNode = F4(
	function (renderer, tag, attributes, children) {
		return A5(
			$dillonkearns$elm_markdown$Markdown$Renderer$renderHtml,
			tag,
			attributes,
			children,
			renderer.html,
			A2($dillonkearns$elm_markdown$Markdown$Renderer$renderHelper, renderer, children));
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderSingleInline = F2(
	function (renderer, inline) {
		switch (inline.$) {
			case 'Strong':
				var innerInlines = inline.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.strong,
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, innerInlines)));
			case 'Emphasis':
				var innerInlines = inline.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.emphasis,
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, innerInlines)));
			case 'Image':
				var src = inline.a;
				var title = inline.b;
				var children = inline.c;
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(
						renderer.image(
							{
								alt: $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(children),
								src: src,
								title: title
							})));
			case 'Text':
				var string = inline.a;
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(
						renderer.text(string)));
			case 'CodeSpan':
				var string = inline.a;
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(
						renderer.codeSpan(string)));
			case 'Link':
				var destination = inline.a;
				var title = inline.b;
				var inlines = inline.c;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$andThen,
						function (children) {
							return $elm$core$Result$Ok(
								A2(
									renderer.link,
									{destination: destination, title: title},
									children));
						},
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, inlines)));
			case 'HardLineBreak':
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(renderer.hardLineBreak));
			default:
				var html = inline.a;
				if (html.$ === 'HtmlElement') {
					var tag = html.a;
					var attributes = html.b;
					var children = html.c;
					return $elm$core$Maybe$Just(
						A4($dillonkearns$elm_markdown$Markdown$Renderer$renderHtmlNode, renderer, tag, attributes, children));
				} else {
					return $elm$core$Maybe$Nothing;
				}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderStyled = F2(
	function (renderer, styledStrings) {
		return $dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
			A3(
				$elm$core$List$foldr,
				$dillonkearns$elm_markdown$Markdown$Renderer$foldThing(renderer),
				_List_Nil,
				styledStrings));
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$render = F2(
	function (renderer, ast) {
		return $dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
			A2($dillonkearns$elm_markdown$Markdown$Renderer$renderHelper, renderer, ast));
	});
var $author$project$Main$markdownDocument = {
	body: function (markdownBody) {
		return $elm$core$Result$Ok(
			A2(
				$mdgriffith$elm_ui$Element$paragraph,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
					]),
				$elm$core$List$singleton(
					$mdgriffith$elm_ui$Element$html(
						A2(
							$elm$html$Html$div,
							_List_Nil,
							A2(
								$elm$core$Result$withDefault,
								_List_fromArray(
									[
										$elm$html$Html$text('')
									]),
								A2(
									$dillonkearns$elm_markdown$Markdown$Renderer$render,
									$dillonkearns$elm_markdown$Markdown$Renderer$defaultHtmlRenderer,
									A2(
										$elm$core$Result$withDefault,
										_List_Nil,
										$dillonkearns$elm_markdown$Markdown$Parser$parse(markdownBody)))))))));
	},
	extension: 'md',
	metadata: $author$project$Metadata$decoder
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $author$project$Main$subscriptions = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Platform$Sub$none;
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$AppMsg = function (a) {
	return {$: 'AppMsg', a: a};
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$HotReloadComplete = function (a) {
	return {$: 'HotReloadComplete', a: a};
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$LinkClicked = function (a) {
	return {$: 'LinkClicked', a: a};
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Model = function (a) {
	return {$: 'Model', a: a};
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$StartingHotReload = {$: 'StartingHotReload'};
var $dillonkearns$elm_pages$Pages$Internal$Platform$UrlChanged = function (a) {
	return {$: 'UrlChanged', a: a};
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$UserMsg = function (a) {
	return {$: 'UserMsg', a: a};
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$application = _Browser_application;
var $dillonkearns$elm_pages$Pages$Internal$Platform$ContentJson = F2(
	function (body, staticData) {
		return {body: body, staticData: staticData};
	});
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $dillonkearns$elm_pages$RequestsAndPending$decoder = $elm$json$Json$Decode$dict(
	A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $elm$json$Json$Decode$string));
var $dillonkearns$elm_pages$Pages$Internal$Platform$contentJsonDecoder = A3(
	$elm$json$Json$Decode$map2,
	$dillonkearns$elm_pages$Pages$Internal$Platform$ContentJson,
	A2($elm$json$Json$Decode$field, 'body', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'staticData', $dillonkearns$elm_pages$RequestsAndPending$decoder));
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $dillonkearns$elm_pages$Pages$Internal$Platform$DevClient = function (a) {
	return {$: 'DevClient', a: a};
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$HmrLoaded = {$: 'HmrLoaded'};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Prerender = {$: 'Prerender'};
var $dillonkearns$elm_pages$Pages$Internal$Platform$ProdClient = {$: 'ProdClient'};
var $dillonkearns$elm_pages$Pages$Internal$Platform$UpdateCache = function (a) {
	return {$: 'UpdateCache', a: a};
};
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2(
					$elm$core$Task$onError,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Err),
					A2(
						$elm$core$Task$andThen,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
							$elm$core$Result$Ok),
						task))));
	});
var $dillonkearns$elm_pages$Pages$ContentCache$resultFolder = F2(
	function (current, soFarResult) {
		if (soFarResult.$ === 'Ok') {
			var soFarOk = soFarResult.a;
			if (current.$ === 'Ok') {
				var currentOk = current.a;
				return $elm$core$Result$Ok(
					A2($elm$core$List$cons, currentOk, soFarOk));
			} else {
				var error = current.a;
				return $elm$core$Result$Err(
					_List_fromArray(
						[error]));
			}
		} else {
			var soFarErr = soFarResult.a;
			if (current.$ === 'Ok') {
				var currentOk = current.a;
				return $elm$core$Result$Err(soFarErr);
			} else {
				var error = current.a;
				return $elm$core$Result$Err(
					A2($elm$core$List$cons, error, soFarErr));
			}
		}
	});
var $dillonkearns$elm_pages$Pages$ContentCache$combine = function (list) {
	return A3(
		$elm$core$List$foldr,
		$dillonkearns$elm_pages$Pages$ContentCache$resultFolder,
		$elm$core$Result$Ok(_List_Nil),
		list);
};
var $dillonkearns$elm_pages$Pages$ContentCache$combineTupleResults = function (input) {
	return $dillonkearns$elm_pages$Pages$ContentCache$combine(
		A2(
			$elm$core$List$map,
			function (_v0) {
				var path = _v0.a;
				var result = _v0.b;
				return A2(
					$elm$core$Result$map,
					function (success) {
						return _Utils_Tuple2(path, success);
					},
					result);
			},
			input));
};
var $dillonkearns$elm_pages$TerminalText$RawText = function (a) {
	return {$: 'RawText', a: a};
};
var $dillonkearns$elm_pages$TerminalText$text = function (value) {
	return $dillonkearns$elm_pages$TerminalText$RawText(value);
};
var $dillonkearns$elm_pages$Pages$ContentCache$createBuildError = F2(
	function (path, decodeError) {
		return {
			fatal: false,
			message: _List_fromArray(
				[
					$dillonkearns$elm_pages$TerminalText$text('I ran into a problem when parsing the metadata for the page with this path: '),
					$dillonkearns$elm_pages$TerminalText$text(
					'/' + A2($elm$core$String$join, '/', path)),
					$dillonkearns$elm_pages$TerminalText$text('\n\n'),
					$dillonkearns$elm_pages$TerminalText$text(decodeError)
				]),
			title: 'Metadata Decode Error'
		};
	});
var $dillonkearns$elm_pages$Pages$ContentCache$createHtmlError = F2(
	function (path, error) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$h2,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							A2($elm$core$String$join, '/', path))
						])),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('I couldn\'t parse the frontmatter in this page. I ran into this error with your JSON decoder:')
						])),
					A2(
					$elm$html$Html$pre,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(error)
						]))
				]));
	});
var $dillonkearns$elm_pages$Pages$ContentCache$createErrors = F2(
	function (path, decodeError) {
		return _Utils_Tuple2(
			A2($dillonkearns$elm_pages$Pages$ContentCache$createHtmlError, path, decodeError),
			A2($dillonkearns$elm_pages$Pages$ContentCache$createBuildError, path, decodeError));
	});
var $dillonkearns$elm_pages$Pages$ContentCache$NeedContent = F2(
	function (a, b) {
		return {$: 'NeedContent', a: a, b: b};
	});
var $dillonkearns$elm_pages$Pages$ContentCache$Parsed = F3(
	function (a, b, c) {
		return {$: 'Parsed', a: a, b: b, c: c};
	});
var $dillonkearns$elm_pages$Pages$Document$get = F2(
	function (extension, _v0) {
		var document = _v0.a;
		return A2(
			$elm$core$Maybe$map,
			function (_v1) {
				var handler = _v1.a;
				return handler;
			},
			A2($elm$core$Dict$get, extension, document));
	});
var $dillonkearns$elm_pages$Pages$ContentCache$normalizePath = function (pathString) {
	var hasSuffix = A2($elm$core$String$endsWith, '/', pathString);
	var hasPrefix = A2($elm$core$String$startsWith, '/', pathString);
	return (pathString === '') ? pathString : $elm$core$String$concat(
		_List_fromArray(
			[
				hasPrefix ? A2($elm$core$String$dropLeft, 1, pathString) : pathString,
				hasSuffix ? '' : '/'
			]));
};
var $dillonkearns$elm_pages$Pages$ContentCache$parseContent = F3(
	function (extension, body, document) {
		var maybeDocumentEntry = A2($dillonkearns$elm_pages$Pages$Document$get, extension, document);
		if (maybeDocumentEntry.$ === 'Just') {
			var documentEntry = maybeDocumentEntry.a;
			return documentEntry.contentParser(body);
		} else {
			return $elm$core$Result$Err('Could not find extension \'' + (extension + '\''));
		}
	});
var $dillonkearns$elm_pages$Pages$ContentCache$parseMetadata = F3(
	function (maybeInitialPageContent, document, content) {
		return A2(
			$elm$core$List$map,
			function (_v0) {
				var path = _v0.a;
				var frontMatter = _v0.b.frontMatter;
				var extension = _v0.b.extension;
				var body = _v0.b.body;
				var maybeDocumentEntry = A2($dillonkearns$elm_pages$Pages$Document$get, extension, document);
				if (maybeDocumentEntry.$ === 'Just') {
					var documentEntry = maybeDocumentEntry.a;
					return A2(
						$elm$core$Tuple$pair,
						path,
						A2(
							$elm$core$Result$map,
							function (metadata) {
								var renderer = function (value) {
									return A3($dillonkearns$elm_pages$Pages$ContentCache$parseContent, extension, value, document);
								};
								if (maybeInitialPageContent.$ === 'Just') {
									var contentJson = maybeInitialPageContent.a.contentJson;
									var initialUrl = maybeInitialPageContent.a.initialUrl;
									return _Utils_eq(
										$dillonkearns$elm_pages$Pages$ContentCache$normalizePath(initialUrl.path),
										$dillonkearns$elm_pages$Pages$ContentCache$normalizePath(
											A2($elm$core$String$join, '/', path))) ? A3(
										$dillonkearns$elm_pages$Pages$ContentCache$Parsed,
										metadata,
										contentJson.body,
										{
											body: renderer(contentJson.body),
											staticData: contentJson.staticData
										}) : A2($dillonkearns$elm_pages$Pages$ContentCache$NeedContent, extension, metadata);
								} else {
									if (body.$ === 'Just') {
										var bodyFromCli = body.a;
										return A3(
											$dillonkearns$elm_pages$Pages$ContentCache$Parsed,
											metadata,
											bodyFromCli,
											{
												body: renderer(bodyFromCli),
												staticData: $elm$core$Dict$empty
											});
									} else {
										return A2($dillonkearns$elm_pages$Pages$ContentCache$NeedContent, extension, metadata);
									}
								}
							},
							documentEntry.frontmatterParser(frontMatter)));
				} else {
					return A2(
						$elm$core$Tuple$pair,
						path,
						$elm$core$Result$Err('Could not find extension \'' + (extension + '\'')));
				}
			},
			content);
	});
var $dillonkearns$elm_pages$Pages$ContentCache$init = F3(
	function (document, content, maybeInitialPageContent) {
		return A2(
			$elm$core$Result$map,
			$elm$core$Dict$fromList,
			$dillonkearns$elm_pages$Pages$ContentCache$combineTupleResults(
				A2(
					$elm$core$List$map,
					function (tuple) {
						return function (f) {
							return A2($elm$core$Tuple$mapSecond, f, tuple);
						}(
							$elm$core$Result$mapError(
								$dillonkearns$elm_pages$Pages$ContentCache$createErrors(tuple.a)));
					},
					A3($dillonkearns$elm_pages$Pages$ContentCache$parseMetadata, maybeInitialPageContent, document, content))));
	});
var $elm$http$Http$BadBody = function (a) {
	return {$: 'BadBody', a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 'BadStatus', a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 'BadUrl', a: a};
};
var $elm$http$Http$NetworkError = {$: 'NetworkError'};
var $elm$http$Http$Timeout = {$: 'Timeout'};
var $elm$core$String$append = _String_append;
var $dillonkearns$elm_pages$Pages$Internal$String$chopEnd = F2(
	function (needle, string) {
		return A2($elm$core$String$endsWith, needle, string) ? A2(
			$dillonkearns$elm_pages$Pages$Internal$String$chopEnd,
			needle,
			A2(
				$elm$core$String$dropRight,
				$elm$core$String$length(needle),
				string)) : string;
	});
var $dillonkearns$elm_pages$Pages$Internal$String$chopStart = F2(
	function (needle, string) {
		return A2($elm$core$String$startsWith, needle, string) ? A2(
			$dillonkearns$elm_pages$Pages$Internal$String$chopStart,
			needle,
			A2(
				$elm$core$String$dropLeft,
				$elm$core$String$length(needle),
				string)) : string;
	});
var $dillonkearns$elm_pages$Pages$Internal$String$chopForwardSlashes = A2(
	$elm$core$Basics$composeR,
	$dillonkearns$elm_pages$Pages$Internal$String$chopStart('/'),
	$dillonkearns$elm_pages$Pages$Internal$String$chopEnd('/'));
var $dillonkearns$elm_pages$Pages$ContentCache$ContentJson = F2(
	function (body, staticData) {
		return {body: body, staticData: staticData};
	});
var $dillonkearns$elm_pages$Pages$ContentCache$contentJsonDecoder = A3(
	$elm$json$Json$Decode$map2,
	$dillonkearns$elm_pages$Pages$ContentCache$ContentJson,
	A2($elm$json$Json$Decode$field, 'body', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'staticData', $dillonkearns$elm_pages$RequestsAndPending$decoder));
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 'BadStatus_', a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 'BadUrl_', a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 'GoodStatus_', a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 'NetworkError_'};
var $elm$http$Http$Receiving = function (a) {
	return {$: 'Receiving', a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 'Sending', a: a};
};
var $elm$http$Http$Timeout_ = {$: 'Timeout_'};
var $elm$core$Maybe$isJust = function (maybe) {
	if (maybe.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$http$Http$stringResolver = A2(_Http_expect, '', $elm$core$Basics$identity);
var $elm$core$Task$fail = _Scheduler_fail;
var $elm$http$Http$resultToTask = function (result) {
	if (result.$ === 'Ok') {
		var a = result.a;
		return $elm$core$Task$succeed(a);
	} else {
		var x = result.a;
		return $elm$core$Task$fail(x);
	}
};
var $elm$http$Http$task = function (r) {
	return A3(
		_Http_toTask,
		_Utils_Tuple0,
		$elm$http$Http$resultToTask,
		{allowCookiesFromOtherDomains: false, body: r.body, expect: r.resolver, headers: r.headers, method: r.method, timeout: r.timeout, tracker: $elm$core$Maybe$Nothing, url: r.url});
};
var $dillonkearns$elm_pages$Pages$ContentCache$httpTask = function (url) {
	return $elm$http$Http$task(
		{
			body: $elm$http$Http$emptyBody,
			headers: _List_Nil,
			method: 'GET',
			resolver: $elm$http$Http$stringResolver(
				function (response) {
					switch (response.$) {
						case 'BadUrl_':
							var url_ = response.a;
							return $elm$core$Result$Err(
								$elm$http$Http$BadUrl(url_));
						case 'Timeout_':
							return $elm$core$Result$Err($elm$http$Http$Timeout);
						case 'NetworkError_':
							return $elm$core$Result$Err($elm$http$Http$NetworkError);
						case 'BadStatus_':
							var metadata = response.a;
							var body = response.b;
							return $elm$core$Result$Err(
								$elm$http$Http$BadStatus(metadata.statusCode));
						default:
							var metadata = response.a;
							var body = response.b;
							return A2(
								$elm$core$Result$mapError,
								function (err) {
									return $elm$http$Http$BadBody(
										$elm$json$Json$Decode$errorToString(err));
								},
								A2($elm$json$Json$Decode$decodeString, $dillonkearns$elm_pages$Pages$ContentCache$contentJsonDecoder, body));
					}
				}),
			timeout: $elm$core$Maybe$Nothing,
			url: A2(
				$elm$core$String$append,
				'/',
				A2(
					$elm$core$String$join,
					'/',
					function (l) {
						return _Utils_ap(
							l,
							_List_fromArray(
								['content.json']));
					}(
						A2(
							$elm$core$List$filter,
							$elm$core$Basics$neq(''),
							A2(
								$elm$core$String$split,
								'/',
								$dillonkearns$elm_pages$Pages$Internal$String$chopForwardSlashes(url.path))))))
		});
};
var $dillonkearns$elm_pages$Pages$ContentCache$pathForUrl = function (_v0) {
	var currentUrl = _v0.currentUrl;
	var baseUrl = _v0.baseUrl;
	return A2(
		$elm$core$List$filter,
		$elm$core$Basics$neq(''),
		A2(
			$elm$core$String$split,
			'/',
			$dillonkearns$elm_pages$Pages$Internal$String$chopForwardSlashes(
				A2(
					$elm$core$String$dropLeft,
					$elm$core$String$length(baseUrl.path),
					currentUrl.path))));
};
var $dillonkearns$elm_pages$Pages$ContentCache$update = F4(
	function (cacheResult, renderer, urls, rawContent) {
		if (cacheResult.$ === 'Ok') {
			var cache = cacheResult.a;
			return $elm$core$Result$Ok(
				A3(
					$elm$core$Dict$update,
					$dillonkearns$elm_pages$Pages$ContentCache$pathForUrl(urls),
					function (entry) {
						if (entry.$ === 'Just') {
							switch (entry.a.$) {
								case 'Parsed':
									var _v2 = entry.a;
									var metadata = _v2.a;
									var rawBody = _v2.b;
									var view = _v2.c;
									return entry;
								case 'Unparsed':
									var _v3 = entry.a;
									var extension = _v3.a;
									var metadata = _v3.b;
									var content = _v3.c;
									return $elm$core$Maybe$Just(
										A3(
											$dillonkearns$elm_pages$Pages$ContentCache$Parsed,
											metadata,
											content.body,
											{
												body: renderer(content.body),
												staticData: content.staticData
											}));
								default:
									var _v4 = entry.a;
									var extension = _v4.a;
									var metadata = _v4.b;
									return $elm$core$Maybe$Just(
										A3(
											$dillonkearns$elm_pages$Pages$ContentCache$Parsed,
											metadata,
											rawContent.body,
											{
												body: renderer(rawContent.body),
												staticData: rawContent.staticData
											}));
							}
						} else {
							return $elm$core$Maybe$Nothing;
						}
					},
					cache));
		} else {
			var error = cacheResult.a;
			return $elm$core$Result$Err(error);
		}
	});
var $dillonkearns$elm_pages$Pages$ContentCache$lazyLoad = F3(
	function (document, urls, cacheResult) {
		if (cacheResult.$ === 'Err') {
			return $elm$core$Task$succeed(cacheResult);
		} else {
			var cache = cacheResult.a;
			var _v1 = A2(
				$elm$core$Dict$get,
				$dillonkearns$elm_pages$Pages$ContentCache$pathForUrl(urls),
				cache);
			if (_v1.$ === 'Just') {
				var entry = _v1.a;
				switch (entry.$) {
					case 'NeedContent':
						var extension = entry.a;
						return A2(
							$elm$core$Task$map,
							function (downloadedContent) {
								return A4(
									$dillonkearns$elm_pages$Pages$ContentCache$update,
									cacheResult,
									function (value) {
										return A3($dillonkearns$elm_pages$Pages$ContentCache$parseContent, extension, value, document);
									},
									urls,
									downloadedContent);
							},
							$dillonkearns$elm_pages$Pages$ContentCache$httpTask(urls.currentUrl));
					case 'Unparsed':
						var extension = entry.a;
						var metadata = entry.b;
						var content = entry.c;
						return $elm$core$Task$succeed(
							A4(
								$dillonkearns$elm_pages$Pages$ContentCache$update,
								cacheResult,
								function (thing) {
									return A3($dillonkearns$elm_pages$Pages$ContentCache$parseContent, extension, thing, document);
								},
								urls,
								content));
					default:
						return $elm$core$Task$succeed(cacheResult);
				}
			} else {
				return $elm$core$Task$succeed(cacheResult);
			}
		}
	});
var $dillonkearns$elm_pages$Pages$ContentCache$lookup = F3(
	function (pathKey, content, urls) {
		if (content.$ === 'Ok') {
			var dict = content.a;
			var path = $dillonkearns$elm_pages$Pages$ContentCache$pathForUrl(urls);
			return A2(
				$elm$core$Maybe$map,
				function (entry) {
					return _Utils_Tuple2(
						A2($dillonkearns$elm_pages$Pages$PagePath$build, pathKey, path),
						entry);
				},
				A2($elm$core$Dict$get, path, dict));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_pages$Pages$ContentCache$lookupMetadata = F3(
	function (pathKey, content, urls) {
		return A2(
			$elm$core$Maybe$map,
			function (_v0) {
				var pagePath = _v0.a;
				var entry = _v0.b;
				switch (entry.$) {
					case 'NeedContent':
						var metadata = entry.b;
						return _Utils_Tuple2(pagePath, metadata);
					case 'Unparsed':
						var metadata = entry.b;
						return _Utils_Tuple2(pagePath, metadata);
					default:
						var metadata = entry.a;
						var body = entry.b;
						return _Utils_Tuple2(pagePath, metadata);
				}
			},
			A3($dillonkearns$elm_pages$Pages$ContentCache$lookup, pathKey, content, urls));
	});
var $elm$core$Platform$Cmd$map = _Platform_map;
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$normalizeUrl = F2(
	function (baseUrl, url) {
		return _Utils_update(
			url,
			{
				path: $dillonkearns$elm_pages$Pages$Internal$String$chopForwardSlashes(
					A2(
						$elm$core$String$dropLeft,
						$elm$core$String$length(baseUrl.path),
						url.path))
			});
	});
var $elm$core$Result$toMaybe = function (result) {
	if (result.$ === 'Ok') {
		var v = result.a;
		return $elm$core$Maybe$Just(v);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$init = function (pathKey) {
	return function (canonicalSiteUrl) {
		return function (document) {
			return function (toJsPort) {
				return function (viewFn) {
					return function (content) {
						return function (initUserModel) {
							return function (flags) {
								return function (url) {
									return function (key) {
										var contentJson = $elm$core$Result$toMaybe(
											A2(
												$elm$json$Json$Decode$decodeValue,
												A2($elm$json$Json$Decode$field, 'contentJson', $dillonkearns$elm_pages$Pages$Internal$Platform$contentJsonDecoder),
												flags));
										var baseUrl = A2(
											$elm$core$Maybe$withDefault,
											url,
											A2(
												$elm$core$Maybe$andThen,
												$elm$url$Url$fromString,
												$elm$core$Result$toMaybe(
													A2(
														$elm$json$Json$Decode$decodeValue,
														A2($elm$json$Json$Decode$field, 'baseUrl', $elm$json$Json$Decode$string),
														flags))));
										var contentCache = A3(
											$dillonkearns$elm_pages$Pages$ContentCache$init,
											document,
											content,
											A2(
												$elm$core$Maybe$map,
												function (cj) {
													return {
														contentJson: cj,
														initialUrl: A2($dillonkearns$elm_pages$Pages$Internal$Platform$normalizeUrl, baseUrl, url)
													};
												},
												contentJson));
										var urls = {baseUrl: baseUrl, currentUrl: url};
										if (contentCache.$ === 'Ok') {
											var okCache = contentCache.a;
											var phase = function () {
												var _v6 = A2(
													$elm$json$Json$Decode$decodeValue,
													A4(
														$elm$json$Json$Decode$map3,
														F3(
															function (a, b, c) {
																return _Utils_Tuple3(a, b, c);
															}),
														A2($elm$json$Json$Decode$field, 'isPrerendering', $elm$json$Json$Decode$bool),
														A2($elm$json$Json$Decode$field, 'isDevServer', $elm$json$Json$Decode$bool),
														A2($elm$json$Json$Decode$field, 'isElmDebugMode', $elm$json$Json$Decode$bool)),
													flags);
												if (_v6.$ === 'Ok') {
													if (_v6.a.a) {
														var _v7 = _v6.a;
														return $dillonkearns$elm_pages$Pages$Internal$Platform$Prerender;
													} else {
														if (_v6.a.b) {
															var _v8 = _v6.a;
															var isElmDebugMode = _v8.c;
															return $dillonkearns$elm_pages$Pages$Internal$Platform$DevClient(isElmDebugMode);
														} else {
															var _v9 = _v6.a;
															return $dillonkearns$elm_pages$Pages$Internal$Platform$ProdClient;
														}
													}
												} else {
													return $dillonkearns$elm_pages$Pages$Internal$Platform$DevClient(false);
												}
											}();
											var _v1 = function () {
												var _v2 = A3(
													$dillonkearns$elm_pages$Pages$ContentCache$lookupMetadata,
													pathKey,
													$elm$core$Result$Ok(okCache),
													urls);
												if (_v2.$ === 'Just') {
													var _v3 = _v2.a;
													var pagePath = _v3.a;
													var metadata = _v3.b;
													return _Utils_Tuple2(
														$elm$core$Maybe$Just(pagePath),
														$elm$core$Maybe$Just(metadata));
												} else {
													return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing);
												}
											}();
											var maybePagePath = _v1.a;
											var maybeMetadata = _v1.b;
											var _v4 = initUserModel(
												A3(
													$elm$core$Maybe$map2,
													F2(
														function (pagePath, metadata) {
															return {
																metadata: metadata,
																path: {fragment: url.fragment, path: pagePath, query: url.query}
															};
														}),
													maybePagePath,
													maybeMetadata));
											var userModel = _v4.a;
											var userCmd = _v4.b;
											var cmd = function () {
												var _v5 = _Utils_Tuple2(maybePagePath, maybeMetadata);
												if ((_v5.a.$ === 'Just') && (_v5.b.$ === 'Just')) {
													var pagePath = _v5.a.a;
													var frontmatter = _v5.b.a;
													return $elm$core$Platform$Cmd$batch(
														A2(
															$elm$core$List$filterMap,
															$elm$core$Basics$identity,
															_List_fromArray(
																[
																	$elm$core$Maybe$Just(
																	A2($elm$core$Platform$Cmd$map, $dillonkearns$elm_pages$Pages$Internal$Platform$UserMsg, userCmd)),
																	$elm$core$Maybe$Just(
																	A2(
																		$elm$core$Task$attempt,
																		$dillonkearns$elm_pages$Pages$Internal$Platform$UpdateCache,
																		A3($dillonkearns$elm_pages$Pages$ContentCache$lazyLoad, document, urls, contentCache)))
																])));
												} else {
													return $elm$core$Platform$Cmd$none;
												}
											}();
											return _Utils_Tuple2(
												{baseUrl: baseUrl, contentCache: contentCache, hmrStatus: $dillonkearns$elm_pages$Pages$Internal$Platform$HmrLoaded, key: key, phase: phase, url: url, userModel: userModel},
												cmd);
										} else {
											var _v10 = initUserModel($elm$core$Maybe$Nothing);
											var userModel = _v10.a;
											var userCmd = _v10.b;
											return _Utils_Tuple2(
												{
													baseUrl: baseUrl,
													contentCache: contentCache,
													hmrStatus: $dillonkearns$elm_pages$Pages$Internal$Platform$HmrLoaded,
													key: key,
													phase: $dillonkearns$elm_pages$Pages$Internal$Platform$DevClient(false),
													url: url,
													userModel: userModel
												},
												$elm$core$Platform$Cmd$batch(
													_List_fromArray(
														[
															A2($elm$core$Platform$Cmd$map, $dillonkearns$elm_pages$Pages$Internal$Platform$UserMsg, userCmd)
														])));
										}
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $elm$core$Platform$Sub$map = _Platform_map;
var $dillonkearns$elm_pages$Pages$Internal$ApplicationType$Browser = {$: 'Browser'};
var $dillonkearns$elm_pages$Pages$Internal$Platform$HmrLoading = {$: 'HmrLoading'};
var $dillonkearns$elm_pages$Pages$Internal$Platform$PageScrollComplete = {$: 'PageScrollComplete'};
var $dillonkearns$elm_pages$Pages$Internal$Platform$UpdateCacheAndUrl = F2(
	function (a, b) {
		return {$: 'UpdateCacheAndUrl', a: a, b: b};
	});
var $dillonkearns$elm_pages$Head$joinPaths = F2(
	function (base, path) {
		return A2($dillonkearns$elm_pages$Pages$Internal$String$chopEnd, '/', base) + ('/' + A2($dillonkearns$elm_pages$Pages$Internal$String$chopStart, '/', path));
	});
var $dillonkearns$elm_pages$Path$join = F2(
	function (base, path) {
		return A2($dillonkearns$elm_pages$Pages$Internal$String$chopEnd, '/', base) + ('/' + A2($dillonkearns$elm_pages$Pages$Internal$String$chopStart, '/', path));
	});
var $dillonkearns$elm_pages$Pages$ImagePath$toAbsoluteUrl = F2(
	function (canonicalSiteUrl, path) {
		if (path.$ === 'Internal') {
			var rawPath = path.a;
			return A2(
				$dillonkearns$elm_pages$Path$join,
				canonicalSiteUrl,
				A2($elm$core$String$join, '/', rawPath));
		} else {
			var url = path.a;
			return url;
		}
	});
var $dillonkearns$elm_pages$Head$encodeProperty = F3(
	function (canonicalSiteUrl, currentPagePath, _v0) {
		var name = _v0.a;
		var value = _v0.b;
		switch (value.$) {
			case 'Raw':
				var rawValue = value.a;
				return A2(
					$elm$json$Json$Encode$list,
					$elm$json$Json$Encode$string,
					_List_fromArray(
						[name, rawValue]));
			case 'FullUrl':
				var urlPath = value.a;
				return A2(
					$elm$json$Json$Encode$list,
					$elm$json$Json$Encode$string,
					_List_fromArray(
						[
							name,
							A2($dillonkearns$elm_pages$Head$joinPaths, canonicalSiteUrl, urlPath)
						]));
			case 'FullUrlToCurrentPage':
				return A2(
					$elm$json$Json$Encode$list,
					$elm$json$Json$Encode$string,
					_List_fromArray(
						[
							name,
							A2($dillonkearns$elm_pages$Head$joinPaths, canonicalSiteUrl, currentPagePath)
						]));
			default:
				var imagePath = value.a;
				return A2(
					$elm$json$Json$Encode$list,
					$elm$json$Json$Encode$string,
					_List_fromArray(
						[
							name,
							A2($dillonkearns$elm_pages$Pages$ImagePath$toAbsoluteUrl, canonicalSiteUrl, imagePath)
						]));
		}
	});
var $dillonkearns$elm_pages$Head$toJson = F3(
	function (canonicalSiteUrl, currentPagePath, tag) {
		if (tag.$ === 'Tag') {
			var headTag = tag.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'name',
						$elm$json$Json$Encode$string(headTag.name)),
						_Utils_Tuple2(
						'attributes',
						A2(
							$elm$json$Json$Encode$list,
							A2($dillonkearns$elm_pages$Head$encodeProperty, canonicalSiteUrl, currentPagePath),
							headTag.attributes)),
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('head'))
					]));
		} else {
			var value = tag.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2('contents', value),
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('json-ld'))
					]));
		}
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$encodeHeads = F4(
	function (allRoutes, canonicalSiteUrl, currentPagePath, head) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'head',
					A2(
						$elm$json$Json$Encode$list,
						A2($dillonkearns$elm_pages$Head$toJson, canonicalSiteUrl, currentPagePath),
						head)),
					_Utils_Tuple2(
					'allRoutes',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, allRoutes))
				]));
	});
var $dillonkearns$elm_pages$Pages$ContentCache$getMetadata = function (entry) {
	switch (entry.$) {
		case 'NeedContent':
			var extension = entry.a;
			var metadata = entry.b;
			return metadata;
		case 'Unparsed':
			var extension = entry.a;
			var metadata = entry.b;
			return metadata;
		default:
			var metadata = entry.a;
			var body = entry.b;
			return metadata;
	}
};
var $dillonkearns$elm_pages$Pages$ContentCache$extractMetadata = F2(
	function (pathKey, cache) {
		return A2(
			$elm$core$List$map,
			function (_v0) {
				var path = _v0.a;
				var entry = _v0.b;
				return _Utils_Tuple2(
					A2($dillonkearns$elm_pages$Pages$PagePath$build, pathKey, path),
					$dillonkearns$elm_pages$Pages$ContentCache$getMetadata(entry));
			},
			$elm$core$Dict$toList(cache));
	});
var $elm$browser$Browser$Navigation$load = _Browser_load;
var $elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
var $dillonkearns$elm_pages$Pages$StaticHttpRequest$resolve = F3(
	function (appType, request, rawResponses) {
		resolve:
		while (true) {
			if (request.$ === 'Request') {
				var _v1 = request.a;
				var urlList = _v1.a;
				var lookupFn = _v1.b;
				var _v2 = A2(lookupFn, appType, rawResponses);
				if (_v2.$ === 'Ok') {
					var _v3 = _v2.a;
					var partiallyStrippedResponses = _v3.a;
					var nextRequest = _v3.b;
					var $temp$appType = appType,
						$temp$request = nextRequest,
						$temp$rawResponses = rawResponses;
					appType = $temp$appType;
					request = $temp$request;
					rawResponses = $temp$rawResponses;
					continue resolve;
				} else {
					var error = _v2.a;
					return $elm$core$Result$Err(error);
				}
			} else {
				var value = request.a;
				return $elm$core$Result$Ok(value);
			}
		}
	});
var $elm$browser$Browser$Dom$setViewport = _Browser_setViewport;
var $elm$url$Url$addPort = F2(
	function (maybePort, starter) {
		if (maybePort.$ === 'Nothing') {
			return starter;
		} else {
			var port_ = maybePort.a;
			return starter + (':' + $elm$core$String$fromInt(port_));
		}
	});
var $elm$url$Url$addPrefixed = F3(
	function (prefix, maybeSegment, starter) {
		if (maybeSegment.$ === 'Nothing') {
			return starter;
		} else {
			var segment = maybeSegment.a;
			return _Utils_ap(
				starter,
				_Utils_ap(prefix, segment));
		}
	});
var $elm$url$Url$toString = function (url) {
	var http = function () {
		var _v0 = url.protocol;
		if (_v0.$ === 'Http') {
			return 'http://';
		} else {
			return 'https://';
		}
	}();
	return A3(
		$elm$url$Url$addPrefixed,
		'#',
		url.fragment,
		A3(
			$elm$url$Url$addPrefixed,
			'?',
			url.query,
			_Utils_ap(
				A2(
					$elm$url$Url$addPort,
					url.port_,
					_Utils_ap(http, url.host)),
				url.path)));
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$urlToPagePath = F3(
	function (pathKey, url, baseUrl) {
		return A2(
			$dillonkearns$elm_pages$Pages$PagePath$build,
			pathKey,
			A2(
				$elm$core$List$filter,
				$elm$core$Basics$neq(''),
				A2(
					$elm$core$String$split,
					'/',
					$dillonkearns$elm_pages$Pages$Internal$String$chopForwardSlashes(
						A2(
							$elm$core$String$dropLeft,
							$elm$core$String$length(baseUrl.path),
							url.path)))));
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$update = function (content) {
	return function (allRoutes) {
		return function (canonicalSiteUrl) {
			return function (viewFunction) {
				return function (pathKey) {
					return function (maybeOnPageChangeMsg) {
						return function (toJsPort) {
							return function (document) {
								return function (userUpdate) {
									return function (msg) {
										return function (model) {
											if (msg.$ === 'AppMsg') {
												var appMsg = msg.a;
												switch (appMsg.$) {
													case 'LinkClicked':
														var urlRequest = appMsg.a;
														if (urlRequest.$ === 'Internal') {
															var url = urlRequest.a;
															var navigatingToSamePage = _Utils_eq(url.path, model.url.path) && (!_Utils_eq(url, model.url));
															return navigatingToSamePage ? _Utils_Tuple2(
																model,
																$elm$browser$Browser$Navigation$load(
																	$elm$url$Url$toString(url))) : _Utils_Tuple2(
																model,
																A2(
																	$elm$browser$Browser$Navigation$pushUrl,
																	model.key,
																	$elm$url$Url$toString(url)));
														} else {
															var href = urlRequest.a;
															return _Utils_Tuple2(
																model,
																$elm$browser$Browser$Navigation$load(href));
														}
													case 'UrlChanged':
														var url = appMsg.a;
														var urls = {baseUrl: model.baseUrl, currentUrl: url};
														var navigatingToSamePage = _Utils_eq(url.path, model.url.path) && (!_Utils_eq(url, model.url));
														return _Utils_Tuple2(
															model,
															navigatingToSamePage ? $elm$core$Platform$Cmd$none : A2(
																$elm$core$Task$attempt,
																$dillonkearns$elm_pages$Pages$Internal$Platform$UpdateCacheAndUrl(url),
																A3($dillonkearns$elm_pages$Pages$ContentCache$lazyLoad, document, urls, model.contentCache)));
													case 'UserMsg':
														var userMsg = appMsg.a;
														var _v3 = A2(userUpdate, userMsg, model.userModel);
														var userModel = _v3.a;
														var userCmd = _v3.b;
														return _Utils_Tuple2(
															_Utils_update(
																model,
																{userModel: userModel}),
															A2($elm$core$Platform$Cmd$map, $dillonkearns$elm_pages$Pages$Internal$Platform$UserMsg, userCmd));
													case 'UpdateCache':
														var cacheUpdateResult = appMsg.a;
														if (cacheUpdateResult.$ === 'Ok') {
															var updatedCache = cacheUpdateResult.a;
															var urls = {baseUrl: model.baseUrl, currentUrl: model.url};
															var headFn = F3(
																function (pagePath, frontmatter, staticDataThing) {
																	return function (request) {
																		return A3($dillonkearns$elm_pages$Pages$StaticHttpRequest$resolve, $dillonkearns$elm_pages$Pages$Internal$ApplicationType$Browser, request, staticDataThing);
																	}(
																		A2(
																			viewFunction,
																			A2(
																				$elm$core$Result$withDefault,
																				_List_Nil,
																				A2(
																					$elm$core$Result$map,
																					$dillonkearns$elm_pages$Pages$ContentCache$extractMetadata(pathKey),
																					updatedCache)),
																			{frontmatter: frontmatter, path: pagePath}));
																});
															var maybeCmd = function () {
																var _v5 = A3($dillonkearns$elm_pages$Pages$ContentCache$lookup, pathKey, updatedCache, urls);
																if (_v5.$ === 'Just') {
																	var _v6 = _v5.a;
																	var pagePath = _v6.a;
																	var entry = _v6.b;
																	switch (entry.$) {
																		case 'Parsed':
																			var frontmatter = entry.a;
																			var body = entry.b;
																			var viewResult = entry.c;
																			return A2(
																				$elm$core$Maybe$map,
																				toJsPort,
																				A2(
																					$elm$core$Maybe$map,
																					A3($dillonkearns$elm_pages$Pages$Internal$Platform$encodeHeads, allRoutes, canonicalSiteUrl, model.url.path),
																					$elm$core$Result$toMaybe(
																						A2(
																							$elm$core$Result$map,
																							function ($) {
																								return $.head;
																							},
																							A3(headFn, pagePath, frontmatter, viewResult.staticData)))));
																		case 'NeedContent':
																			var string = entry.a;
																			var metadata = entry.b;
																			return $elm$core$Maybe$Nothing;
																		default:
																			var string = entry.a;
																			var metadata = entry.b;
																			var contentJson = entry.c;
																			return $elm$core$Maybe$Nothing;
																	}
																} else {
																	return $elm$core$Maybe$Nothing;
																}
															}();
															return _Utils_Tuple2(
																_Utils_update(
																	model,
																	{contentCache: updatedCache}),
																A2(
																	$elm$core$Maybe$withDefault,
																	$elm$core$Platform$Cmd$none,
																	A2(
																		$elm$core$Maybe$map,
																		$elm$core$Platform$Cmd$map($elm$core$Basics$never),
																		maybeCmd)));
														} else {
															return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
														}
													case 'UpdateCacheAndUrl':
														var url = appMsg.a;
														var cacheUpdateResult = appMsg.b;
														if (cacheUpdateResult.$ === 'Ok') {
															var updatedCache = cacheUpdateResult.a;
															var _v9 = function () {
																if (maybeOnPageChangeMsg.$ === 'Just') {
																	var onPageChangeMsg = maybeOnPageChangeMsg.a;
																	var urls = {baseUrl: model.baseUrl, currentUrl: url};
																	var maybeMetadata = function () {
																		var _v11 = A3($dillonkearns$elm_pages$Pages$ContentCache$lookup, pathKey, updatedCache, urls);
																		if (_v11.$ === 'Just') {
																			var _v12 = _v11.a;
																			var pagePath = _v12.a;
																			var entry = _v12.b;
																			switch (entry.$) {
																				case 'Parsed':
																					var metadata = entry.a;
																					var rawBody = entry.b;
																					var viewResult = entry.c;
																					return $elm$core$Maybe$Just(metadata);
																				case 'NeedContent':
																					var string = entry.a;
																					var metadata = entry.b;
																					return $elm$core$Maybe$Nothing;
																				default:
																					var string = entry.a;
																					var metadata = entry.b;
																					var contentJson = entry.c;
																					return $elm$core$Maybe$Nothing;
																			}
																		} else {
																			return $elm$core$Maybe$Nothing;
																		}
																	}();
																	return A2(
																		$elm$core$Maybe$withDefault,
																		_Utils_Tuple2(model.userModel, $elm$core$Platform$Cmd$none),
																		A2(
																			$elm$core$Maybe$map,
																			function (metadata) {
																				return A2(
																					userUpdate,
																					onPageChangeMsg(
																						{
																							fragment: url.fragment,
																							metadata: metadata,
																							path: A3($dillonkearns$elm_pages$Pages$Internal$Platform$urlToPagePath, pathKey, url, model.baseUrl),
																							query: url.query
																						}),
																					model.userModel);
																			},
																			maybeMetadata));
																} else {
																	return _Utils_Tuple2(model.userModel, $elm$core$Platform$Cmd$none);
																}
															}();
															var userModel = _v9.a;
															var userCmd = _v9.b;
															return _Utils_Tuple2(
																_Utils_update(
																	model,
																	{contentCache: updatedCache, url: url, userModel: userModel}),
																$elm$core$Platform$Cmd$batch(
																	_List_fromArray(
																		[
																			A2($elm$core$Platform$Cmd$map, $dillonkearns$elm_pages$Pages$Internal$Platform$UserMsg, userCmd),
																			A2(
																			$elm$core$Task$perform,
																			function (_v14) {
																				return $dillonkearns$elm_pages$Pages$Internal$Platform$PageScrollComplete;
																			},
																			A2($elm$browser$Browser$Dom$setViewport, 0, 0))
																		])));
														} else {
															return _Utils_Tuple2(
																_Utils_update(
																	model,
																	{url: url}),
																$elm$core$Platform$Cmd$none);
														}
													case 'UpdateCacheForHotReload':
														var cacheUpdateResult = appMsg.a;
														if (cacheUpdateResult.$ === 'Ok') {
															var updatedCache = cacheUpdateResult.a;
															return _Utils_Tuple2(
																_Utils_update(
																	model,
																	{contentCache: updatedCache}),
																$elm$core$Platform$Cmd$none);
														} else {
															return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
														}
													case 'PageScrollComplete':
														return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
													case 'HotReloadComplete':
														var contentJson = appMsg.a;
														return _Utils_Tuple2(
															_Utils_update(
																model,
																{
																	contentCache: A3(
																		$dillonkearns$elm_pages$Pages$ContentCache$init,
																		document,
																		content,
																		$elm$core$Maybe$Just(
																			{contentJson: contentJson, initialUrl: model.url})),
																	hmrStatus: $dillonkearns$elm_pages$Pages$Internal$Platform$HmrLoaded
																}),
															$elm$core$Platform$Cmd$none);
													default:
														return _Utils_Tuple2(
															_Utils_update(
																model,
																{hmrStatus: $dillonkearns$elm_pages$Pages$Internal$Platform$HmrLoading}),
															$elm$core$Platform$Cmd$none);
												}
											} else {
												return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
											}
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $elm$virtual_dom$VirtualDom$lazy2 = _VirtualDom_lazy2;
var $elm$html$Html$Lazy$lazy2 = $elm$virtual_dom$VirtualDom$lazy2;
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $dillonkearns$elm_pages$Pages$Internal$HotReloadLoadingIndicator$circle = function (attrs) {
	return A2(
		$elm$html$Html$div,
		A2(
			$elm$core$List$cons,
			A2($elm$html$Html$Attributes$style, 'animation', 'lds-default 1.2s linear infinite'),
			A2(
				$elm$core$List$cons,
				A2($elm$html$Html$Attributes$style, 'background', '#000'),
				A2(
					$elm$core$List$cons,
					A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
					A2(
						$elm$core$List$cons,
						A2($elm$html$Html$Attributes$style, 'width', '6px'),
						A2(
							$elm$core$List$cons,
							A2($elm$html$Html$Attributes$style, 'height', '6px'),
							A2(
								$elm$core$List$cons,
								A2($elm$html$Html$Attributes$style, 'border-radius', '50%'),
								attrs)))))),
		_List_Nil);
};
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $dillonkearns$elm_pages$Pages$Internal$HotReloadLoadingIndicator$view = F2(
	function (isDebugMode, display) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('__elm-pages-loading'),
					$elm$html$Html$Attributes$class('lds-default'),
					A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2($elm$html$Html$Attributes$style, 'bottom', '10px'),
					A2(
					$elm$html$Html$Attributes$style,
					'right',
					isDebugMode ? '110px' : '10px'),
					A2($elm$html$Html$Attributes$style, 'width', '80px'),
					A2($elm$html$Html$Attributes$style, 'height', '80px'),
					A2($elm$html$Html$Attributes$style, 'background-color', 'white'),
					A2($elm$html$Html$Attributes$style, 'box-shadow', '0 8px 15px 0 rgba(0, 0, 0, 0.25), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'),
					A2(
					$elm$html$Html$Attributes$style,
					'display',
					function () {
						if (display) {
							return 'block';
						} else {
							return 'none';
						}
					}())
				]),
			_List_fromArray(
				[
					$dillonkearns$elm_pages$Pages$Internal$HotReloadLoadingIndicator$circle(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'animation-delay', '0s'),
							A2($elm$html$Html$Attributes$style, 'top', '37px'),
							A2($elm$html$Html$Attributes$style, 'left', '66px')
						])),
					$dillonkearns$elm_pages$Pages$Internal$HotReloadLoadingIndicator$circle(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'animation-delay', '-0.1s'),
							A2($elm$html$Html$Attributes$style, 'top', '22px'),
							A2($elm$html$Html$Attributes$style, 'left', '62px')
						])),
					$dillonkearns$elm_pages$Pages$Internal$HotReloadLoadingIndicator$circle(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'animation-delay', '-0.2s'),
							A2($elm$html$Html$Attributes$style, 'top', '11px'),
							A2($elm$html$Html$Attributes$style, 'left', '52px')
						])),
					$dillonkearns$elm_pages$Pages$Internal$HotReloadLoadingIndicator$circle(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'animation-delay', '-0.3s'),
							A2($elm$html$Html$Attributes$style, 'top', '7px'),
							A2($elm$html$Html$Attributes$style, 'left', '37px')
						])),
					$dillonkearns$elm_pages$Pages$Internal$HotReloadLoadingIndicator$circle(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'animation-delay', '-0.4s'),
							A2($elm$html$Html$Attributes$style, 'top', '11px'),
							A2($elm$html$Html$Attributes$style, 'left', '22px')
						])),
					$dillonkearns$elm_pages$Pages$Internal$HotReloadLoadingIndicator$circle(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'animation-delay', '-0.5s'),
							A2($elm$html$Html$Attributes$style, 'top', '22px'),
							A2($elm$html$Html$Attributes$style, 'left', '11px')
						])),
					$dillonkearns$elm_pages$Pages$Internal$HotReloadLoadingIndicator$circle(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'animation-delay', '-0.6s'),
							A2($elm$html$Html$Attributes$style, 'top', '37px'),
							A2($elm$html$Html$Attributes$style, 'left', '7px')
						])),
					$dillonkearns$elm_pages$Pages$Internal$HotReloadLoadingIndicator$circle(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'animation-delay', '-0.7s'),
							A2($elm$html$Html$Attributes$style, 'top', '52px'),
							A2($elm$html$Html$Attributes$style, 'left', '11px')
						])),
					$dillonkearns$elm_pages$Pages$Internal$HotReloadLoadingIndicator$circle(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'animation-delay', '-0.8s'),
							A2($elm$html$Html$Attributes$style, 'top', '62px'),
							A2($elm$html$Html$Attributes$style, 'left', '22px')
						])),
					$dillonkearns$elm_pages$Pages$Internal$HotReloadLoadingIndicator$circle(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'animation-delay', '-0.9s'),
							A2($elm$html$Html$Attributes$style, 'top', '66px'),
							A2($elm$html$Html$Attributes$style, 'left', '37px')
						])),
					$dillonkearns$elm_pages$Pages$Internal$HotReloadLoadingIndicator$circle(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'animation-delay', '-1s'),
							A2($elm$html$Html$Attributes$style, 'top', '62px'),
							A2($elm$html$Html$Attributes$style, 'left', '52px')
						])),
					$dillonkearns$elm_pages$Pages$Internal$HotReloadLoadingIndicator$circle(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'animation-delay', '-1.1s'),
							A2($elm$html$Html$Attributes$style, 'top', '52px'),
							A2($elm$html$Html$Attributes$style, 'left', '62px')
						]))
				]));
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$loadingView = F2(
	function (phase, hmrStatus) {
		if (phase.$ === 'DevClient') {
			var isDebugMode = phase.a;
			return A2(
				$dillonkearns$elm_pages$Pages$Internal$HotReloadLoadingIndicator$view,
				isDebugMode,
				function () {
					if (hmrStatus.$ === 'HmrLoading') {
						return true;
					} else {
						return false;
					}
				}());
		} else {
			return $elm$html$Html$text('');
		}
	});
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $dillonkearns$elm_pages$Pages$ContentCache$errorView = function (errors) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'padding', '20px 100px')
			]),
		A2(
			$elm$core$List$map,
			$elm$html$Html$map($elm$core$Basics$never),
			A2($elm$core$List$map, $elm$core$Tuple$first, errors)));
};
var $dillonkearns$elm_pages$Pages$ContentCache$routes = function (record) {
	return A2(
		$elm$core$List$map,
		$elm$core$String$join('/'),
		A2($elm$core$List$map, $elm$core$Tuple$first, record));
};
var $dillonkearns$elm_pages$Pages$ContentCache$routesForCache = function (cacheResult) {
	if (cacheResult.$ === 'Ok') {
		var cache = cacheResult.a;
		return $dillonkearns$elm_pages$Pages$ContentCache$routes(
			$elm$core$Dict$toList(cache));
	} else {
		return _List_Nil;
	}
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$pageViewOrError = F4(
	function (pathKey, viewFn, model, cache) {
		var urls = {baseUrl: model.baseUrl, currentUrl: model.url};
		var _v0 = A3($dillonkearns$elm_pages$Pages$ContentCache$lookup, pathKey, cache, urls);
		if (_v0.$ === 'Just') {
			var _v1 = _v0.a;
			var pagePath = _v1.a;
			var entry = _v1.b;
			switch (entry.$) {
				case 'Parsed':
					var metadata = entry.a;
					var body = entry.b;
					var viewResult = entry.c;
					var viewFnResult = function (request) {
						return A3($dillonkearns$elm_pages$Pages$StaticHttpRequest$resolve, $dillonkearns$elm_pages$Pages$Internal$ApplicationType$Browser, request, viewResult.staticData);
					}(
						A2(
							viewFn,
							A2(
								$elm$core$Result$withDefault,
								_List_Nil,
								A2(
									$elm$core$Result$map,
									$dillonkearns$elm_pages$Pages$ContentCache$extractMetadata(pathKey),
									cache)),
							{frontmatter: metadata, path: pagePath}));
					var _v3 = viewResult.body;
					if (_v3.$ === 'Ok') {
						var viewList = _v3.a;
						if (viewFnResult.$ === 'Ok') {
							var okViewFn = viewFnResult.a;
							return A2(okViewFn.view, model.userModel, viewList);
						} else {
							var error = viewFnResult.a;
							return {
								body: function () {
									switch (error.$) {
										case 'DecoderError':
											var decoderError = error.a;
											return A2(
												$elm$html$Html$div,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text('Could not parse static data. I encountered this decoder problem.'),
														A2(
														$elm$html$Html$pre,
														_List_Nil,
														_List_fromArray(
															[
																$elm$html$Html$text(decoderError)
															]))
													]));
										case 'MissingHttpResponse':
											var missingKey = error.a;
											return A2(
												$elm$html$Html$div,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text('I\'m missing some StaticHttp data for this page:'),
														A2(
														$elm$html$Html$pre,
														_List_Nil,
														_List_fromArray(
															[
																$elm$html$Html$text(missingKey)
															]))
													]));
										default:
											var message = error.a;
											return A2(
												$elm$html$Html$div,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text('I ran into a call to `Pages.StaticHttp.fail` with message:'),
														A2(
														$elm$html$Html$pre,
														_List_Nil,
														_List_fromArray(
															[
																$elm$html$Html$text(message)
															]))
													]));
									}
								}(),
								title: 'Parsing error'
							};
						}
					} else {
						var error = _v3.a;
						return {
							body: $elm$html$Html$text(error),
							title: 'Parsing error'
						};
					}
				case 'NeedContent':
					var extension = entry.a;
					var a = entry.b;
					return {
						body: $elm$html$Html$text('Missing content'),
						title: 'elm-pages error'
					};
				default:
					var extension = entry.a;
					var a = entry.b;
					var b = entry.c;
					return {
						body: $elm$html$Html$text('Unparsed content'),
						title: 'elm-pages error'
					};
			}
		} else {
			return {
				body: A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Page not found. Valid routes:\n\n'),
							$elm$html$Html$text(
							A2(
								$elm$core$String$join,
								', ',
								$dillonkearns$elm_pages$Pages$ContentCache$routesForCache(cache)))
						])),
				title: 'Page not found'
			};
		}
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$mainView = F3(
	function (pathKey, pageView, model) {
		var _v0 = model.contentCache;
		if (_v0.$ === 'Ok') {
			var site = _v0.a;
			return A4($dillonkearns$elm_pages$Pages$Internal$Platform$pageViewOrError, pathKey, pageView, model, model.contentCache);
		} else {
			var errors = _v0.a;
			return {
				body: $dillonkearns$elm_pages$Pages$ContentCache$errorView(errors),
				title: 'Error parsing'
			};
		}
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $dillonkearns$elm_pages$Pages$Internal$Platform$onViewChangeElement = function (currentUrl) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$Attributes$attribute,
				'data-url',
				$elm$url$Url$toString(currentUrl)),
				A2($elm$html$Html$Attributes$attribute, 'display', 'none')
			]),
		_List_Nil);
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$view = F4(
	function (pathKey, content, viewFn, model) {
		var _v0 = A3($dillonkearns$elm_pages$Pages$Internal$Platform$mainView, pathKey, viewFn, model);
		var title = _v0.title;
		var body = _v0.body;
		return {
			body: _List_fromArray(
				[
					$dillonkearns$elm_pages$Pages$Internal$Platform$onViewChangeElement(model.url),
					A2(
					$elm$html$Html$map,
					$dillonkearns$elm_pages$Pages$Internal$Platform$AppMsg,
					A2($elm$html$Html$map, $dillonkearns$elm_pages$Pages$Internal$Platform$UserMsg, body)),
					A3($elm$html$Html$Lazy$lazy2, $dillonkearns$elm_pages$Pages$Internal$Platform$loadingView, model.phase, model.hmrStatus)
				]),
			title: title
		};
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$application = function (config) {
	return $elm$browser$Browser$application(
		{
			init: F3(
				function (flags, url, key) {
					return A2(
						$elm$core$Tuple$mapSecond,
						$elm$core$Platform$Cmd$map($dillonkearns$elm_pages$Pages$Internal$Platform$AppMsg),
						A2(
							$elm$core$Tuple$mapFirst,
							$dillonkearns$elm_pages$Pages$Internal$Platform$Model,
							$dillonkearns$elm_pages$Pages$Internal$Platform$init(config.pathKey)(config.canonicalSiteUrl)(config.document)(config.toJsPort)(config.view)(config.content)(config.init)(flags)(url)(key)));
				}),
			onUrlChange: A2($elm$core$Basics$composeR, $dillonkearns$elm_pages$Pages$Internal$Platform$UrlChanged, $dillonkearns$elm_pages$Pages$Internal$Platform$AppMsg),
			onUrlRequest: A2($elm$core$Basics$composeR, $dillonkearns$elm_pages$Pages$Internal$Platform$LinkClicked, $dillonkearns$elm_pages$Pages$Internal$Platform$AppMsg),
			subscriptions: function (outerModel) {
				if (outerModel.$ === 'Model') {
					var model = outerModel.a;
					var urls = {baseUrl: model.baseUrl, currentUrl: model.url};
					var _v1 = function () {
						var _v2 = A3($dillonkearns$elm_pages$Pages$ContentCache$lookupMetadata, config.pathKey, model.contentCache, urls);
						if (_v2.$ === 'Just') {
							var _v3 = _v2.a;
							var pagePath = _v3.a;
							var metadata = _v3.b;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(pagePath),
								$elm$core$Maybe$Just(metadata));
						} else {
							return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing);
						}
					}();
					var maybePagePath = _v1.a;
					var maybeMetadata = _v1.b;
					var userSub = A2(
						$elm$core$Maybe$withDefault,
						$elm$core$Platform$Sub$none,
						A3(
							$elm$core$Maybe$map2,
							F2(
								function (metadata, path) {
									return A2(
										$elm$core$Platform$Sub$map,
										$dillonkearns$elm_pages$Pages$Internal$Platform$AppMsg,
										A2(
											$elm$core$Platform$Sub$map,
											$dillonkearns$elm_pages$Pages$Internal$Platform$UserMsg,
											A3(config.subscriptions, metadata, path, model.userModel)));
								}),
							maybeMetadata,
							maybePagePath));
					return $elm$core$Platform$Sub$batch(
						_List_fromArray(
							[
								userSub,
								A2(
								$elm$core$Platform$Sub$map,
								function (decodeValue) {
									var _v4 = A2(
										$elm$json$Json$Decode$decodeValue,
										A2($elm$json$Json$Decode$field, 'action', $elm$json$Json$Decode$string),
										decodeValue);
									if ((_v4.$ === 'Ok') && (_v4.a === 'hmr-check')) {
										return $dillonkearns$elm_pages$Pages$Internal$Platform$AppMsg($dillonkearns$elm_pages$Pages$Internal$Platform$StartingHotReload);
									} else {
										var _v5 = A2(
											$elm$json$Json$Decode$decodeValue,
											A2($elm$json$Json$Decode$field, 'contentJson', $dillonkearns$elm_pages$Pages$Internal$Platform$contentJsonDecoder),
											decodeValue);
										if (_v5.$ === 'Ok') {
											var contentJson = _v5.a;
											return $dillonkearns$elm_pages$Pages$Internal$Platform$AppMsg(
												$dillonkearns$elm_pages$Pages$Internal$Platform$HotReloadComplete(contentJson));
										} else {
											var error = _v5.a;
											return $dillonkearns$elm_pages$Pages$Internal$Platform$AppMsg($dillonkearns$elm_pages$Pages$Internal$Platform$StartingHotReload);
										}
									}
								},
								config.fromJsPort)
							]));
				} else {
					return $elm$core$Platform$Sub$none;
				}
			},
			update: F2(
				function (msg, outerModel) {
					if (outerModel.$ === 'Model') {
						var model = outerModel.a;
						var noOpUpdate = F2(
							function (userMsg, userModel) {
								return _Utils_Tuple2(userModel, $elm$core$Platform$Cmd$none);
							});
						var userUpdate = function () {
							var _v7 = model.phase;
							if (_v7.$ === 'Prerender') {
								return noOpUpdate;
							} else {
								return config.update;
							}
						}();
						var allRoutes = A2(
							$elm$core$List$map,
							$elm$core$String$join('/'),
							A2($elm$core$List$map, $elm$core$Tuple$first, config.content));
						return A2(
							$elm$core$Tuple$mapSecond,
							$elm$core$Platform$Cmd$map($dillonkearns$elm_pages$Pages$Internal$Platform$AppMsg),
							A2(
								$elm$core$Tuple$mapFirst,
								$dillonkearns$elm_pages$Pages$Internal$Platform$Model,
								$dillonkearns$elm_pages$Pages$Internal$Platform$update(config.content)(allRoutes)(config.canonicalSiteUrl)(config.view)(config.pathKey)(config.onPageChange)(config.toJsPort)(config.document)(userUpdate)(msg)(model)));
					} else {
						return _Utils_Tuple2(outerModel, $elm$core$Platform$Cmd$none);
					}
				}),
			view: function (outerModel) {
				if (outerModel.$ === 'Model') {
					var model = outerModel.a;
					return A4($dillonkearns$elm_pages$Pages$Internal$Platform$view, config.pathKey, config.content, config.view, model);
				} else {
					return {
						body: _List_fromArray(
							[
								$elm$html$Html$text('Unexpected state')
							]),
						title: 'Error'
					};
				}
			}
		});
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$CliModel = function (a) {
	return {$: 'CliModel', a: a};
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$CliMsg = function (a) {
	return {$: 'CliMsg', a: a};
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Mode$Dev = {$: 'Dev'};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$Model = F7(
	function (staticResponses, secrets, errors, allRawResponses, mode, pendingRequests, unprocessedPages) {
		return {allRawResponses: allRawResponses, errors: errors, mode: mode, pendingRequests: pendingRequests, secrets: secrets, staticResponses: staticResponses, unprocessedPages: unprocessedPages};
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$StaticResponses = function (a) {
	return {$: 'StaticResponses', a: a};
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$error = $dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$StaticResponses($elm$core$Dict$empty);
var $dillonkearns$elm_pages$SecretsDict$Unmasked = function (a) {
	return {$: 'Unmasked', a: a};
};
var $dillonkearns$elm_pages$SecretsDict$decoder = A2(
	$elm$json$Json$Decode$map,
	$dillonkearns$elm_pages$SecretsDict$Unmasked,
	$elm$json$Json$Decode$dict($elm$json$Json$Decode$string));
var $dillonkearns$elm_pages$Pages$Internal$Platform$Mode$ElmToHtmlBeta = {$: 'ElmToHtmlBeta'};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Mode$Prod = {$: 'Prod'};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Mode$modeDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (mode) {
		return (mode === 'prod') ? $elm$json$Json$Decode$succeed($dillonkearns$elm_pages$Pages$Internal$Platform$Mode$Prod) : ((mode === 'elm-to-html-beta') ? $elm$json$Json$Decode$succeed($dillonkearns$elm_pages$Pages$Internal$Platform$Mode$ElmToHtmlBeta) : $elm$json$Json$Decode$succeed($dillonkearns$elm_pages$Pages$Internal$Platform$Mode$Dev));
	},
	$elm$json$Json$Decode$string);
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$flagsDecoder = A4(
	$elm$json$Json$Decode$map3,
	F3(
		function (secrets, mode, staticHttpCache) {
			return {mode: mode, secrets: secrets, staticHttpCache: staticHttpCache};
		}),
	A2($elm$json$Json$Decode$field, 'secrets', $dillonkearns$elm_pages$SecretsDict$decoder),
	A2($elm$json$Json$Decode$field, 'mode', $dillonkearns$elm_pages$Pages$Internal$Platform$Mode$modeDecoder),
	A2(
		$elm$json$Json$Decode$field,
		'staticHttpCache',
		$elm$json$Json$Decode$dict(
			A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $elm$json$Json$Decode$string))));
var $dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$NotFetched = F2(
	function (a, b) {
		return {$: 'NotFetched', a: a, b: b};
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$cliDictKey = '////elm-pages-CLI////';
var $dillonkearns$elm_pages$Pages$StaticHttp$map = F2(
	function (fn, requestInfo) {
		if (requestInfo.$ === 'Request') {
			var _v1 = requestInfo.a;
			var urls = _v1.a;
			var lookupFn = _v1.b;
			return $dillonkearns$elm_pages$Pages$StaticHttpRequest$Request(
				_Utils_Tuple2(
					urls,
					F2(
						function (appType, rawResponses) {
							return A2(
								$elm$core$Result$map,
								function (_v2) {
									var partiallyStripped = _v2.a;
									var nextRequest = _v2.b;
									return _Utils_Tuple2(
										partiallyStripped,
										A2($dillonkearns$elm_pages$Pages$StaticHttp$map, fn, nextRequest));
								},
								A2(lookupFn, appType, rawResponses));
						})));
		} else {
			var value = requestInfo.a;
			return $dillonkearns$elm_pages$Pages$StaticHttpRequest$Done(
				fn(value));
		}
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$init = F4(
	function (staticHttpCache, siteMetadataResult, config, list) {
		var siteMetadataWithContent = A2(
			$elm$core$List$map,
			function (_v3) {
				var pagePath = _v3.a;
				var metadata = _v3.b;
				var contentForPage = A2(
					$elm$core$Maybe$andThen,
					$elm$core$Basics$identity,
					$elm$core$List$head(
						A2(
							$elm$core$List$filterMap,
							function (_v4) {
								var path = _v4.a;
								var body = _v4.b.body;
								var pagePathToGenerate = $dillonkearns$elm_pages$Pages$PagePath$toString(pagePath);
								var currentContentPath = '/' + A2($elm$core$String$join, '/', path);
								return _Utils_eq(pagePathToGenerate, currentContentPath) ? $elm$core$Maybe$Just(body) : $elm$core$Maybe$Nothing;
							},
							config.content)));
				return {
					body: A2($elm$core$Maybe$withDefault, '', contentForPage),
					frontmatter: metadata,
					path: pagePath
				};
			},
			A2($elm$core$Result$withDefault, _List_Nil, siteMetadataResult));
		var generateFilesRequest = config.generateFiles(siteMetadataWithContent);
		var generateFilesStaticRequest = _Utils_Tuple2(
			$dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$cliDictKey,
			A2(
				$dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$NotFetched,
				A2(
					$dillonkearns$elm_pages$Pages$StaticHttp$map,
					function (_v2) {
						return _Utils_Tuple0;
					},
					generateFilesRequest),
				$elm$core$Dict$empty));
		return $dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$StaticResponses(
			$elm$core$Dict$fromList(
				A2(
					$elm$core$List$append,
					_List_fromArray(
						[generateFilesStaticRequest]),
					A2(
						$elm$core$List$map,
						function (_v0) {
							var path = _v0.a;
							var staticRequest = _v0.b;
							var entry = A2(
								$dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$NotFetched,
								A2(
									$dillonkearns$elm_pages$Pages$StaticHttp$map,
									function (_v1) {
										return _Utils_Tuple0;
									},
									staticRequest),
								$elm$core$Dict$empty);
							return _Utils_Tuple2(
								$dillonkearns$elm_pages$Pages$PagePath$toString(path),
								entry);
						},
						list))));
	});
var $dillonkearns$elm_pages$Pages$Internal$ApplicationType$Cli = {$: 'Cli'};
var $dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$Continue = F2(
	function (a, b) {
		return {$: 'Continue', a: a, b: b};
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$Errors = function (a) {
	return {$: 'Errors', a: a};
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$Finish = function (a) {
	return {$: 'Finish', a: a};
};
var $elm_community$dict_extra$Dict$Extra$any = F2(
	function (predicate, dict) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, acc) {
					return acc ? acc : (A2(predicate, k, v) ? true : false);
				}),
			false,
			dict);
	});
var $dillonkearns$elm_pages$Pages$StaticHttpRequest$Complete = function (a) {
	return {$: 'Complete', a: a};
};
var $dillonkearns$elm_pages$Pages$StaticHttpRequest$HasPermanentError = function (a) {
	return {$: 'HasPermanentError', a: a};
};
var $dillonkearns$elm_pages$Pages$StaticHttpRequest$Incomplete = function (a) {
	return {$: 'Incomplete', a: a};
};
var $dillonkearns$elm_pages$Pages$StaticHttpRequest$cacheRequestResolutionHelp = F4(
	function (foundUrls, appType, request, rawResponses) {
		cacheRequestResolutionHelp:
		while (true) {
			if (request.$ === 'Request') {
				var _v1 = request.a;
				var urlList = _v1.a;
				var lookupFn = _v1.b;
				var _v2 = A2(lookupFn, appType, rawResponses);
				if (_v2.$ === 'Ok') {
					var _v3 = _v2.a;
					var partiallyStrippedResponses = _v3.a;
					var nextRequest = _v3.b;
					var $temp$foundUrls = urlList,
						$temp$appType = appType,
						$temp$request = nextRequest,
						$temp$rawResponses = rawResponses;
					foundUrls = $temp$foundUrls;
					appType = $temp$appType;
					request = $temp$request;
					rawResponses = $temp$rawResponses;
					continue cacheRequestResolutionHelp;
				} else {
					var error = _v2.a;
					switch (error.$) {
						case 'MissingHttpResponse':
							var string = error.a;
							return $dillonkearns$elm_pages$Pages$StaticHttpRequest$Incomplete(
								_Utils_ap(urlList, foundUrls));
						case 'DecoderError':
							var string = error.a;
							return $dillonkearns$elm_pages$Pages$StaticHttpRequest$HasPermanentError(error);
						default:
							var string = error.a;
							return $dillonkearns$elm_pages$Pages$StaticHttpRequest$HasPermanentError(error);
					}
				}
			} else {
				var value = request.a;
				return $dillonkearns$elm_pages$Pages$StaticHttpRequest$Complete(value);
			}
		}
	});
var $dillonkearns$elm_pages$Pages$StaticHttpRequest$cacheRequestResolution = $dillonkearns$elm_pages$Pages$StaticHttpRequest$cacheRequestResolutionHelp(_List_Nil);
var $elm$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2($elm$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});
var $elm$core$Set$diff = F2(
	function (_v0, _v1) {
		var dict1 = _v0.a;
		var dict2 = _v1.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$diff, dict1, dict2));
	});
var $elm$core$Dict$filter = F2(
	function (isGood, dict) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, d) {
					return A2(isGood, k, v) ? A3($elm$core$Dict$insert, k, v, d) : d;
				}),
			$elm$core$Dict$empty,
			dict);
	});
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $dillonkearns$elm_pages$Pages$StaticHttpRequest$strippedResponsesHelp = F4(
	function (usedSoFar, appType, request, rawResponses) {
		strippedResponsesHelp:
		while (true) {
			if (request.$ === 'Request') {
				var _v1 = request.a;
				var list = _v1.a;
				var lookupFn = _v1.b;
				var _v2 = A2(lookupFn, appType, rawResponses);
				if (_v2.$ === 'Err') {
					var error = _v2.a;
					return usedSoFar;
				} else {
					var _v3 = _v2.a;
					var partiallyStrippedResponses = _v3.a;
					var followupRequest = _v3.b;
					var $temp$usedSoFar = A2($elm$core$Dict$union, usedSoFar, partiallyStrippedResponses),
						$temp$appType = appType,
						$temp$request = followupRequest,
						$temp$rawResponses = rawResponses;
					usedSoFar = $temp$usedSoFar;
					appType = $temp$appType;
					request = $temp$request;
					rawResponses = $temp$rawResponses;
					continue strippedResponsesHelp;
				}
			} else {
				var value = request.a;
				return usedSoFar;
			}
		}
	});
var $dillonkearns$elm_pages$Pages$StaticHttpRequest$strippedResponses = $dillonkearns$elm_pages$Pages$StaticHttpRequest$strippedResponsesHelp($elm$core$Dict$empty);
var $dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$encode = F3(
	function (requestsAndPending, mode, _v0) {
		var staticResponses = _v0.a;
		return A2(
			$elm$core$Dict$map,
			F2(
				function (path, result) {
					var request = result.a;
					switch (mode.$) {
						case 'Dev':
							return A3($dillonkearns$elm_pages$Pages$StaticHttpRequest$strippedResponses, $dillonkearns$elm_pages$Pages$Internal$ApplicationType$Cli, request, requestsAndPending);
						case 'Prod':
							return A3($dillonkearns$elm_pages$Pages$StaticHttpRequest$strippedResponses, $dillonkearns$elm_pages$Pages$Internal$ApplicationType$Cli, request, requestsAndPending);
						default:
							return A3($dillonkearns$elm_pages$Pages$StaticHttpRequest$strippedResponses, $dillonkearns$elm_pages$Pages$Internal$ApplicationType$Cli, request, requestsAndPending);
					}
				}),
			A2(
				$elm$core$Dict$filter,
				F2(
					function (key, value) {
						return !_Utils_eq(key, $dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$cliDictKey);
					}),
				staticResponses));
	});
var $dillonkearns$elm_pages$TerminalText$Cyan = {$: 'Cyan'};
var $dillonkearns$elm_pages$TerminalText$Style = F2(
	function (a, b) {
		return {$: 'Style', a: a, b: b};
	});
var $dillonkearns$elm_pages$TerminalText$ansiPrefix = '\u001B';
var $dillonkearns$elm_pages$TerminalText$ansi = function (code) {
	return _Utils_ap($dillonkearns$elm_pages$TerminalText$ansiPrefix, code);
};
var $dillonkearns$elm_pages$TerminalText$colorToString = function (color) {
	return $dillonkearns$elm_pages$TerminalText$ansi(
		function () {
			switch (color.$) {
				case 'Red':
					return '[31m';
				case 'Blue':
					return '[34m';
				case 'Green':
					return '[32m';
				case 'Yellow':
					return '[33m';
				default:
					return '[36m';
			}
		}());
};
var $dillonkearns$elm_pages$TerminalText$cyan = function (inner) {
	return A2(
		$dillonkearns$elm_pages$TerminalText$Style,
		$dillonkearns$elm_pages$TerminalText$colorToString($dillonkearns$elm_pages$TerminalText$Cyan),
		inner);
};
var $dillonkearns$elm_pages$BuildError$banner = function (title) {
	return _List_fromArray(
		[
			$dillonkearns$elm_pages$TerminalText$cyan(
			$dillonkearns$elm_pages$TerminalText$text(
				'-- ' + ($elm$core$String$toUpper(title) + ' ----------------------------------------------------- elm-pages'))),
			$dillonkearns$elm_pages$TerminalText$text('\n\n')
		]);
};
var $dillonkearns$elm_pages$TerminalText$resetColors = $dillonkearns$elm_pages$TerminalText$ansi('[0m');
var $dillonkearns$elm_pages$TerminalText$toString_ = function (textValue) {
	if (textValue.$ === 'RawText') {
		var content = textValue.a;
		return content;
	} else {
		var code = textValue.a;
		var innerText = textValue.b;
		return $elm$core$String$concat(
			_List_fromArray(
				[
					code,
					$dillonkearns$elm_pages$TerminalText$toString_(innerText),
					$dillonkearns$elm_pages$TerminalText$resetColors
				]));
	}
};
var $dillonkearns$elm_pages$TerminalText$toString = function (list) {
	return A2(
		$elm$core$String$join,
		'',
		A2($elm$core$List$map, $dillonkearns$elm_pages$TerminalText$toString_, list));
};
var $dillonkearns$elm_pages$BuildError$errorToString = function (error) {
	return $dillonkearns$elm_pages$TerminalText$toString(
		_Utils_ap(
			$dillonkearns$elm_pages$BuildError$banner(error.title),
			error.message));
};
var $dillonkearns$elm_pages$BuildError$errorsToString = function (errors) {
	return A2(
		$elm$core$String$join,
		'\n\n',
		A2($elm$core$List$map, $dillonkearns$elm_pages$BuildError$errorToString, errors));
};
var $elm_community$dict_extra$Dict$Extra$filterMap = F2(
	function (f, dict) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, acc) {
					var _v0 = A2(f, k, v);
					if (_v0.$ === 'Just') {
						var newVal = _v0.a;
						return A3($elm$core$Dict$insert, k, newVal, acc);
					} else {
						return acc;
					}
				}),
			$elm$core$Dict$empty,
			dict);
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $dillonkearns$elm_pages$Pages$Internal$StaticHttpBody$encodeWithType = F2(
	function (typeName, otherFields) {
		return $elm$json$Json$Encode$object(
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string(typeName)),
				otherFields));
	});
var $dillonkearns$elm_pages$Pages$Internal$StaticHttpBody$encode = function (body) {
	switch (body.$) {
		case 'EmptyBody':
			return A2($dillonkearns$elm_pages$Pages$Internal$StaticHttpBody$encodeWithType, 'empty', _List_Nil);
		case 'StringBody':
			var contentType = body.a;
			var content = body.b;
			return A2(
				$dillonkearns$elm_pages$Pages$Internal$StaticHttpBody$encodeWithType,
				'string',
				_List_fromArray(
					[
						_Utils_Tuple2(
						'content',
						$elm$json$Json$Encode$string(content))
					]));
		default:
			var content = body.a;
			return A2(
				$dillonkearns$elm_pages$Pages$Internal$StaticHttpBody$encodeWithType,
				'json',
				_List_fromArray(
					[
						_Utils_Tuple2('content', content)
					]));
	}
};
var $dillonkearns$elm_pages$Pages$StaticHttp$Request$hashHeader = function (_v0) {
	var name = _v0.a;
	var value = _v0.b;
	return $elm$json$Json$Encode$string(name + (': ' + value));
};
var $dillonkearns$elm_pages$Pages$StaticHttp$Request$hash = function (requestDetails) {
	return A2(
		$elm$json$Json$Encode$encode,
		0,
		$elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'method',
					$elm$json$Json$Encode$string(requestDetails.method)),
					_Utils_Tuple2(
					'url',
					$elm$json$Json$Encode$string(requestDetails.url)),
					_Utils_Tuple2(
					'headers',
					A2($elm$json$Json$Encode$list, $dillonkearns$elm_pages$Pages$StaticHttp$Request$hashHeader, requestDetails.headers)),
					_Utils_Tuple2(
					'body',
					$dillonkearns$elm_pages$Pages$Internal$StaticHttpBody$encode(requestDetails.body))
				])));
};
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Set$isEmpty = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$isEmpty(dict);
};
var $dillonkearns$elm_pages$Secrets$Value = function (a) {
	return {$: 'Value', a: a};
};
var $dillonkearns$elm_pages$SecretsDict$Masked = {$: 'Masked'};
var $dillonkearns$elm_pages$SecretsDict$masked = $dillonkearns$elm_pages$SecretsDict$Masked;
var $dillonkearns$elm_pages$Secrets$maskedLookup = function (_v0) {
	maskedLookup:
	while (true) {
		var lookupSecrets = _v0.a;
		var _v1 = lookupSecrets($dillonkearns$elm_pages$SecretsDict$masked);
		if (_v1.$ === 'Ok') {
			var value = _v1.a;
			return value;
		} else {
			var error = _v1.a;
			var $temp$_v0 = $dillonkearns$elm_pages$Secrets$Value(lookupSecrets);
			_v0 = $temp$_v0;
			continue maskedLookup;
		}
	}
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$combineMultipleErrors = function (results) {
	return A3(
		$elm$core$List$foldr,
		F2(
			function (result, soFarResult) {
				if (soFarResult.$ === 'Ok') {
					var soFarOk = soFarResult.a;
					if (result.$ === 'Ok') {
						var value = result.a;
						return $elm$core$Result$Ok(
							A2($elm$core$List$cons, value, soFarOk));
					} else {
						var error_ = result.a;
						return $elm$core$Result$Err(
							_List_fromArray(
								[error_]));
					}
				} else {
					var errorsSoFar = soFarResult.a;
					if (result.$ === 'Ok') {
						return $elm$core$Result$Err(errorsSoFar);
					} else {
						var error_ = result.a;
						return $elm$core$Result$Err(
							A2($elm$core$List$cons, error_, errorsSoFar));
					}
				}
			}),
		$elm$core$Result$Ok(_List_Nil),
		results);
};
var $dillonkearns$elm_pages$Secrets$lookup = F2(
	function (secrets, _v0) {
		var lookupSecrets = _v0.a;
		return lookupSecrets(secrets);
	});
var $dillonkearns$elm_pages$Pages$StaticHttpRequest$resolveUrls = F3(
	function (appType, request, rawResponses) {
		if (request.$ === 'Request') {
			var _v1 = request.a;
			var urlList = _v1.a;
			var lookupFn = _v1.b;
			var _v2 = A2(lookupFn, appType, rawResponses);
			if (_v2.$ === 'Ok') {
				var _v3 = _v2.a;
				var nextRequest = _v3.b;
				return A2(
					$elm$core$Tuple$mapSecond,
					$elm$core$Basics$append(urlList),
					A3($dillonkearns$elm_pages$Pages$StaticHttpRequest$resolveUrls, appType, nextRequest, rawResponses));
			} else {
				return _Utils_Tuple2(false, urlList);
			}
		} else {
			return _Utils_Tuple2(true, _List_Nil);
		}
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$performStaticHttpRequests = F3(
	function (allRawResponses, secrets, staticRequests) {
		return A2(
			$elm$core$Result$mapError,
			$elm$core$List$concat,
			$dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$combineMultipleErrors(
				A2(
					$elm$core$List$map,
					function (urlBuilder) {
						return A2(
							$elm$core$Result$map,
							function (unmasked) {
								return {
									masked: $dillonkearns$elm_pages$Secrets$maskedLookup(urlBuilder),
									unmasked: unmasked
								};
							},
							A2($dillonkearns$elm_pages$Secrets$lookup, secrets, urlBuilder));
					},
					$elm$core$List$concat(
						A2(
							$elm$core$List$map,
							function (_v0) {
								var pagePath = _v0.a;
								var request = _v0.b;
								return A3($dillonkearns$elm_pages$Pages$StaticHttpRequest$resolveUrls, $dillonkearns$elm_pages$Pages$Internal$ApplicationType$Cli, request, allRawResponses).b;
							},
							staticRequests)))));
	});
var $elm$core$Set$foldl = F3(
	function (func, initialState, _v0) {
		var dict = _v0.a;
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (key, _v1, state) {
					return A2(func, key, state);
				}),
			initialState,
			dict);
	});
var $elm_community$dict_extra$Dict$Extra$removeMany = F2(
	function (set, dict) {
		return A3($elm$core$Set$foldl, $elm$core$Dict$remove, dict, set);
	});
var $dillonkearns$elm_pages$Pages$StaticHttpRequest$toBuildError = F2(
	function (path, error) {
		switch (error.$) {
			case 'MissingHttpResponse':
				var missingKey = error.a;
				return {
					fatal: true,
					message: _List_fromArray(
						[
							$dillonkearns$elm_pages$TerminalText$text(path),
							$dillonkearns$elm_pages$TerminalText$text('\n\n'),
							$dillonkearns$elm_pages$TerminalText$text(missingKey)
						]),
					title: 'Missing Http Response'
				};
			case 'DecoderError':
				var decodeErrorMessage = error.a;
				return {
					fatal: true,
					message: _List_fromArray(
						[
							$dillonkearns$elm_pages$TerminalText$text(path),
							$dillonkearns$elm_pages$TerminalText$text('\n\n'),
							$dillonkearns$elm_pages$TerminalText$text(decodeErrorMessage)
						]),
					title: 'Static Http Decoding Error'
				};
			default:
				var decodeErrorMessage = error.a;
				return {
					fatal: true,
					message: _List_fromArray(
						[
							$dillonkearns$elm_pages$TerminalText$text(path),
							$dillonkearns$elm_pages$TerminalText$text('\n\n'),
							$dillonkearns$elm_pages$TerminalText$text('I ran into a call to `Pages.StaticHttp.fail` with message: ' + decodeErrorMessage)
						]),
					title: 'Called Static Http Fail'
				};
		}
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$Success = function (a) {
	return {$: 'Success', a: a};
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$ToJsSuccessPayload = F5(
	function (pages, manifest, filesToGenerate, staticHttpCache, errors) {
		return {errors: errors, filesToGenerate: filesToGenerate, manifest: manifest, pages: pages, staticHttpCache: staticHttpCache};
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$toJsPayload = F5(
	function (encodedStatic, manifest, generated, allRawResponses, allErrors) {
		return $elm$core$List$isEmpty(
			A2(
				$elm$core$List$filter,
				function ($) {
					return $.fatal;
				},
				allErrors)) ? $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$Success(
			A5(
				$dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$ToJsSuccessPayload,
				encodedStatic,
				manifest,
				generated,
				$elm$core$Dict$fromList(
					A2(
						$elm$core$List$filterMap,
						function (_v0) {
							var key = _v0.a;
							var maybeValue = _v0.b;
							return A2(
								$elm$core$Maybe$map,
								function (value) {
									return _Utils_Tuple2(key, value);
								},
								maybeValue);
						},
						$elm$core$Dict$toList(allRawResponses))),
				A2($elm$core$List$map, $dillonkearns$elm_pages$BuildError$errorToString, allErrors))) : $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$Errors(
			$dillonkearns$elm_pages$BuildError$errorsToString(allErrors));
	});
var $elm$core$Set$union = F2(
	function (_v0, _v1) {
		var dict1 = _v0.a;
		var dict2 = _v1.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$union, dict1, dict2));
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$nextStep = F8(
	function (config, allSiteMetadata, siteMetadata, mode, secrets, allRawResponses, errors, _v0) {
		var staticResponses = _v0.a;
		var pendingRequests = A2(
			$elm_community$dict_extra$Dict$Extra$any,
			F2(
				function (path, entry) {
					var request = entry.a;
					var rawResponses = entry.b;
					var staticRequestsStatus = A3($dillonkearns$elm_pages$Pages$StaticHttpRequest$cacheRequestResolution, $dillonkearns$elm_pages$Pages$Internal$ApplicationType$Cli, request, allRawResponses);
					var hasPermanentHttpError = !$elm$core$List$isEmpty(errors);
					var hasPermanentError = function () {
						if (staticRequestsStatus.$ === 'HasPermanentError') {
							return true;
						} else {
							return false;
						}
					}();
					var _v13 = function () {
						if (staticRequestsStatus.$ === 'Incomplete') {
							var newUrlsToFetch = staticRequestsStatus.a;
							return _Utils_Tuple2(false, newUrlsToFetch);
						} else {
							return _Utils_Tuple2(true, _List_Nil);
						}
					}();
					var allUrlsKnown = _v13.a;
					var knownUrlsToFetch = _v13.b;
					var fetchedAllKnownUrls = $elm$core$Set$isEmpty(
						A2(
							$elm$core$Set$diff,
							$elm$core$Set$fromList(
								A2(
									$elm$core$List$map,
									$dillonkearns$elm_pages$Pages$StaticHttp$Request$hash,
									A2($elm$core$List$map, $dillonkearns$elm_pages$Secrets$maskedLookup, knownUrlsToFetch))),
							A2(
								$elm$core$Set$union,
								$elm$core$Set$fromList(
									$elm$core$Dict$keys(allRawResponses)),
								$elm$core$Set$fromList(
									$elm$core$Dict$keys(rawResponses)))));
					return (hasPermanentHttpError || (hasPermanentError || (allUrlsKnown && fetchedAllKnownUrls))) ? false : true;
				}),
			staticResponses);
		var metadataForGenerateFiles = A2(
			$elm$core$List$map,
			function (_v10) {
				var pagePath = _v10.a;
				var metadata = _v10.b;
				var contentForPage = A2(
					$elm$core$Maybe$andThen,
					$elm$core$Basics$identity,
					$elm$core$List$head(
						A2(
							$elm$core$List$filterMap,
							function (_v11) {
								var path = _v11.a;
								var body = _v11.b.body;
								var pagePathToGenerate = $dillonkearns$elm_pages$Pages$PagePath$toString(pagePath);
								var currentContentPath = A2($elm$core$String$join, '/', path);
								return _Utils_eq(pagePathToGenerate, currentContentPath) ? $elm$core$Maybe$Just(body) : $elm$core$Maybe$Nothing;
							},
							config.content)));
				return {
					body: A2($elm$core$Maybe$withDefault, '', contentForPage),
					frontmatter: metadata,
					path: pagePath
				};
			},
			A2($elm$core$Result$withDefault, _List_Nil, allSiteMetadata));
		var resolvedGenerateFilesResult = A3(
			$dillonkearns$elm_pages$Pages$StaticHttpRequest$resolve,
			$dillonkearns$elm_pages$Pages$Internal$ApplicationType$Cli,
			config.generateFiles(metadataForGenerateFiles),
			A2(
				$elm_community$dict_extra$Dict$Extra$filterMap,
				F2(
					function (key, value) {
						return $elm$core$Maybe$Just(value);
					}),
				allRawResponses));
		var generatedFiles = A2($elm$core$Result$withDefault, _List_Nil, resolvedGenerateFilesResult);
		var generatedOkayFiles = A2(
			$elm$core$List$filterMap,
			function (result) {
				if (result.$ === 'Ok') {
					var ok = result.a;
					return $elm$core$Maybe$Just(ok);
				} else {
					var error_ = result.a;
					return $elm$core$Maybe$Nothing;
				}
			},
			generatedFiles);
		var generatedFileErrors = A2(
			$elm$core$List$filterMap,
			function (result) {
				if (result.$ === 'Ok') {
					var ok = result.a;
					return $elm$core$Maybe$Nothing;
				} else {
					var error_ = result.a;
					return $elm$core$Maybe$Just(
						{
							fatal: true,
							message: _List_fromArray(
								[
									$dillonkearns$elm_pages$TerminalText$text('I encountered an Err from your generateFiles function. Message:\n'),
									$dillonkearns$elm_pages$TerminalText$text('Error: ' + error_)
								]),
							title: 'Generate Files Error'
						});
				}
			},
			generatedFiles);
		var failedRequests = A2(
			$elm$core$List$concatMap,
			function (_v5) {
				var path = _v5.a;
				var _v6 = _v5.b;
				var request = _v6.a;
				var usableRawResponses = allRawResponses;
				var staticRequestsStatus = A3($dillonkearns$elm_pages$Pages$StaticHttpRequest$cacheRequestResolution, $dillonkearns$elm_pages$Pages$Internal$ApplicationType$Cli, request, usableRawResponses);
				var maybePermanentError = function () {
					if (staticRequestsStatus.$ === 'HasPermanentError') {
						var theError = staticRequestsStatus.a;
						return $elm$core$Maybe$Just(theError);
					} else {
						return $elm$core$Maybe$Nothing;
					}
				}();
				var decoderErrors = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					A2(
						$elm$core$Maybe$map,
						$elm$core$List$singleton,
						A2(
							$elm$core$Maybe$map,
							$dillonkearns$elm_pages$Pages$StaticHttpRequest$toBuildError(path),
							maybePermanentError)));
				return decoderErrors;
			},
			$elm$core$Dict$toList(staticResponses));
		var allErrors = _Utils_ap(
			errors,
			_Utils_ap(failedRequests, generatedFileErrors));
		if (pendingRequests) {
			var requestContinuations = A2(
				$elm$core$List$map,
				function (_v3) {
					var path = _v3.a;
					var _v4 = _v3.b;
					var request = _v4.a;
					return _Utils_Tuple2(path, request);
				},
				$elm$core$Dict$toList(staticResponses));
			var _v1 = A3($dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$performStaticHttpRequests, allRawResponses, secrets, requestContinuations);
			if (_v1.$ === 'Ok') {
				var urlsToPerform = _v1.a;
				var maskedToUnmasked = $elm$core$Dict$fromList(
					A2(
						$elm$core$List$map,
						function (secureUrl) {
							return _Utils_Tuple2(
								$dillonkearns$elm_pages$Pages$StaticHttp$Request$hash(secureUrl.masked),
								secureUrl);
						},
						urlsToPerform));
				var dictOfNewUrlsToPerform = $elm$core$Dict$fromList(
					A2(
						$elm$core$List$map,
						function (hashedUrl) {
							return _Utils_Tuple2(hashedUrl, $elm$core$Maybe$Nothing);
						},
						A2(
							$elm$core$List$map,
							$dillonkearns$elm_pages$Pages$StaticHttp$Request$hash,
							A2(
								$elm$core$List$map,
								function ($) {
									return $.masked;
								},
								urlsToPerform))));
				var newAllRawResponses = A2($elm$core$Dict$union, allRawResponses, dictOfNewUrlsToPerform);
				var alreadyPerformed = $elm$core$Set$fromList(
					$elm$core$Dict$keys(allRawResponses));
				var newThing = A2(
					$elm$core$List$map,
					function (_v2) {
						var maskedUrl = _v2.a;
						var secureUrl = _v2.b;
						return secureUrl;
					},
					$elm$core$Dict$toList(
						A2($elm_community$dict_extra$Dict$Extra$removeMany, alreadyPerformed, maskedToUnmasked)));
				return A2($dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$Continue, newAllRawResponses, newThing);
			} else {
				var error_ = _v1.a;
				return $dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$Finish(
					$dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$Errors(
						$dillonkearns$elm_pages$BuildError$errorsToString(
							_Utils_ap(
								error_,
								_Utils_ap(failedRequests, errors)))));
			}
		} else {
			return $dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$Finish(
				A5(
					$dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$toJsPayload,
					A3(
						$dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$encode,
						allRawResponses,
						mode,
						$dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$StaticResponses(staticResponses)),
					config.manifest,
					generatedOkayFiles,
					allRawResponses,
					allErrors));
		}
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$Effect$Batch = function (a) {
	return {$: 'Batch', a: a};
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Effect$FetchHttp = function (a) {
	return {$: 'FetchHttp', a: a};
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$InitialData = function (a) {
	return {$: 'InitialData', a: a};
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Effect$NoEffect = {$: 'NoEffect'};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Effect$SendJsData = function (a) {
	return {$: 'SendJsData', a: a};
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Effect$SendSinglePage = function (a) {
	return {$: 'SendSinglePage', a: a};
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$popProcessedRequest = function (model) {
	return _Utils_update(
		model,
		{
			unprocessedPages: A2($elm$core$List$drop, 1, model.unprocessedPages)
		});
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$PageProgress = function (a) {
	return {$: 'PageProgress', a: a};
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$sendProgress = function (singlePage) {
	return $dillonkearns$elm_pages$Pages$Internal$Platform$Effect$Batch(
		_List_fromArray(
			[
				$dillonkearns$elm_pages$Pages$Internal$Platform$Effect$SendSinglePage(
				$dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$PageProgress(singlePage))
			]));
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$ToString$defaultFormatOptions = {indent: 0, newLines: false};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$asJsonView = function (x) {
	return $elm$json$Json$Encode$string('REPLACE_ME_WITH_JSON_STRINGIFY');
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$HtmlContext = F2(
	function (a, b) {
		return {$: 'HtmlContext', a: a, b: b};
	});
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$NodeEntry = function (a) {
	return {$: 'NodeEntry', a: a};
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$NodeRecord = F4(
	function (tag, children, facts, descendantsCount) {
		return {children: children, descendantsCount: descendantsCount, facts: facts, tag: tag};
	});
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$TextTag = function (a) {
	return {$: 'TextTag', a: a};
};
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$childrenKey = 'e';
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$CustomNode = function (a) {
	return {$: 'CustomNode', a: a};
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$MarkdownNode = function (a) {
	return {$: 'MarkdownNode', a: a};
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$CustomNodeRecord = F2(
	function (facts, model) {
		return {facts: facts, model: model};
	});
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$Facts = F5(
	function (styles, events, attributeNamespace, stringAttributes, boolAttributes) {
		return {attributeNamespace: attributeNamespace, boolAttributes: boolAttributes, events: events, stringAttributes: stringAttributes, styles: styles};
	});
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$Constants$attributeNamespaceKey = 'a4';
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$Constants$eventKey = 'a0';
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeEvents = function (taggedEventDecoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$field,
				$ThinkAlexandria$elm_html_in_elm$ElmHtml$Constants$eventKey,
				$elm$json$Json$Decode$dict(
					A2($elm$json$Json$Decode$map, taggedEventDecoder, $elm$json$Json$Decode$value))),
				$elm$json$Json$Decode$succeed($elm$core$Dict$empty)
			]));
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$Constants$attributeKey = 'a3';
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeDictFilterMap = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Dict$toList,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$List$filterMap(
					function (_v0) {
						var key = _v0.a;
						var value = _v0.b;
						var _v1 = A2($elm$json$Json$Decode$decodeValue, decoder, value);
						if (_v1.$ === 'Err') {
							return $elm$core$Maybe$Nothing;
						} else {
							var v = _v1.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(key, v));
						}
					}),
				$elm$core$Dict$fromList)),
		$elm$json$Json$Decode$dict($elm$json$Json$Decode$value));
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeAttributes = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$field,
				$ThinkAlexandria$elm_html_in_elm$ElmHtml$Constants$attributeKey,
				$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeDictFilterMap(decoder)),
				$elm$json$Json$Decode$succeed($elm$core$Dict$empty)
			]));
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$Constants$styleKey = 'a1';
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$Constants$knownKeys = _List_fromArray(
	[$ThinkAlexandria$elm_html_in_elm$ElmHtml$Constants$styleKey, $ThinkAlexandria$elm_html_in_elm$ElmHtml$Constants$eventKey, $ThinkAlexandria$elm_html_in_elm$ElmHtml$Constants$attributeKey, $ThinkAlexandria$elm_html_in_elm$ElmHtml$Constants$attributeNamespaceKey]);
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$Helpers$filterKnownKeys = $elm$core$Dict$filter(
	F2(
		function (key, _v0) {
			return !A2($elm$core$List$member, key, $ThinkAlexandria$elm_html_in_elm$ElmHtml$Constants$knownKeys);
		}));
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeOthers = function (otherDecoder) {
	return A2(
		$elm$json$Json$Decode$andThen,
		function (attributes) {
			return A2(
				$elm$json$Json$Decode$map,
				A2(
					$elm$core$Basics$composeR,
					$ThinkAlexandria$elm_html_in_elm$ElmHtml$Helpers$filterKnownKeys,
					$elm$core$Dict$union(attributes)),
				$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeDictFilterMap(otherDecoder));
		},
		$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeAttributes(otherDecoder));
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeStyles = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$json$Json$Decode$field,
			$ThinkAlexandria$elm_html_in_elm$ElmHtml$Constants$styleKey,
			$elm$json$Json$Decode$dict($elm$json$Json$Decode$string)),
			$elm$json$Json$Decode$succeed($elm$core$Dict$empty)
		]));
var $elm$json$Json$Decode$map5 = _Json_map5;
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeFacts = function (_v0) {
	var taggers = _v0.a;
	var eventDecoder = _v0.b;
	return A6(
		$elm$json$Json$Decode$map5,
		$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$Facts,
		$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeStyles,
		$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeEvents(
			eventDecoder(taggers)),
		$elm$json$Json$Decode$maybe(
			A2($elm$json$Json$Decode$field, $ThinkAlexandria$elm_html_in_elm$ElmHtml$Constants$attributeNamespaceKey, $elm$json$Json$Decode$value)),
		$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeOthers($elm$json$Json$Decode$string),
		$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeOthers($elm$json$Json$Decode$bool));
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$factsKey = 'd';
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeCustomNodeRecord = function (context) {
	return A3(
		$elm$json$Json$Decode$map2,
		$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$CustomNodeRecord,
		A2(
			$elm$json$Json$Decode$field,
			$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$factsKey,
			$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeFacts(context)),
		A2($elm$json$Json$Decode$field, 'g', $elm$json$Json$Decode$value));
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$MarkdownNodeRecord = F2(
	function (facts, model) {
		return {facts: facts, model: model};
	});
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$Markdown$MarkdownModel = F2(
	function (options, markdown) {
		return {markdown: markdown, options: options};
	});
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$Markdown$baseMarkdownModel = {
	markdown: '',
	options: {
		defaultHighlighting: $elm$core$Maybe$Nothing,
		githubFlavored: $elm$core$Maybe$Just(
			{breaks: false, tables: false}),
		sanitize: false,
		smartypants: false
	}
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$Markdown$decodeMarkdownModel = A2(
	$elm$json$Json$Decode$map,
	$ThinkAlexandria$elm_html_in_elm$ElmHtml$Markdown$MarkdownModel($ThinkAlexandria$elm_html_in_elm$ElmHtml$Markdown$baseMarkdownModel.options),
	A2($elm$json$Json$Decode$field, 'markdown', $elm$json$Json$Decode$string));
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeMarkdownNodeRecord = function (context) {
	return A3(
		$elm$json$Json$Decode$map2,
		$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$MarkdownNodeRecord,
		A2(
			$elm$json$Json$Decode$field,
			$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$factsKey,
			$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeFacts(context)),
		A2($elm$json$Json$Decode$field, 'g', $ThinkAlexandria$elm_html_in_elm$ElmHtml$Markdown$decodeMarkdownModel));
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeCustomNode = function (context) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$map,
				$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$MarkdownNode,
				$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeMarkdownNodeRecord(context)),
				A2(
				$elm$json$Json$Decode$map,
				$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$CustomNode,
				$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeCustomNodeRecord(context))
			]));
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeTextTag = A2(
	$elm$json$Json$Decode$field,
	'a',
	A2(
		$elm$json$Json$Decode$andThen,
		function (text) {
			return $elm$json$Json$Decode$succeed(
				{text: text});
		},
		$elm$json$Json$Decode$string));
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$descendantsCountKey = 'b';
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Decode$map4 = _Json_map4;
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$tagKey = 'c';
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$contextDecodeElmHtml = function (context) {
	return A2(
		$elm$json$Json$Decode$andThen,
		function (typeInt) {
			switch (typeInt) {
				case 0:
					return A2($elm$json$Json$Decode$map, $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$TextTag, $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeTextTag);
				case 2:
					return A2(
						$elm$json$Json$Decode$map,
						$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$NodeEntry,
						$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeKeyedNode(context));
				case 1:
					return A2(
						$elm$json$Json$Decode$map,
						$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$NodeEntry,
						$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeNode(context));
				case 3:
					return $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeCustomNode(context);
				case 4:
					return $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeTagger(context);
				case 5:
					return A2(
						$elm$json$Json$Decode$field,
						'node',
						$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$contextDecodeElmHtml(context));
				default:
					return $elm$json$Json$Decode$fail(
						'No such type as ' + $elm$core$String$fromInt(typeInt));
			}
		},
		A2($elm$json$Json$Decode$field, '$', $elm$json$Json$Decode$int));
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeKeyedNode = function (context) {
	var decodeSecondNode = A2(
		$elm$json$Json$Decode$field,
		'b',
		$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$contextDecodeElmHtml(context));
	return A5(
		$elm$json$Json$Decode$map4,
		$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$NodeRecord,
		A2($elm$json$Json$Decode$field, $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$tagKey, $elm$json$Json$Decode$string),
		A2(
			$elm$json$Json$Decode$field,
			$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$childrenKey,
			$elm$json$Json$Decode$list(decodeSecondNode)),
		A2(
			$elm$json$Json$Decode$field,
			$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$factsKey,
			$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeFacts(context)),
		A2($elm$json$Json$Decode$field, $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$descendantsCountKey, $elm$json$Json$Decode$int));
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeNode = function (context) {
	return A5(
		$elm$json$Json$Decode$map4,
		$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$NodeRecord,
		A2($elm$json$Json$Decode$field, $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$tagKey, $elm$json$Json$Decode$string),
		A2(
			$elm$json$Json$Decode$field,
			$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$childrenKey,
			$elm$json$Json$Decode$list(
				$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$contextDecodeElmHtml(context))),
		A2(
			$elm$json$Json$Decode$field,
			$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$factsKey,
			$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeFacts(context)),
		A2($elm$json$Json$Decode$field, $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$descendantsCountKey, $elm$json$Json$Decode$int));
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeTagger = function (_v0) {
	var taggers = _v0.a;
	var eventDecoder = _v0.b;
	return A2(
		$elm$json$Json$Decode$andThen,
		function (tagger) {
			var nodeDecoder = $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$contextDecodeElmHtml(
				A2(
					$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$HtmlContext,
					_Utils_ap(
						taggers,
						_List_fromArray(
							[tagger])),
					eventDecoder));
			return A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['k']),
				nodeDecoder);
		},
		A2($elm$json$Json$Decode$field, 'j', $elm$json$Json$Decode$value));
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeElmHtml = function (eventDecoder) {
	return $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$contextDecodeElmHtml(
		A2($ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$HtmlContext, _List_Nil, eventDecoder));
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$EscapableRawTextElements = {$: 'EscapableRawTextElements'};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$NormalElements = {$: 'NormalElements'};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$RawTextElements = {$: 'RawTextElements'};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$VoidElements = {$: 'VoidElements'};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$escapableRawTextElements = _List_fromArray(
	['textarea', 'title']);
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$rawTextElements = _List_fromArray(
	['script', 'style']);
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$voidElements = _List_fromArray(
	['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$toElementKind = function (element) {
	return A2($elm$core$List$member, element, $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$voidElements) ? $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$VoidElements : (A2($elm$core$List$member, element, $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$rawTextElements) ? $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$RawTextElements : (A2($elm$core$List$member, element, $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$escapableRawTextElements) ? $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$EscapableRawTextElements : $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$NormalElements));
};
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$ToString$nodeRecordToString = F2(
	function (options, _v1) {
		var tag = _v1.tag;
		var children = _v1.children;
		var facts = _v1.facts;
		var styles = function () {
			var _v6 = $elm$core$Dict$toList(facts.styles);
			if (!_v6.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var stylesList = _v6;
				return $elm$core$Maybe$Just(
					function (styleString) {
						return 'style=\"' + (styleString + '\"');
					}(
						A2(
							$elm$core$String$join,
							'',
							A2(
								$elm$core$List$map,
								function (_v7) {
									var key = _v7.a;
									var value = _v7.b;
									return key + (':' + (value + ';'));
								},
								stylesList))));
			}
		}();
		var stringAttributes = $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (_v5) {
						var k = _v5.a;
						var v = _v5.b;
						return k + ('=\"' + (v + '\"'));
					},
					$elm$core$Dict$toList(
						A2(
							$elm$core$Dict$filter,
							F2(
								function (k, v) {
									return k !== 'className';
								}),
							facts.stringAttributes)))));
		var openTag = function (extras) {
			var trimmedExtras = A2(
				$elm$core$List$filter,
				$elm$core$Basics$neq(''),
				A2(
					$elm$core$List$map,
					$elm$core$String$trim,
					A2(
						$elm$core$List$filterMap,
						function (x) {
							return x;
						},
						extras)));
			var filling = function () {
				if (!trimmedExtras.b) {
					return '';
				} else {
					var more = trimmedExtras;
					return ' ' + A2($elm$core$String$join, ' ', more);
				}
			}();
			return '<' + (tag + (filling + '>'));
		};
		var closeTag = '</' + (tag + '>');
		var classes = A2(
			$elm$core$Maybe$map,
			function (name) {
				return 'class=\"' + (name + '\"');
			},
			A2($elm$core$Dict$get, 'className', facts.stringAttributes));
		var childrenStrings = A2(
			$elm$core$List$map,
			$elm$core$Basics$append(
				A2($elm$core$String$repeat, options.indent, ' ')),
			$elm$core$List$concat(
				A2(
					$elm$core$List$map,
					$ThinkAlexandria$elm_html_in_elm$ElmHtml$ToString$nodeToLines(options),
					children)));
		var boolAttributes = $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (_v3) {
						var k = _v3.a;
						var v = _v3.b;
						return k + ('=' + (v ? 'true' : 'false'));
					},
					$elm$core$Dict$toList(facts.boolAttributes))));
		var _v2 = $ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$toElementKind(tag);
		if (_v2.$ === 'VoidElements') {
			return _List_fromArray(
				[
					openTag(
					_List_fromArray(
						[classes, styles, stringAttributes, boolAttributes]))
				]);
		} else {
			return _Utils_ap(
				_List_fromArray(
					[
						openTag(
						_List_fromArray(
							[classes, styles, stringAttributes, boolAttributes]))
					]),
				_Utils_ap(
					childrenStrings,
					_List_fromArray(
						[closeTag])));
		}
	});
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$ToString$nodeToLines = F2(
	function (options, nodeType) {
		switch (nodeType.$) {
			case 'TextTag':
				var text = nodeType.a.text;
				return _List_fromArray(
					[text]);
			case 'NodeEntry':
				var record = nodeType.a;
				return A2($ThinkAlexandria$elm_html_in_elm$ElmHtml$ToString$nodeRecordToString, options, record);
			case 'CustomNode':
				var record = nodeType.a;
				return _List_Nil;
			case 'MarkdownNode':
				var record = nodeType.a;
				return _List_fromArray(
					[record.model.markdown]);
			default:
				return _List_Nil;
		}
	});
var $ThinkAlexandria$elm_html_in_elm$ElmHtml$ToString$nodeToStringWithOptions = function (options) {
	return A2(
		$elm$core$Basics$composeR,
		$ThinkAlexandria$elm_html_in_elm$ElmHtml$ToString$nodeToLines(options),
		$elm$core$String$join(
			options.newLines ? '\n' : ''));
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$viewDecoder = F2(
	function (options, viewHtml) {
		var _v0 = A2(
			$elm$json$Json$Decode$decodeValue,
			$ThinkAlexandria$elm_html_in_elm$ElmHtml$InternalTypes$decodeElmHtml(
				F2(
					function (_v1, _v2) {
						return $elm$json$Json$Decode$succeed(_Utils_Tuple0);
					})),
			$dillonkearns$elm_pages$Pages$Internal$Platform$Cli$asJsonView(viewHtml));
		if (_v0.$ === 'Ok') {
			var str = _v0.a;
			return A2($ThinkAlexandria$elm_html_in_elm$ElmHtml$ToString$nodeToStringWithOptions, options, str);
		} else {
			var err = _v0.a;
			return 'Error: ' + $elm$json$Json$Decode$errorToString(err);
		}
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$viewRenderer = function (html) {
	var options = _Utils_update(
		$ThinkAlexandria$elm_html_in_elm$ElmHtml$ToString$defaultFormatOptions,
		{indent: 0, newLines: false});
	return A2($dillonkearns$elm_pages$Pages$Internal$Platform$Cli$viewDecoder, options, html);
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$sendSinglePageProgress = F5(
	function (toJsPayload, siteMetadata, config, contentCache, model) {
		return function (_v0) {
			var page = _v0.a;
			var metadata = _v0.b;
			var staticData = A2(
				$elm$core$Maybe$withDefault,
				$elm$core$Dict$empty,
				A2(
					$elm$core$Dict$get,
					$dillonkearns$elm_pages$Pages$PagePath$toString(page),
					toJsPayload.pages));
			var renderer = function (value) {
				return A3($dillonkearns$elm_pages$Pages$ContentCache$parseContent, 'md', value, config.document);
			};
			var makeItWork = function (request) {
				return A2(
					$elm$core$Result$mapError,
					$dillonkearns$elm_pages$Pages$StaticHttpRequest$toBuildError(
						$dillonkearns$elm_pages$Pages$PagePath$toString(page)),
					A3(
						$dillonkearns$elm_pages$Pages$StaticHttpRequest$resolve,
						$dillonkearns$elm_pages$Pages$Internal$ApplicationType$Browser,
						request,
						A2(
							$elm$core$Dict$map,
							F2(
								function (k, v) {
									return $elm$core$Maybe$Just(v);
								}),
							staticData)));
			};
			var currentPage = {frontmatter: metadata, path: page};
			var currentUrl = {
				fragment: $elm$core$Maybe$Nothing,
				host: config.canonicalSiteUrl,
				path: $dillonkearns$elm_pages$Pages$PagePath$toString(currentPage.path),
				port_: $elm$core$Maybe$Nothing,
				protocol: $elm$url$Url$Https,
				query: $elm$core$Maybe$Nothing
			};
			var urls = {
				baseUrl: {fragment: $elm$core$Maybe$Nothing, host: config.canonicalSiteUrl, path: '', port_: $elm$core$Maybe$Nothing, protocol: $elm$url$Url$Https, query: $elm$core$Maybe$Nothing},
				currentUrl: currentUrl
			};
			var updatedCache = A4(
				$dillonkearns$elm_pages$Pages$ContentCache$update,
				contentCache,
				renderer,
				urls,
				{body: '', staticData: model.allRawResponses});
			var value2 = function () {
				var _v3 = A3($dillonkearns$elm_pages$Pages$ContentCache$lookup, config.pathKey, updatedCache, urls);
				if ((_v3.$ === 'Just') && (_v3.a.b.$ === 'Parsed')) {
					var _v4 = _v3.a;
					var path = _v4.a;
					var _v5 = _v4.b;
					var frontmatter = _v5.a;
					var unparsedBody = _v5.b;
					var viewResult = _v5.c;
					return A2(
						$elm$core$Result$mapError,
						function (parseError) {
							return {
								fatal: true,
								message: _List_fromArray(
									[
										$dillonkearns$elm_pages$TerminalText$text(parseError)
									]),
								title: 'Internal Error'
							};
						},
						A2(
							$elm$core$Result$map,
							function (body) {
								return {body: body, unparsedBody: unparsedBody, viewResult: viewResult};
							},
							viewResult.body));
				} else {
					return $elm$core$Result$Err(
						{
							fatal: true,
							message: _List_fromArray(
								[
									$dillonkearns$elm_pages$TerminalText$text('Unable to lookup value in ContentCache.')
								]),
							title: 'Internal Error'
						});
				}
			}();
			var pageModel = config.init(
				$elm$core$Maybe$Just(
					{
						metadata: metadata,
						path: {fragment: $elm$core$Maybe$Nothing, path: currentPage.path, query: $elm$core$Maybe$Nothing}
					})).a;
			var viewRequest = A2(
				config.view,
				A2($elm$core$Result$withDefault, _List_Nil, siteMetadata),
				currentPage);
			var twoThings = makeItWork(viewRequest);
			var _v1 = A3($elm$core$Result$map2, $elm$core$Tuple$pair, twoThings, value2);
			if (_v1.$ === 'Ok') {
				var _v2 = _v1.a;
				var success = _v2.a;
				var lookedUp = _v2.b;
				var viewValue = A2(success.view, pageModel, lookedUp.body);
				return $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$sendProgress(
					{
						body: lookedUp.unparsedBody,
						contentJson: A2(
							$elm$core$Maybe$withDefault,
							$elm$core$Dict$empty,
							A2(
								$elm$core$Dict$get,
								$dillonkearns$elm_pages$Pages$PagePath$toString(page),
								toJsPayload.pages)),
						errors: _List_Nil,
						head: success.head,
						html: $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$viewRenderer(viewValue.body),
						route: $dillonkearns$elm_pages$Pages$PagePath$toString(page),
						title: viewValue.title
					});
			} else {
				var error = _v1.a;
				return $dillonkearns$elm_pages$Pages$Internal$Platform$Effect$SendJsData(
					$dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$Errors(
						$dillonkearns$elm_pages$BuildError$errorToString(error)));
			}
		};
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$nextStepToEffect = F4(
	function (contentCache, config, model, nextStep) {
		if (nextStep.$ === 'Continue') {
			var updatedAllRawResponses = nextStep.a;
			var httpRequests = nextStep.b;
			var pending = _List_Nil;
			var nextAndPending = _Utils_ap(model.pendingRequests, httpRequests);
			var doNow = nextAndPending;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{allRawResponses: updatedAllRawResponses, pendingRequests: pending}),
				$dillonkearns$elm_pages$Pages$Internal$Platform$Effect$Batch(
					A2($elm$core$List$map, $dillonkearns$elm_pages$Pages$Internal$Platform$Effect$FetchHttp, doNow)));
		} else {
			var toJsPayload = nextStep.a;
			var _v1 = model.mode;
			if (_v1.$ === 'ElmToHtmlBeta') {
				var siteMetadata = A2(
					$elm$core$Result$mapError,
					$elm$core$List$map($elm$core$Tuple$second),
					A2(
						$elm$core$Result$map,
						function (cache) {
							return A2($dillonkearns$elm_pages$Pages$ContentCache$extractMetadata, config.pathKey, cache);
						},
						contentCache));
				if (siteMetadata.$ === 'Ok') {
					var pages = siteMetadata.a;
					var sendManifestIfNeeded = function () {
						if (_Utils_eq(
							$elm$core$List$length(model.unprocessedPages),
							$elm$core$List$length(pages))) {
							if (toJsPayload.$ === 'Success') {
								var value = toJsPayload.a;
								return $dillonkearns$elm_pages$Pages$Internal$Platform$Effect$SendSinglePage(
									$dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$InitialData(
										{filesToGenerate: value.filesToGenerate, manifest: value.manifest}));
							} else {
								var errorMessage = toJsPayload.a;
								return $dillonkearns$elm_pages$Pages$Internal$Platform$Effect$SendJsData(toJsPayload);
							}
						} else {
							return $dillonkearns$elm_pages$Pages$Internal$Platform$Effect$NoEffect;
						}
					}();
					return function (cmd) {
						return _Utils_Tuple2(
							$dillonkearns$elm_pages$Pages$Internal$Platform$Cli$popProcessedRequest(model),
							$dillonkearns$elm_pages$Pages$Internal$Platform$Effect$Batch(
								_List_fromArray(
									[cmd, sendManifestIfNeeded])));
					}(
						$dillonkearns$elm_pages$Pages$Internal$Platform$Effect$Batch(
							A2(
								$elm$core$List$filterMap,
								function (pageAndMetadata) {
									if (toJsPayload.$ === 'Success') {
										var value = toJsPayload.a;
										return $elm$core$Maybe$Just(
											A6($dillonkearns$elm_pages$Pages$Internal$Platform$Cli$sendSinglePageProgress, value, siteMetadata, config, contentCache, model, pageAndMetadata));
									} else {
										var errorMessage = toJsPayload.a;
										return $elm$core$Maybe$Nothing;
									}
								},
								A2($elm$core$List$take, 1, model.unprocessedPages))));
				} else {
					var error = siteMetadata.a;
					return _Utils_Tuple2(
						model,
						$dillonkearns$elm_pages$Pages$Internal$Platform$Effect$SendJsData(
							$dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$Errors(
								$dillonkearns$elm_pages$BuildError$errorsToString(error))));
				}
			} else {
				return _Utils_Tuple2(
					model,
					$dillonkearns$elm_pages$Pages$Internal$Platform$Effect$SendJsData(toJsPayload));
			}
		}
	});
var $dillonkearns$elm_pages$Pages$ContentCache$pagesWithErrors = function (cache) {
	return A2(
		$elm$core$Result$withDefault,
		_List_Nil,
		A2(
			$elm$core$Result$map,
			function (okCache) {
				return A2(
					$elm$core$List$filterMap,
					function (_v0) {
						var path = _v0.a;
						var value = _v0.b;
						if (value.$ === 'Parsed') {
							var metadata = value.a;
							var rawBody = value.b;
							var body = value.c.body;
							if (body.$ === 'Err') {
								var parseError = body.a;
								return $elm$core$Maybe$Just(
									A2($dillonkearns$elm_pages$Pages$ContentCache$createBuildError, path, parseError));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						} else {
							return $elm$core$Maybe$Nothing;
						}
					},
					$elm$core$Dict$toList(okCache));
			},
			cache));
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$resultFolder = F2(
	function (current, soFarResult) {
		if (soFarResult.$ === 'Ok') {
			var soFarOk = soFarResult.a;
			if (current.$ === 'Ok') {
				var currentOk = current.a;
				return $elm$core$Result$Ok(
					A2($elm$core$List$cons, currentOk, soFarOk));
			} else {
				var error = current.a;
				return $elm$core$Result$Err(
					_List_fromArray(
						[error]));
			}
		} else {
			var soFarErr = soFarResult.a;
			if (current.$ === 'Ok') {
				var currentOk = current.a;
				return $elm$core$Result$Err(soFarErr);
			} else {
				var error = current.a;
				return $elm$core$Result$Err(
					A2($elm$core$List$cons, error, soFarErr));
			}
		}
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$combine = function (list) {
	return A3(
		$elm$core$List$foldr,
		$dillonkearns$elm_pages$Pages$Internal$Platform$Cli$resultFolder,
		$elm$core$Result$Ok(_List_Nil),
		list);
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$staticResponseForPage = F2(
	function (siteMetadata, viewFn) {
		return $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$combine(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var pagePath = _v0.a;
					var frontmatter = _v0.b;
					var thing = A2(
						viewFn,
						siteMetadata,
						{frontmatter: frontmatter, path: pagePath});
					return $elm$core$Result$Ok(
						_Utils_Tuple2(pagePath, thing));
				},
				siteMetadata));
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$drop1 = function (model) {
	return A2($elm$core$List$take, 1, model.unprocessedPages);
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$updateAndSendPortIfDone = F5(
	function (contentCache, config, siteMetadata, model, toModel) {
		var nextToProcess = $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$drop1(model);
		return A2(
			$elm$core$Tuple$mapFirst,
			toModel,
			A4(
				$dillonkearns$elm_pages$Pages$Internal$Platform$Cli$nextStepToEffect,
				contentCache,
				config,
				model,
				A8(
					$dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$nextStep,
					config,
					siteMetadata,
					$elm$core$Result$Ok(nextToProcess),
					model.mode,
					model.secrets,
					model.allRawResponses,
					model.errors,
					model.staticResponses)));
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$initLegacy = F6(
	function (_v0, toModel, contentCache, siteMetadata, config, flags) {
		var secrets = _v0.secrets;
		var mode = _v0.mode;
		var staticHttpCache = _v0.staticHttpCache;
		if (contentCache.$ === 'Ok') {
			var _v2 = $dillonkearns$elm_pages$Pages$ContentCache$pagesWithErrors(contentCache);
			if (!_v2.b) {
				var requests = A2(
					$elm$core$Result$andThen,
					function (metadata) {
						return A2($dillonkearns$elm_pages$Pages$Internal$Platform$Cli$staticResponseForPage, metadata, config.view);
					},
					siteMetadata);
				var staticResponses = function () {
					if (requests.$ === 'Ok') {
						var okRequests = requests.a;
						return A4($dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$init, staticHttpCache, siteMetadata, config, okRequests);
					} else {
						var errors = requests.a;
						return A4($dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$init, staticHttpCache, siteMetadata, config, _List_Nil);
					}
				}();
				return A2(
					$elm$core$Tuple$mapFirst,
					toModel,
					A4(
						$dillonkearns$elm_pages$Pages$Internal$Platform$Cli$nextStepToEffect,
						contentCache,
						config,
						A7(
							$dillonkearns$elm_pages$Pages$Internal$Platform$Cli$Model,
							staticResponses,
							secrets,
							_List_Nil,
							staticHttpCache,
							mode,
							_List_Nil,
							A2($elm$core$Result$withDefault, _List_Nil, siteMetadata)),
						A8(
							$dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$nextStep,
							config,
							siteMetadata,
							A2(
								$elm$core$Result$map,
								$elm$core$List$take(1),
								siteMetadata),
							mode,
							secrets,
							staticHttpCache,
							_List_Nil,
							staticResponses)));
			} else {
				var pageErrors = _v2;
				var requests = A2(
					$elm$core$Result$andThen,
					function (metadata) {
						return A2($dillonkearns$elm_pages$Pages$Internal$Platform$Cli$staticResponseForPage, metadata, config.view);
					},
					siteMetadata);
				var staticResponses = function () {
					if (requests.$ === 'Ok') {
						var okRequests = requests.a;
						return A4($dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$init, staticHttpCache, siteMetadata, config, okRequests);
					} else {
						var errors = requests.a;
						return A4($dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$init, staticHttpCache, siteMetadata, config, _List_Nil);
					}
				}();
				return A5(
					$dillonkearns$elm_pages$Pages$Internal$Platform$Cli$updateAndSendPortIfDone,
					contentCache,
					config,
					siteMetadata,
					A7(
						$dillonkearns$elm_pages$Pages$Internal$Platform$Cli$Model,
						staticResponses,
						secrets,
						pageErrors,
						staticHttpCache,
						mode,
						_List_Nil,
						A2($elm$core$Result$withDefault, _List_Nil, siteMetadata)),
					toModel);
			}
		} else {
			var metadataParserErrors = contentCache.a;
			return A5(
				$dillonkearns$elm_pages$Pages$Internal$Platform$Cli$updateAndSendPortIfDone,
				contentCache,
				config,
				siteMetadata,
				A7(
					$dillonkearns$elm_pages$Pages$Internal$Platform$Cli$Model,
					$dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$error,
					secrets,
					A2($elm$core$List$map, $elm$core$Tuple$second, metadataParserErrors),
					staticHttpCache,
					mode,
					_List_Nil,
					A2($elm$core$Result$withDefault, _List_Nil, siteMetadata)),
				toModel);
		}
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$init = F5(
	function (toModel, contentCache, siteMetadata, config, flags) {
		var _v0 = A2($elm$json$Json$Decode$decodeValue, $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$flagsDecoder, flags);
		if (_v0.$ === 'Ok') {
			var secrets = _v0.a.secrets;
			var mode = _v0.a.mode;
			var staticHttpCache = _v0.a.staticHttpCache;
			return A6(
				$dillonkearns$elm_pages$Pages$Internal$Platform$Cli$initLegacy,
				{mode: mode, secrets: secrets, staticHttpCache: staticHttpCache},
				toModel,
				contentCache,
				siteMetadata,
				config,
				flags);
		} else {
			var error = _v0.a;
			return A5(
				$dillonkearns$elm_pages$Pages$Internal$Platform$Cli$updateAndSendPortIfDone,
				contentCache,
				config,
				siteMetadata,
				A7(
					$dillonkearns$elm_pages$Pages$Internal$Platform$Cli$Model,
					$dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$error,
					$dillonkearns$elm_pages$SecretsDict$masked,
					_List_fromArray(
						[
							{
							fatal: true,
							message: _List_fromArray(
								[
									$dillonkearns$elm_pages$TerminalText$text(
									'Failed to parse flags: ' + $elm$json$Json$Decode$errorToString(error))
								]),
							title: 'Internal Error'
						}
						]),
					$elm$core$Dict$empty,
					$dillonkearns$elm_pages$Pages$Internal$Platform$Mode$Dev,
					_List_Nil,
					A2($elm$core$Result$withDefault, _List_Nil, siteMetadata)),
				toModel);
		}
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$Continue = {$: 'Continue'};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$GotStaticHttpResponse = function (a) {
	return {$: 'GotStaticHttpResponse', a: a};
};
var $miniBill$elm_codec$Codec$encoder = function (_v0) {
	var m = _v0.a;
	return m.encoder;
};
var $dillonkearns$elm_pages$Pages$Http$BadStatus = F2(
	function (a, b) {
		return {$: 'BadStatus', a: a, b: b};
	});
var $dillonkearns$elm_pages$Pages$Http$BadUrl = function (a) {
	return {$: 'BadUrl', a: a};
};
var $dillonkearns$elm_pages$Pages$Http$NetworkError = {$: 'NetworkError'};
var $dillonkearns$elm_pages$Pages$Http$Timeout = {$: 'Timeout'};
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $dillonkearns$elm_pages$Pages$Http$expectString = function (toMsg) {
	return A2(
		$elm$http$Http$expectStringResponse,
		toMsg,
		function (response) {
			switch (response.$) {
				case 'BadUrl_':
					var url = response.a;
					return $elm$core$Result$Err(
						$dillonkearns$elm_pages$Pages$Http$BadUrl(url));
				case 'Timeout_':
					return $elm$core$Result$Err($dillonkearns$elm_pages$Pages$Http$Timeout);
				case 'NetworkError_':
					return $elm$core$Result$Err($dillonkearns$elm_pages$Pages$Http$NetworkError);
				case 'BadStatus_':
					var metadata = response.a;
					var body = response.b;
					return $elm$core$Result$Err(
						A2($dillonkearns$elm_pages$Pages$Http$BadStatus, metadata, body));
				default:
					var metadata = response.a;
					var body = response.b;
					return $elm$core$Result$Ok(body);
			}
		});
};
var $elm$http$Http$Header = F2(
	function (a, b) {
		return {$: 'Header', a: a, b: b};
	});
var $elm$http$Http$header = $elm$http$Http$Header;
var $elm$http$Http$jsonBody = function (value) {
	return A2(
		_Http_pair,
		'application/json',
		A2($elm$json$Json$Encode$encode, 0, value));
};
var $elm$http$Http$Request = function (a) {
	return {$: 'Request', a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {reqs: reqs, subs: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (cmd.$ === 'Cancel') {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 'Nothing') {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.tracker;
							if (_v4.$ === 'Nothing') {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.reqs));
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.subs)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 'Cancel', a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (cmd.$ === 'Cancel') {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					allowCookiesFromOtherDomains: r.allowCookiesFromOtherDomains,
					body: r.body,
					expect: A2(_Http_mapExpect, func, r.expect),
					headers: r.headers,
					method: r.method,
					timeout: r.timeout,
					tracker: r.tracker,
					url: r.url
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 'MySub', a: a, b: b};
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{allowCookiesFromOtherDomains: false, body: r.body, expect: r.expect, headers: r.headers, method: r.method, timeout: r.timeout, tracker: r.tracker, url: r.url}));
};
var $elm$http$Http$stringBody = _Http_pair;
var $miniBill$elm_codec$Codec$Codec = function (a) {
	return {$: 'Codec', a: a};
};
var $miniBill$elm_codec$Codec$buildCustom = function (_v0) {
	var am = _v0.a;
	return $miniBill$elm_codec$Codec$Codec(
		{
			decoder: A2(
				$elm$json$Json$Decode$andThen,
				function (tag) {
					var error = 'tag ' + (tag + 'did not match');
					return A2(
						$elm$json$Json$Decode$field,
						'args',
						A2(
							am.decoder,
							tag,
							$elm$json$Json$Decode$fail(error)));
				},
				A2($elm$json$Json$Decode$field, 'tag', $elm$json$Json$Decode$string)),
			encoder: function (v) {
				return am.match(v);
			}
		});
};
var $miniBill$elm_codec$Codec$CustomCodec = function (a) {
	return {$: 'CustomCodec', a: a};
};
var $miniBill$elm_codec$Codec$custom = function (match) {
	return $miniBill$elm_codec$Codec$CustomCodec(
		{
			decoder: function (_v0) {
				return $elm$core$Basics$identity;
			},
			match: match
		});
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$InitialDataRecord = F2(
	function (filesToGenerate, manifest) {
		return {filesToGenerate: filesToGenerate, manifest: manifest};
	});
var $miniBill$elm_codec$Codec$buildObject = function (_v0) {
	var om = _v0.a;
	return $miniBill$elm_codec$Codec$Codec(
		{
			decoder: om.decoder,
			encoder: function (v) {
				return $elm$json$Json$Encode$object(
					om.encoder(v));
			}
		});
};
var $miniBill$elm_codec$Codec$ObjectCodec = function (a) {
	return {$: 'ObjectCodec', a: a};
};
var $miniBill$elm_codec$Codec$decoder = function (_v0) {
	var m = _v0.a;
	return m.decoder;
};
var $miniBill$elm_codec$Codec$field = F4(
	function (name, getter, codec, _v0) {
		var ocodec = _v0.a;
		return $miniBill$elm_codec$Codec$ObjectCodec(
			{
				decoder: A3(
					$elm$json$Json$Decode$map2,
					F2(
						function (f, x) {
							return f(x);
						}),
					ocodec.decoder,
					A2(
						$elm$json$Json$Decode$field,
						name,
						$miniBill$elm_codec$Codec$decoder(codec))),
				encoder: function (v) {
					return A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							name,
							A2(
								$miniBill$elm_codec$Codec$encoder,
								codec,
								getter(v))),
						ocodec.encoder(v));
				}
			});
	});
var $miniBill$elm_codec$Codec$build = F2(
	function (encoder_, decoder_) {
		return $miniBill$elm_codec$Codec$Codec(
			{decoder: decoder_, encoder: encoder_});
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$filesToGenerateCodec = A2(
	$miniBill$elm_codec$Codec$build,
	function (list) {
		return A2(
			$elm$json$Json$Encode$list,
			function (item) {
				return $elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'path',
							$elm$json$Json$Encode$string(
								A2($elm$core$String$join, '/', item.path))),
							_Utils_Tuple2(
							'content',
							$elm$json$Json$Encode$string(item.content))
						]));
			},
			list);
	},
	$elm$json$Json$Decode$list(
		A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (path, content) {
					return {content: content, path: path};
				}),
			A2(
				$elm$json$Json$Decode$field,
				'path',
				A2(
					$elm$json$Json$Decode$map,
					$elm$core$String$split('/'),
					$elm$json$Json$Decode$string)),
			A2($elm$json$Json$Decode$field, 'content', $elm$json$Json$Decode$string))));
var $dillonkearns$elm_pages$Pages$ImagePath$External = function (a) {
	return {$: 'External', a: a};
};
var $dillonkearns$elm_pages$Pages$ImagePath$external = function (url) {
	return $dillonkearns$elm_pages$Pages$ImagePath$External(url);
};
var $dillonkearns$elm_pages$Pages$PagePath$External = function (a) {
	return {$: 'External', a: a};
};
var $dillonkearns$elm_pages$Pages$PagePath$external = function (url) {
	return $dillonkearns$elm_pages$Pages$PagePath$External(url);
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$stubManifest = {
	backgroundColor: $elm$core$Maybe$Nothing,
	categories: _List_Nil,
	description: 'elm-pages - A statically typed site generator.',
	displayMode: $dillonkearns$elm_pages$Pages$Manifest$Standalone,
	iarcRatingId: $elm$core$Maybe$Nothing,
	icons: _List_Nil,
	name: 'elm-pages docs',
	orientation: $dillonkearns$elm_pages$Pages$Manifest$Portrait,
	shortName: $elm$core$Maybe$Just('elm-pages'),
	sourceIcon: $dillonkearns$elm_pages$Pages$ImagePath$external(''),
	startUrl: $dillonkearns$elm_pages$Pages$PagePath$external(''),
	themeColor: $elm$core$Maybe$Nothing
};
var $noahzgordon$elm_color_extra$Color$Convert$toRadix = function (n) {
	var getChr = function (c) {
		return (c < 10) ? $elm$core$String$fromInt(c) : $elm$core$String$fromChar(
			$elm$core$Char$fromCode(87 + c));
	};
	return (n < 16) ? getChr(n) : _Utils_ap(
		$noahzgordon$elm_color_extra$Color$Convert$toRadix((n / 16) | 0),
		getChr(
			A2($elm$core$Basics$modBy, 16, n)));
};
var $noahzgordon$elm_color_extra$Color$Convert$toHex = A2(
	$elm$core$Basics$composeR,
	$noahzgordon$elm_color_extra$Color$Convert$toRadix,
	A2(
		$elm$core$String$padLeft,
		2,
		_Utils_chr('0')));
var $avh4$elm_color$Color$toRgba = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	var a = _v0.d;
	return {alpha: a, blue: b, green: g, red: r};
};
var $noahzgordon$elm_color_extra$Color$Convert$colorToHex = function (cl) {
	var _v0 = $avh4$elm_color$Color$toRgba(cl);
	var red = _v0.red;
	var green = _v0.green;
	var blue = _v0.blue;
	return A2(
		$elm$core$String$join,
		'',
		A2(
			$elm$core$List$cons,
			'#',
			A2(
				$elm$core$List$map,
				A2($elm$core$Basics$composeR, $elm$core$Basics$round, $noahzgordon$elm_color_extra$Color$Convert$toHex),
				_List_fromArray(
					[red * 255, green * 255, blue * 255]))));
};
var $dillonkearns$elm_pages$Pages$Manifest$displayModeToAttribute = function (displayMode) {
	switch (displayMode.$) {
		case 'Fullscreen':
			return 'fullscreen';
		case 'Standalone':
			return 'standalone';
		case 'MinimalUi':
			return 'minimal-ui';
		default:
			return 'browser';
	}
};
var $danyx23$elm_mimetype$MimeType$Image = function (a) {
	return {$: 'Image', a: a};
};
var $dillonkearns$elm_pages$Pages$Manifest$encodeMaybeObject = function (list) {
	return $elm$json$Json$Encode$object(
		A2(
			$elm$core$List$filterMap,
			function (_v0) {
				var key = _v0.a;
				var maybeValue = _v0.b;
				if (maybeValue.$ === 'Just') {
					var value = maybeValue.a;
					return $elm$core$Maybe$Just(
						_Utils_Tuple2(key, value));
				} else {
					return $elm$core$Maybe$Nothing;
				}
			},
			list));
};
var $dillonkearns$elm_pages$Pages$Manifest$nonEmptyList = function (list) {
	return $elm$core$List$isEmpty(list) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(list);
};
var $dillonkearns$elm_pages$Pages$Manifest$purposeToString = function (purpose) {
	switch (purpose.$) {
		case 'IconPurposeMonochrome':
			return 'monochrome';
		case 'IconPurposeMaskable':
			return 'maskable';
		default:
			return 'any';
	}
};
var $dillonkearns$elm_pages$Pages$Manifest$purposesString = function (purposes) {
	return A2(
		$elm$core$String$join,
		' ',
		A2($elm$core$List$map, $dillonkearns$elm_pages$Pages$Manifest$purposeToString, purposes));
};
var $dillonkearns$elm_pages$Pages$Manifest$sizesString = function (sizes) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$map,
			function (_v0) {
				var x = _v0.a;
				var y = _v0.b;
				return $elm$core$String$fromInt(x) + ('x' + $elm$core$String$fromInt(y));
			},
			sizes));
};
var $danyx23$elm_mimetype$MimeType$toString = function (mimeType) {
	switch (mimeType.$) {
		case 'Image':
			var img = mimeType.a;
			switch (img.$) {
				case 'Jpeg':
					return 'image/jpeg';
				case 'Png':
					return 'image/png';
				case 'Gif':
					return 'image/gif';
				default:
					var type_ = img.a;
					return 'image/' + type_;
			}
		case 'Audio':
			var audio = mimeType.a;
			switch (audio.$) {
				case 'Mp3':
					return 'audio/mp3';
				case 'Wav':
					return 'audio/wav';
				case 'Ogg':
					return 'audio/ogg';
				default:
					var type_ = audio.a;
					return 'audio/' + type_;
			}
		case 'Video':
			var video = mimeType.a;
			switch (video.$) {
				case 'Mp4':
					return 'video/mp4';
				case 'Mpeg':
					return 'video/mpeg';
				case 'Quicktime':
					return 'video/quicktime';
				case 'Avi':
					return 'video/avi';
				case 'Webm':
					return 'video/webm';
				default:
					var type_ = video.a;
					return 'video/' + type_;
			}
		case 'Text':
			var text = mimeType.a;
			switch (text.$) {
				case 'PlainText':
					return 'text/plain';
				case 'Html':
					return 'text/html';
				case 'Css':
					return 'text/css';
				case 'Xml':
					return 'text/xml';
				case 'Json':
					return 'application/json';
				default:
					var type_ = text.a;
					return 'text/' + type_;
			}
		case 'App':
			var app = mimeType.a;
			switch (app.$) {
				case 'Word':
					return 'application/msword';
				case 'WordXml':
					return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
				case 'Excel':
					return 'application/vnd.ms-excel';
				case 'ExcelXml':
					return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
				case 'PowerPoint':
					return 'application/vnd.ms-powerpoint';
				case 'PowerPointXml':
					return 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
				case 'Pdf':
					return 'application/pdf';
				default:
					var type_ = app.a;
					return 'application/' + type_;
			}
		default:
			var type_ = mimeType.a;
			return type_;
	}
};
var $dillonkearns$elm_pages$Pages$Manifest$encodeIcon = F2(
	function (canonicalSiteUrl, icon) {
		return $dillonkearns$elm_pages$Pages$Manifest$encodeMaybeObject(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'src',
					$elm$core$Maybe$Just(
						$elm$json$Json$Encode$string(
							A2($dillonkearns$elm_pages$Pages$ImagePath$toAbsoluteUrl, canonicalSiteUrl, icon.src)))),
					_Utils_Tuple2(
					'type',
					A2(
						$elm$core$Maybe$map,
						$elm$json$Json$Encode$string,
						A2(
							$elm$core$Maybe$map,
							$danyx23$elm_mimetype$MimeType$toString,
							A2($elm$core$Maybe$map, $danyx23$elm_mimetype$MimeType$Image, icon.mimeType)))),
					_Utils_Tuple2(
					'sizes',
					A2(
						$elm$core$Maybe$map,
						$elm$json$Json$Encode$string,
						A2(
							$elm$core$Maybe$map,
							$dillonkearns$elm_pages$Pages$Manifest$sizesString,
							$dillonkearns$elm_pages$Pages$Manifest$nonEmptyList(icon.sizes)))),
					_Utils_Tuple2(
					'purpose',
					A2(
						$elm$core$Maybe$map,
						$elm$json$Json$Encode$string,
						A2(
							$elm$core$Maybe$map,
							$dillonkearns$elm_pages$Pages$Manifest$purposesString,
							$dillonkearns$elm_pages$Pages$Manifest$nonEmptyList(icon.purposes))))
				]));
	});
var $dillonkearns$elm_pages$Pages$Manifest$orientationToString = function (orientation) {
	switch (orientation.$) {
		case 'Any':
			return 'any';
		case 'Natural':
			return 'natural';
		case 'Landscape':
			return 'landscape';
		case 'LandscapePrimary':
			return 'landscape-primary';
		case 'LandscapeSecondary':
			return 'landscape-secondary';
		case 'Portrait':
			return 'portrait';
		case 'PortraitPrimary':
			return 'portrait-primary';
		default:
			return 'portrait-secondary';
	}
};
var $dillonkearns$elm_pages$Pages$Manifest$Category$toString = function (_v0) {
	var raw = _v0.a;
	return raw;
};
var $dillonkearns$elm_pages$Pages$Manifest$toJson = F2(
	function (canonicalSiteUrl, config) {
		return $dillonkearns$elm_pages$Pages$Manifest$encodeMaybeObject(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'sourceIcon',
					$elm$core$Maybe$Just(
						$elm$json$Json$Encode$string(
							$dillonkearns$elm_pages$Pages$ImagePath$toString(config.sourceIcon)))),
					_Utils_Tuple2(
					'icons',
					$elm$core$Maybe$Just(
						A2(
							$elm$json$Json$Encode$list,
							$dillonkearns$elm_pages$Pages$Manifest$encodeIcon(canonicalSiteUrl),
							config.icons))),
					_Utils_Tuple2(
					'background_color',
					A2(
						$elm$core$Maybe$map,
						$elm$json$Json$Encode$string,
						A2($elm$core$Maybe$map, $noahzgordon$elm_color_extra$Color$Convert$colorToHex, config.backgroundColor))),
					_Utils_Tuple2(
					'orientation',
					$elm$core$Maybe$Just(
						$elm$json$Json$Encode$string(
							$dillonkearns$elm_pages$Pages$Manifest$orientationToString(config.orientation)))),
					_Utils_Tuple2(
					'display',
					$elm$core$Maybe$Just(
						$elm$json$Json$Encode$string(
							$dillonkearns$elm_pages$Pages$Manifest$displayModeToAttribute(config.displayMode)))),
					_Utils_Tuple2(
					'categories',
					$elm$core$Maybe$Just(
						A2(
							$elm$json$Json$Encode$list,
							$elm$json$Json$Encode$string,
							A2($elm$core$List$map, $dillonkearns$elm_pages$Pages$Manifest$Category$toString, config.categories)))),
					_Utils_Tuple2(
					'description',
					$elm$core$Maybe$Just(
						$elm$json$Json$Encode$string(config.description))),
					_Utils_Tuple2(
					'iarc_rating_id',
					A2($elm$core$Maybe$map, $elm$json$Json$Encode$string, config.iarcRatingId)),
					_Utils_Tuple2(
					'name',
					$elm$core$Maybe$Just(
						$elm$json$Json$Encode$string(config.name))),
					_Utils_Tuple2(
					'prefer_related_applications',
					$elm$core$Maybe$Just(
						$elm$json$Json$Encode$bool(false))),
					_Utils_Tuple2(
					'related_applications',
					$elm$core$Maybe$Just(
						A2(
							$elm$json$Json$Encode$list,
							function (_v0) {
								return $elm$json$Json$Encode$object(_List_Nil);
							},
							_List_Nil))),
					_Utils_Tuple2(
					'theme_color',
					A2(
						$elm$core$Maybe$map,
						$elm$json$Json$Encode$string,
						A2($elm$core$Maybe$map, $noahzgordon$elm_color_extra$Color$Convert$colorToHex, config.themeColor))),
					_Utils_Tuple2(
					'start_url',
					$elm$core$Maybe$Just(
						$elm$json$Json$Encode$string(
							$dillonkearns$elm_pages$Pages$PagePath$toString(config.startUrl)))),
					_Utils_Tuple2(
					'short_name',
					A2($elm$core$Maybe$map, $elm$json$Json$Encode$string, config.shortName)),
					_Utils_Tuple2(
					'serviceworker',
					$elm$core$Maybe$Just(
						$elm$json$Json$Encode$object(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'src',
									$elm$json$Json$Encode$string('../service-worker.js')),
									_Utils_Tuple2(
									'scope',
									$elm$json$Json$Encode$string('/')),
									_Utils_Tuple2(
									'type',
									$elm$json$Json$Encode$string('')),
									_Utils_Tuple2(
									'update_via_cache',
									$elm$json$Json$Encode$string('none'))
								]))))
				]));
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$manifestCodec = function (canonicalSiteUrl) {
	return A2(
		$miniBill$elm_codec$Codec$build,
		$dillonkearns$elm_pages$Pages$Manifest$toJson(canonicalSiteUrl),
		$elm$json$Json$Decode$succeed($dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$stubManifest));
};
var $miniBill$elm_codec$Codec$object = function (ctor) {
	return $miniBill$elm_codec$Codec$ObjectCodec(
		{
			decoder: $elm$json$Json$Decode$succeed(ctor),
			encoder: function (_v0) {
				return _List_Nil;
			}
		});
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$initialDataCodec = function (canonicalSiteUrl) {
	return $miniBill$elm_codec$Codec$buildObject(
		A4(
			$miniBill$elm_codec$Codec$field,
			'manifest',
			function ($) {
				return $.manifest;
			},
			$dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$manifestCodec(canonicalSiteUrl),
			A4(
				$miniBill$elm_codec$Codec$field,
				'filesToGenerate',
				function ($) {
					return $.filesToGenerate;
				},
				$dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$filesToGenerateCodec,
				$miniBill$elm_codec$Codec$object($dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$InitialDataRecord))));
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$ToJsSuccessPayloadNew = F7(
	function (route, html, contentJson, errors, head, body, title) {
		return {body: body, contentJson: contentJson, errors: errors, head: head, html: html, route: route, title: title};
	});
var $miniBill$elm_codec$Codec$composite = F3(
	function (enc, dec, _v0) {
		var codec = _v0.a;
		return $miniBill$elm_codec$Codec$Codec(
			{
				decoder: dec(codec.decoder),
				encoder: enc(codec.encoder)
			});
	});
var $miniBill$elm_codec$Codec$dict = A2(
	$miniBill$elm_codec$Codec$composite,
	function (e) {
		return A2(
			$elm$core$Basics$composeL,
			A2($elm$core$Basics$composeL, $elm$json$Json$Encode$object, $elm$core$Dict$toList),
			$elm$core$Dict$map(
				function (_v0) {
					return e;
				}));
	},
	$elm$json$Json$Decode$dict);
var $dillonkearns$elm_pages$Head$FullUrlToCurrentPage = {$: 'FullUrlToCurrentPage'};
var $dillonkearns$elm_pages$Head$currentPageFullUrl = $dillonkearns$elm_pages$Head$FullUrlToCurrentPage;
var $dillonkearns$elm_pages$Head$FullUrl = function (a) {
	return {$: 'FullUrl', a: a};
};
var $dillonkearns$elm_pages$Head$fullPageUrl = function (value) {
	return $dillonkearns$elm_pages$Head$FullUrl(
		$dillonkearns$elm_pages$Pages$PagePath$toString(value));
};
var $dillonkearns$elm_pages$Head$Tag = function (a) {
	return {$: 'Tag', a: a};
};
var $dillonkearns$elm_pages$Head$node = F2(
	function (name, attributes) {
		return $dillonkearns$elm_pages$Head$Tag(
			{attributes: attributes, name: name});
	});
var $dillonkearns$elm_pages$Head$Raw = function (a) {
	return {$: 'Raw', a: a};
};
var $dillonkearns$elm_pages$Head$raw = function (value) {
	return $dillonkearns$elm_pages$Head$Raw(value);
};
var $dillonkearns$elm_pages$Head$canonicalLink = function (maybePath) {
	return A2(
		$dillonkearns$elm_pages$Head$node,
		'link',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'rel',
				$dillonkearns$elm_pages$Head$raw('canonical')),
				_Utils_Tuple2(
				'href',
				A2(
					$elm$core$Maybe$withDefault,
					$dillonkearns$elm_pages$Head$currentPageFullUrl,
					A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$fullPageUrl, maybePath)))
			]));
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$headCodec = F2(
	function (canonicalSiteUrl, currentPagePath) {
		return A2(
			$miniBill$elm_codec$Codec$build,
			A2($dillonkearns$elm_pages$Head$toJson, canonicalSiteUrl, currentPagePath),
			$elm$json$Json$Decode$succeed(
				$dillonkearns$elm_pages$Head$canonicalLink($elm$core$Maybe$Nothing)));
	});
var $miniBill$elm_codec$Codec$list = A2($miniBill$elm_codec$Codec$composite, $elm$json$Json$Encode$list, $elm$json$Json$Decode$list);
var $miniBill$elm_codec$Codec$string = A2($miniBill$elm_codec$Codec$build, $elm$json$Json$Encode$string, $elm$json$Json$Decode$string);
var $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$successCodecNew = F2(
	function (canonicalSiteUrl, currentPagePath) {
		return $miniBill$elm_codec$Codec$buildObject(
			A4(
				$miniBill$elm_codec$Codec$field,
				'title',
				function ($) {
					return $.title;
				},
				$miniBill$elm_codec$Codec$string,
				A4(
					$miniBill$elm_codec$Codec$field,
					'body',
					function ($) {
						return $.body;
					},
					$miniBill$elm_codec$Codec$string,
					A4(
						$miniBill$elm_codec$Codec$field,
						'head',
						function ($) {
							return $.head;
						},
						$miniBill$elm_codec$Codec$list(
							A2($dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$headCodec, canonicalSiteUrl, currentPagePath)),
						A4(
							$miniBill$elm_codec$Codec$field,
							'errors',
							function ($) {
								return $.errors;
							},
							$miniBill$elm_codec$Codec$list($miniBill$elm_codec$Codec$string),
							A4(
								$miniBill$elm_codec$Codec$field,
								'contentJson',
								function ($) {
									return $.contentJson;
								},
								$miniBill$elm_codec$Codec$dict($miniBill$elm_codec$Codec$string),
								A4(
									$miniBill$elm_codec$Codec$field,
									'html',
									function ($) {
										return $.html;
									},
									$miniBill$elm_codec$Codec$string,
									A4(
										$miniBill$elm_codec$Codec$field,
										'route',
										function ($) {
											return $.route;
										},
										$miniBill$elm_codec$Codec$string,
										$miniBill$elm_codec$Codec$object($dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$ToJsSuccessPayloadNew)))))))));
	});
var $elm$json$Json$Decode$index = _Json_decodeIndex;
var $miniBill$elm_codec$Codec$variant = F4(
	function (name, matchPiece, decoderPiece, _v0) {
		var am = _v0.a;
		var enc = function (v) {
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'tag',
						$elm$json$Json$Encode$string(name)),
						_Utils_Tuple2(
						'args',
						A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, v))
					]));
		};
		var decoder_ = F2(
			function (tag, orElse) {
				return _Utils_eq(tag, name) ? decoderPiece : A2(am.decoder, tag, orElse);
			});
		return $miniBill$elm_codec$Codec$CustomCodec(
			{
				decoder: decoder_,
				match: am.match(
					matchPiece(enc))
			});
	});
var $miniBill$elm_codec$Codec$variant1 = F3(
	function (name, ctor, m1) {
		return A3(
			$miniBill$elm_codec$Codec$variant,
			name,
			F2(
				function (c, v) {
					return c(
						_List_fromArray(
							[
								A2($miniBill$elm_codec$Codec$encoder, m1, v)
							]));
				}),
			A2(
				$elm$json$Json$Decode$map,
				ctor,
				A2(
					$elm$json$Json$Decode$index,
					0,
					$miniBill$elm_codec$Codec$decoder(m1))));
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$successCodecNew2 = F2(
	function (canonicalSiteUrl, currentPagePath) {
		return $miniBill$elm_codec$Codec$buildCustom(
			A4(
				$miniBill$elm_codec$Codec$variant1,
				'InitialData',
				$dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$InitialData,
				$dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$initialDataCodec(canonicalSiteUrl),
				A4(
					$miniBill$elm_codec$Codec$variant1,
					'PageProgress',
					$dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$PageProgress,
					A2($dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$successCodecNew, canonicalSiteUrl, currentPagePath),
					$miniBill$elm_codec$Codec$custom(
						F3(
							function (success, initialData, value) {
								if (value.$ === 'PageProgress') {
									var payload = value.a;
									return success(payload);
								} else {
									var payload = value.a;
									return initialData(payload);
								}
							})))));
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$successCodec = function (canonicalSiteUrl) {
	return $miniBill$elm_codec$Codec$buildObject(
		A4(
			$miniBill$elm_codec$Codec$field,
			'errors',
			function ($) {
				return $.errors;
			},
			$miniBill$elm_codec$Codec$list($miniBill$elm_codec$Codec$string),
			A4(
				$miniBill$elm_codec$Codec$field,
				'staticHttpCache',
				function ($) {
					return $.staticHttpCache;
				},
				$miniBill$elm_codec$Codec$dict($miniBill$elm_codec$Codec$string),
				A4(
					$miniBill$elm_codec$Codec$field,
					'filesToGenerate',
					function ($) {
						return $.filesToGenerate;
					},
					A2(
						$miniBill$elm_codec$Codec$build,
						function (list) {
							return A2(
								$elm$json$Json$Encode$list,
								function (item) {
									return $elm$json$Json$Encode$object(
										_List_fromArray(
											[
												_Utils_Tuple2(
												'path',
												$elm$json$Json$Encode$string(
													A2($elm$core$String$join, '/', item.path))),
												_Utils_Tuple2(
												'content',
												$elm$json$Json$Encode$string(item.content))
											]));
								},
								list);
						},
						$elm$json$Json$Decode$list(
							A3(
								$elm$json$Json$Decode$map2,
								F2(
									function (path, content) {
										return {content: content, path: path};
									}),
								A2(
									$elm$json$Json$Decode$field,
									'path',
									A2(
										$elm$json$Json$Decode$map,
										$elm$core$String$split('/'),
										$elm$json$Json$Decode$string)),
								A2($elm$json$Json$Decode$field, 'content', $elm$json$Json$Decode$string)))),
					A4(
						$miniBill$elm_codec$Codec$field,
						'manifest',
						function ($) {
							return $.manifest;
						},
						A2(
							$miniBill$elm_codec$Codec$build,
							$dillonkearns$elm_pages$Pages$Manifest$toJson(canonicalSiteUrl),
							$elm$json$Json$Decode$succeed($dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$stubManifest)),
						A4(
							$miniBill$elm_codec$Codec$field,
							'pages',
							function ($) {
								return $.pages;
							},
							$miniBill$elm_codec$Codec$dict(
								$miniBill$elm_codec$Codec$dict($miniBill$elm_codec$Codec$string)),
							$miniBill$elm_codec$Codec$object($dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$ToJsSuccessPayload)))))));
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$toJsCodec = function (canonicalSiteUrl) {
	return $miniBill$elm_codec$Codec$buildCustom(
		A4(
			$miniBill$elm_codec$Codec$variant1,
			'Success',
			$dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$Success,
			$dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$successCodec(canonicalSiteUrl),
			A4(
				$miniBill$elm_codec$Codec$variant1,
				'Errors',
				$dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$Errors,
				$miniBill$elm_codec$Codec$string,
				$miniBill$elm_codec$Codec$custom(
					F3(
						function (errorsTag, success, value) {
							if (value.$ === 'Errors') {
								var errorList = value.a;
								return errorsTag(errorList);
							} else {
								var pages = value.a.pages;
								var manifest = value.a.manifest;
								var filesToGenerate = value.a.filesToGenerate;
								var errors = value.a.errors;
								var staticHttpCache = value.a.staticHttpCache;
								return success(
									A5($dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$ToJsSuccessPayload, pages, manifest, filesToGenerate, staticHttpCache, errors));
							}
						})))));
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$perform = F4(
	function (config, cliMsgConstructor, toJsPort, effect) {
		switch (effect.$) {
			case 'NoEffect':
				return $elm$core$Platform$Cmd$none;
			case 'SendJsData':
				var value = effect.a;
				return A2(
					$elm$core$Platform$Cmd$map,
					$elm$core$Basics$never,
					toJsPort(
						A2(
							$miniBill$elm_codec$Codec$encoder,
							$dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$toJsCodec(config.canonicalSiteUrl),
							value)));
			case 'Batch':
				var list = effect.a;
				return $elm$core$Platform$Cmd$batch(
					A2(
						$elm$core$List$map,
						A3($dillonkearns$elm_pages$Pages$Internal$Platform$Cli$perform, config, cliMsgConstructor, toJsPort),
						list));
			case 'FetchHttp':
				var requests = effect.a;
				var unmasked = requests.unmasked;
				var masked = requests.masked;
				return $elm$core$Platform$Cmd$batch(
					_List_fromArray(
						[
							$elm$http$Http$request(
							{
								body: function () {
									var _v1 = unmasked.body;
									switch (_v1.$) {
										case 'EmptyBody':
											return $elm$http$Http$emptyBody;
										case 'StringBody':
											var contentType = _v1.a;
											var string = _v1.b;
											return A2($elm$http$Http$stringBody, contentType, string);
										default:
											var value = _v1.a;
											return $elm$http$Http$jsonBody(value);
									}
								}(),
								expect: $dillonkearns$elm_pages$Pages$Http$expectString(
									function (response) {
										return A2($elm$core$Basics$composeR, $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$GotStaticHttpResponse, cliMsgConstructor)(
											{request: requests, response: response});
									}),
								headers: A2(
									$elm$core$List$map,
									function (_v2) {
										var key = _v2.a;
										var value = _v2.b;
										return A2($elm$http$Http$header, key, value);
									},
									unmasked.headers),
								method: unmasked.method,
								timeout: $elm$core$Maybe$Nothing,
								tracker: $elm$core$Maybe$Nothing,
								url: unmasked.url
							}),
							A2(
							$elm$core$Platform$Cmd$map,
							$elm$core$Basics$never,
							toJsPort(
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'command',
											$elm$json$Json$Encode$string('log')),
											_Utils_Tuple2(
											'value',
											$elm$json$Json$Encode$string('Fetching ' + masked.url))
										]))))
						]));
			case 'SendSinglePage':
				var info = effect.a;
				var currentPagePath = function () {
					if (info.$ === 'PageProgress') {
						var toJsSuccessPayloadNew = info.a;
						return toJsSuccessPayloadNew.route;
					} else {
						return '';
					}
				}();
				return $elm$core$Platform$Cmd$batch(
					_List_fromArray(
						[
							A2(
							$elm$core$Platform$Cmd$map,
							$elm$core$Basics$never,
							toJsPort(
								A2(
									$miniBill$elm_codec$Codec$encoder,
									A2($dillonkearns$elm_pages$Pages$Internal$Platform$ToJsPayload$successCodecNew2, config.canonicalSiteUrl, currentPagePath),
									info))),
							A2(
							$elm$core$Platform$Cmd$map,
							cliMsgConstructor,
							A2(
								$elm$core$Task$perform,
								function (_v3) {
									return $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$Continue;
								},
								$elm$core$Task$succeed(_Utils_Tuple0)))
						]));
			default:
				return $elm$core$Platform$Cmd$none;
		}
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$update = F2(
	function (newEntry, model) {
		var updatedAllResponses = A3(
			$elm$core$Dict$insert,
			$dillonkearns$elm_pages$Pages$StaticHttp$Request$hash(newEntry.request.masked),
			$elm$core$Maybe$Just(
				A2($elm$core$Result$withDefault, 'TODO', newEntry.response)),
			model.allRawResponses);
		return _Utils_update(
			model,
			{allRawResponses: updatedAllResponses});
	});
var $dillonkearns$elm_pages$TerminalText$Yellow = {$: 'Yellow'};
var $dillonkearns$elm_pages$TerminalText$yellow = function (inner) {
	return A2(
		$dillonkearns$elm_pages$TerminalText$Style,
		$dillonkearns$elm_pages$TerminalText$colorToString($dillonkearns$elm_pages$TerminalText$Yellow),
		inner);
};
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$update = F5(
	function (contentCache, siteMetadata, config, msg, model) {
		if (msg.$ === 'GotStaticHttpResponse') {
			var request = msg.a.request;
			var response = msg.a.response;
			var updatedModel = A2(
				$dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$update,
				{
					request: request,
					response: A2(
						$elm$core$Result$mapError,
						function (_v3) {
							return _Utils_Tuple0;
						},
						response)
				},
				function () {
					if (response.$ === 'Ok') {
						var okResponse = response.a;
						return _Utils_update(
							model,
							{
								pendingRequests: A2(
									$elm$core$List$filter,
									function (pending) {
										return !_Utils_eq(pending, request);
									},
									model.pendingRequests)
							});
					} else {
						var error = response.a;
						return _Utils_update(
							model,
							{
								errors: A2(
									$elm$core$List$append,
									model.errors,
									_List_fromArray(
										[
											{
											fatal: true,
											message: _List_fromArray(
												[
													$dillonkearns$elm_pages$TerminalText$text('I got an error making an HTTP request to this URL: '),
													$dillonkearns$elm_pages$TerminalText$yellow(
													$dillonkearns$elm_pages$TerminalText$text(request.masked.url)),
													$dillonkearns$elm_pages$TerminalText$text('\n\n'),
													function () {
													switch (error.$) {
														case 'BadStatus':
															var metadata = error.a;
															var body = error.b;
															return $dillonkearns$elm_pages$TerminalText$text(
																A2(
																	$elm$core$String$join,
																	'\n',
																	_List_fromArray(
																		[
																			'Bad status: ' + $elm$core$String$fromInt(metadata.statusCode),
																			'Status message: ' + metadata.statusText,
																			'Body: ' + body
																		])));
														case 'BadUrl':
															return $dillonkearns$elm_pages$TerminalText$text('Invalid url: ' + request.masked.url);
														case 'Timeout':
															return $dillonkearns$elm_pages$TerminalText$text('Timeout');
														default:
															return $dillonkearns$elm_pages$TerminalText$text('Network error');
													}
												}()
												]),
											title: 'Static HTTP Error'
										}
										]))
							});
					}
				}());
			var nextToProcess = $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$drop1(updatedModel);
			return A4(
				$dillonkearns$elm_pages$Pages$Internal$Platform$Cli$nextStepToEffect,
				contentCache,
				config,
				updatedModel,
				A8(
					$dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$nextStep,
					config,
					siteMetadata,
					$elm$core$Result$Ok(nextToProcess),
					updatedModel.mode,
					updatedModel.secrets,
					updatedModel.allRawResponses,
					updatedModel.errors,
					updatedModel.staticResponses));
		} else {
			var updatedModel = model;
			var nextToProcess = $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$drop1(model);
			return A4(
				$dillonkearns$elm_pages$Pages$Internal$Platform$Cli$nextStepToEffect,
				contentCache,
				config,
				updatedModel,
				A8(
					$dillonkearns$elm_pages$Pages$Internal$Platform$StaticResponses$nextStep,
					config,
					siteMetadata,
					$elm$core$Result$Ok(nextToProcess),
					updatedModel.mode,
					updatedModel.secrets,
					updatedModel.allRawResponses,
					updatedModel.errors,
					updatedModel.staticResponses));
		}
	});
var $elm$core$Platform$worker = _Platform_worker;
var $dillonkearns$elm_pages$Pages$Internal$Platform$Cli$cliApplication = F5(
	function (cliMsgConstructor, narrowMsg, toModel, fromModel, config) {
		var contentCache = A3($dillonkearns$elm_pages$Pages$ContentCache$init, config.document, config.content, $elm$core$Maybe$Nothing);
		var siteMetadata = A2(
			$elm$core$Result$mapError,
			$elm$core$List$map($elm$core$Tuple$second),
			A2(
				$elm$core$Result$map,
				function (cache) {
					return A2($dillonkearns$elm_pages$Pages$ContentCache$extractMetadata, config.pathKey, cache);
				},
				contentCache));
		return $elm$core$Platform$worker(
			{
				init: function (flags) {
					return A2(
						$elm$core$Tuple$mapSecond,
						A3($dillonkearns$elm_pages$Pages$Internal$Platform$Cli$perform, config, cliMsgConstructor, config.toJsPort),
						A5($dillonkearns$elm_pages$Pages$Internal$Platform$Cli$init, toModel, contentCache, siteMetadata, config, flags));
				},
				subscriptions: function (_v0) {
					return $elm$core$Platform$Sub$none;
				},
				update: F2(
					function (msg, model) {
						var _v1 = _Utils_Tuple2(
							narrowMsg(msg),
							fromModel(model));
						if ((_v1.a.$ === 'Just') && (_v1.b.$ === 'Just')) {
							var cliMsg = _v1.a.a;
							var cliModel = _v1.b.a;
							return A2(
								$elm$core$Tuple$mapFirst,
								toModel,
								A2(
									$elm$core$Tuple$mapSecond,
									A3($dillonkearns$elm_pages$Pages$Internal$Platform$Cli$perform, config, cliMsgConstructor, config.toJsPort),
									A5($dillonkearns$elm_pages$Pages$Internal$Platform$Cli$update, contentCache, siteMetadata, config, cliMsg, cliModel)));
						} else {
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						}
					})
			});
	});
var $dillonkearns$elm_pages$Pages$Internal$Platform$cliApplication = A4(
	$dillonkearns$elm_pages$Pages$Internal$Platform$Cli$cliApplication,
	$dillonkearns$elm_pages$Pages$Internal$Platform$CliMsg,
	function (msg) {
		if (msg.$ === 'CliMsg') {
			var cliMsg = msg.a;
			return $elm$core$Maybe$Just(cliMsg);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	},
	$dillonkearns$elm_pages$Pages$Internal$Platform$CliModel,
	function (model) {
		if (model.$ === 'CliModel') {
			var cliModel = model.a;
			return $elm$core$Maybe$Just(cliModel);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_pages$Pages$Document$Document = function (a) {
	return {$: 'Document', a: a};
};
var $dillonkearns$elm_pages$Pages$Document$fromList = function (list) {
	return $dillonkearns$elm_pages$Pages$Document$Document(
		$elm$core$Dict$fromList(list));
};
var $dillonkearns$elm_pages$Pages$Platform$application = function (config) {
	return function () {
		var _v0 = config.internals.applicationType;
		if (_v0.$ === 'Browser') {
			return $dillonkearns$elm_pages$Pages$Internal$Platform$application;
		} else {
			return $dillonkearns$elm_pages$Pages$Internal$Platform$cliApplication;
		}
	}()(
		{
			canonicalSiteUrl: config.canonicalSiteUrl,
			content: config.internals.content,
			document: $dillonkearns$elm_pages$Pages$Document$fromList(config.documents),
			fromJsPort: config.internals.fromJsPort,
			generateFiles: config.generateFiles,
			init: config.init,
			manifest: config.manifest,
			onPageChange: config.onPageChange,
			pathKey: config.internals.pathKey,
			subscriptions: config.subscriptions,
			toJsPort: config.internals.toJsPort,
			update: config.update,
			view: config.view
		});
};
var $dillonkearns$elm_pages$Pages$Platform$toProgram = function (_v0) {
	var config = _v0.a;
	return $dillonkearns$elm_pages$Pages$Platform$application(
		{canonicalSiteUrl: config.canonicalSiteUrl, documents: config.documents, generateFiles: config.generateFiles, init: config.init, internals: config.internals, manifest: config.manifest, onPageChange: config.onPageChange, subscriptions: config.subscriptions, update: config.update, view: config.view});
};
var $author$project$Main$update = F2(
	function (msg, model) {
		return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
	});
var $dillonkearns$elm_pages$Head$Seo$Article = function (a) {
	return {$: 'Article', a: a};
};
var $dillonkearns$elm_pages$Head$Seo$Content = F2(
	function (a, b) {
		return {$: 'Content', a: a, b: b};
	});
var $dillonkearns$elm_pages$Head$metaName = F2(
	function (name, content) {
		return A2(
			$dillonkearns$elm_pages$Head$node,
			'meta',
			_List_fromArray(
				[
					_Utils_Tuple2(
					'name',
					$dillonkearns$elm_pages$Head$Raw(name)),
					_Utils_Tuple2('content', content)
				]));
	});
var $dillonkearns$elm_pages$Head$metaProperty = F2(
	function (property, content) {
		return A2(
			$dillonkearns$elm_pages$Head$node,
			'meta',
			_List_fromArray(
				[
					_Utils_Tuple2(
					'property',
					$dillonkearns$elm_pages$Head$raw(property)),
					_Utils_Tuple2('content', content)
				]));
	});
var $dillonkearns$elm_pages$Head$Twitter$cardValue = function (card) {
	switch (card.$) {
		case 'Summary':
			var details = card.a;
			var _v1 = details.size;
			if (_v1.$ === 'Regular') {
				return 'summary';
			} else {
				return 'summary_large_image';
			}
		case 'App':
			var details = card.a;
			return 'app';
		default:
			var details = card.a;
			return 'player';
	}
};
var $dillonkearns$elm_pages$Head$FullImageUrl = function (a) {
	return {$: 'FullImageUrl', a: a};
};
var $dillonkearns$elm_pages$Head$fullImageUrl = function (value) {
	return $dillonkearns$elm_pages$Head$FullImageUrl(value);
};
var $dillonkearns$elm_pages$Head$Twitter$rawTags = function (card) {
	return A2(
		$elm$core$List$cons,
		_Utils_Tuple2(
			'twitter:card',
			$elm$core$Maybe$Just(
				$dillonkearns$elm_pages$Head$raw(
					$dillonkearns$elm_pages$Head$Twitter$cardValue(card)))),
		function () {
			switch (card.$) {
				case 'Summary':
					var details = card.a;
					return _List_fromArray(
						[
							_Utils_Tuple2(
							'twitter:title',
							$elm$core$Maybe$Just(
								$dillonkearns$elm_pages$Head$raw(details.title))),
							_Utils_Tuple2(
							'twitter:site',
							A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, details.siteUser)),
							_Utils_Tuple2(
							'twitter:description',
							A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, details.description)),
							_Utils_Tuple2(
							'twitter:image',
							A2(
								$elm$core$Maybe$map,
								$dillonkearns$elm_pages$Head$fullImageUrl,
								A2(
									$elm$core$Maybe$map,
									function ($) {
										return $.url;
									},
									details.image))),
							_Utils_Tuple2(
							'twitter:image:alt',
							A2(
								$elm$core$Maybe$map,
								$dillonkearns$elm_pages$Head$raw,
								A2(
									$elm$core$Maybe$map,
									function ($) {
										return $.alt;
									},
									details.image)))
						]);
				case 'App':
					var details = card.a;
					return _List_fromArray(
						[
							_Utils_Tuple2(
							'twitter:title',
							$elm$core$Maybe$Just(
								$dillonkearns$elm_pages$Head$raw(details.title))),
							_Utils_Tuple2(
							'twitter:site',
							$elm$core$Maybe$Just(
								$dillonkearns$elm_pages$Head$raw(details.siteUser))),
							_Utils_Tuple2(
							'twitter:description',
							A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, details.description)),
							_Utils_Tuple2(
							'twitter:image',
							A2(
								$elm$core$Maybe$map,
								$dillonkearns$elm_pages$Head$fullImageUrl,
								A2(
									$elm$core$Maybe$map,
									function ($) {
										return $.url;
									},
									details.image))),
							_Utils_Tuple2(
							'twitter:image:alt',
							A2(
								$elm$core$Maybe$map,
								$dillonkearns$elm_pages$Head$raw,
								A2(
									$elm$core$Maybe$map,
									function ($) {
										return $.alt;
									},
									details.image))),
							_Utils_Tuple2(
							'twitter:app:name:iphone',
							A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, details.appNameIphone)),
							_Utils_Tuple2(
							'twitter:app:name:ipad',
							A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, details.appNameIpad)),
							_Utils_Tuple2(
							'twitter:app:name:googleplay',
							A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, details.appNameGooglePlay)),
							_Utils_Tuple2(
							'twitter:app:id:iphone',
							A2(
								$elm$core$Maybe$map,
								$dillonkearns$elm_pages$Head$raw,
								A2($elm$core$Maybe$map, $elm$core$String$fromInt, details.appIdIphone))),
							_Utils_Tuple2(
							'twitter:app:id:ipad',
							A2(
								$elm$core$Maybe$map,
								$dillonkearns$elm_pages$Head$raw,
								A2($elm$core$Maybe$map, $elm$core$String$fromInt, details.appIdIpad))),
							_Utils_Tuple2(
							'twitter:app:id:googleplay',
							A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, details.appIdGooglePlay)),
							_Utils_Tuple2(
							'twitter:app:url:iphone',
							A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, details.appUrlIphone)),
							_Utils_Tuple2(
							'twitter:app:url:ipad',
							A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, details.appUrlIpad)),
							_Utils_Tuple2(
							'twitter:app:url:googleplay',
							A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, details.appUrlGooglePlay)),
							_Utils_Tuple2(
							'twitter:app:country',
							A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, details.appCountry))
						]);
				default:
					var details = card.a;
					return _List_fromArray(
						[
							_Utils_Tuple2(
							'twitter:title',
							$elm$core$Maybe$Just(
								$dillonkearns$elm_pages$Head$raw(details.title))),
							_Utils_Tuple2(
							'twitter:site',
							$elm$core$Maybe$Just(
								$dillonkearns$elm_pages$Head$raw(details.siteUser))),
							_Utils_Tuple2(
							'twitter:description',
							A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, details.description)),
							_Utils_Tuple2(
							'twitter:image',
							$elm$core$Maybe$Just(
								$dillonkearns$elm_pages$Head$fullImageUrl(details.image.url))),
							_Utils_Tuple2(
							'twitter:image:alt',
							$elm$core$Maybe$Just(
								$dillonkearns$elm_pages$Head$raw(details.image.alt)))
						]);
			}
		}());
};
var $dillonkearns$elm_pages$Head$Seo$tagsForAudio = function (audio) {
	return _List_fromArray(
		[
			_Utils_Tuple2(
			'og:audio',
			$elm$core$Maybe$Just(
				$dillonkearns$elm_pages$Head$raw(audio.url))),
			_Utils_Tuple2(
			'og:audio:secure_url',
			$elm$core$Maybe$Just(
				$dillonkearns$elm_pages$Head$raw(audio.url))),
			_Utils_Tuple2(
			'og:audio:type',
			A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, audio.mimeType))
		]);
};
var $dillonkearns$elm_pages$Head$Seo$tagsForImage = function (image) {
	return _List_fromArray(
		[
			_Utils_Tuple2(
			'og:image',
			$elm$core$Maybe$Just(
				$dillonkearns$elm_pages$Head$fullImageUrl(image.url))),
			_Utils_Tuple2(
			'og:image:secure_url',
			$elm$core$Maybe$Just(
				$dillonkearns$elm_pages$Head$fullImageUrl(image.url))),
			_Utils_Tuple2(
			'og:image:alt',
			$elm$core$Maybe$Just(
				$dillonkearns$elm_pages$Head$raw(image.alt))),
			_Utils_Tuple2(
			'og:image:width',
			A2(
				$elm$core$Maybe$map,
				$dillonkearns$elm_pages$Head$raw,
				A2(
					$elm$core$Maybe$map,
					$elm$core$String$fromInt,
					A2(
						$elm$core$Maybe$map,
						function ($) {
							return $.width;
						},
						image.dimensions)))),
			_Utils_Tuple2(
			'og:image:height',
			A2(
				$elm$core$Maybe$map,
				$dillonkearns$elm_pages$Head$raw,
				A2(
					$elm$core$Maybe$map,
					$elm$core$String$fromInt,
					A2(
						$elm$core$Maybe$map,
						function ($) {
							return $.height;
						},
						image.dimensions))))
		]);
};
var $dillonkearns$elm_pages$Head$Seo$tagsForVideo = function (video) {
	return _List_fromArray(
		[
			_Utils_Tuple2(
			'og:video',
			$elm$core$Maybe$Just(
				$dillonkearns$elm_pages$Head$raw(video.url))),
			_Utils_Tuple2(
			'og:video:secure_url',
			$elm$core$Maybe$Just(
				$dillonkearns$elm_pages$Head$raw(video.url))),
			_Utils_Tuple2(
			'og:video:width',
			A2(
				$elm$core$Maybe$map,
				$dillonkearns$elm_pages$Head$raw,
				A2(
					$elm$core$Maybe$map,
					$elm$core$String$fromInt,
					A2(
						$elm$core$Maybe$map,
						function ($) {
							return $.width;
						},
						video.dimensions)))),
			_Utils_Tuple2(
			'og:video:height',
			A2(
				$elm$core$Maybe$map,
				$dillonkearns$elm_pages$Head$raw,
				A2(
					$elm$core$Maybe$map,
					$elm$core$String$fromInt,
					A2(
						$elm$core$Maybe$map,
						function ($) {
							return $.height;
						},
						video.dimensions))))
		]);
};
var $dillonkearns$elm_pages$Head$Seo$tagsForCommon = function (common) {
	return _Utils_ap(
		$dillonkearns$elm_pages$Head$Seo$tagsForImage(common.image),
		_Utils_ap(
			A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$Seo$tagsForAudio, common.audio)),
			_Utils_ap(
				A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$Seo$tagsForVideo, common.video)),
				_Utils_ap(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'og:title',
							$elm$core$Maybe$Just(
								$dillonkearns$elm_pages$Head$raw(common.title))),
							_Utils_Tuple2(
							'og:url',
							$elm$core$Maybe$Just(
								A2(
									$elm$core$Maybe$withDefault,
									$dillonkearns$elm_pages$Head$currentPageFullUrl,
									A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$fullPageUrl, common.canonicalUrlOverride)))),
							_Utils_Tuple2(
							'og:description',
							$elm$core$Maybe$Just(
								$dillonkearns$elm_pages$Head$raw(common.description))),
							_Utils_Tuple2(
							'og:site_name',
							$elm$core$Maybe$Just(
								$dillonkearns$elm_pages$Head$raw(common.siteName))),
							_Utils_Tuple2(
							'og:locale',
							A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, common.locale))
						]),
					_Utils_ap(
						A2(
							$elm$core$List$map,
							function (alternateLocale) {
								return _Utils_Tuple2(
									'og:locale:alternate',
									$elm$core$Maybe$Just(
										$dillonkearns$elm_pages$Head$raw(alternateLocale)));
							},
							common.alternateLocales),
						$dillonkearns$elm_pages$Head$Twitter$rawTags(common.twitterCard))))));
};
var $dillonkearns$elm_pages$Head$Seo$tags = function (_v0) {
	var common = _v0.a;
	var details = _v0.b;
	return A2(
		$elm$core$List$append,
		_List_fromArray(
			[
				$dillonkearns$elm_pages$Head$canonicalLink(common.canonicalUrlOverride),
				A2(
				$dillonkearns$elm_pages$Head$metaName,
				'description',
				$dillonkearns$elm_pages$Head$raw(common.description))
			]),
		A2(
			$elm$core$List$filterMap,
			function (_v2) {
				var name = _v2.a;
				var maybeContent = _v2.b;
				return A2(
					$elm$core$Maybe$map,
					function (metaContent) {
						return A2($dillonkearns$elm_pages$Head$metaProperty, name, metaContent);
					},
					maybeContent);
			},
			_Utils_ap(
				$dillonkearns$elm_pages$Head$Seo$tagsForCommon(common),
				function () {
					switch (details.$) {
						case 'Website':
							return _List_fromArray(
								[
									_Utils_Tuple2(
									'og:type',
									$elm$core$Maybe$Just(
										$dillonkearns$elm_pages$Head$raw('website')))
								]);
						case 'Article':
							var articleDetails = details.a;
							return _Utils_ap(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'og:type',
										$elm$core$Maybe$Just(
											$dillonkearns$elm_pages$Head$raw('article'))),
										_Utils_Tuple2(
										'article:section',
										A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, articleDetails.section)),
										_Utils_Tuple2(
										'article:published_time',
										A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, articleDetails.publishedTime)),
										_Utils_Tuple2(
										'article:modified_time',
										A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, articleDetails.modifiedTime)),
										_Utils_Tuple2(
										'article:expiration_time',
										A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, articleDetails.expirationTime))
									]),
								A2(
									$elm$core$List$map,
									function (tag) {
										return _Utils_Tuple2(
											'article:tag',
											$elm$core$Maybe$Just(
												$dillonkearns$elm_pages$Head$raw(tag)));
									},
									articleDetails.tags));
						case 'Book':
							var bookDetails = details.a;
							return _Utils_ap(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'og:type',
										$elm$core$Maybe$Just(
											$dillonkearns$elm_pages$Head$raw('book'))),
										_Utils_Tuple2(
										'og:isbn',
										A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, bookDetails.isbn)),
										_Utils_Tuple2(
										'og:release_date',
										A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, bookDetails.releaseDate))
									]),
								A2(
									$elm$core$List$map,
									function (tag) {
										return _Utils_Tuple2(
											'book:tag',
											$elm$core$Maybe$Just(
												$dillonkearns$elm_pages$Head$raw(tag)));
									},
									bookDetails.tags));
						case 'Song':
							var songDetails = details.a;
							return _List_fromArray(
								[
									_Utils_Tuple2(
									'og:type',
									$elm$core$Maybe$Just(
										$dillonkearns$elm_pages$Head$raw('music.song'))),
									_Utils_Tuple2(
									'music:duration',
									A2(
										$elm$core$Maybe$map,
										$dillonkearns$elm_pages$Head$raw,
										A2($elm$core$Maybe$map, $elm$core$String$fromInt, songDetails.duration))),
									_Utils_Tuple2(
									'music:album:disc',
									A2(
										$elm$core$Maybe$map,
										$dillonkearns$elm_pages$Head$raw,
										A2($elm$core$Maybe$map, $elm$core$String$fromInt, songDetails.disc))),
									_Utils_Tuple2(
									'music:album:track',
									A2(
										$elm$core$Maybe$map,
										$dillonkearns$elm_pages$Head$raw,
										A2($elm$core$Maybe$map, $elm$core$String$fromInt, songDetails.track)))
								]);
						default:
							var profileDetails = details.a;
							return _List_fromArray(
								[
									_Utils_Tuple2(
									'og:type',
									$elm$core$Maybe$Just(
										$dillonkearns$elm_pages$Head$raw('profile'))),
									_Utils_Tuple2(
									'profile:first_name',
									$elm$core$Maybe$Just(
										$dillonkearns$elm_pages$Head$raw(profileDetails.firstName))),
									_Utils_Tuple2(
									'profile:last_name',
									$elm$core$Maybe$Just(
										$dillonkearns$elm_pages$Head$raw(profileDetails.lastName))),
									_Utils_Tuple2(
									'profile:username',
									A2($elm$core$Maybe$map, $dillonkearns$elm_pages$Head$raw, profileDetails.username))
								]);
					}
				}())));
};
var $dillonkearns$elm_pages$Head$Seo$article = F2(
	function (details, common) {
		return $dillonkearns$elm_pages$Head$Seo$tags(
			A2(
				$dillonkearns$elm_pages$Head$Seo$Content,
				common,
				$dillonkearns$elm_pages$Head$Seo$Article(details)));
	});
var $dillonkearns$elm_pages$Head$rssLink = function (url) {
	return A2(
		$dillonkearns$elm_pages$Head$node,
		'link',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'rel',
				$dillonkearns$elm_pages$Head$raw('alternate')),
				_Utils_Tuple2(
				'type',
				$dillonkearns$elm_pages$Head$raw('application/rss+xml')),
				_Utils_Tuple2(
				'href',
				$dillonkearns$elm_pages$Head$raw(url))
			]));
};
var $dillonkearns$elm_pages$Head$sitemapLink = function (url) {
	return A2(
		$dillonkearns$elm_pages$Head$node,
		'link',
		_List_fromArray(
			[
				_Utils_Tuple2(
				'rel',
				$dillonkearns$elm_pages$Head$raw('sitemap')),
				_Utils_Tuple2(
				'type',
				$dillonkearns$elm_pages$Head$raw('application/xml')),
				_Utils_Tuple2(
				'href',
				$dillonkearns$elm_pages$Head$raw(url))
			]));
};
var $author$project$Main$commonHeadTags = _List_fromArray(
	[
		$dillonkearns$elm_pages$Head$rssLink('/blog/feed.xml'),
		$dillonkearns$elm_pages$Head$sitemapLink('/sitemap.xml')
	]);
var $dillonkearns$elm_pages$Head$Seo$Profile = function (a) {
	return {$: 'Profile', a: a};
};
var $dillonkearns$elm_pages$Head$Seo$profile = F2(
	function (details, common) {
		return $dillonkearns$elm_pages$Head$Seo$tags(
			A2(
				$dillonkearns$elm_pages$Head$Seo$Content,
				common,
				$dillonkearns$elm_pages$Head$Seo$Profile(details)));
	});
var $dillonkearns$elm_pages$Head$Twitter$Regular = {$: 'Regular'};
var $dillonkearns$elm_pages$Head$Twitter$Summary = function (a) {
	return {$: 'Summary', a: a};
};
var $dillonkearns$elm_pages$Head$Seo$buildSummary = F2(
	function (_v0, summarySize) {
		var title = _v0.title;
		var image = _v0.image;
		var canonicalUrlOverride = _v0.canonicalUrlOverride;
		var description = _v0.description;
		var siteName = _v0.siteName;
		var locale = _v0.locale;
		return {
			alternateLocales: _List_Nil,
			audio: $elm$core$Maybe$Nothing,
			canonicalUrlOverride: canonicalUrlOverride,
			description: description,
			image: image,
			locale: locale,
			siteName: siteName,
			title: title,
			twitterCard: $dillonkearns$elm_pages$Head$Twitter$Summary(
				{
					description: $elm$core$Maybe$Just(description),
					image: $elm$core$Maybe$Just(
						{alt: image.alt, url: image.url}),
					siteUser: $elm$core$Maybe$Nothing,
					size: summarySize,
					title: title
				}),
			video: $elm$core$Maybe$Nothing
		};
	});
var $dillonkearns$elm_pages$Head$Seo$summary = function (config) {
	return A2($dillonkearns$elm_pages$Head$Seo$buildSummary, config, $dillonkearns$elm_pages$Head$Twitter$Regular);
};
var $dillonkearns$elm_pages$Head$Twitter$Large = {$: 'Large'};
var $dillonkearns$elm_pages$Head$Seo$summaryLarge = function (config) {
	return A2($dillonkearns$elm_pages$Head$Seo$buildSummary, config, $dillonkearns$elm_pages$Head$Twitter$Large);
};
var $justinmimbs$date$Date$toIsoString = $justinmimbs$date$Date$format('yyyy-MM-dd');
var $dillonkearns$elm_pages$Head$Seo$Website = {$: 'Website'};
var $dillonkearns$elm_pages$Head$Seo$website = function (common) {
	return $dillonkearns$elm_pages$Head$Seo$tags(
		A2($dillonkearns$elm_pages$Head$Seo$Content, common, $dillonkearns$elm_pages$Head$Seo$Website));
};
var $author$project$Main$head = function (metadata) {
	return _Utils_ap(
		$author$project$Main$commonHeadTags,
		function () {
			switch (metadata.$) {
				case 'Page':
					var meta = metadata.a;
					return $dillonkearns$elm_pages$Head$Seo$website(
						$dillonkearns$elm_pages$Head$Seo$summaryLarge(
							{
								canonicalUrlOverride: $elm$core$Maybe$Nothing,
								description: $author$project$Main$siteTagline,
								image: {alt: 'elm-pages logo', dimensions: $elm$core$Maybe$Nothing, mimeType: $elm$core$Maybe$Nothing, url: $author$project$Pages$images.iconPng},
								locale: $elm$core$Maybe$Nothing,
								siteName: 'elm-pages-starter',
								title: meta.title
							}));
				case 'Article':
					var meta = metadata.a;
					return A2(
						$dillonkearns$elm_pages$Head$Seo$article,
						{
							expirationTime: $elm$core$Maybe$Nothing,
							modifiedTime: $elm$core$Maybe$Nothing,
							publishedTime: $elm$core$Maybe$Just(
								$justinmimbs$date$Date$toIsoString(meta.published)),
							section: $elm$core$Maybe$Nothing,
							tags: _List_Nil
						},
						$dillonkearns$elm_pages$Head$Seo$summaryLarge(
							{
								canonicalUrlOverride: $elm$core$Maybe$Nothing,
								description: meta.description,
								image: {alt: meta.description, dimensions: $elm$core$Maybe$Nothing, mimeType: $elm$core$Maybe$Nothing, url: meta.image},
								locale: $elm$core$Maybe$Nothing,
								siteName: 'elm-pages starter',
								title: meta.title
							}));
				case 'Author':
					var meta = metadata.a;
					var _v1 = function () {
						var _v2 = A2($elm$core$String$split, ' ', meta.name);
						_v2$3:
						while (true) {
							if (_v2.b) {
								if (_v2.b.b) {
									if (!_v2.b.b.b) {
										var first = _v2.a;
										var _v3 = _v2.b;
										var last = _v3.a;
										return _Utils_Tuple2(first, last);
									} else {
										if (!_v2.b.b.b.b) {
											var first = _v2.a;
											var _v4 = _v2.b;
											var middle = _v4.a;
											var _v5 = _v4.b;
											var last = _v5.a;
											return _Utils_Tuple2(first + (' ' + middle), last);
										} else {
											break _v2$3;
										}
									}
								} else {
									break _v2$3;
								}
							} else {
								return _Utils_Tuple2('', '');
							}
						}
						return _Utils_Tuple2(meta.name, '');
					}();
					var firstName = _v1.a;
					var lastName = _v1.b;
					return A2(
						$dillonkearns$elm_pages$Head$Seo$profile,
						{firstName: firstName, lastName: lastName, username: $elm$core$Maybe$Nothing},
						$dillonkearns$elm_pages$Head$Seo$summary(
							{
								canonicalUrlOverride: $elm$core$Maybe$Nothing,
								description: meta.bio,
								image: {alt: meta.name + '\'s elm-pages articles.', dimensions: $elm$core$Maybe$Nothing, mimeType: $elm$core$Maybe$Nothing, url: meta.avatar},
								locale: $elm$core$Maybe$Nothing,
								siteName: 'elm-pages-starter',
								title: meta.name + '\'s elm-pages articles.'
							}));
				default:
					return $dillonkearns$elm_pages$Head$Seo$website(
						$dillonkearns$elm_pages$Head$Seo$summaryLarge(
							{
								canonicalUrlOverride: $elm$core$Maybe$Nothing,
								description: $author$project$Main$siteTagline,
								image: {alt: 'elm-pages logo', dimensions: $elm$core$Maybe$Nothing, mimeType: $elm$core$Maybe$Nothing, url: $author$project$Pages$images.iconPng},
								locale: $elm$core$Maybe$Nothing,
								siteName: 'elm-pages',
								title: 'elm-pages blog'
							}));
			}
		}());
};
var $mdgriffith$elm_ui$Internal$Model$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$fontWeight = $mdgriffith$elm_ui$Internal$Flag$flag(13);
var $mdgriffith$elm_ui$Element$Font$bold = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontWeight, $mdgriffith$elm_ui$Internal$Style$classes.bold);
var $mdgriffith$elm_ui$Internal$Flag$fontAlignment = $mdgriffith$elm_ui$Internal$Flag$flag(12);
var $mdgriffith$elm_ui$Element$Font$center = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontAlignment, $mdgriffith$elm_ui$Internal$Style$classes.textCenter);
var $mdgriffith$elm_ui$Internal$Model$FontFamily = F2(
	function (a, b) {
		return {$: 'FontFamily', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$fontFamily = $mdgriffith$elm_ui$Internal$Flag$flag(5);
var $elm$core$String$words = _String_words;
var $mdgriffith$elm_ui$Internal$Model$renderFontClassName = F2(
	function (font, current) {
		return _Utils_ap(
			current,
			function () {
				switch (font.$) {
					case 'Serif':
						return 'serif';
					case 'SansSerif':
						return 'sans-serif';
					case 'Monospace':
						return 'monospace';
					case 'Typeface':
						var name = font.a;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					case 'ImportFont':
						var name = font.a;
						var url = font.b;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					default:
						var name = font.a.name;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
				}
			}());
	});
var $mdgriffith$elm_ui$Element$Font$family = function (families) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontFamily,
		A2(
			$mdgriffith$elm_ui$Internal$Model$FontFamily,
			A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'ff-', families),
			families));
};
var $mdgriffith$elm_ui$Internal$Model$Heading = function (a) {
	return {$: 'Heading', a: a};
};
var $mdgriffith$elm_ui$Element$Region$heading = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Describe, $mdgriffith$elm_ui$Internal$Model$Heading);
var $mdgriffith$elm_ui$Internal$Model$FontSize = function (a) {
	return {$: 'FontSize', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$fontSize = $mdgriffith$elm_ui$Internal$Flag$flag(4);
var $mdgriffith$elm_ui$Element$Font$size = function (i) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontSize,
		$mdgriffith$elm_ui$Internal$Model$FontSize(i));
};
var $mdgriffith$elm_ui$Internal$Model$Text = function (a) {
	return {$: 'Text', a: a};
};
var $mdgriffith$elm_ui$Element$text = function (content) {
	return $mdgriffith$elm_ui$Internal$Model$Text(content);
};
var $mdgriffith$elm_ui$Internal$Model$Typeface = function (a) {
	return {$: 'Typeface', a: a};
};
var $mdgriffith$elm_ui$Element$Font$typeface = $mdgriffith$elm_ui$Internal$Model$Typeface;
var $author$project$Palette$blogHeading = function (title) {
	return A2(
		$mdgriffith$elm_ui$Element$paragraph,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Font$bold,
				$mdgriffith$elm_ui$Element$Font$family(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$typeface('Raleway')
					])),
				$mdgriffith$elm_ui$Element$Region$heading(1),
				$mdgriffith$elm_ui$Element$Font$size(36),
				$mdgriffith$elm_ui$Element$Font$center
			]),
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$text(title)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$AlignX = function (a) {
	return {$: 'AlignX', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$CenterX = {$: 'CenterX'};
var $mdgriffith$elm_ui$Element$centerX = $mdgriffith$elm_ui$Internal$Model$AlignX($mdgriffith$elm_ui$Internal$Model$CenterX);
var $mdgriffith$elm_ui$Internal$Model$AsColumn = {$: 'AsColumn'};
var $mdgriffith$elm_ui$Internal$Model$asColumn = $mdgriffith$elm_ui$Internal$Model$AsColumn;
var $mdgriffith$elm_ui$Internal$Model$Height = function (a) {
	return {$: 'Height', a: a};
};
var $mdgriffith$elm_ui$Element$height = $mdgriffith$elm_ui$Internal$Model$Height;
var $mdgriffith$elm_ui$Internal$Model$Attr = function (a) {
	return {$: 'Attr', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$htmlClass = function (cls) {
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		$elm$html$Html$Attributes$class(cls));
};
var $mdgriffith$elm_ui$Internal$Model$Content = {$: 'Content'};
var $mdgriffith$elm_ui$Element$shrink = $mdgriffith$elm_ui$Internal$Model$Content;
var $mdgriffith$elm_ui$Element$column = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asColumn,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentTop + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.contentLeft)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Internal$Model$PaddingStyle = F5(
	function (a, b, c, d, e) {
		return {$: 'PaddingStyle', a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Flag$padding = $mdgriffith$elm_ui$Internal$Flag$flag(2);
var $mdgriffith$elm_ui$Element$padding = function (x) {
	var f = x;
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$padding,
		A5(
			$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
			'p-' + $elm$core$String$fromInt(x),
			f,
			f,
			f,
			f));
};
var $mdgriffith$elm_ui$Element$htmlAttribute = $mdgriffith$elm_ui$Internal$Model$Attr;
var $mdgriffith$elm_ui$Element$image = F2(
	function (attrs, _v0) {
		var src = _v0.src;
		var description = _v0.description;
		var imageAttributes = A2(
			$elm$core$List$filter,
			function (a) {
				switch (a.$) {
					case 'Width':
						return true;
					case 'Height':
						return true;
					default:
						return false;
				}
			},
			attrs);
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.imageContainer),
				attrs),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[
						A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asEl,
						$mdgriffith$elm_ui$Internal$Model$NodeName('img'),
						_Utils_ap(
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Internal$Model$Attr(
									$elm$html$Html$Attributes$src(src)),
									$mdgriffith$elm_ui$Internal$Model$Attr(
									$elm$html$Html$Attributes$alt(description))
								]),
							imageAttributes),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_Nil))
					])));
	});
var $mdgriffith$elm_ui$Internal$Model$Px = function (a) {
	return {$: 'Px', a: a};
};
var $mdgriffith$elm_ui$Element$px = $mdgriffith$elm_ui$Internal$Model$Px;
var $author$project$Data$Author$view = F2(
	function (attributes, author) {
		return A2(
			$mdgriffith$elm_ui$Element$image,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(70)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$htmlAttribute(
						$elm$html$Html$Attributes$class('avatar')),
					attributes)),
			{
				description: author.name,
				src: $dillonkearns$elm_pages$Pages$ImagePath$toString(author.avatar)
			});
	});
var $justinmimbs$date$Date$compare = F2(
	function (_v0, _v1) {
		var a = _v0.a;
		var b = _v1.a;
		return A2($elm$core$Basics$compare, a, b);
	});
var $author$project$Index$postPublishDateDescending = F2(
	function (_v0, _v1) {
		var metadata1 = _v0.b;
		var metadata2 = _v1.b;
		return A2($justinmimbs$date$Date$compare, metadata2.published, metadata1.published);
	});
var $mdgriffith$elm_ui$Internal$Model$Colored = F3(
	function (a, b, c) {
		return {$: 'Colored', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Flag$borderColor = $mdgriffith$elm_ui$Internal$Flag$flag(28);
var $mdgriffith$elm_ui$Internal$Model$formatColorClass = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return $mdgriffith$elm_ui$Internal$Model$floatClass(red) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(green) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(blue) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(alpha))))));
};
var $mdgriffith$elm_ui$Element$Border$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'border-color',
			clr));
};
var $mdgriffith$elm_ui$Element$el = F2(
	function (attrs, child) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					attrs)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[child])));
	});
var $mdgriffith$elm_ui$Internal$Model$Max = F2(
	function (a, b) {
		return {$: 'Max', a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$maximum = F2(
	function (i, l) {
		return A2($mdgriffith$elm_ui$Internal$Model$Max, i, l);
	});
var $mdgriffith$elm_ui$Internal$Model$Hover = {$: 'Hover'};
var $mdgriffith$elm_ui$Internal$Model$PseudoSelector = F2(
	function (a, b) {
		return {$: 'PseudoSelector', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$hover = $mdgriffith$elm_ui$Internal$Flag$flag(33);
var $mdgriffith$elm_ui$Internal$Model$AlignY = function (a) {
	return {$: 'AlignY', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Nearby = F2(
	function (a, b) {
		return {$: 'Nearby', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$NoAttribute = {$: 'NoAttribute'};
var $mdgriffith$elm_ui$Internal$Model$TransformComponent = F2(
	function (a, b) {
		return {$: 'TransformComponent', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Empty = {$: 'Empty'};
var $mdgriffith$elm_ui$Internal$Model$map = F2(
	function (fn, el) {
		switch (el.$) {
			case 'Styled':
				var styled = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: F2(
							function (add, context) {
								return A2(
									$elm$virtual_dom$VirtualDom$map,
									fn,
									A2(styled.html, add, context));
							}),
						styles: styled.styles
					});
			case 'Unstyled':
				var html = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A2(
						$elm$core$Basics$composeL,
						$elm$virtual_dom$VirtualDom$map(fn),
						html));
			case 'Text':
				var str = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Text(str);
			default:
				return $mdgriffith$elm_ui$Internal$Model$Empty;
		}
	});
var $elm$virtual_dom$VirtualDom$mapAttribute = _VirtualDom_mapAttribute;
var $mdgriffith$elm_ui$Internal$Model$mapAttrFromStyle = F2(
	function (fn, attr) {
		switch (attr.$) {
			case 'NoAttribute':
				return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
			case 'Describe':
				var description = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Describe(description);
			case 'AlignX':
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$AlignX(x);
			case 'AlignY':
				var y = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$AlignY(y);
			case 'Width':
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Width(x);
			case 'Height':
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Height(x);
			case 'Class':
				var x = attr.a;
				var y = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Class, x, y);
			case 'StyleClass':
				var flag = attr.a;
				var style = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$StyleClass, flag, style);
			case 'Nearby':
				var location = attr.a;
				var elem = attr.b;
				return A2(
					$mdgriffith$elm_ui$Internal$Model$Nearby,
					location,
					A2($mdgriffith$elm_ui$Internal$Model$map, fn, elem));
			case 'Attr':
				var htmlAttr = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Attr(
					A2($elm$virtual_dom$VirtualDom$mapAttribute, fn, htmlAttr));
			default:
				var fl = attr.a;
				var trans = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$TransformComponent, fl, trans);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$removeNever = function (style) {
	return A2($mdgriffith$elm_ui$Internal$Model$mapAttrFromStyle, $elm$core$Basics$never, style);
};
var $mdgriffith$elm_ui$Internal$Model$unwrapDecsHelper = F2(
	function (attr, _v0) {
		var styles = _v0.a;
		var trans = _v0.b;
		var _v1 = $mdgriffith$elm_ui$Internal$Model$removeNever(attr);
		switch (_v1.$) {
			case 'StyleClass':
				var style = _v1.b;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, style, styles),
					trans);
			case 'TransformComponent':
				var flag = _v1.a;
				var component = _v1.b;
				return _Utils_Tuple2(
					styles,
					A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, trans, component));
			default:
				return _Utils_Tuple2(styles, trans);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$unwrapDecorations = function (attrs) {
	var _v0 = A3(
		$elm$core$List$foldl,
		$mdgriffith$elm_ui$Internal$Model$unwrapDecsHelper,
		_Utils_Tuple2(_List_Nil, $mdgriffith$elm_ui$Internal$Model$Untransformed),
		attrs);
	var styles = _v0.a;
	var transform = _v0.b;
	return A2(
		$elm$core$List$cons,
		$mdgriffith$elm_ui$Internal$Model$Transform(transform),
		styles);
};
var $mdgriffith$elm_ui$Element$mouseOver = function (decs) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$hover,
		A2(
			$mdgriffith$elm_ui$Internal$Model$PseudoSelector,
			$mdgriffith$elm_ui$Internal$Model$Hover,
			$mdgriffith$elm_ui$Internal$Model$unwrapDecorations(decs)));
};
var $mdgriffith$elm_ui$Internal$Model$Transparency = F2(
	function (a, b) {
		return {$: 'Transparency', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$transparency = $mdgriffith$elm_ui$Internal$Flag$flag(0);
var $mdgriffith$elm_ui$Element$alpha = function (o) {
	var transparency = function (x) {
		return 1 - x;
	}(
		A2(
			$elm$core$Basics$min,
			1.0,
			A2($elm$core$Basics$max, 0.0, o)));
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$transparency,
		A2(
			$mdgriffith$elm_ui$Internal$Model$Transparency,
			'transparency-' + $mdgriffith$elm_ui$Internal$Model$floatClass(transparency),
			transparency));
};
var $mdgriffith$elm_ui$Element$Font$underline = $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.underline);
var $author$project$Index$readMoreLink = A2(
	$mdgriffith$elm_ui$Element$el,
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$centerX,
			$mdgriffith$elm_ui$Element$Font$size(18),
			$mdgriffith$elm_ui$Element$alpha(0.6),
			$mdgriffith$elm_ui$Element$mouseOver(
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$alpha(1)
				])),
			$mdgriffith$elm_ui$Element$Font$underline,
			$mdgriffith$elm_ui$Element$Font$center
		]),
	$mdgriffith$elm_ui$Element$text('Continue reading >>'));
var $mdgriffith$elm_ui$Internal$Model$AsRow = {$: 'AsRow'};
var $mdgriffith$elm_ui$Internal$Model$asRow = $mdgriffith$elm_ui$Internal$Model$AsRow;
var $mdgriffith$elm_ui$Element$row = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asRow,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentLeft + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Internal$Model$AsTextColumn = {$: 'AsTextColumn'};
var $mdgriffith$elm_ui$Internal$Model$asTextColumn = $mdgriffith$elm_ui$Internal$Model$AsTextColumn;
var $mdgriffith$elm_ui$Internal$Model$Min = F2(
	function (a, b) {
		return {$: 'Min', a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$minimum = F2(
	function (i, l) {
		return A2($mdgriffith$elm_ui$Internal$Model$Min, i, l);
	});
var $mdgriffith$elm_ui$Element$textColumn = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asTextColumn,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width(
					A2(
						$mdgriffith$elm_ui$Element$maximum,
						750,
						A2($mdgriffith$elm_ui$Element$minimum, 500, $mdgriffith$elm_ui$Element$fill))),
				attrs),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Element$Font$semiBold = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontWeight, $mdgriffith$elm_ui$Internal$Style$classes.textSemiBold);
var $author$project$Index$title = function (text) {
	return A2(
		$mdgriffith$elm_ui$Element$paragraph,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Font$size(36),
				$mdgriffith$elm_ui$Element$Font$center,
				$mdgriffith$elm_ui$Element$Font$family(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$typeface('Raleway')
					])),
				$mdgriffith$elm_ui$Element$Font$semiBold,
				$mdgriffith$elm_ui$Element$padding(16)
			]),
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$text(text)
			]));
};
var $author$project$Index$postPreview = function (post) {
	return A2(
		$mdgriffith$elm_ui$Element$textColumn,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$centerX,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$spacing(30),
				$mdgriffith$elm_ui$Element$Font$size(18)
			]),
		_List_fromArray(
			[
				$author$project$Index$title(post.title),
				A2(
				$mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$spacing(10),
						$mdgriffith$elm_ui$Element$centerX
					]),
				_List_fromArray(
					[
						A2(
						$author$project$Data$Author$view,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$width(
								$mdgriffith$elm_ui$Element$px(40))
							]),
						post.author),
						$mdgriffith$elm_ui$Element$text(post.author.name),
						$mdgriffith$elm_ui$Element$text('???'),
						$mdgriffith$elm_ui$Element$text(
						A2($justinmimbs$date$Date$format, 'MMMM ddd, yyyy', post.published))
					])),
				A2(
				$mdgriffith$elm_ui$Element$paragraph,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$size(22),
						$mdgriffith$elm_ui$Element$Font$center,
						$mdgriffith$elm_ui$Element$Font$family(
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$Font$typeface('Raleway')
							]))
					]),
				$elm$core$List$singleton(
					$mdgriffith$elm_ui$Element$text(post.description))),
				$author$project$Index$readMoreLink
			]));
};
var $mdgriffith$elm_ui$Internal$Model$Rgba = F4(
	function (a, b, c, d) {
		return {$: 'Rgba', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Element$rgba255 = F4(
	function (red, green, blue, a) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, red / 255, green / 255, blue / 255, a);
	});
var $mdgriffith$elm_ui$Internal$Model$BorderWidth = F5(
	function (a, b, c, d, e) {
		return {$: 'BorderWidth', a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Element$Border$width = function (v) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			$mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + $elm$core$String$fromInt(v),
			v,
			v,
			v,
			v));
};
var $author$project$Index$articleIndex = function (metadata) {
	return A2(
		$mdgriffith$elm_ui$Element$el,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$centerX,
				$mdgriffith$elm_ui$Element$width(
				A2($mdgriffith$elm_ui$Element$maximum, 800, $mdgriffith$elm_ui$Element$fill)),
				$mdgriffith$elm_ui$Element$padding(40),
				$mdgriffith$elm_ui$Element$spacing(10),
				$mdgriffith$elm_ui$Element$Border$width(1),
				$mdgriffith$elm_ui$Element$Border$color(
				A4($mdgriffith$elm_ui$Element$rgba255, 0, 0, 0, 0.1)),
				$mdgriffith$elm_ui$Element$mouseOver(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Border$color(
						A4($mdgriffith$elm_ui$Element$rgba255, 0, 0, 0, 1))
					]))
			]),
		$author$project$Index$postPreview(metadata));
};
var $elm$html$Html$Attributes$rel = _VirtualDom_attribute('rel');
var $mdgriffith$elm_ui$Element$link = F2(
	function (attrs, _v0) {
		var url = _v0.url;
		var label = _v0.label;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$NodeName('a'),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Attributes$href(url)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$Attr(
						$elm$html$Html$Attributes$rel('noopener noreferrer')),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.link)))),
								attrs))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $author$project$Index$linkToPost = F2(
	function (postPath, content) {
		return A2(
			$mdgriffith$elm_ui$Element$link,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
				]),
			{
				label: content,
				url: $dillonkearns$elm_pages$Pages$PagePath$toString(postPath)
			});
	});
var $author$project$Index$postSummary = function (_v0) {
	var postPath = _v0.a;
	var post = _v0.b;
	return A2(
		$author$project$Index$linkToPost,
		postPath,
		$author$project$Index$articleIndex(post));
};
var $elm$core$List$sortWith = _List_sortWith;
var $author$project$Index$view = function (posts) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$spacing(20)
			]),
		A2(
			$elm$core$List$map,
			$author$project$Index$postSummary,
			A2(
				$elm$core$List$sortWith,
				$author$project$Index$postPublishDateDescending,
				A2(
					$elm$core$List$filterMap,
					function (_v0) {
						var path = _v0.a;
						var metadata = _v0.b;
						switch (metadata.$) {
							case 'Page':
								var meta = metadata.a;
								return $elm$core$Maybe$Nothing;
							case 'Author':
								return $elm$core$Maybe$Nothing;
							case 'Article':
								var meta = metadata.a;
								return meta.draft ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
									_Utils_Tuple2(path, meta));
							default:
								return $elm$core$Maybe$Nothing;
						}
					},
					posts))));
};
var $author$project$Page$Article$articleImageView = function (articleImage) {
	return A2(
		$mdgriffith$elm_ui$Element$image,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
			]),
		{
			description: 'Article cover photo',
			src: $dillonkearns$elm_pages$Pages$ImagePath$toString(articleImage)
		});
};
var $mdgriffith$elm_ui$Internal$Flag$fontColor = $mdgriffith$elm_ui$Internal$Flag$flag(14);
var $mdgriffith$elm_ui$Element$Font$color = function (fontColor) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(fontColor),
			'color',
			fontColor));
};
var $author$project$Page$Article$publishedDateView = function (metadata) {
	return $mdgriffith$elm_ui$Element$text(
		A2($justinmimbs$date$Date$format, 'MMMM ddd, yyyy', metadata.published));
};
var $author$project$Page$Article$view = F2(
	function (metadata, viewForPage) {
		return {
			body: _List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$column,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$spacing(10)
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$spacing(10)
								]),
							_List_fromArray(
								[
									A2($author$project$Data$Author$view, _List_Nil, metadata.author),
									A2(
									$mdgriffith$elm_ui$Element$column,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$spacing(10),
											$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
										]),
									_List_fromArray(
										[
											A2(
											$mdgriffith$elm_ui$Element$paragraph,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$Font$bold,
													$mdgriffith$elm_ui$Element$Font$size(24)
												]),
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$text(metadata.author.name)
												])),
											A2(
											$mdgriffith$elm_ui$Element$paragraph,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$Font$size(16)
												]),
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$text(metadata.author.bio)
												]))
										]))
								]))
						])),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$size(16),
							$mdgriffith$elm_ui$Element$Font$color(
							A4($mdgriffith$elm_ui$Element$rgba255, 0, 0, 0, 0.6))
						]),
					$author$project$Page$Article$publishedDateView(metadata)),
					$author$project$Palette$blogHeading(metadata.title),
					$author$project$Page$Article$articleImageView(metadata.image),
					viewForPage
				]),
			title: metadata.title
		};
	});
var $author$project$Main$pageView = F4(
	function (model, siteMetadata, page, viewForPage) {
		var _v0 = page.frontmatter;
		switch (_v0.$) {
			case 'Page':
				var metadata = _v0.a;
				return {
					body: _List_fromArray(
						[viewForPage]),
					title: metadata.title
				};
			case 'Article':
				var metadata = _v0.a;
				return A2($author$project$Page$Article$view, metadata, viewForPage);
			case 'Author':
				var author = _v0.a;
				return {
					body: _List_fromArray(
						[
							$author$project$Palette$blogHeading(author.name),
							A2($author$project$Data$Author$view, _List_Nil, author),
							A2(
							$mdgriffith$elm_ui$Element$paragraph,
							_List_fromArray(
								[$mdgriffith$elm_ui$Element$centerX, $mdgriffith$elm_ui$Element$Font$center]),
							_List_fromArray(
								[viewForPage]))
						]),
					title: author.name
				};
			default:
				return {
					body: _List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$padding(20),
									$mdgriffith$elm_ui$Element$centerX
								]),
							_List_fromArray(
								[
									$author$project$Index$view(siteMetadata)
								]))
						]),
					title: 'elm-pages blog'
				};
		}
	});
var $mdgriffith$elm_ui$Element$rgb255 = F3(
	function (red, green, blue) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, red / 255, green / 255, blue / 255, 1);
	});
var $author$project$Palette$color = {
	primary: A3($mdgriffith$elm_ui$Element$rgb255, 5, 117, 230),
	secondary: A3($mdgriffith$elm_ui$Element$rgb255, 0, 242, 96)
};
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty('target');
var $mdgriffith$elm_ui$Element$newTabLink = F2(
	function (attrs, _v0) {
		var url = _v0.url;
		var label = _v0.label;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$NodeName('a'),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Attributes$href(url)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$Attr(
						$elm$html$Html$Attributes$rel('noopener noreferrer')),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$Attr(
							$elm$html$Html$Attributes$target('_blank')),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.link)))),
									attrs)))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $author$project$Layout$elmDocsLink = A2(
	$mdgriffith$elm_ui$Element$newTabLink,
	_List_Nil,
	{
		label: A2(
			$mdgriffith$elm_ui$Element$image,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(22)),
					$mdgriffith$elm_ui$Element$Font$color($author$project$Palette$color.primary)
				]),
			{
				description: 'Elm Package Docs',
				src: $dillonkearns$elm_pages$Pages$ImagePath$toString($author$project$Pages$images.elmLogo)
			}),
		url: 'https://package.elm-lang.org/packages/dillonkearns/elm-pages/latest/'
	});
var $author$project$Layout$githubRepoLink = A2(
	$mdgriffith$elm_ui$Element$newTabLink,
	_List_Nil,
	{
		label: A2(
			$mdgriffith$elm_ui$Element$image,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(22)),
					$mdgriffith$elm_ui$Element$Font$color($author$project$Palette$color.primary)
				]),
			{
				description: 'Github repo',
				src: $dillonkearns$elm_pages$Pages$ImagePath$toString($author$project$Pages$images.github)
			}),
		url: 'https://github.com/dillonkearns/elm-pages'
	});
var $mdgriffith$elm_ui$Internal$Flag$bgColor = $mdgriffith$elm_ui$Internal$Flag$flag(8);
var $mdgriffith$elm_ui$Internal$Flag$bgGradient = $mdgriffith$elm_ui$Internal$Flag$flag(10);
var $mdgriffith$elm_ui$Element$Background$gradient = function (_v0) {
	var angle = _v0.angle;
	var steps = _v0.steps;
	if (!steps.b) {
		return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
	} else {
		if (!steps.b.b) {
			var clr = steps.a;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$bgColor,
				A3(
					$mdgriffith$elm_ui$Internal$Model$Colored,
					'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
					'background-color',
					clr));
		} else {
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$bgGradient,
				A3(
					$mdgriffith$elm_ui$Internal$Model$Single,
					'bg-grad-' + A2(
						$elm$core$String$join,
						'-',
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$floatClass(angle),
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$formatColorClass, steps))),
					'background-image',
					'linear-gradient(' + (A2(
						$elm$core$String$join,
						', ',
						A2(
							$elm$core$List$cons,
							$elm$core$String$fromFloat(angle) + 'rad',
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$formatColor, steps))) + ')')));
		}
	}
};
var $dillonkearns$elm_pages$Pages$Directory$toString = $elm$core$String$join('/');
var $dillonkearns$elm_pages$Pages$Directory$includes = F2(
	function (_v0, pagePath) {
		var key = _v0.a;
		var allPagePaths = _v0.b;
		var directoryPath = _v0.c;
		return A2(
			$elm$core$List$member,
			pagePath,
			A2(
				$elm$core$List$filter,
				function (path) {
					return A2(
						$elm$core$String$startsWith,
						$dillonkearns$elm_pages$Pages$Directory$toString(directoryPath),
						$dillonkearns$elm_pages$Pages$PagePath$toString(path));
				},
				allPagePaths));
	});
var $dillonkearns$elm_pages$Pages$Directory$indexPath = function (_v0) {
	var key = _v0.a;
	var allPagePaths = _v0.b;
	var directoryPath = _v0.c;
	return A2($dillonkearns$elm_pages$Pages$PagePath$build, key, directoryPath);
};
var $author$project$Layout$highlightableLink = F3(
	function (currentPath, linkDirectory, displayName) {
		var isHighlighted = A2($dillonkearns$elm_pages$Pages$Directory$includes, linkDirectory, currentPath);
		return A2(
			$mdgriffith$elm_ui$Element$link,
			isHighlighted ? _List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$underline,
					$mdgriffith$elm_ui$Element$Font$color($author$project$Palette$color.primary)
				]) : _List_Nil,
			{
				label: $mdgriffith$elm_ui$Element$text(displayName),
				url: $dillonkearns$elm_pages$Pages$PagePath$toString(
					$dillonkearns$elm_pages$Pages$Directory$indexPath(linkDirectory))
			});
	});
var $mdgriffith$elm_ui$Internal$Model$Navigation = {$: 'Navigation'};
var $mdgriffith$elm_ui$Element$Region$navigation = $mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Navigation);
var $mdgriffith$elm_ui$Element$none = $mdgriffith$elm_ui$Internal$Model$Empty;
var $mdgriffith$elm_ui$Element$paddingXY = F2(
	function (x, y) {
		if (_Utils_eq(x, y)) {
			var f = x;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$padding,
				A5(
					$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
					'p-' + $elm$core$String$fromInt(x),
					f,
					f,
					f,
					f));
		} else {
			var yFloat = y;
			var xFloat = x;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$padding,
				A5(
					$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
					'p-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y))),
					yFloat,
					xFloat,
					yFloat,
					xFloat));
		}
	});
var $mdgriffith$elm_ui$Element$spaceEvenly = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$spacing, $mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly);
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$defs = $elm$svg$Svg$trustedNode('defs');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $author$project$DocumentSvg$fillColor = 'url(#grad1)';
var $elm$svg$Svg$Attributes$id = _VirtualDom_attribute('id');
var $elm$svg$Svg$linearGradient = $elm$svg$Svg$trustedNode('linearGradient');
var $elm$svg$Svg$Attributes$offset = _VirtualDom_attribute('offset');
var $elm$svg$Svg$stop = $elm$svg$Svg$trustedNode('stop');
var $elm$svg$Svg$Attributes$style = _VirtualDom_attribute('style');
var $avh4$elm_color$Color$toCssString = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	var a = _v0.d;
	var roundTo = function (x) {
		return $elm$core$Basics$round(x * 1000) / 1000;
	};
	var pct = function (x) {
		return $elm$core$Basics$round(x * 10000) / 100;
	};
	return $elm$core$String$concat(
		_List_fromArray(
			[
				'rgba(',
				$elm$core$String$fromFloat(
				pct(r)),
				'%,',
				$elm$core$String$fromFloat(
				pct(g)),
				'%,',
				$elm$core$String$fromFloat(
				pct(b)),
				'%,',
				$elm$core$String$fromFloat(
				roundTo(a)),
				')'
			]));
};
var $elm$svg$Svg$Attributes$x1 = _VirtualDom_attribute('x1');
var $elm$svg$Svg$Attributes$x2 = _VirtualDom_attribute('x2');
var $elm$svg$Svg$Attributes$y1 = _VirtualDom_attribute('y1');
var $elm$svg$Svg$Attributes$y2 = _VirtualDom_attribute('y2');
var $author$project$DocumentSvg$gradient = F2(
	function (color1, color2) {
		return A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('grad1'),
					$elm$svg$Svg$Attributes$x1('0%'),
					$elm$svg$Svg$Attributes$y1('0%'),
					$elm$svg$Svg$Attributes$x2('100%'),
					$elm$svg$Svg$Attributes$y2('0%')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('10%'),
							$elm$svg$Svg$Attributes$style(
							'stop-color:' + ($avh4$elm_color$Color$toCssString(color1) + ';stop-opacity:1'))
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('100%'),
							$elm$svg$Svg$Attributes$style(
							'stop-color:' + ($avh4$elm_color$Color$toCssString(color2) + ';stop-opacity:1'))
						]),
					_List_Nil)
				]));
	});
var $avh4$elm_color$Color$scaleFrom255 = function (c) {
	return c / 255;
};
var $avh4$elm_color$Color$rgb255 = F3(
	function (r, g, b) {
		return A4(
			$avh4$elm_color$Color$RgbaSpace,
			$avh4$elm_color$Color$scaleFrom255(r),
			$avh4$elm_color$Color$scaleFrom255(g),
			$avh4$elm_color$Color$scaleFrom255(b),
			1.0);
	});
var $author$project$DocumentSvg$fillGradient = A2(
	$author$project$DocumentSvg$gradient,
	A3($avh4$elm_color$Color$rgb255, 5, 117, 230),
	A3($avh4$elm_color$Color$rgb255, 0, 242, 96));
var $elm$svg$Svg$Attributes$fillOpacity = _VirtualDom_attribute('fill-opacity');
var $elm$svg$Svg$g = $elm$svg$Svg$trustedNode('g');
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$svg$Svg$line = $elm$svg$Svg$trustedNode('line');
var $elm$svg$Svg$metadata = $elm$svg$Svg$trustedNode('metadata');
var $author$project$DocumentSvg$pageTextColor = 'black';
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $author$project$DocumentSvg$strokeColor = 'black';
var $elm$svg$Svg$Attributes$strokeDasharray = _VirtualDom_attribute('stroke-dasharray');
var $elm$svg$Svg$Attributes$strokeLinecap = _VirtualDom_attribute('stroke-linecap');
var $elm$svg$Svg$Attributes$strokeLinejoin = _VirtualDom_attribute('stroke-linejoin');
var $elm$svg$Svg$Attributes$strokeOpacity = _VirtualDom_attribute('stroke-opacity');
var $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$svg$Svg$Attributes$version = _VirtualDom_attribute('version');
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $author$project$DocumentSvg$view = A2(
	$mdgriffith$elm_ui$Element$el,
	_List_Nil,
	$mdgriffith$elm_ui$Element$html(
		A2(
			$elm$svg$Svg$svg,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$version('1.1'),
					$elm$svg$Svg$Attributes$viewBox('251.0485 144.52063 56.114286 74.5'),
					$elm$svg$Svg$Attributes$width('56.114286'),
					$elm$svg$Svg$Attributes$height('74.5'),
					$elm$svg$Svg$Attributes$width('30px')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$defs,
					_List_Nil,
					_List_fromArray(
						[$author$project$DocumentSvg$fillGradient])),
					A2($elm$svg$Svg$metadata, _List_Nil, _List_Nil),
					A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('Canvas_11'),
							$elm$svg$Svg$Attributes$stroke('none'),
							$elm$svg$Svg$Attributes$fill($author$project$DocumentSvg$fillColor),
							$elm$svg$Svg$Attributes$strokeOpacity('1'),
							$elm$svg$Svg$Attributes$fillOpacity('1'),
							$elm$svg$Svg$Attributes$strokeDasharray('none')
						]),
					_List_fromArray(
						[
							A2(
							$elm$svg$Svg$g,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$id('Canvas_11: Layer 1')
								]),
							_List_fromArray(
								[
									A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id('Group_38')
										]),
									_List_fromArray(
										[
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('Graphic_32')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$path,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$d('M 252.5485 146.02063 L 252.5485 217.52063 L 305.66277 217.52063 L 305.66277 161.68254 L 290.00087 146.02063 Z'),
															$elm$svg$Svg$Attributes$stroke($author$project$DocumentSvg$strokeColor),
															$elm$svg$Svg$Attributes$strokeLinecap('round'),
															$elm$svg$Svg$Attributes$strokeLinejoin('round'),
															$elm$svg$Svg$Attributes$strokeWidth('3')
														]),
													_List_Nil)
												])),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('Line_34')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$line,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$x1('266.07286'),
															$elm$svg$Svg$Attributes$y1('182.8279'),
															$elm$svg$Svg$Attributes$x2('290.75465'),
															$elm$svg$Svg$Attributes$y2('183.00997'),
															$elm$svg$Svg$Attributes$stroke($author$project$DocumentSvg$pageTextColor),
															$elm$svg$Svg$Attributes$strokeLinecap('round'),
															$elm$svg$Svg$Attributes$strokeLinejoin('round'),
															$elm$svg$Svg$Attributes$strokeWidth('2')
														]),
													_List_Nil)
												])),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('Line_35')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$line,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$x1('266.07286'),
															$elm$svg$Svg$Attributes$y1('191.84156'),
															$elm$svg$Svg$Attributes$x2('290.75465'),
															$elm$svg$Svg$Attributes$y2('192.02363'),
															$elm$svg$Svg$Attributes$stroke($author$project$DocumentSvg$pageTextColor),
															$elm$svg$Svg$Attributes$strokeLinecap('round'),
															$elm$svg$Svg$Attributes$strokeLinejoin('round'),
															$elm$svg$Svg$Attributes$strokeWidth('2')
														]),
													_List_Nil)
												])),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('Line_36')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$line,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$x1('266.07286'),
															$elm$svg$Svg$Attributes$y1('200.85522'),
															$elm$svg$Svg$Attributes$x2('290.75465'),
															$elm$svg$Svg$Attributes$y2('201.0373'),
															$elm$svg$Svg$Attributes$stroke($author$project$DocumentSvg$pageTextColor),
															$elm$svg$Svg$Attributes$strokeLinecap('round'),
															$elm$svg$Svg$Attributes$strokeLinejoin('round'),
															$elm$svg$Svg$Attributes$strokeWidth('2')
														]),
													_List_Nil)
												])),
											A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$id('Line_37')
												]),
											_List_fromArray(
												[
													A2(
													$elm$svg$Svg$line,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$x1('266.07286'),
															$elm$svg$Svg$Attributes$y1('164.80058'),
															$elm$svg$Svg$Attributes$x2('278.3874'),
															$elm$svg$Svg$Attributes$y2('164.94049'),
															$elm$svg$Svg$Attributes$stroke($author$project$DocumentSvg$pageTextColor),
															$elm$svg$Svg$Attributes$strokeLinecap('round'),
															$elm$svg$Svg$Attributes$strokeLinejoin('round'),
															$elm$svg$Svg$Attributes$strokeWidth('2')
														]),
													_List_Nil)
												]))
										]))
								]))
						]))
				]))));
var $mdgriffith$elm_ui$Element$Border$widthXY = F2(
	function (x, y) {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$borderWidth,
			A5(
				$mdgriffith$elm_ui$Internal$Model$BorderWidth,
				'b-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y))),
				y,
				x,
				y,
				x));
	});
var $mdgriffith$elm_ui$Element$Border$widthEach = function (_v0) {
	var bottom = _v0.bottom;
	var top = _v0.top;
	var left = _v0.left;
	var right = _v0.right;
	return (_Utils_eq(top, bottom) && _Utils_eq(left, right)) ? (_Utils_eq(top, right) ? $mdgriffith$elm_ui$Element$Border$width(top) : A2($mdgriffith$elm_ui$Element$Border$widthXY, left, top)) : A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			$mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left))))))),
			top,
			right,
			bottom,
			left));
};
var $author$project$Layout$header = function (currentPath) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$height(
						$mdgriffith$elm_ui$Element$px(4)),
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$Background$gradient(
						{
							angle: 0.2,
							steps: _List_fromArray(
								[
									A3($mdgriffith$elm_ui$Element$rgb255, 0, 242, 96),
									A3($mdgriffith$elm_ui$Element$rgb255, 5, 117, 230)
								])
						})
					]),
				$mdgriffith$elm_ui$Element$none),
				A2(
				$mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Element$paddingXY, 25, 4),
						$mdgriffith$elm_ui$Element$spaceEvenly,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$Region$navigation,
						$mdgriffith$elm_ui$Element$Border$widthEach(
						{bottom: 1, left: 0, right: 0, top: 0}),
						$mdgriffith$elm_ui$Element$Border$color(
						A4($mdgriffith$elm_ui$Element$rgba255, 40, 80, 40, 0.4))
					]),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$link,
						_List_Nil,
						{
							label: A2(
								$mdgriffith$elm_ui$Element$row,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Font$size(30),
										$mdgriffith$elm_ui$Element$spacing(16)
									]),
								_List_fromArray(
									[
										$author$project$DocumentSvg$view,
										$mdgriffith$elm_ui$Element$text('elm-pages-starter')
									])),
							url: '/'
						}),
						A2(
						$mdgriffith$elm_ui$Element$row,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$spacing(15)
							]),
						_List_fromArray(
							[
								$author$project$Layout$elmDocsLink,
								$author$project$Layout$githubRepoLink,
								A3($author$project$Layout$highlightableLink, currentPath, $author$project$Pages$pages.blog.directory, 'Blog')
							]))
					]))
			]));
};
var $mdgriffith$elm_ui$Internal$Model$OnlyDynamic = F2(
	function (a, b) {
		return {$: 'OnlyDynamic', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic = F2(
	function (a, b) {
		return {$: 'StaticRootAndDynamic', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$AllowHover = {$: 'AllowHover'};
var $mdgriffith$elm_ui$Internal$Model$Layout = {$: 'Layout'};
var $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle = {
	backgroundColor: $elm$core$Maybe$Nothing,
	borderColor: $elm$core$Maybe$Nothing,
	shadow: $elm$core$Maybe$Just(
		{
			blur: 0,
			color: A4($mdgriffith$elm_ui$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
			offset: _Utils_Tuple2(0, 0),
			size: 3
		})
};
var $mdgriffith$elm_ui$Internal$Model$optionsToRecord = function (options) {
	var combine = F2(
		function (opt, record) {
			switch (opt.$) {
				case 'HoverOption':
					var hoverable = opt.a;
					var _v4 = record.hover;
					if (_v4.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								hover: $elm$core$Maybe$Just(hoverable)
							});
					} else {
						return record;
					}
				case 'FocusStyleOption':
					var focusStyle = opt.a;
					var _v5 = record.focus;
					if (_v5.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								focus: $elm$core$Maybe$Just(focusStyle)
							});
					} else {
						return record;
					}
				default:
					var renderMode = opt.a;
					var _v6 = record.mode;
					if (_v6.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								mode: $elm$core$Maybe$Just(renderMode)
							});
					} else {
						return record;
					}
			}
		});
	var andFinally = function (record) {
		return {
			focus: function () {
				var _v0 = record.focus;
				if (_v0.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle;
				} else {
					var focusable = _v0.a;
					return focusable;
				}
			}(),
			hover: function () {
				var _v1 = record.hover;
				if (_v1.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$AllowHover;
				} else {
					var hoverable = _v1.a;
					return hoverable;
				}
			}(),
			mode: function () {
				var _v2 = record.mode;
				if (_v2.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$Layout;
				} else {
					var actualMode = _v2.a;
					return actualMode;
				}
			}()
		};
	};
	return andFinally(
		A3(
			$elm$core$List$foldr,
			combine,
			{focus: $elm$core$Maybe$Nothing, hover: $elm$core$Maybe$Nothing, mode: $elm$core$Maybe$Nothing},
			options));
};
var $mdgriffith$elm_ui$Internal$Model$toHtml = F2(
	function (mode, el) {
		switch (el.$) {
			case 'Unstyled':
				var html = el.a;
				return html($mdgriffith$elm_ui$Internal$Model$asEl);
			case 'Styled':
				var styles = el.a.styles;
				var html = el.a.html;
				return A2(
					html,
					mode(styles),
					$mdgriffith$elm_ui$Internal$Model$asEl);
			case 'Text':
				var text = el.a;
				return $mdgriffith$elm_ui$Internal$Model$textElement(text);
			default:
				return $mdgriffith$elm_ui$Internal$Model$textElement('');
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderRoot = F3(
	function (optionList, attributes, child) {
		var options = $mdgriffith$elm_ui$Internal$Model$optionsToRecord(optionList);
		var embedStyle = function () {
			var _v0 = options.mode;
			if (_v0.$ === 'NoStaticStyleSheet') {
				return $mdgriffith$elm_ui$Internal$Model$OnlyDynamic(options);
			} else {
				return $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic(options);
			}
		}();
		return A2(
			$mdgriffith$elm_ui$Internal$Model$toHtml,
			embedStyle,
			A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				attributes,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[child]))));
	});
var $mdgriffith$elm_ui$Internal$Model$SansSerif = {$: 'SansSerif'};
var $mdgriffith$elm_ui$Internal$Model$rootStyle = function () {
	var families = _List_fromArray(
		[
			$mdgriffith$elm_ui$Internal$Model$Typeface('Open Sans'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Helvetica'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Verdana'),
			$mdgriffith$elm_ui$Internal$Model$SansSerif
		]);
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$bgColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0)),
				'background-color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1)),
				'color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontSize,
			$mdgriffith$elm_ui$Internal$Model$FontSize(20)),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontFamily,
			A2(
				$mdgriffith$elm_ui$Internal$Model$FontFamily,
				A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'font-', families),
				families))
		]);
}();
var $mdgriffith$elm_ui$Element$layoutWith = F3(
	function (_v0, attrs, child) {
		var options = _v0.options;
		return A3(
			$mdgriffith$elm_ui$Internal$Model$renderRoot,
			options,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass(
					A2(
						$elm$core$String$join,
						' ',
						_List_fromArray(
							[$mdgriffith$elm_ui$Internal$Style$classes.root, $mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single]))),
				_Utils_ap($mdgriffith$elm_ui$Internal$Model$rootStyle, attrs)),
			child);
	});
var $mdgriffith$elm_ui$Element$layout = $mdgriffith$elm_ui$Element$layoutWith(
	{options: _List_Nil});
var $mdgriffith$elm_ui$Internal$Model$Main = {$: 'Main'};
var $mdgriffith$elm_ui$Element$Region$mainContent = $mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Main);
var $author$project$Layout$view = F2(
	function (document, page) {
		return {
			body: A2(
				$mdgriffith$elm_ui$Element$layout,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$Font$size(20),
						$mdgriffith$elm_ui$Element$Font$family(
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$Font$typeface('Roboto')
							])),
						$mdgriffith$elm_ui$Element$Font$color(
						A4($mdgriffith$elm_ui$Element$rgba255, 0, 0, 0, 0.8))
					]),
				A2(
					$mdgriffith$elm_ui$Element$column,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
						]),
					_List_fromArray(
						[
							$author$project$Layout$header(page.path),
							A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$padding(30),
									$mdgriffith$elm_ui$Element$spacing(40),
									$mdgriffith$elm_ui$Element$Region$mainContent,
									$mdgriffith$elm_ui$Element$width(
									A2($mdgriffith$elm_ui$Element$maximum, 800, $mdgriffith$elm_ui$Element$fill)),
									$mdgriffith$elm_ui$Element$centerX
								]),
							document.body)
						]))),
			title: document.title
		};
	});
var $author$project$Main$view = F2(
	function (siteMetadata, page) {
		return $dillonkearns$elm_pages$Pages$StaticHttp$succeed(
			{
				head: $author$project$Main$head(page.frontmatter),
				view: F2(
					function (model, viewForPage) {
						return A2(
							$author$project$Layout$view,
							A4($author$project$Main$pageView, model, siteMetadata, page, viewForPage),
							page);
					})
			});
	});
var $elm_community$dict_extra$Dict$Extra$insertDedupe = F4(
	function (combine, key, value, dict) {
		var _with = function (mbValue) {
			if (mbValue.$ === 'Just') {
				var oldValue = mbValue.a;
				return $elm$core$Maybe$Just(
					A2(combine, oldValue, value));
			} else {
				return $elm$core$Maybe$Just(value);
			}
		};
		return A3($elm$core$Dict$update, key, _with, dict);
	});
var $elm_community$dict_extra$Dict$Extra$fromListDedupe = F2(
	function (combine, xs) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, acc) {
					var key = _v0.a;
					var value = _v0.b;
					return A4($elm_community$dict_extra$Dict$Extra$insertDedupe, combine, key, value, acc);
				}),
			$elm$core$Dict$empty,
			xs);
	});
var $dillonkearns$elm_pages$Pages$StaticHttp$combineReducedDicts = F2(
	function (dict1, dict2) {
		return A2(
			$elm_community$dict_extra$Dict$Extra$fromListDedupe,
			F2(
				function (response1, response2) {
					return (_Utils_cmp(
						$elm$core$String$length(response1),
						$elm$core$String$length(response2)) < 0) ? response1 : response2;
				}),
			_Utils_ap(
				$elm$core$Dict$toList(dict1),
				$elm$core$Dict$toList(dict2)));
	});
var $dillonkearns$elm_pages$Pages$StaticHttp$map2 = F3(
	function (fn, request1, request2) {
		var _v0 = _Utils_Tuple2(request1, request2);
		if (_v0.a.$ === 'Request') {
			if (_v0.b.$ === 'Request') {
				var _v1 = _v0.a.a;
				var urls1 = _v1.a;
				var lookupFn1 = _v1.b;
				var _v2 = _v0.b.a;
				var urls2 = _v2.a;
				var lookupFn2 = _v2.b;
				var value = F2(
					function (appType, rawResponses) {
						var _v3 = _Utils_Tuple2(
							A2(lookupFn1, appType, rawResponses),
							A2(lookupFn2, appType, rawResponses));
						if (_v3.a.$ === 'Ok') {
							if (_v3.b.$ === 'Ok') {
								var _v4 = _v3.a.a;
								var newDict1 = _v4.a;
								var newValue1 = _v4.b;
								var _v5 = _v3.b.a;
								var newDict2 = _v5.a;
								var newValue2 = _v5.b;
								return $elm$core$Result$Ok(
									_Utils_Tuple2(
										A2($dillonkearns$elm_pages$Pages$StaticHttp$combineReducedDicts, newDict1, newDict2),
										A3($dillonkearns$elm_pages$Pages$StaticHttp$map2, fn, newValue1, newValue2)));
							} else {
								var error = _v3.b.a;
								return $elm$core$Result$Err(error);
							}
						} else {
							var error = _v3.a.a;
							return $elm$core$Result$Err(error);
						}
					});
				return $dillonkearns$elm_pages$Pages$StaticHttpRequest$Request(
					_Utils_Tuple2(
						_Utils_ap(urls1, urls2),
						value));
			} else {
				var _v6 = _v0.a.a;
				var urls1 = _v6.a;
				var lookupFn1 = _v6.b;
				var value2 = _v0.b.a;
				return $dillonkearns$elm_pages$Pages$StaticHttpRequest$Request(
					_Utils_Tuple2(
						urls1,
						F2(
							function (appType, rawResponses) {
								return A2(
									$elm$core$Result$map,
									function (_v7) {
										var dict1 = _v7.a;
										var value1 = _v7.b;
										return _Utils_Tuple2(
											dict1,
											A3(
												$dillonkearns$elm_pages$Pages$StaticHttp$map2,
												fn,
												value1,
												$dillonkearns$elm_pages$Pages$StaticHttpRequest$Done(value2)));
									},
									A2(lookupFn1, appType, rawResponses));
							})));
			}
		} else {
			if (_v0.b.$ === 'Request') {
				var value2 = _v0.a.a;
				var _v8 = _v0.b.a;
				var urls1 = _v8.a;
				var lookupFn1 = _v8.b;
				return $dillonkearns$elm_pages$Pages$StaticHttpRequest$Request(
					_Utils_Tuple2(
						urls1,
						F2(
							function (appType, rawResponses) {
								return A2(
									$elm$core$Result$map,
									function (_v9) {
										var dict1 = _v9.a;
										var value1 = _v9.b;
										return _Utils_Tuple2(
											dict1,
											A3(
												$dillonkearns$elm_pages$Pages$StaticHttp$map2,
												fn,
												$dillonkearns$elm_pages$Pages$StaticHttpRequest$Done(value2),
												value1));
									},
									A2(lookupFn1, appType, rawResponses));
							})));
			} else {
				var value1 = _v0.a.a;
				var value2 = _v0.b.a;
				return $dillonkearns$elm_pages$Pages$StaticHttpRequest$Done(
					A2(fn, value1, value2));
			}
		}
	});
var $dillonkearns$elm_pages$Pages$Platform$withFileGenerator = F2(
	function (generateFiles, _v0) {
		var config = _v0.a;
		return $dillonkearns$elm_pages$Pages$Platform$Builder(
			_Utils_update(
				config,
				{
					generateFiles: function (data) {
						return A3(
							$dillonkearns$elm_pages$Pages$StaticHttp$map2,
							$elm$core$Basics$append,
							generateFiles(data),
							config.generateFiles(data));
					}
				}));
	});
var $author$project$Main$main = $dillonkearns$elm_pages$Pages$Platform$toProgram(
	A2(
		$dillonkearns$elm_pages$Pages$Platform$withFileGenerator,
		$author$project$Main$generateFiles,
		$dillonkearns$elm_pages$Pages$Platform$init(
			{
				canonicalSiteUrl: $author$project$Main$canonicalSiteUrl,
				documents: _List_fromArray(
					[$author$project$Main$markdownDocument]),
				init: function (_v0) {
					return $author$project$Main$init;
				},
				internals: $author$project$Pages$internals,
				manifest: $author$project$Main$manifest,
				onPageChange: $elm$core$Maybe$Nothing,
				subscriptions: $author$project$Main$subscriptions,
				update: $author$project$Main$update,
				view: $author$project$Main$view
			})));
_Platform_export({'Main':{'init':$author$project$Main$main($elm$json$Json$Decode$value)(0)}});}(this));