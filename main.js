// JavaScript Document

// config
var _currentLoop = 0;
var _totalLoops = 0;
var _endFrameDelay = 4;
var _useReplayBtn = true;

// content
var container;
var loadingContent;

var hidden = document.getElementsByClassName("hidden");
// frame containers
var frame01 = document.getElementById("frame01");
var frame02 = document.getElementById("frame02");
var frame03 = document.getElementById("frame03");
var frame04 = document.getElementById("frame04");

// frame 01
var frame01_icon = document.getElementById("frame01_icon");
var frame01a_img = document.getElementById("frame01a_img");
var frame01b_img = document.getElementById("frame01b_img");
var frame01_copy01 = document.getElementById("frame01_copy01");
var frame01_copy02 = document.getElementById("frame01_copy02");
var frame01_frame = document.getElementById("frame01_frame");
var iconSrc;

// frame 02
var frame02_img = document.getElementById("frame02_img");
var frame02_copy01 = document.getElementById("frame02_copy01");
var frame02_copy02 = document.getElementById("frame02_copy02");

// frame 03
var frame03_img = document.getElementById("frame03_img");
var frame03_copy01 = document.getElementById("frame03_copy01");
var frame03_copy02 = document.getElementById("frame03_copy02");

// frame 04
var copy_from = document.getElementById("copy_from"),
    copy_currency = document.getElementById("copy_currency"),
    copy_price = document.getElementById("copy_price"),
    copy_pp = document.getElementById("copy_pp"),
    copy_package = document.getElementById("copy_package"),
    copy_ends = document.getElementById("copy_ends");
var frame04_copy01 = document.getElementById("frame04_copy01");
var frame04_copy02 = document.getElementById("frame04_copy02");

var endframe_copy01 = document.getElementById("endframe_copy01");
var endframe_copy02 = document.getElementById("endframe_copy02");

// terms
var terms_frame01  = document.getElementById("terms_frame01");
var terms_frame02  = document.getElementById("terms_frame02");
var terms_frame03  = document.getElementById("terms_frame03");
var terms_frame04  = document.getElementById("terms_frame04");

// cta set up
var cta = document.getElementById("cta");
var cta_bg = document.getElementById("cta_bg");
var cta_copy = document.getElementById("cta_copy");

// furniture - logos etc
var logo_ba_01 = document.getElementById("logo_ba_01");
var logo_ba_02 = document.getElementById("logo_ba_02");
var logo_partners = document.getElementById("logo_partners");
var logo_extra = document.getElementById("logo_extra");

// arrays to handle logo behaviour
var _arrLogoBA01Frames = [false,false,false,false];
var _arrLogoBA02Frames = [false,false,false,false];
var _arrLogoPartnersFrames = [false,false,false,false];
var _arrLogoExtraFrames = [false,false,false,false];
var _arrLogoObjs = []; // array of objects (one for each logo) that define logo behaviour.

// banner timings
var _arrFrameWaits = [2,2,2];
var _arrShowFrameSpeeds = [0,0.5,0.5,0.5];
var _fadeInSpeed = 1;
                    //    0:F1a_img, 1:F1b_img, 2:F1_icon, 3:F1_1, 4:F1_2, 5:F2_1, 6:F2_2, 7:F2_i, 8:F3_1  9:F3_2  10:F3_i 11:Fe_1 12:Fe_2   13:F4_1, 14:F4_2  15:F4_p  16:cta
var _arrShowCopyDelays = [0,         0,         0,         0,      0,      0,      0,      0,      0,      0,      0,      0,      0,        0,       0,       0,       0];
                    //    0:F1a_img, 1:F1b_img, 2:F1_icon, 3:F1_1, 4:F1_2, 5:F2_1, 6:F2_2, 7:F2_i, 8:F3_1  9:F3_2  10:F3_i 11:Fe_1 12:Fe_2   13:F4_1, 14:F4_2  15:F4_p  16:cta
