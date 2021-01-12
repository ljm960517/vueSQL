const mA={
    computed:{
     
    },
    methods:{
        //让数字每三位加个逗号，如700，000，000
        toThousands(num) {
            var num = (num || 0).toString(), result = '';
            while (num.length > 3) {
                result = ',' + num.slice(-3) + result;
                num = num.slice(0, num.length - 3);
            }
            if (num) { result = num + result; }
            return result;
        }
    }
}
export default mA