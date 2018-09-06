function hexToRgb(t){var s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return s=[parseInt(s[1],16),parseInt(s[2],16),parseInt(s[3],16)]}function lerp(t,s,i){return(1-i)*t+i*s}var exercise=new Vue({el:"#exercise",data:{c1:{HSL:[40,80,80],RGB:[],HEX:"",A:.8},c2:{HSL:[120,40,80],RGB:[],HEX:"",A:.4},palette:[],interpolations:8},methods:{debug:function(t){console.log("HSLuv: ["+this[t].HSL[0]+", "+this[t].HSL[1]+", "+this[t].HSL[2]+", "+this[t].A+"]."),console.log("RGB: ["+this[t].RGB[0]+", "+this[t].RGB[1]+", "+this[t].RGB[2]+", "+this[t].A+"]."),console.log("HEX: ["+this[t].HEX+", "+this[t].A+"].")},translateHSL:function(t){var s=window.hsluv.hsluvToRgb(this[t].HSL);this[t].RGB=[Math.round(255*s[0]),Math.round(255*s[1]),Math.round(255*s[2])],this[t].HEX=window.hsluv.hsluvToHex(this[t].HSL),this.debug(t)},translateRGB:function(t){var s=window.hsluv.rgbToHsluv([this[t].RGB[0]/255,this[t].RGB[1]/255,this[t].RGB[2]/255]);this[t].HSL=[Math.round(s[0]),Math.round(s[1]),Math.round(s[2])],this[t].HEX=window.hsluv.hsluvToHex(this[t].HSL),this.debug(t)},translateHEX:function(t){this[t].RGB=hexToRgb(this[t].HEX);var s=window.hsluv.rgbToHsluv([this[t].RGB[0]/255,this[t].RGB[1]/255,this[t].RGB[2]/255]);this[t].HSL=[Math.round(s[0]),Math.round(s[1]),Math.round(s[2])],this.debug(t)},paint:function(t,s){return"alpha"==s?{"background-color":this[t].HEX}:{"background-color":"rgba("+this[t].RGB[0]+","+this[t].RGB[1]+","+this[t].RGB[2]+","+this[t].A+")"}},interpolate:function(t,s){for(var i=0;i<this.interpolations;i++){var h=lerp(this[t].HSL[0],this[s].HSL[0],i/(this.interpolations-1)),n=lerp(this[t].HSL[1],this[s].HSL[1],i/(this.interpolations-1)),o=lerp(this[t].HSL[2],this[s].HSL[2],i/(this.interpolations-1)),e=lerp(this[t].A,this[s].A,i/(this.interpolations-1)),r=[h,n,o],a=window.hsluv.hsluvToRgb([h,n,o]),u=window.hsluv.hsluvToHex([h,n,o]);r=[Math.round(r[0]),Math.round(r[1]),Math.round(r[2])],a=[Math.round(255*a[0]),Math.round(255*a[1]),Math.round(255*a[2])],this.palette.unshift({HSL:[r[0],r[1],r[2]],RGB:[a[0],a[1],a[2]],HEX:u,A:e})}console.log(this.palette.length)}}});exercise.translateHSL("c1"),exercise.translateHSL("c2"),exercise.interpolate("c1","c2");