var _arrCopyAnimTypes =   [999,      999,       999,       999,    999,    999,    999,    999,    999,    999,    999,    999,    999,      999,     999,     999,     999];


var bannerWidth, bannerHeight;

// exit and replay
var btnReplay = document.getElementById("btnReplay");
var exitBtn;

// exit url
var _exitUrl_default = "http://www.ba.com/";

// init xCheck vars
var _ifPriceOK = false,
    _xCheckCurrency = "",
    _xCheckPrice = "",
    _xCheckOrigin = "",
    _xCheckDestination = "",
    _xCheckDeal = "",
    _xCheckTerms = "";

// frame
var _currentFrame = 0;
var _previousFrame = 0;

function startAd()
{
    // content
    container = document.getElementById("container");
    exitBtn = document.getElementById("exitBtn");

    // activate btns
    exitBtn.addEventListener("click", exitBtn_clickHandler, false);
    btnReplay.addEventListener("click", btnReplay_clickHandler, false);
    btnReplay.addEventListener("mouseover", btnReplay_overHandler, false);
    btnReplay.addEventListener("mouseout", btnReplay_outHandler, false);

    // show Ad
    document.getElementById("loadingContent").style.display="none";
    container.style.display = "block";
    
    bannerWidth=container.offsetWidth;
    bannerHeight=container.offsetHeight;

    showFrame(1);
}


function exitBtn_clickHandler()
{
    Enabler.exitOverride("exit", _exitUrl_default);
}

function btnReplay_clickHandler()
{
    //showFrame(1);
    holdFrame(1,0);
}

function btnReplay_overHandler()
{
    TweenMax.to(btnReplay, 0.4, {rotation:-360, delay:0, transformOrigin:'50% 60%'});
}

function btnReplay_outHandler()
{
    TweenMax.to(btnReplay, 0.2, {rotation:0, delay:0, transformOrigin:'50% 60%'});
}


var holdFrame = function(frame, time) {
    _previousFrame = _currentFrame;
    TweenMax.delayedCall(time, showFrame, [frame]);
};

