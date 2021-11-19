
function animateText(ele,thisdelay,whichAnim,frameTime){
    var speed = 1;
    switch(whichAnim){

        // flex in 'letters' from top right
        case 0:
        var mySplitText = new SplitText(ele, {type:"chars, words"}),
            tl = new TimelineLite(),
            numChars = mySplitText.chars.length;

        TweenMax.set(ele, {alpha:1,transformPerspective:600, perspective:300, transformStyle:"preserve-3d"});

        for(var i = 0; i < numChars; i++){
            tl.from(mySplitText.chars[i], speed, {alpha:0,rotation:-75,x:50,y:-50,z:-100,delay:thisdelay}, i * .05);
        }
        break;

        // flex in 'letters' from bottom right
        case 1:
        var mySplitText = new SplitText(ele, {type:"chars, words"}),
            tl = new TimelineLite(),
            numChars = mySplitText.chars.length;

        TweenMax.set(ele, {alpha:1,transformPerspective:600, perspective:300, transformStyle:"preserve-3d"});

        for(var i = 0; i < numChars; i++){
            tl.from(mySplitText.chars[i], speed, {alpha:0,rotation:75,x:50,y:50,z:-100,delay:thisdelay}, i * .05);
        }
        break;

        // stagger fly in 'words' from bottom
        case 2:
        var mySplitText = new SplitText(ele, {type:"chars, words"}),
            numWords = mySplitText.words.length;

        TweenMax.set(mySplitText.words, {y:bannerHeight});
        for(var i = 0; i < numWords; i++){
            TweenMax.to(mySplitText.words[i], speed, {y:0, delay:thisdelay+(i * .05)});
        }
        TweenMax.delayedCall(speed+thisdelay+(numWords*.05)+4,function(){
            mySplitText.revert();
        });
        TweenMax.to(ele, 0, {alpha:1, delay:thisdelay, ease:Linear.easeNone, force3D:false});
        break;

        case 3:
        // flicker in 'letters'
        var mySplitText = new SplitText(ele, {type:"chars, words"}),
            tl = new TimelineLite(),
            rough = RoughEase.ease.config({strength:2, clamp:true});
        for (i = 0; i < mySplitText.chars.length; i++) {
            tl.from(mySplitText.chars[i], 0.6, {autoAlpha:0, ease:rough},Math.random());
        }
        TweenMax.to(ele, 0, {alpha:1, delay:thisdelay, ease:Linear.easeNone, force3D:false});
        break;

        // fly in whole from left
        case 4:
        TweenMax.set(ele, {alpha:1, x:-bannerWidth});
        TweenMax.to(ele, speed, {alpha:1, x:0, delay:thisdelay, force3D:false});
        break;

        // fly in whole from right
        case 5:
        TweenMax.set(ele, {alpha:1, x:bannerWidth});
        TweenMax.to(ele, speed, {alpha:1, x:0, delay:thisdelay, force3D:false});
        break;

        // fly in whole from bottom
        case 6:
        TweenMax.set(ele, {alpha:1, y:bannerHeight});
        TweenMax.to(ele, speed, {alpha:1, y:0, delay:thisdelay, force3D:false});
        break;

        // stagger fly in 'lines' from left
        case 7:
        var mySplitText = new SplitText(ele, {type:"words, lines"}),
            numLines = mySplitText.lines.length;

        TweenMax.set(mySplitText.lines, {x:-bannerWidth});
        for(var i = 0; i < numLines; i++){
            TweenMax.to(mySplitText.lines[i], speed, {x:0, delay:thisdelay+(i * .2)});
        }
        TweenMax.delayedCall(speed+thisdelay+(numLines*.05)+4,function(){
            mySplitText.revert();
        });
        TweenMax.to(ele, 0, {alpha:1, delay:thisdelay, ease:Linear.easeNone, force3D:false});
        break;

        // stagger fade in 'words' 
        case 8:
        var mySplitText = new SplitText(ele, {type:"chars, words"}),
            numWords = mySplitText.words.length;

        TweenMax.set(mySplitText.words, {alpha:0});
        for(var i = 0; i < numWords; i++){
            TweenMax.to(mySplitText.words[i], speed, {alpha:1, delay:thisdelay+(i * .15),ease:Linear.easeNone});
        }
        TweenMax.delayedCall(speed+thisdelay+(numWords*.15)+4,function(){
            mySplitText.revert();
        });
        TweenMax.to(ele, 0, {alpha:1, delay:thisdelay, ease:Linear.easeNone, force3D:false});
        break;

        // stagger fly in 'lines' from bottom
        case 9:
        var mySplitText = new SplitText(ele, {type:"words, lines"}),
            numLines = mySplitText.lines.length;

        TweenMax.set(mySplitText.lines, {y:bannerHeight});
        for(var i = 0; i < numLines; i++){
            TweenMax.to(mySplitText.lines[i], speed, {y:0, delay:thisdelay+(i * .2)});
        }
        TweenMax.delayedCall(speed+thisdelay+(numLines*.05)+4,function(){
            mySplitText.revert();
        });
        TweenMax.to(ele, 0, {alpha:1, delay:thisdelay, ease:Linear.easeNone, force3D:false});
        break;

        // fly in whole from left then zoom
        case 10:
        case 10.5:
        TweenMax.set(ele, {alpha:1, x:-bannerWidth,scale:1.2});
        TweenMax.to(ele, speed, {alpha:1, x:0, delay:thisdelay});
        TweenMax.to(ele, frameTime, {scale:1,ease:Linear.easeNone,rotationZ:0.01,rotationX:0.01})
        break;

        // fly in whole from left then zoom
        case 11:
        case 11.5:
        TweenMax.set(ele, {alpha:1, x:bannerWidth,scale:1.2});
        TweenMax.to(ele, speed, {alpha:1, x:0, delay:thisdelay});
        TweenMax.to(ele, frameTime, {scale:1,ease:Linear.easeNone,rotationZ:0.01,rotationX:0.01})
        break;

        // immediately in whole
        case 12:
            TweenMax.to(ele, 0, {alpha:1,delay:thisdelay});
        break;

        // fly in whole from top then zoom
        case 13:
        case 13.5:
        TweenMax.set(ele, {alpha:1, y:-bannerHeight,scale:1.2});
        TweenMax.to(ele, speed, {alpha:1, y:0, delay:thisdelay});
        TweenMax.to(ele, frameTime, {scale:1,ease:Linear.easeNone,rotationZ:0.01,rotationX:0.01})
        break;

        // fly in whole from bottom then zoom
        case 14:
        case 14.5:
        TweenMax.set(ele, {alpha:1, y:bannerHeight,scale:1.2});
        TweenMax.to(ele, speed, {alpha:1, y:0, delay:thisdelay});
        TweenMax.to(ele, frameTime, {scale:1,ease:Linear.easeNone,rotationZ:0.01,rotationX:0.01})
        break;

        // fade in and pulse
        case 99:
        TweenMax.to(ele, _fadeInSpeed, {alpha:1,delay:thisdelay});
        
        TweenMax.to(ele, _fadeInSpeed/2,{scale:1.1,delay:thisdelay+(_fadeInSpeed/2),rotationY:0.01,rotationX:0.01,rotationZ:0.01})
        TweenMax.to(ele, _fadeInSpeed/2,{scale:1, delay:thisdelay+(_fadeInSpeed),rotationY:0,rotationX:0,rotationZ:0})
        break;

        // fade in whole
        default: 
            TweenMax.to(ele, 1, {alpha:1,delay:thisdelay});
        break;
    }
}

function animateOffText(ele,whichAnim){
    switch(whichAnim){
        // fade off whole fast
        case 2: 
            TweenMax.to(ele, .5, {alpha:0});
        break;

        // fly off whole to right
        case 10:
        case 11.5: // - reverse direction off animations
        TweenMax.to(ele, .5, {alpha:1, x:bannerWidth,ease:Power1.easeIn});
        break;

        // fly off whole to left
        case 11:
        case 10.5: // - reverse direction off animations
        TweenMax.to(ele, .5, {alpha:1, x:-bannerWidth,ease:Power1.easeIn});
        break;

        // fly off whole to bottom
        case 13:
        case 13.5: // - reverse direction off animations
        TweenMax.to(ele, .5, {alpha:1, y:bannerHeight,ease:Power1.easeIn});
        break;

        // fly off whole to top
        case 14:
        case 14.5: // - reverse direction off animations 
        TweenMax.to(ele, .5, {alpha:1, y:-bannerHeight,ease:Power1.easeIn});
        break;

        // fade out whole
        default:
            TweenMax.to(ele, 1, {alpha:0});
        break;

    }
}
