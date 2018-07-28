import {ajax} from "can";

console.log("shared deps");

ajax.ajaxSetup({
  beforeSend: function (xhr){
    if(jwt){
      xhr.setRequestHeader("Authorization", "Bearer foobar");
    }
  }
});