function showFrame(id)
{
    _currentFrame = Number(id);

    switch(id) {

        // show frame 1
        case 1:
            resetBanner();

            // show frame content
            frame01.classList.add('on');
            
            animateText(frame01a_img,    _arrShowCopyDelays[0], _arrCopyAnimTypes[0], _arrFrameWaits[0]);
            animateText(frame01b_img,    _arrShowCopyDelays[1], _arrCopyAnimTypes[1], _arrFrameWaits[0]);
            animateText(frame01_icon,    _arrShowCopyDelays[2], _arrCopyAnimTypes[2], _arrFrameWaits[0]);

            TweenMax.delayedCall(_arrShowCopyDelays[2],function(){
                frame01_icon.src = iconSrc;
            });

            animateText(frame01_copy01, _arrShowCopyDelays[3], _arrCopyAnimTypes[3], _arrFrameWaits[0]);
            animateText(frame01_copy02, _arrShowCopyDelays[4], _arrCopyAnimTypes[4], _arrFrameWaits[0]);

            animateText(endframe_copy01, _arrShowCopyDelays[11], _arrCopyAnimTypes[11]);
            animateText(endframe_copy02, _arrShowCopyDelays[12], _arrCopyAnimTypes[12]);

            // show terms
            TweenMax.to([terms_frame01], _fadeInSpeed, {alpha:1, delay:_arrShowCopyDelays[0], ease:Linear.easeNone});

            // show/hide logos
            for(var i = 0; i < _arrLogoObjs.length; i ++)
            {
                showHideLogo(0, 0, 0, _arrLogoObjs[i], _currentFrame);
            }

            TweenMax.delayedCall(_arrFrameWaits[0],function(){
                frame01.classList.add('animateOff');
                animateOffText(frame01a_img,_arrCopyAnimTypes[0])
                animateOffText(frame01b_img,_arrCopyAnimTypes[1])
                frame01_icon.classList.add('animateOff_F1');
            });

            // go to next frame
            holdFrame(evalNextFrame(1), _arrFrameWaits[0]);
            break;

        // show frame 2
        case 2:

            // check if we need to swap out the terms
            if(eval("terms_frame0" + _previousFrame).innerHTML != terms_frame02.innerHTML)
            {
                TweenMax.to([terms_frame01], _arrShowFrameSpeeds[1], {alpha: 0, delay:0, ease: Linear.easeNone});
                TweenMax.to([terms_frame02], _fadeInSpeed, {alpha:1, delay:_arrShowCopyDelays[5], ease:Linear.easeNone});
            }

            // show frame content
            frame02.classList.add('on');

            animateText(frame02_copy01, _arrShowCopyDelays[5], _arrCopyAnimTypes[5], _arrFrameWaits[1]);
            animateText(frame02_copy02, _arrShowCopyDelays[6], _arrCopyAnimTypes[6], _arrFrameWaits[1]);
            animateText(frame02_img,    _arrShowCopyDelays[7], _arrCopyAnimTypes[7], _arrFrameWaits[1]);
            
            // show/hide logos
            for(var i = 0; i < _arrLogoObjs.length; i ++)
            {
                showHideLogo(_arrShowFrameSpeeds[1], _arrShowCopyDelays[5], _fadeInSpeed, _arrLogoObjs[i], _currentFrame);
            }

            TweenMax.delayedCall(_arrFrameWaits[1],function(){
                frame02.classList.add('animateOff');
                frame01_icon.classList.add('animateOff_F2');
            });

            // go to next frame
            holdFrame(evalNextFrame(2), _arrFrameWaits[1]);
            break;

        // show frame 3
        case 3:

            // check if we need to swap out the terms
            if(eval("terms_frame0" + _previousFrame).innerHTML != terms_frame03.innerHTML)
            {
                TweenMax.to([terms_frame01,terms_frame02], _arrShowFrameSpeeds[2], {alpha: 0, delay:0, ease: Linear.easeNone});
                TweenMax.to([terms_frame03], _fadeInSpeed, {alpha:1, delay:_arrShowCopyDelays[8], ease:Linear.easeNone});
            }

            // show frame content
            frame03.classList.add('on');

            animateText(frame03_copy01, _arrShowCopyDelays[8], _arrCopyAnimTypes[8], _arrFrameWaits[2]);
            animateText(frame03_copy02, _arrShowCopyDelays[9], _arrCopyAnimTypes[9], _arrFrameWaits[2]);
            animateText(frame03_img,    _arrShowCopyDelays[10], _arrCopyAnimTypes[10], _arrFrameWaits[2]);
            
            // show/hide logos
            for(var i = 0; i < _arrLogoObjs.length; i ++)
            {
                showHideLogo(_arrShowFrameSpeeds[2], _arrShowCopyDelays[8], _fadeInSpeed, _arrLogoObjs[i], _currentFrame);
            }

            TweenMax.delayedCall(_arrFrameWaits[2],function(){
                frame03.classList.add('animateOff');
                frame01_icon.classList.add('animateOff_F3');
            });

            // go to next frame
            holdFrame(evalNextFrame(3), _arrFrameWaits[2]);
            break;


        // show frame 4
        case 4:

            // check if we need to swap out the terms
            if(eval("terms_frame0" + _previousFrame).innerHTML != terms_frame04.innerHTML)
            {
                TweenMax.to([terms_frame01,terms_frame02,terms_frame03], _arrShowFrameSpeeds[3], {alpha: 0, delay:0, ease: Linear.easeNone});
                TweenMax.to([terms_frame04], _fadeInSpeed, {alpha:1, delay:_arrShowCopyDelays[13], ease:Linear.easeNone});
            }

            // show end frame content
            frame04.classList.add('on');
            
            
            if(_ifPriceOK) {
                
                // if we have price info show 
                animateText(frame04_copy02, _arrShowCopyDelays[14], _arrCopyAnimTypes[14], _arrFrameWaits[3]);

                animateText(price_lockup, _arrShowCopyDelays[15], _arrCopyAnimTypes[15], _arrFrameWaits[3]);
            } else {
                // no price version
                animateText(frame04_copy01, _arrShowCopyDelays[13], _arrCopyAnimTypes[13], _arrFrameWaits[3]);

                animateText(endframe_copy02, _arrShowCopyDelays[12], _arrCopyAnimTypes[12]);
            }
            
            animateText(cta, _arrShowCopyDelays[16], _arrCopyAnimTypes[16], _arrFrameWaits[3]);
            

            // show/hide logos
            for(var i = 0; i < _arrLogoObjs.length; i ++)
            {
                showHideLogo(_arrShowFrameSpeeds[3], _arrShowCopyDelays[13], _fadeInSpeed, _arrLogoObjs[i], _currentFrame);
            }



            // check if banner needs to loop
            var replay_d = _fadeInSpeed + _arrShowCopyDelays[16] + 0.1;
            TweenMax.delayedCall(replay_d, checkForLooping);

            break;
    }
}

