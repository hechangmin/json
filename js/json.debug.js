/**
 * @brief   Javascript json operation
 * @author  hechangmin@gmail.com
 * @date    2014.8.18
 */

if (typeof JSON !== 'object') {    

    this.JSON = function(){

        /**
         * 获取数据类型
         * 
         * @param obj 
         * @return {String} 类型
         */
        function getType(obj){
            return Object.prototype.toString.call(obj).split(' ')[1].split(']')[0];
        }

        return {

            /**
             * 将json字符串转换为对象
             *
             * @param   json字符串
             * @return  返回object,array,string等对象
             */
            parse : function (strJson){
                try {
                    /*jshint evil:true, boss:true */
                    return eval('(' + strJson + ')');
                }catch(err){
                    throw new SyntaxError('JSON.parse');
                }
            },

            /**
             * 将javascript数据类型转换为json字符串
             *
             * @param   待转换对象,支持object,array,string,function,number,boolean,regexp
             * @return  返回json字符串
             */
            stringify : function (object){
                var type = getType(object);
                var results = [];
                var value;

                switch (type){
                    case 'Undefined':
                        return;
                    case 'Null':
                        return 'null';
                    case 'Function':
                    case 'Boolean':
                    case 'RegExp':
                        return object.toString();
                    case 'Number':
                        return isFinite(object) ? object.toString() : 'null';
                    case 'String':
                        return '"' + object.replace(/(\\|\")/g,"\\$1").replace(/\n|\r|\t/g,
                            function(){
                                var a = arguments[0];
                                return  (a == '\n') ? '\\n':
                                (a == '\r') ? '\\r':
                                (a == '\t') ? '\\t': "";
                            }) + '"';

                    case 'Object':
                        for (var property in object) {
                            value = arguments.callee(object[property]);
                            if (value !== undefined){
                                results.push(arguments.callee(property) + ':' + value);
                            }
                        }
                        return '{' + results.join(',') + '}';
                    case 'Array':
                        for(var i = 0, nLen = object.length; i < nLen; i++){
                            value = arguments.callee(object[i]);
                            if (value !== undefined){
                                results.push(value);
                            }
                        }
                        return '[' + results.join(',') + ']';
                }
            }
        };
    }(); 
}