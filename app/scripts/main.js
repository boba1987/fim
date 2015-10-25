/**
Chosen plugin init
*/
$(".chosen-select").chosen({disable_search_threshold: 10});

/* On/Off switch init */
var swithcConfigObj = {
        size: "small",
        onColor: "primary",
        offColor: "primary",
        onText: "&nbsp;",
        offText: "&nbsp;",
        handleWidth: 10
    },
    dashboardSwitchConfig = {
        size: "small",
        onColor: "primary",
        offColor: "primary",
        onText: "ON",
        offText: "OFF",
        handleWidth: 10
    };
if($("[name='rev-checkbox']").length > 0){
    $("[name='rev-checkbox']").bootstrapSwitch(swithcConfigObj);
}

if($("[name='dash-checkbox']").length > 0){
    $("[name='dash-checkbox']").bootstrapSwitch(dashboardSwitchConfig);
}

$('.switch-holder [name="on-switch"]').on('click', function(){
    $(this).prev().find('input').bootstrapSwitch('state', true)
});

$('.switch-holder [name="off-switch"]').on('click', function(){
    $(this).next().find('input').bootstrapSwitch('state', false)
});

$( document ).ready(function(){ 
    var inputVal = $('input[name="rev-checkbox"]');

    $.each(inputVal,  function(){
        if($(this).is(':checked')){
            $(this).parents('.bootstrap-switch').siblings('.offText').addClass('inactiveSwitch');
        }
    })
});

$('input[name="rev-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
  var offLabel = $(this).parents('.bootstrap-switch').siblings('[name="off-switch"]');  
  if(!state){
    offLabel.removeClass('inactiveSwitch');
  }else{
    offLabel.addClass('inactiveSwitch');
  }
});