/**
 * function determines next frame to go to
 */
function evalNextFrame(currentFrame)
{
    var nextFrame = 4;

    for(var i = currentFrame; i < 3; i++)
    {
        if(_arrFrameWaits[i] > 0)
        {
            nextFrame = i+1;
            break;
        }
    }

    return nextFrame;
}


/*
* Function shows or hides logo for each frame
* hs: hide speed
* sd: start show delay
* ss: show speed
* logoObject: object defining logo ref and current display props
* currentFrame: the current banner frame
*/
function showHideLogo(hs, sd, ss, logoObject, currentFrame)
{
    
    if(logoObject.arrFrames[currentFrame-1] === true && logoObject.ifShowing === false)
    {
        TweenMax.to(logoObject.lofoRef, ss, {alpha:1, delay:sd, ease:Linear.easeNone, rotation:0.001, rotationZ:0.001});
        logoObject.ifShowing = true;
    }
    else
    {
        if(logoObject.arrFrames[currentFrame-1] === false && logoObject.ifShowing === true)
        {
            TweenMax.to(logoObject.lofoRef, hs, {alpha:0, delay:0, ease:Linear.easeNone, rotation:0.001, rotationZ:0.001});
            logoObject.ifShowing = false;
        }
    }
}



/**
 * function checks if banner should loop or show replay btn
 */
function checkForLooping()
{
    if(_currentLoop < _totalLoops) // loop banner
    {
        TweenMax.delayedCall(_endFrameDelay, showFrame, [1]);
        _currentLoop++;
    }
    else // show replay btn
    {
        if(_useReplayBtn === true)
        {
            btnReplay.style.display = "block";
        }
    }
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}



/**
 * function resets content on end frame to initial states
 */
function resetBanner()
{
    btnReplay.style.display = "none";

    // reset frame content
    TweenMax.set(hidden,{alpha:0})
    
    for(var i = 0; i < _arrLogoObjs.length; i ++)
    {
        _arrLogoObjs[i].ifShowing = false;
    }
    
    // reset icon src so that GIF plays again
    frame01_icon.classList.remove('animateOff_F1');
    frame01_icon.classList.remove('animateOff_F2');
    frame01_icon.classList.remove('animateOff_F3');
    iconSrc = frame01_icon.src;
    frame01_icon.src = "";
    frame01_icon.src = iconSrc;

    frame01.classList.remove('animateOff');
    frame02.classList.remove('animateOff');
    frame03.classList.remove('animateOff');
    frame04.classList.remove('animateOff');
}
