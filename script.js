var today = new Date();
var today_day =`${today.getDate()}`;
var today_month =`${today.getMonth() + 1}`;
var today_year =`${today.getFullYear()}`;

function cal(){
let date=document.getElementById('date1').value;
document.getElementById('res').style.visibility='visible';
let year=String(date).slice(0,4);
let month=String(date).slice(5,7);
let day=String(date).slice(8);

let y,m,d;

if(year>today_year){
    document.getElementById('res').innerHTML="(( Please Enter A Valid Birthday ))";
}
else if((+today_month)>=(+month) && (+today_day)>=(+day)){
        y=((+today_year)-(+year));
        m=((+today_month)-(+month));
        d=((+today_day)-(+day));
        document.getElementById('res').innerHTML='Your Age Is : &emsp13;&emsp13; '+
          y +' Years,' +
          m +' Months and '+
          d + ' days';
}else{
    if(year==today_year){
        document.getElementById('res').innerHTML="(( Please Enter A Valid Birthday ))";
    }else{
        y=((+today_year)-(+year)-1);
        m=(11+(+today_month)-(+month));
        d=((+GetDays(year,month))+(+today_day)-(+day));
        if(m<0){
            m=11;
            y--;
        }
        if(d>31){
            m++;
            d-=31;
        }
        document.getElementById('res').innerHTML='Your Age Is : &emsp13;&emsp13; '+
         y +' Years,' +
         m +' Months and '+
         d + ' days';
    }
}

}

function GetDays(Year,Month){
    return new Date(Year, Month, 0).getDate();
}