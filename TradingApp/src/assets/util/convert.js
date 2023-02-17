export default {
    convertPriceString(price){
        let temp = price.toFixed(0)
        if(price % temp > 0){
            return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        }else{
            let priceString = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            return priceString.substring(0, priceString.lastIndexOf('.'))
        }
    },
    formatPercent(percent){
        let temp = percent.toString()
        let format = temp.replace(".",",")
        return format
    }
}