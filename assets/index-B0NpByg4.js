(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tu="177",Im=0,Ch=1,Lm=2,Cd=1,Fm=2,xi=3,wi=0,hn=1,Gn=2,Zi=0,is=1,Ph=2,Dh=3,Uh=4,Nm=5,_r=100,Om=101,Bm=102,km=103,zm=104,Gm=200,Vm=201,Hm=202,Wm=203,dc=204,pc=205,Xm=206,Ym=207,qm=208,jm=209,Km=210,Zm=211,Jm=212,Qm=213,$m=214,mc=0,gc=1,_c=2,hs=3,vc=4,xc=5,yc=6,Sc=7,Pd=0,eg=1,tg=2,Ji=0,ng=1,ig=2,rg=3,sg=4,ag=5,og=6,lg=7,Ih="attached",cg="detached",Dd=300,fs=301,ds=302,Mc=303,Tc=304,jo=306,ps=1e3,Wi=1001,Io=1002,rn=1003,Ud=1004,Qs=1005,nn=1006,_o=1007,Ti=1008,li=1009,Id=1010,Ld=1011,fa=1012,Eu=1013,Ar=1014,Wn=1015,As=1016,bu=1017,Au=1018,da=1020,Fd=35902,Nd=1021,Od=1022,Dn=1023,pa=1026,ma=1027,wu=1028,Ru=1029,Bd=1030,Cu=1031,Pu=1033,vo=33776,xo=33777,yo=33778,So=33779,Ec=35840,bc=35841,Ac=35842,wc=35843,Rc=36196,Cc=37492,Pc=37496,Dc=37808,Uc=37809,Ic=37810,Lc=37811,Fc=37812,Nc=37813,Oc=37814,Bc=37815,kc=37816,zc=37817,Gc=37818,Vc=37819,Hc=37820,Wc=37821,Mo=36492,Xc=36494,Yc=36495,kd=36283,qc=36284,jc=36285,Kc=36286,ug=2200,hg=2201,fg=2202,ga=2300,_a=2301,_l=2302,Qr=2400,$r=2401,Lo=2402,Du=2500,dg=2501,pg=0,zd=1,Zc=2,mg=3200,Gd=3201,Vd=0,gg=1,Hi="",Bt="srgb",an="srgb-linear",Fo="linear",ut="srgb",Lr=7680,Lh=519,_g=512,vg=513,xg=514,Hd=515,yg=516,Sg=517,Mg=518,Tg=519,Jc=35044,Fh="300 es",Ei=2e3,No=2001;class Rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nh=1234567;const ra=Math.PI/180,ms=180/Math.PI;function Yn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[a&255]+Yt[a>>8&255]+Yt[a>>16&255]+Yt[a>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function et(a,e,t){return Math.max(e,Math.min(t,a))}function Uu(a,e){return(a%e+e)%e}function Eg(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function bg(a,e,t){return a!==e?(t-a)/(e-a):0}function sa(a,e,t){return(1-t)*a+t*e}function Ag(a,e,t,n){return sa(a,e,1-Math.exp(-t*n))}function wg(a,e=1){return e-Math.abs(Uu(a,e*2)-e)}function Rg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Cg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Pg(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Dg(a,e){return a+Math.random()*(e-a)}function Ug(a){return a*(.5-Math.random())}function Ig(a){a!==void 0&&(Nh=a);let e=Nh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lg(a){return a*ra}function Fg(a){return a*ms}function Ng(a){return(a&a-1)===0&&a!==0}function Og(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Bg(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function kg(a,e,t,n,i){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),h=r((e-n)/2),f=s((e-n)/2),d=r((n-e)/2),_=s((n-e)/2);switch(i){case"XYX":a.set(o*u,l*h,l*f,o*c);break;case"YZY":a.set(l*f,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*f,o*u,o*c);break;case"XZX":a.set(o*u,l*_,l*d,o*c);break;case"YXY":a.set(l*d,o*u,l*_,o*c);break;case"ZYZ":a.set(l*_,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function lt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Qc={DEG2RAD:ra,RAD2DEG:ms,generateUUID:Yn,clamp:et,euclideanModulo:Uu,mapLinear:Eg,inverseLerp:bg,lerp:sa,damp:Ag,pingpong:wg,smoothstep:Rg,smootherstep:Cg,randInt:Pg,randFloat:Dg,randFloatSpread:Ug,seededRandom:Ig,degToRad:Lg,radToDeg:Fg,isPowerOfTwo:Ng,ceilPowerOfTwo:Og,floorPowerOfTwo:Bg,setQuaternionFromProperEuler:kg,normalize:lt,denormalize:Vn};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[s+0],d=r[s+1],_=r[s+2],g=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-o;const m=l*f+c*d+u*_+h*g,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const E=Math.sqrt(y),w=Math.atan2(E,m*x);p=Math.sin(p*w)/E,o=Math.sin(o*w)/E}const v=o*x;if(l=l*p+f*v,c=c*p+d*v,u=u*p+_*v,h=h*p+g*v,p===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,s){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],f=r[s+1],d=r[s+2],_=r[s+3];return e[t]=o*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-o*d,e[t+2]=c*_+u*d+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),d=l(i/2),_=l(r/2);switch(s){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(s-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+s)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(i+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(s-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+i*c-r*l,this._y=i*u+s*l+r*o-n*c,this._z=r*u+s*c+n*l-i*o,this._w=s*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*i-o*n),u=2*(o*t-r*i),h=2*(r*n-s*t);return this.x=t+l*c+s*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new Y,Oh=new qn;class Ke{constructor(e,t,n,i,r,s,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,l,c)}set(e,t,n,i,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],x=i[1],y=i[4],v=i[7],E=i[2],w=i[5],b=i[8];return r[0]=s*g+o*x+l*E,r[3]=s*p+o*y+l*w,r[6]=s*m+o*v+l*b,r[1]=c*g+u*x+h*E,r[4]=c*p+u*y+h*w,r[7]=c*m+u*v+h*b,r[2]=f*g+d*x+_*E,r[5]=f*p+d*y+_*w,r[8]=f*m+d*v+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*r*u+n*o*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,f=o*l-u*r,d=c*r-s*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*s)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xl.makeScale(e,t)),this}rotate(e){return this.premultiply(xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xl=new Ke;function Wd(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function va(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function zg(){const a=va("canvas");return a.style.display="block",a}const Bh={};function rs(a){a in Bh||(Bh[a]=!0,console.warn(a))}function Gg(a,e,t){return new Promise(function(n,i){function r(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Vg(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hg(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const kh=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wg(){const a={enabled:!0,workingColorSpace:an,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ut&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ut&&(i.r=ss(i.r),i.g=ss(i.g),i.b=ss(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hi?Fo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return rs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return rs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[an]:{primaries:e,whitePoint:n,transfer:Fo,toXYZ:kh,fromXYZ:zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:kh,fromXYZ:zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),a}const at=Wg();function bi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ss(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Fr;class Xg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fr===void 0&&(Fr=va("canvas")),Fr.width=e.width,Fr.height=e.height;const i=Fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=va("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=bi(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bi(t[n]/255)*255):t[n]=bi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yg=0;class Iu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(yl(i[s].image)):r.push(yl(i[s]))}else r=yl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function yl(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Xg.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qg=0;const Sl=new Y;class Pt extends Rr{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Wi,i=Wi,r=nn,s=Ti,o=Dn,l=li,c=Pt.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Yn(),this.name="",this.source=new Iu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sl).x}get height(){return this.source.getSize(Sl).y}get depth(){return this.source.getSize(Sl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Dd;Pt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(d+1)/2,E=(m+1)/2,w=(u+f)/4,b=(h+g)/4,A=(_+p)/4;return y>v&&y>E?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=b/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=A/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=b/r,i=A/r),this.set(n,i,r,t),this}let x=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-_)/x,this.y=(h-g)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jg extends Rr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Pt(i);this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Iu(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends jg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xd extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kg extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Bn):Bn.fromBufferAttribute(r,s),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ka.copy(n.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),za.subVectors(this.max,Gs),Nr.subVectors(e.a,Gs),Or.subVectors(e.b,Gs),Br.subVectors(e.c,Gs),Fi.subVectors(Or,Nr),Ni.subVectors(Br,Or),sr.subVectors(Nr,Br);let t=[0,-Fi.z,Fi.y,0,-Ni.z,Ni.y,0,-sr.z,sr.y,Fi.z,0,-Fi.x,Ni.z,0,-Ni.x,sr.z,0,-sr.x,-Fi.y,Fi.x,0,-Ni.y,Ni.x,0,-sr.y,sr.x,0];return!Ml(t,Nr,Or,Br,za)||(t=[1,0,0,0,1,0,0,0,1],!Ml(t,Nr,Or,Br,za))?!1:(Ga.crossVectors(Fi,Ni),t=[Ga.x,Ga.y,Ga.z],Ml(t,Nr,Or,Br,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Bn=new Y,ka=new jn,Nr=new Y,Or=new Y,Br=new Y,Fi=new Y,Ni=new Y,sr=new Y,Gs=new Y,za=new Y,Ga=new Y,ar=new Y;function Ml(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){ar.fromArray(a,r);const o=i.x*Math.abs(ar.x)+i.y*Math.abs(ar.y)+i.z*Math.abs(ar.z),l=e.dot(ar),c=t.dot(ar),u=n.dot(ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Zg=new jn,Vs=new Y,Tl=new Y;class Kn{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(Tl)),this.expandByPoint(Vs.copy(e.center).sub(Tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const di=new Y,El=new Y,Va=new Y,Oi=new Y,bl=new Y,Ha=new Y,Al=new Y;class Ko{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){El.copy(e).add(t).multiplyScalar(.5),Va.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(El);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Va),o=Oi.dot(this.direction),l=-Oi.dot(Va),c=Oi.lengthSq(),u=Math.abs(1-s*s);let h,f,d,_;if(u>0)if(h=s*l-o,f=s*o-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-s*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(s*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(El).addScaledVector(Va,f),d}intersectSphere(e,t){di.subVectors(e.center,this.origin);const n=di.dot(this.direction),i=di.dot(di)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,i,r){bl.subVectors(t,e),Ha.subVectors(n,e),Al.crossVectors(bl,Ha);let s=this.direction.dot(Al),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Oi.subVectors(this.origin,e);const l=o*this.direction.dot(Ha.crossVectors(Oi,Ha));if(l<0)return null;const c=o*this.direction.dot(bl.cross(Oi));if(c<0||l+c>s)return null;const u=-o*Oi.dot(Al);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,i,r,s,o,l,c,u,h,f,d,_,g,p){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,l,c,u,h,f,d,_,g,p)}set(e,t,n,i,r,s,o,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/kr.setFromMatrixColumn(e,0).length(),r=1/kr.setFromMatrixColumn(e,1).length(),s=1/kr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=s*u,d=s*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*o,t[4]=_*o-d,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=d*o-_,t[6]=g+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*o,t[4]=-s*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=s*u,t[9]=g-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,d=s*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,d=s*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=s*l,d=s*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=s*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jg,e,Qg)}lookAt(e,t,n){const i=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Bi.crossVectors(n,xn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Bi.crossVectors(n,xn)),Bi.normalize(),Wa.crossVectors(xn,Bi),i[0]=Bi.x,i[4]=Wa.x,i[8]=xn.x,i[1]=Bi.y,i[5]=Wa.y,i[9]=xn.y,i[2]=Bi.z,i[6]=Wa.z,i[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],x=n[3],y=n[7],v=n[11],E=n[15],w=i[0],b=i[4],A=i[8],S=i[12],M=i[1],D=i[5],P=i[9],U=i[13],L=i[2],G=i[6],O=i[10],K=i[14],H=i[3],J=i[7],q=i[11],F=i[15];return r[0]=s*w+o*M+l*L+c*H,r[4]=s*b+o*D+l*G+c*J,r[8]=s*A+o*P+l*O+c*q,r[12]=s*S+o*U+l*K+c*F,r[1]=u*w+h*M+f*L+d*H,r[5]=u*b+h*D+f*G+d*J,r[9]=u*A+h*P+f*O+d*q,r[13]=u*S+h*U+f*K+d*F,r[2]=_*w+g*M+p*L+m*H,r[6]=_*b+g*D+p*G+m*J,r[10]=_*A+g*P+p*O+m*q,r[14]=_*S+g*U+p*K+m*F,r[3]=x*w+y*M+v*L+E*H,r[7]=x*b+y*D+v*G+E*J,r[11]=x*A+y*P+v*O+E*q,r[15]=x*S+y*U+v*K+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*d-n*l*d)+g*(+t*l*d-t*c*f+r*s*f-i*s*d+i*c*u-r*l*u)+p*(+t*c*h-t*o*d-r*s*h+n*s*d+r*o*u-n*c*u)+m*(-i*o*u-t*l*h+t*o*f+i*s*h-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],x=h*p*c-g*f*c+g*l*d-o*p*d-h*l*m+o*f*m,y=_*f*c-u*p*c-_*l*d+s*p*d+u*l*m-s*f*m,v=u*g*c-_*h*c+_*o*d-s*g*d-u*o*m+s*h*m,E=_*h*l-u*g*l-_*o*f+s*g*f+u*o*p-s*h*p,w=t*x+n*y+i*v+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=x*b,e[1]=(g*f*r-h*p*r-g*i*d+n*p*d+h*i*m-n*f*m)*b,e[2]=(o*p*r-g*l*r+g*i*c-n*p*c-o*i*m+n*l*m)*b,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*d-n*l*d)*b,e[4]=y*b,e[5]=(u*p*r-_*f*r+_*i*d-t*p*d-u*i*m+t*f*m)*b,e[6]=(_*l*r-s*p*r-_*i*c+t*p*c+s*i*m-t*l*m)*b,e[7]=(s*f*r-u*l*r+u*i*c-t*f*c-s*i*d+t*l*d)*b,e[8]=v*b,e[9]=(_*h*r-u*g*r-_*n*d+t*g*d+u*n*m-t*h*m)*b,e[10]=(s*g*r-_*o*r+_*n*c-t*g*c-s*n*m+t*o*m)*b,e[11]=(u*o*r-s*h*r-u*n*c+t*h*c+s*n*d-t*o*d)*b,e[12]=E*b,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*p+t*h*p)*b,e[14]=(_*o*i-s*g*i-_*n*l+t*g*l+s*n*p-t*o*p)*b,e[15]=(s*h*i-u*o*i+u*n*l-t*h*l-s*n*f+t*o*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*s,0,c*l-i*o,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,h=o+o,f=r*c,d=r*u,_=r*h,g=s*u,p=s*h,m=o*h,x=l*c,y=l*u,v=l*h,E=n.x,w=n.y,b=n.z;return i[0]=(1-(g+m))*E,i[1]=(d+v)*E,i[2]=(_-y)*E,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+m))*w,i[6]=(p+x)*w,i[7]=0,i[8]=(_+y)*b,i[9]=(p-x)*b,i[10]=(1-(f+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=kr.set(i[0],i[1],i[2]).length();const s=kr.set(i[4],i[5],i[6]).length(),o=kr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],kn.copy(this);const c=1/r,u=1/s,h=1/o;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=h,kn.elements[9]*=h,kn.elements[10]*=h,t.setFromRotationMatrix(kn),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,i,r,s,o=Ei){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(o===Ei)d=-(s+r)/(s-r),_=-2*s*r/(s-r);else if(o===No)d=-s/(s-r),_=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,s,o=Ei){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(s-r),f=(t+e)*c,d=(n+i)*u;let _,g;if(o===Ei)_=(s+r)*h,g=-2*h;else if(o===No)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const kr=new Y,kn=new je,Jg=new Y(0,0,0),Qg=new Y(1,1,1),Bi=new Y,Wa=new Y,xn=new Y,Gh=new je,Vh=new qn;class ci{constructor(e=0,t=0,n=0,i=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-et(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class Yd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $g=0;const Hh=new Y,zr=new qn,pi=new je,Xa=new Y,Hs=new Y,e_=new Y,t_=new qn,Wh=new Y(1,0,0),Xh=new Y(0,1,0),Yh=new Y(0,0,1),qh={type:"added"},n_={type:"removed"},Gr={type:"childadded",child:null},wl={type:"childremoved",child:null};class yt extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new Y,t=new ci,n=new qn,i=new Y(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new Ke}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Wh,e)}rotateY(e){return this.rotateOnAxis(Xh,e)}rotateZ(e){return this.rotateOnAxis(Yh,e)}translateOnAxis(e,t){return Hh.copy(e).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wh,e)}translateY(e){return this.translateOnAxis(Xh,e)}translateZ(e){return this.translateOnAxis(Yh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xa.copy(e):Xa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Hs,Xa,this.up):pi.lookAt(Xa,Hs,this.up),this.quaternion.setFromRotationMatrix(pi),i&&(pi.extractRotation(i.matrixWorld),zr.setFromRotationMatrix(pi),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qh),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(n_),wl.child=e,this.dispatchEvent(wl),wl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qh),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,e_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),d=s(e.animations),_=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DEFAULT_UP=new Y(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new Y,mi=new Y,Rl=new Y,gi=new Y,Vr=new Y,Hr=new Y,jh=new Y,Cl=new Y,Pl=new Y,Dl=new Y,Ul=new it,Il=new it,Ll=new it;class Hn{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),zn.subVectors(e,t),i.cross(zn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){zn.subVectors(i,t),mi.subVectors(n,t),Rl.subVectors(e,t);const s=zn.dot(zn),o=zn.dot(mi),l=zn.dot(Rl),c=mi.dot(mi),u=mi.dot(Rl),h=s*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,_=(s*u-o*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(s,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,s){return Ul.setScalar(0),Il.setScalar(0),Ll.setScalar(0),Ul.fromBufferAttribute(e,t),Il.fromBufferAttribute(e,n),Ll.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(Ul,r.x),s.addScaledVector(Il,r.y),s.addScaledVector(Ll,r.z),s}static isFrontFacing(e,t,n,i){return zn.subVectors(n,t),mi.subVectors(e,t),zn.cross(mi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),zn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,o;Vr.subVectors(i,n),Hr.subVectors(r,n),Cl.subVectors(e,n);const l=Vr.dot(Cl),c=Hr.dot(Cl);if(l<=0&&c<=0)return t.copy(n);Pl.subVectors(e,i);const u=Vr.dot(Pl),h=Hr.dot(Pl);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Vr,s);Dl.subVectors(e,r);const d=Vr.dot(Dl),_=Hr.dot(Dl);if(_>=0&&d<=_)return t.copy(r);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Hr,o);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return jh.subVectors(r,i),o=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(jh,o);const m=1/(p+g+f);return s=g*m,o=f*m,t.copy(n).addScaledVector(Vr,s).addScaledVector(Hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function Fl(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=Uu(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Fl(s,r,e+1/3),this.g=Fl(s,r,e),this.b=Fl(s,r,e-1/3)}return at.colorSpaceToWorking(this,i),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=qd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return at.workingToColorSpace(qt.copy(this),e),Math.round(et(qt.r*255,0,255))*65536+Math.round(et(qt.g*255,0,255))*256+Math.round(et(qt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(qt.copy(this),t);const n=qt.r,i=qt.g,r=qt.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Bt){at.workingToColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,i=qt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(Ya);const n=sa(ki.h,Ya.h,t),i=sa(ki.s,Ya.s,t),r=sa(ki.l,Ya.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new He;He.NAMES=qd;let i_=0;class ai extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=is,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=pc,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==pc&&(n.blendDst=this.blendDst),this.blendEquation!==_r&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xn extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new Y,qa=new Qe;let r_=0;class sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:r_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jc,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qa.fromBufferAttribute(this,t),qa.applyMatrix3(e),this.setXY(t,qa.x,qa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}}class jd extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kd extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ai extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let s_=0;const Rn=new je,Nl=new yt,Wr=new Y,yn=new jn,Ws=new jn,Nt=new Y;class Zn extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wd(e)?Kd:jd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return Nl.lookAt(e),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ai(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(yn.min,Ws.min),yn.expandByPoint(Nt),Nt.addVectors(yn.max,Ws.max),yn.expandByPoint(Nt)):(yn.expandByPoint(Ws.min),yn.expandByPoint(Ws.max))}yn.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Nt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Nt.fromBufferAttribute(o,c),l&&(Wr.fromBufferAttribute(e,c),Nt.add(Wr)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new Y,l[A]=new Y;const c=new Y,u=new Y,h=new Y,f=new Qe,d=new Qe,_=new Qe,g=new Y,p=new Y;function m(A,S,M){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,S),_.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const D=1/(d.x*_.y-_.x*d.y);isFinite(D)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(D),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(D),o[A].add(g),o[S].add(g),o[M].add(g),l[A].add(p),l[S].add(p),l[M].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let A=0,S=x.length;A<S;++A){const M=x[A],D=M.start,P=M.count;for(let U=D,L=D+P;U<L;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new Y,v=new Y,E=new Y,w=new Y;function b(A){E.fromBufferAttribute(i,A),w.copy(E);const S=o[A];y.copy(S),y.sub(E.multiplyScalar(E.dot(S))).normalize(),v.crossVectors(w,S);const D=v.dot(l[A])<0?-1:1;s.setXYZW(A,y.x,y.y,y.z,D)}for(let A=0,S=x.length;A<S;++A){const M=x[A],D=M.start,P=M.count;for(let U=D,L=D+P;U<L;U+=3)b(e.getX(U+0)),b(e.getX(U+1)),b(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new Y,r=new Y,s=new Y,o=new Y,l=new Y,c=new Y,u=new Y,h=new Y;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new sn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kh=new je,or=new Ko,ja=new Kn,Zh=new Y,Ka=new Y,Za=new Y,Ja=new Y,Ol=new Y,Qa=new Y,Jh=new Y,$a=new Y;class Rt extends yt{constructor(e=new Zn,t=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Ol.fromBufferAttribute(h,e),s?Qa.addScaledVector(Ol,u):Qa.addScaledVector(Ol.sub(t),u))}t.add(Qa)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(r),or.copy(e.ray).recast(e.near),!(ja.containsPoint(or.origin)===!1&&(or.intersectSphere(ja,Zh)===null||or.origin.distanceToSquared(Zh)>(e.far-e.near)**2))&&(Kh.copy(r).invert(),or.copy(e.ray).applyMatrix4(Kh),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,n){let i;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=s[p.materialIndex],x=Math.max(p.start,d.start),y=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let v=x,E=y;v<E;v+=3){const w=o.getX(v),b=o.getX(v+1),A=o.getX(v+2);i=eo(this,m,e,n,c,u,h,w,b,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const x=o.getX(p),y=o.getX(p+1),v=o.getX(p+2);i=eo(this,s,e,n,c,u,h,x,y,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=s[p.materialIndex],x=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=x,E=y;v<E;v+=3){const w=v,b=v+1,A=v+2;i=eo(this,m,e,n,c,u,h,w,b,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const x=p,y=p+1,v=p+2;i=eo(this,s,e,n,c,u,h,x,y,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function a_(a,e,t,n,i,r,s,o){let l;if(e.side===hn?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side===wi,o),l===null)return null;$a.copy(o),$a.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo($a);return c<t.near||c>t.far?null:{distance:c,point:$a.clone(),object:a}}function eo(a,e,t,n,i,r,s,o,l,c){a.getVertexPosition(o,Ka),a.getVertexPosition(l,Za),a.getVertexPosition(c,Ja);const u=a_(a,e,t,n,Ka,Za,Ja,Jh);if(u){const h=new Y;Hn.getBarycoord(Jh,Ka,Za,Ja,h),i&&(u.uv=Hn.getInterpolatedAttribute(i,o,l,c,h,new Qe)),r&&(u.uv1=Hn.getInterpolatedAttribute(r,o,l,c,h,new Qe)),s&&(u.normal=Hn.getInterpolatedAttribute(s,o,l,c,h,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new Y,materialIndex:0};Hn.getNormal(Ka,Za,Ja,f.normal),u.face=f,u.barycoord=h}return u}class Aa extends Zn{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,s,r,0),_("z","y","x",1,-1,n,t,-e,s,r,1),_("x","z","y",1,1,e,n,t,i,s,2),_("x","z","y",1,-1,e,n,-t,i,s,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ai(c,3)),this.setAttribute("normal",new Ai(u,3)),this.setAttribute("uv",new Ai(h,2));function _(g,p,m,x,y,v,E,w,b,A,S){const M=v/b,D=E/A,P=v/2,U=E/2,L=w/2,G=b+1,O=A+1;let K=0,H=0;const J=new Y;for(let q=0;q<O;q++){const F=q*D-U;for(let W=0;W<G;W++){const ee=W*M-P;J[g]=ee*x,J[p]=F*y,J[m]=L,c.push(J.x,J.y,J.z),J[g]=0,J[p]=0,J[m]=w>0?1:-1,u.push(J.x,J.y,J.z),h.push(W/b),h.push(1-q/A),K+=1}}for(let q=0;q<A;q++)for(let F=0;F<b;F++){const W=f+F+G*q,ee=f+F+G*(q+1),N=f+(F+1)+G*(q+1),k=f+(F+1)+G*q;l.push(W,ee,k),l.push(ee,N,k),H+=6}o.addGroup(d,H,S),d+=H,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function en(a){const e={};for(let t=0;t<a.length;t++){const n=gs(a[t]);for(const i in n)e[i]=n[i]}return e}function o_(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Zd(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Lu={clone:gs,merge:en};var l_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l_,this.fragmentShader=c_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=o_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jd extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new Y,Qh=new Qe,$h=new Qe;class jt extends Jd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,Qh,$h),t.subVectors($h,Qh)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ra*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xr=-90,Yr=1;class u_ extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new jt(Xr,Yr,e,t);i.layers=this.layers,this.add(i);const r=new jt(Xr,Yr,e,t);r.layers=this.layers,this.add(r);const s=new jt(Xr,Yr,e,t);s.layers=this.layers,this.add(s);const o=new jt(Xr,Yr,e,t);o.layers=this.layers,this.add(o);const l=new jt(Xr,Yr,e,t);l.layers=this.layers,this.add(l);const c=new jt(Xr,Yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,s,o,l]=t;for(const c of t)this.remove(c);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===No)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,s),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Qd extends Pt{constructor(e=[],t=fs,n,i,r,s,o,l,c,u){super(e,t,n,i,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class h_ extends tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Qd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Aa(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Zi});r.uniforms.tEquirect.value=t;const s=new Rt(i,r),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=nn),new u_(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}class xr extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f_={type:"move"};class Bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class as{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new as(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class d_ extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class p_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jc,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new Y;class Fu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ef=new Y,tf=new it,nf=new it,m_=new Y,rf=new je,to=new Y,kl=new Kn,sf=new je,zl=new Ko;class g_ extends Rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ih,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,to),this.boundingBox.expandByPoint(to)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,to),this.boundingSphere.expandByPoint(to)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kl.copy(this.boundingSphere),kl.applyMatrix4(i),e.ray.intersectsSphere(kl)!==!1&&(sf.copy(i).invert(),zl.copy(e.ray).applyMatrix4(sf),!(this.boundingBox!==null&&zl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,zl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ih?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;tf.fromBufferAttribute(i.attributes.skinIndex,e),nf.fromBufferAttribute(i.attributes.skinWeight,e),ef.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=nf.getComponent(r);if(s!==0){const o=tf.getComponent(r);rf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(m_.copy(ef).applyMatrix4(rf),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $d extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ep extends Pt{constructor(e=null,t=1,n=1,i,r,s,o,l,c=rn,u=rn,h,f){super(null,s,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const af=new je,__=new je;class Nu{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:__;af.multiplyMatrices(o,t[r]),af.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Nu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ep(t,e,e,Dn,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new $d),this.bones.push(s),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Oo extends sn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qr=new je,of=new je,no=[],lf=new jn,v_=new je,Xs=new Rt,Ys=new Kn;class x_ extends Rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,v_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qr),lf.copy(e.boundingBox).applyMatrix4(qr),this.boundingBox.union(lf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qr),Ys.copy(e.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(Ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,s=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[s+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),e.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,qr),of.multiplyMatrices(n,qr),Xs.matrixWorld=of,Xs.raycast(e,no);for(let s=0,o=no.length;s<o;s++){const l=no[s];l.instanceId=r,l.object=this,t.push(l)}no.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Oo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ep(new Float32Array(i*this.count),i,this.count,wu,Wn));const r=this.morphTexture.source.data.data;let s=0;for(let c=0;c<n.length;c++)s+=n[c];const o=this.geometry.morphTargetsRelative?1:1-s,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Gl=new Y,y_=new Y,S_=new Ke;class Vi{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Gl.subVectors(n,t).cross(y_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Gl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||S_.getNormalMatrix(e),i=this.coplanarPoint(Gl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Kn,io=new Y;class Ou{constructor(e=new Vi,t=new Vi,n=new Vi,i=new Vi,r=new Vi,s=new Vi){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ei){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-r,f-c,p-d,v-m).normalize(),n[1].setComponents(l+r,f+c,p+d,v+m).normalize(),n[2].setComponents(l+s,f+u,p+_,v+x).normalize(),n[3].setComponents(l-s,f-u,p-_,v-x).normalize(),n[4].setComponents(l-o,f-h,p-g,v-y).normalize(),t===Ei)n[5].setComponents(l+o,f+h,p+g,v+y).normalize();else if(t===No)n[5].setComponents(o,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(io.x=i.normal.x>0?e.max.x:e.min.x,io.y=i.normal.y>0?e.max.y:e.min.y,io.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(io)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tp extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bo=new Y,ko=new Y,cf=new je,qs=new Ko,ro=new Kn,Vl=new Y,uf=new Y;class Bu extends yt{constructor(e=new Zn,t=new tp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Bo.fromBufferAttribute(t,i-1),ko.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Bo.distanceTo(ko);e.setAttribute("lineDistance",new Ai(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(i),ro.radius+=r,e.ray.intersectsSphere(ro)===!1)return;cf.copy(i).invert(),qs.copy(e.ray).applyMatrix4(cf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,s.start),_=Math.min(u.count,s.start+s.count);for(let g=d,p=_-1;g<p;g+=c){const m=u.getX(g),x=u.getX(g+1),y=so(this,e,qs,l,m,x,g);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(d),m=so(this,e,qs,l,g,p,_-1);m&&t.push(m)}}else{const d=Math.max(0,s.start),_=Math.min(f.count,s.start+s.count);for(let g=d,p=_-1;g<p;g+=c){const m=so(this,e,qs,l,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){const g=so(this,e,qs,l,_-1,d,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function so(a,e,t,n,i,r,s){const o=a.geometry.attributes.position;if(Bo.fromBufferAttribute(o,i),ko.fromBufferAttribute(o,r),t.distanceSqToSegment(Bo,ko,Vl,uf)>n)return;Vl.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(Vl);if(!(c<e.near||c>e.far))return{distance:c,point:uf.clone().applyMatrix4(a.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:a}}const hf=new Y,ff=new Y;class M_ extends Bu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)hf.fromBufferAttribute(t,i),ff.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hf.distanceTo(ff);e.setAttribute("lineDistance",new Ai(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class T_ extends Bu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class np extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const df=new je,$c=new Ko,ao=new Kn,oo=new Y;class E_ extends yt{constructor(e=new Zn,t=new np){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(i),ao.radius+=r,e.ray.intersectsSphere(ao)===!1)return;df.copy(i).invert(),$c.copy(e.ray).applyMatrix4(df);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);oo.fromBufferAttribute(h,p),pf(oo,p,l,i,e,t,this)}}else{const f=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let _=f,g=d;_<g;_++)oo.fromBufferAttribute(h,_),pf(oo,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function pf(a,e,t,n,i,r,s){const o=$c.distanceSqToPoint(a);if(o<t){const l=new Y;$c.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class ip extends Pt{constructor(e,t,n=Ar,i,r,s,o=rn,l=rn,c,u=pa,h=1){if(u!==pa&&u!==ma)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,r,s,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Iu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jn extends Zn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const x=m*f-s;for(let y=0;y<c;y++){const v=y*h-r;_.push(v,-x,0),g.push(0,0,1),p.push(y/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){const y=x+c*m,v=x+c*(m+1),E=x+1+c*(m+1),w=x+1+c*m;d.push(y,v,w),d.push(v,E,w)}this.setIndex(d),this.setAttribute("position",new Ai(_,3)),this.setAttribute("normal",new Ai(g,3)),this.setAttribute("uv",new Ai(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ku extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vd,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hi extends ku{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rp extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sp extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function lo(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function b_(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function A_(a){function e(i,r){return a[i]-a[r]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function mf(a,e,t){const n=a.length,i=new a.constructor(n);for(let r=0,s=0;s!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[s++]=a[o+l]}return i}function ap(a,e,t,n){let i=1,r=a[0];for(;r!==void 0&&r[n]===void 0;)r=a[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push(...s)),r=a[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=a[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=a[i++];while(r!==void 0)}class wa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let s;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}s=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}s=n,n=0;break n}break e}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class w_ extends wa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qr,endingEnd:Qr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,o=i[r],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case $r:r=e,o=2*t-n;break;case Lo:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $r:s=e,l=2*n-t;break;case Lo:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,p=g*_,m=-f*p+2*f*g-f*_,x=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,y=(-1-d)*p+(1.5+d)*g+.5*_,v=d*p-d*g;for(let E=0;E!==o;++E)r[E]=m*s[u+E]+x*s[c+E]+y*s[l+E]+v*s[h+E];return r}}class op extends wa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=s[c+f]*h+s[l+f]*u;return r}}class R_ extends wa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Qn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lo(t,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lo(e.times,Array),values:lo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new R_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new op(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new w_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ga:t=this.InterpolantFactoryMethodDiscrete;break;case _a:t=this.InterpolantFactoryMethodLinear;break;case _l:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return _a;case this.InterpolantFactoryMethodSmooth:return _l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(i!==void 0&&b_(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_l,r=e.length-1;let s=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const h=o*n,f=s*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=_a;class ws extends Qn{constructor(e,t,n){super(e,t,n)}}ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=ga;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class lp extends Qn{constructor(e,t,n,i){super(e,t,n,i)}}lp.prototype.ValueTypeName="color";class _s extends Qn{constructor(e,t,n,i){super(e,t,n,i)}}_s.prototype.ValueTypeName="number";class C_ extends wa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)qn.slerpFlat(r,0,s,c-o,s,c,l);return r}}class vs extends Qn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new C_(this.times,this.values,this.getValueSize(),e)}}vs.prototype.ValueTypeName="quaternion";vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends Qn{constructor(e,t,n){super(e,t,n)}}Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=ga;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends Qn{constructor(e,t,n,i){super(e,t,n,i)}}xs.prototype.ValueTypeName="vector";class eu{constructor(e="",t=-1,n=[],i=Du){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(D_(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(Qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=A_(l);l=mf(l,1,u),c=mf(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new _s(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const s=[];for(const o in i)s.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return s}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const p=[],m=[];ap(d,p,m,_),p.length!==0&&g.push(new h(f,p,m))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const p=[],m=[];for(let x=0;x!==f[_].morphTargets.length;++x){const y=f[_];p.push(y.time),m.push(y.morphTarget===g?1:0)}i.push(new _s(".morphTargetInfluence["+g+"]",p,m))}l=d.length*s}else{const d=".bones["+t[h].name+"]";n(xs,d+".position",f,"pos",i),n(vs,d+".quaternion",f,"rot",i),n(xs,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function P_(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _s;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return lp;case"quaternion":return vs;case"bool":case"boolean":return ws;case"string":return Rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function D_(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=P_(a.type);if(a.times===void 0){const t=[],n=[];ap(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Xi={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class U_{constructor(e,t,n){const i=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const I_=new U_;class Cs{constructor(e){this.manager=e!==void 0?e:I_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Cs.DEFAULT_MATERIAL_NAME="__DEFAULT";const _i={};class L_ extends Error{constructor(e,t){super(e),this.response=t}}class cp extends Cs{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Xi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:n,onError:i});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=_i[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let g=0;const p=new ReadableStream({start(m){x();function x(){h.read().then(({done:y,value:v})=>{if(y)m.close();else{g+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let w=0,b=u.length;w<b;w++){const A=u[w];A.onProgress&&A.onProgress(E)}m.enqueue(v),x()}},y=>{m.error(y)})}}});return new Response(p)}else throw new L_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Xi.add(e,c);const u=_i[e];delete _i[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=_i[e];if(u===void 0)throw this.manager.itemError(e),c;delete _i[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class F_ extends Cs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Xi.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=va("img");function l(){u(),Xi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class up extends Cs{constructor(e){super(e)}load(e,t,n,i){const r=new Pt,s=new F_(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Zo extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Hl=new je,gf=new Y,_f=new Y;class zu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ou,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(gf),_f.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_f),t.updateMatrixWorld(),Hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class N_ extends zu{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ms*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class O_ extends Zo{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new N_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vf=new je,js=new Y,Wl=new Y;class B_ extends zu{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),js.setFromMatrixPosition(e.matrixWorld),n.position.copy(js),Wl.copy(n.position),Wl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wl),n.updateMatrixWorld(),i.makeTranslation(-js.x,-js.y,-js.z),vf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vf)}}class Gu extends Zo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new B_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Vu extends Jd{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class k_ extends zu{constructor(){super(new Vu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class z_ extends Zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new k_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class G_ extends Zo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class aa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class V_ extends Zn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Xl=new WeakMap;class H_ extends Cs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Xi.get(e);if(s!==void 0){if(r.manager.itemStart(e),s.then){s.then(c=>{if(Xl.has(s)===!0)i&&i(Xl.get(s)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Xi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Xl.set(l,c),Xi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Xi.add(e,l),r.manager.itemStart(e)}}class W_ extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class X_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,s;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=t}else{s+=t;const o=t/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,s=i;r!==s;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)e[t+s]=e[n+s]}_slerp(e,t,n,i){qn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const s=this._workIndex*r;qn.multiplyQuaternionsFlat(e,s,e,t,e,n),qn.slerpFlat(e,t,e,t,e,s,i)}_lerp(e,t,n,i,r){const s=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*s+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let s=0;s!==r;++s){const o=t+s;e[o]=e[o]+e[n+s]*i}}}const Hu="\\[\\]\\.:\\/",Y_=new RegExp("["+Hu+"]","g"),Wu="[^"+Hu+"]",q_="[^"+Hu.replace("\\.","")+"]",j_=/((?:WC+[\/:])*)/.source.replace("WC",Wu),K_=/(WCOD+)?/.source.replace("WCOD",q_),Z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wu),J_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wu),Q_=new RegExp("^"+j_+K_+Z_+J_+"$"),$_=["material","materials","bones","map"];class e0{constructor(e,t,n){const i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Y_,"")}static parseTrackName(e){const t=Q_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);$_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=e0;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class t0{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,s=r.length,o=new Array(s),l={endingStart:Qr,endingEnd:Qr};for(let c=0;c!==s;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=hg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,s=r/i,o=i/r;e.warp(1,s,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,s=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/s,c[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const s=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case dg:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(s),c[u].accumulateAdditive(o);break;case Du:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(s),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const s=n===fg;if(e===0)return r===-1?i:s&&(r&1)===1?t-i:i;if(n===ug){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(s&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=$r,i.endingEnd=$r):(e?i.endingStart=this.zeroSlopeAtStart?$r:Qr:i.endingStart=Lo,t?i.endingEnd=this.zeroSlopeAtEnd?$r:Qr:i.endingEnd=Lo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let s=this._weightInterpolant;s===null&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);const o=s.parameterPositions,l=s.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const n0=new Float32Array(1);class i0 extends Rr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,s=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const f=i[h],d=f.name;let _=u[d];if(_!==void 0)++_.referenceCount,s[h]=_;else{if(_=s[h],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,d));continue}const g=t&&t._propertyBindings[h].binding.parsedPath;_=new X_(ot.create(n,d,g),f.ValueTypeName,f.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,d),s[h]=_}o[h].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{const o=s.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),s.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,s=this._actionsByClip,o=s[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[t];s===void 0&&(s={},i[t]=s),s[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new op(new Float32Array(2),new Float32Array(2),1,n0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let s=typeof e=="string"?eu.findByName(i,e):e;const o=s!==null?s.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=Du),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const u=new t0(this,s,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?eu.findByName(n,e):e,s=r?r.uuid:e,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,s);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let o=0,l=s.length;o!==l;++o){const c=s[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const s in n){const o=n[s].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const s in r){const o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}function xf(a,e,t,n){const i=r0(n);switch(t){case Nd:return a*e;case wu:return a*e/i.components*i.byteLength;case Ru:return a*e/i.components*i.byteLength;case Bd:return a*e*2/i.components*i.byteLength;case Cu:return a*e*2/i.components*i.byteLength;case Od:return a*e*3/i.components*i.byteLength;case Dn:return a*e*4/i.components*i.byteLength;case Pu:return a*e*4/i.components*i.byteLength;case vo:case xo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case yo:case So:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case bc:case wc:return Math.max(a,16)*Math.max(e,8)/4;case Ec:case Ac:return Math.max(a,8)*Math.max(e,8)/2;case Rc:case Cc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Pc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case kc:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case zc:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Mo:case Xc:case Yc:return Math.ceil(a/4)*Math.ceil(e/4)*16;case kd:case qc:return Math.ceil(a/4)*Math.ceil(e/4)*8;case jc:case Kc:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function r0(a){switch(a){case li:case Id:return{byteLength:1,components:1};case fa:case Ld:case As:return{byteLength:2,components:1};case bu:case Au:return{byteLength:2,components:4};case Ar:case Eu:case Wn:return{byteLength:4,components:1};case Fd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hp(){let a=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function s0(a){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=a.createBuffer();a.bindBuffer(l,f),a.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=a.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=a.HALF_FLOAT:d=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=a.SHORT;else if(c instanceof Uint32Array)d=a.UNSIGNED_INT;else if(c instanceof Int32Array)d=a.INT;else if(c instanceof Int8Array)d=a.BYTE;else if(c instanceof Uint8Array)d=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(a.bindBuffer(c,o),h.length===0)a.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];a.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:s}}var a0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,l0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,d0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,m0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,x0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,y0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,C0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,P0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,D0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N0="gl_FragColor = linearToOutputTexel( gl_FragColor );",O0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,z0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,H0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,j0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Q0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ev=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,av=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ov=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_v=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ev=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ov=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$v=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ex=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ax=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,px=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ex=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ax=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Px=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ox=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:a0,alphahash_pars_fragment:o0,alphamap_fragment:l0,alphamap_pars_fragment:c0,alphatest_fragment:u0,alphatest_pars_fragment:h0,aomap_fragment:f0,aomap_pars_fragment:d0,batching_pars_vertex:p0,batching_vertex:m0,begin_vertex:g0,beginnormal_vertex:_0,bsdfs:v0,iridescence_fragment:x0,bumpmap_pars_fragment:y0,clipping_planes_fragment:S0,clipping_planes_pars_fragment:M0,clipping_planes_pars_vertex:T0,clipping_planes_vertex:E0,color_fragment:b0,color_pars_fragment:A0,color_pars_vertex:w0,color_vertex:R0,common:C0,cube_uv_reflection_fragment:P0,defaultnormal_vertex:D0,displacementmap_pars_vertex:U0,displacementmap_vertex:I0,emissivemap_fragment:L0,emissivemap_pars_fragment:F0,colorspace_fragment:N0,colorspace_pars_fragment:O0,envmap_fragment:B0,envmap_common_pars_fragment:k0,envmap_pars_fragment:z0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:Q0,envmap_vertex:V0,fog_vertex:H0,fog_pars_vertex:W0,fog_fragment:X0,fog_pars_fragment:Y0,gradientmap_pars_fragment:q0,lightmap_pars_fragment:j0,lights_lambert_fragment:K0,lights_lambert_pars_fragment:Z0,lights_pars_begin:J0,lights_toon_fragment:$0,lights_toon_pars_fragment:ev,lights_phong_fragment:tv,lights_phong_pars_fragment:nv,lights_physical_fragment:iv,lights_physical_pars_fragment:rv,lights_fragment_begin:sv,lights_fragment_maps:av,lights_fragment_end:ov,logdepthbuf_fragment:lv,logdepthbuf_pars_fragment:cv,logdepthbuf_pars_vertex:uv,logdepthbuf_vertex:hv,map_fragment:fv,map_pars_fragment:dv,map_particle_fragment:pv,map_particle_pars_fragment:mv,metalnessmap_fragment:gv,metalnessmap_pars_fragment:_v,morphinstance_vertex:vv,morphcolor_vertex:xv,morphnormal_vertex:yv,morphtarget_pars_vertex:Sv,morphtarget_vertex:Mv,normal_fragment_begin:Tv,normal_fragment_maps:Ev,normal_pars_fragment:bv,normal_pars_vertex:Av,normal_vertex:wv,normalmap_pars_fragment:Rv,clearcoat_normal_fragment_begin:Cv,clearcoat_normal_fragment_maps:Pv,clearcoat_pars_fragment:Dv,iridescence_pars_fragment:Uv,opaque_fragment:Iv,packing:Lv,premultiplied_alpha_fragment:Fv,project_vertex:Nv,dithering_fragment:Ov,dithering_pars_fragment:Bv,roughnessmap_fragment:kv,roughnessmap_pars_fragment:zv,shadowmap_pars_fragment:Gv,shadowmap_pars_vertex:Vv,shadowmap_vertex:Hv,shadowmask_pars_fragment:Wv,skinbase_vertex:Xv,skinning_pars_vertex:Yv,skinning_vertex:qv,skinnormal_vertex:jv,specularmap_fragment:Kv,specularmap_pars_fragment:Zv,tonemapping_fragment:Jv,tonemapping_pars_fragment:Qv,transmission_fragment:$v,transmission_pars_fragment:ex,uv_pars_fragment:tx,uv_pars_vertex:nx,uv_vertex:ix,worldpos_vertex:rx,background_vert:sx,background_frag:ax,backgroundCube_vert:ox,backgroundCube_frag:lx,cube_vert:cx,cube_frag:ux,depth_vert:hx,depth_frag:fx,distanceRGBA_vert:dx,distanceRGBA_frag:px,equirect_vert:mx,equirect_frag:gx,linedashed_vert:_x,linedashed_frag:vx,meshbasic_vert:xx,meshbasic_frag:yx,meshlambert_vert:Sx,meshlambert_frag:Mx,meshmatcap_vert:Tx,meshmatcap_frag:Ex,meshnormal_vert:bx,meshnormal_frag:Ax,meshphong_vert:wx,meshphong_frag:Rx,meshphysical_vert:Cx,meshphysical_frag:Px,meshtoon_vert:Dx,meshtoon_frag:Ux,points_vert:Ix,points_frag:Lx,shadow_vert:Fx,shadow_frag:Nx,sprite_vert:Ox,sprite_frag:Bx},Pe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ni={basic:{uniforms:en([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:en([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new He(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:en([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:en([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:en([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new He(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:en([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:en([Pe.points,Pe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:en([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:en([Pe.common,Pe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:en([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:en([Pe.sprite,Pe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:en([Pe.common,Pe.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:en([Pe.lights,Pe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ni.physical={uniforms:en([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const co={r:0,b:0,g:0},cr=new ci,kx=new je;function zx(a,e,t,n,i,r,s){const o=new He(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function g(y){let v=!1;const E=_(y);E===null?m(o,l):E&&E.isColor&&(m(E,1),v=!0);const w=a.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(a.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function p(y,v){const E=_(v);E&&(E.isCubeTexture||E.mapping===jo)?(u===void 0&&(u=new Rt(new Aa(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:gs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),cr.copy(v.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kx.makeRotationFromEuler(cr)),u.material.toneMapped=at.getTransfer(E.colorSpace)!==ut,(h!==E||f!==E.version||d!==a.toneMapping)&&(u.material.needsUpdate=!0,h=E,f=E.version,d=a.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Rt(new Jn(2,2),new Ri({name:"BackgroundMaterial",uniforms:gs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=at.getTransfer(E.colorSpace)!==ut,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,d=a.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(co,Zd(a)),n.buffers.color.setClear(co.r,co.g,co.b,v,s)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:g,addToRenderList:p,dispose:x}}function Gx(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,s=!1;function o(M,D,P,U,L){let G=!1;const O=h(U,P,D);r!==O&&(r=O,c(r.object)),G=d(M,U,P,L),G&&_(M,U,P,L),L!==null&&e.update(L,a.ELEMENT_ARRAY_BUFFER),(G||s)&&(s=!1,v(M,D,P,U),L!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return a.createVertexArray()}function c(M){return a.bindVertexArray(M)}function u(M){return a.deleteVertexArray(M)}function h(M,D,P){const U=P.wireframe===!0;let L=n[M.id];L===void 0&&(L={},n[M.id]=L);let G=L[D.id];G===void 0&&(G={},L[D.id]=G);let O=G[U];return O===void 0&&(O=f(l()),G[U]=O),O}function f(M){const D=[],P=[],U=[];for(let L=0;L<t;L++)D[L]=0,P[L]=0,U[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:P,attributeDivisors:U,object:M,attributes:{},index:null}}function d(M,D,P,U){const L=r.attributes,G=D.attributes;let O=0;const K=P.getAttributes();for(const H in K)if(K[H].location>=0){const q=L[H];let F=G[H];if(F===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(F=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(F=M.instanceColor)),q===void 0||q.attribute!==F||F&&q.data!==F.data)return!0;O++}return r.attributesNum!==O||r.index!==U}function _(M,D,P,U){const L={},G=D.attributes;let O=0;const K=P.getAttributes();for(const H in K)if(K[H].location>=0){let q=G[H];q===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(q=M.instanceColor));const F={};F.attribute=q,q&&q.data&&(F.data=q.data),L[H]=F,O++}r.attributes=L,r.attributesNum=O,r.index=U}function g(){const M=r.newAttributes;for(let D=0,P=M.length;D<P;D++)M[D]=0}function p(M){m(M,0)}function m(M,D){const P=r.newAttributes,U=r.enabledAttributes,L=r.attributeDivisors;P[M]=1,U[M]===0&&(a.enableVertexAttribArray(M),U[M]=1),L[M]!==D&&(a.vertexAttribDivisor(M,D),L[M]=D)}function x(){const M=r.newAttributes,D=r.enabledAttributes;for(let P=0,U=D.length;P<U;P++)D[P]!==M[P]&&(a.disableVertexAttribArray(P),D[P]=0)}function y(M,D,P,U,L,G,O){O===!0?a.vertexAttribIPointer(M,D,P,L,G):a.vertexAttribPointer(M,D,P,U,L,G)}function v(M,D,P,U){g();const L=U.attributes,G=P.getAttributes(),O=D.defaultAttributeValues;for(const K in G){const H=G[K];if(H.location>=0){let J=L[K];if(J===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const q=J.normalized,F=J.itemSize,W=e.get(J);if(W===void 0)continue;const ee=W.buffer,N=W.type,k=W.bytesPerElement,ie=N===a.INT||N===a.UNSIGNED_INT||J.gpuType===Eu;if(J.isInterleavedBufferAttribute){const X=J.data,ne=X.stride,Se=J.offset;if(X.isInstancedInterleavedBuffer){for(let _e=0;_e<H.locationSize;_e++)m(H.location+_e,X.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let _e=0;_e<H.locationSize;_e++)p(H.location+_e);a.bindBuffer(a.ARRAY_BUFFER,ee);for(let _e=0;_e<H.locationSize;_e++)y(H.location+_e,F/H.locationSize,N,q,ne*k,(Se+F/H.locationSize*_e)*k,ie)}else{if(J.isInstancedBufferAttribute){for(let X=0;X<H.locationSize;X++)m(H.location+X,J.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let X=0;X<H.locationSize;X++)p(H.location+X);a.bindBuffer(a.ARRAY_BUFFER,ee);for(let X=0;X<H.locationSize;X++)y(H.location+X,F/H.locationSize,N,q,F*k,F/H.locationSize*X*k,ie)}}else if(O!==void 0){const q=O[K];if(q!==void 0)switch(q.length){case 2:a.vertexAttrib2fv(H.location,q);break;case 3:a.vertexAttrib3fv(H.location,q);break;case 4:a.vertexAttrib4fv(H.location,q);break;default:a.vertexAttrib1fv(H.location,q)}}}}x()}function E(){A();for(const M in n){const D=n[M];for(const P in D){const U=D[P];for(const L in U)u(U[L].object),delete U[L];delete D[P]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const P in D){const U=D[P];for(const L in U)u(U[L].object),delete U[L];delete D[P]}delete n[M.id]}function b(M){for(const D in n){const P=n[D];if(P[M.id]===void 0)continue;const U=P[M.id];for(const L in U)u(U[L].object),delete U[L];delete P[M.id]}}function A(){S(),s=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:p,disableUnusedAttributes:x}}function Vx(a,e,t){let n;function i(c){n=c}function r(c,u){a.drawArrays(n,c,u),t.update(u,n,1)}function s(c,u,h){h!==0&&(a.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)s(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Hx(a,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){return!(b!==Dn&&n.convert(b)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const A=b===As&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==li&&n.convert(b)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Wn&&!A)}function l(b){if(b==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_TEXTURE_SIZE),p=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),m=a.getParameter(a.MAX_VERTEX_ATTRIBS),x=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),y=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,w=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:E,maxSamples:w}}function Wx(a){const e=this;let t=null,n=0,i=!1,r=!1;const s=new Vi,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=a.get(h);if(!i||_===null||_.length===0||r&&!p)r?u(null):c();else{const x=r?0:n,y=x*4;let v=m.clippingState||null;l.value=v,v=u(_,f,y,d);for(let E=0;E!==y;++E)v[E]=t[E];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,v=d;y!==g;++y,v+=4)s.copy(h[y]).applyMatrix4(x,o),s.normal.toArray(p,v),p[v+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Xx(a){let e=new WeakMap;function t(s,o){return o===Mc?s.mapping=fs:o===Tc&&(s.mapping=ds),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Mc||o===Tc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new h_(l.height);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const es=4,yf=[.125,.215,.35,.446,.526,.582],vr=20,Yl=new Vu,Sf=new He;let ql=null,jl=0,Kl=0,Zl=!1;const mr=(1+Math.sqrt(5))/2,jr=1/mr,Mf=[new Y(-mr,jr,0),new Y(mr,jr,0),new Y(-jr,0,mr),new Y(jr,0,mr),new Y(0,mr,-jr),new Y(0,mr,jr),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],Yx=new Y;class Tf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:s=256,position:o=Yx}=r;ql=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ql,jl,Kl),this._renderer.xr.enabled=Zl,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ql=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:As,format:Dn,colorSpace:an,depthBuffer:!1},i=Ef(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ef(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qx(r)),this._blurMaterial=jx(r,e,t)}return i}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,Yl)}_sceneToCubeUV(e,t,n,i,r){const l=new jt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Sf),h.toneMapping=Ji,h.autoClear=!1;const _=new Xn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new Rt(new Aa,_);let p=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,p=!0):(_.color.copy(Sf),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[x]));const v=this._cubeSize;uo(i,y*v,x>2?v:0,v,v),h.setRenderTarget(i),p&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fs||e.mapping===ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bf());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Rt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;uo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Yl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Mf[(i-r-1)%Mf.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Rt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*vr-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):vr;p>vr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vr}`);const m=[];let x=0;for(let b=0;b<vr;++b){const A=b/g,S=Math.exp(-A*A/2);m.push(S),b===0?x+=S:b<p&&(x+=2*S)}for(let b=0;b<m.length;b++)m[b]=m[b]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;const v=this._sizeLods[i],E=3*v*(i>y-es?i-y+es:0),w=4*(this._cubeSize-v);uo(t,E,w,3*v,2*v),l.setRenderTarget(t),l.render(h,Yl)}}function qx(a){const e=[],t=[],n=[];let i=a;const r=a-es+1+yf.length;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);let l=1/o;s>a-es?l=yf[s-a+es-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,x=new Float32Array(g*_*d),y=new Float32Array(p*_*d),v=new Float32Array(m*_*d);for(let w=0;w<d;w++){const b=w%3*2/3-1,A=w>2?0:-1,S=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];x.set(S,g*_*w),y.set(f,p*_*w);const M=[w,w,w,w,w,w];v.set(M,m*_*w)}const E=new Zn;E.setAttribute("position",new sn(x,g)),E.setAttribute("uv",new sn(y,p)),E.setAttribute("faceIndex",new sn(v,m)),e.push(E),i>es&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ef(a,e,t){const n=new tr(a,e,t);return n.texture.mapping=jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function uo(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function jx(a,e,t){const n=new Float32Array(vr),i=new Y(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function bf(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Af(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Xu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kx(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Mc||l===Tc,u=l===fs||l===ds;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Tf(a)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Tf(a)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Zx(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&rs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jx(a,e,t,n){const i={},r=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",s),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],a.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const x=d.array;g=d.version;for(let y=0,v=x.length;y<v;y+=3){const E=x[y+0],w=x[y+1],b=x[y+2];f.push(E,w,w,b,b,E)}}else if(_!==void 0){const x=_.array;g=_.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const E=y+0,w=y+1,b=y+2;f.push(E,w,w,b,b,E)}}else return;const p=new(Wd(f)?Kd:jd)(f,1);p.version=g;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Qx(a,e,t){let n;function i(f){n=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function l(f,d){a.drawElements(n,d,r,f*s),t.update(d,n,1)}function c(f,d,_){_!==0&&(a.drawElementsInstanced(n,d,r,f*s,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,n,1)}function h(f,d,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/s,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,_);let m=0;for(let x=0;x<_;x++)m+=d[x]*g[x];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function $x(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(r/3);break;case a.LINES:t.lines+=o*(r/2);break;case a.LINE_STRIP:t.lines+=o*(r-1);break;case a.LINE_LOOP:t.lines+=o*r;break;case a.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ey(a,e,t){const n=new WeakMap,i=new it;function r(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let M=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),p===!0&&(v=3);let E=o.attributes.position.count*v,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const b=new Float32Array(E*w*4*h),A=new Xd(b,E,w,h);A.type=Wn,A.needsUpdate=!0;const S=v*4;for(let D=0;D<h;D++){const P=m[D],U=x[D],L=y[D],G=E*w*4*D;for(let O=0;O<P.count;O++){const K=O*S;_===!0&&(i.fromBufferAttribute(P,O),b[G+K+0]=i.x,b[G+K+1]=i.y,b[G+K+2]=i.z,b[G+K+3]=0),g===!0&&(i.fromBufferAttribute(U,O),b[G+K+4]=i.x,b[G+K+5]=i.y,b[G+K+6]=i.z,b[G+K+7]=0),p===!0&&(i.fromBufferAttribute(L,O),b[G+K+8]=i.x,b[G+K+9]=i.y,b[G+K+10]=i.z,b[G+K+11]=L.itemSize===4?i.w:1)}}f={count:h,texture:A,size:new Qe(E,w)},n.set(o,f),o.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(a,"morphTargetBaseInfluence",g),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",f.size)}return{update:r}}function ty(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function s(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const fp=new Pt,wf=new ip(1,1),dp=new Xd,pp=new Kg,mp=new Qd,Rf=[],Cf=[],Pf=new Float32Array(16),Df=new Float32Array(9),Uf=new Float32Array(4);function Ps(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=Rf[i];if(r===void 0&&(r=new Float32Array(i),Rf[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function Dt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Ut(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Jo(a,e){let t=Cf[e];t===void 0&&(t=new Int32Array(e),Cf[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function ny(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function iy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;a.uniform2fv(this.addr,e),Ut(t,e)}}function ry(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;a.uniform3fv(this.addr,e),Ut(t,e)}}function sy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;a.uniform4fv(this.addr,e),Ut(t,e)}}function ay(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Uf.set(n),a.uniformMatrix2fv(this.addr,!1,Uf),Ut(t,n)}}function oy(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Df.set(n),a.uniformMatrix3fv(this.addr,!1,Df),Ut(t,n)}}function ly(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Pf.set(n),a.uniformMatrix4fv(this.addr,!1,Pf),Ut(t,n)}}function cy(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function uy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;a.uniform2iv(this.addr,e),Ut(t,e)}}function hy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;a.uniform3iv(this.addr,e),Ut(t,e)}}function fy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;a.uniform4iv(this.addr,e),Ut(t,e)}}function dy(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function py(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;a.uniform2uiv(this.addr,e),Ut(t,e)}}function my(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;a.uniform3uiv(this.addr,e),Ut(t,e)}}function gy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;a.uniform4uiv(this.addr,e),Ut(t,e)}}function _y(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let r;this.type===a.SAMPLER_2D_SHADOW?(wf.compareFunction=Hd,r=wf):r=fp,t.setTexture2D(e||r,i)}function vy(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pp,i)}function xy(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||mp,i)}function yy(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||dp,i)}function Sy(a){switch(a){case 5126:return ny;case 35664:return iy;case 35665:return ry;case 35666:return sy;case 35674:return ay;case 35675:return oy;case 35676:return ly;case 5124:case 35670:return cy;case 35667:case 35671:return uy;case 35668:case 35672:return hy;case 35669:case 35673:return fy;case 5125:return dy;case 36294:return py;case 36295:return my;case 36296:return gy;case 35678:case 36198:case 36298:case 36306:case 35682:return _y;case 35679:case 36299:case 36307:return vy;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return yy}}function My(a,e){a.uniform1fv(this.addr,e)}function Ty(a,e){const t=Ps(e,this.size,2);a.uniform2fv(this.addr,t)}function Ey(a,e){const t=Ps(e,this.size,3);a.uniform3fv(this.addr,t)}function by(a,e){const t=Ps(e,this.size,4);a.uniform4fv(this.addr,t)}function Ay(a,e){const t=Ps(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function wy(a,e){const t=Ps(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Ry(a,e){const t=Ps(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Cy(a,e){a.uniform1iv(this.addr,e)}function Py(a,e){a.uniform2iv(this.addr,e)}function Dy(a,e){a.uniform3iv(this.addr,e)}function Uy(a,e){a.uniform4iv(this.addr,e)}function Iy(a,e){a.uniform1uiv(this.addr,e)}function Ly(a,e){a.uniform2uiv(this.addr,e)}function Fy(a,e){a.uniform3uiv(this.addr,e)}function Ny(a,e){a.uniform4uiv(this.addr,e)}function Oy(a,e,t){const n=this.cache,i=e.length,r=Jo(t,i);Dt(n,r)||(a.uniform1iv(this.addr,r),Ut(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||fp,r[s])}function By(a,e,t){const n=this.cache,i=e.length,r=Jo(t,i);Dt(n,r)||(a.uniform1iv(this.addr,r),Ut(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||pp,r[s])}function ky(a,e,t){const n=this.cache,i=e.length,r=Jo(t,i);Dt(n,r)||(a.uniform1iv(this.addr,r),Ut(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||mp,r[s])}function zy(a,e,t){const n=this.cache,i=e.length,r=Jo(t,i);Dt(n,r)||(a.uniform1iv(this.addr,r),Ut(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||dp,r[s])}function Gy(a){switch(a){case 5126:return My;case 35664:return Ty;case 35665:return Ey;case 35666:return by;case 35674:return Ay;case 35675:return wy;case 35676:return Ry;case 5124:case 35670:return Cy;case 35667:case 35671:return Py;case 35668:case 35672:return Dy;case 35669:case 35673:return Uy;case 5125:return Iy;case 36294:return Ly;case 36295:return Fy;case 36296:return Ny;case 35678:case 36198:case 36298:case 36306:case 35682:return Oy;case 35679:case 36299:case 36307:return By;case 35680:case 36300:case 36308:case 36293:return ky;case 36289:case 36303:case 36311:case 36292:return zy}}class Vy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sy(t.type)}}class Hy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gy(t.type)}}class Wy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Jl=/(\w+)(\])?(\[|\.)?/g;function If(a,e){a.seq.push(e),a.map[e.id]=e}function Xy(a,e,t){const n=a.name,i=n.length;for(Jl.lastIndex=0;;){const r=Jl.exec(n),s=Jl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){If(t,c===void 0?new Vy(o,a,e):new Hy(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new Wy(o),If(t,h)),t=h}}}class To{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);Xy(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Lf(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const Yy=37297;let qy=0;function jy(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const Ff=new Ke;function Ky(a){at._getMatrix(Ff,at.workingColorSpace,a);const e=`mat3( ${Ff.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(a)){case Fo:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Nf(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+jy(a.getShaderSource(e),s)}else return i}function Zy(a,e){const t=Ky(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Jy(a,e){let t;switch(e){case ng:t="Linear";break;case ig:t="Reinhard";break;case rg:t="Cineon";break;case sg:t="ACESFilmic";break;case og:t="AgX";break;case lg:t="Neutral";break;case ag:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ho=new Y;function Qy(){at.getLuminanceCoefficients(ho);const a=ho.x.toFixed(4),e=ho.y.toFixed(4),t=ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $y(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function eS(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tS(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),s=r.name;let o=1;r.type===a.FLOAT_MAT2&&(o=2),r.type===a.FLOAT_MAT3&&(o=3),r.type===a.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function $s(a){return a!==""}function Of(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bf(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nS=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(a){return a.replace(nS,rS)}const iS=new Map;function rS(a,e){let t=Ze[e];if(t===void 0){const n=iS.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return tu(t)}const sS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(a){return a.replace(sS,aS)}function aS(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function zf(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oS(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Cd?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Fm?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function lS(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case fs:case ds:e="ENVMAP_TYPE_CUBE";break;case jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cS(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function uS(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Pd:e="ENVMAP_BLENDING_MULTIPLY";break;case eg:e="ENVMAP_BLENDING_MIX";break;case tg:e="ENVMAP_BLENDING_ADD";break}return e}function hS(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function fS(a,e,t,n){const i=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=oS(t),c=lS(t),u=cS(t),h=uS(t),f=hS(t),d=$y(t),_=eS(r),g=i.createProgram();let p,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter($s).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter($s).join(`
`),m.length>0&&(m+=`
`)):(p=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),m=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ji?Jy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Zy("linearToOutputTexel",t.outputColorSpace),Qy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),s=tu(s),s=Of(s,t),s=Bf(s,t),o=tu(o),o=Of(o,t),o=Bf(o,t),s=kf(s),o=kf(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+p+s,v=x+m+o,E=Lf(i,i.VERTEX_SHADER,y),w=Lf(i,i.FRAGMENT_SHADER,v);i.attachShader(g,E),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(D){if(a.debug.checkShaderErrors){const P=i.getProgramInfoLog(g).trim(),U=i.getShaderInfoLog(E).trim(),L=i.getShaderInfoLog(w).trim();let G=!0,O=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(G=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,g,E,w);else{const K=Nf(i,E,"vertex"),H=Nf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+K+`
`+H)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(U===""||L==="")&&(O=!1);O&&(D.diagnostics={runnable:G,programLog:P,vertexShader:{log:U,prefix:p},fragmentShader:{log:L,prefix:m}})}i.deleteShader(E),i.deleteShader(w),A=new To(i,g),S=tS(i,g)}let A;this.getUniforms=function(){return A===void 0&&b(this),A};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,Yy)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qy++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=w,this}let dS=0;class pS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mS(e),t.set(e,n)),n}}class mS{constructor(e){this.id=dS++,this.code=e,this.usedTimes=0}}function gS(a,e,t,n,i,r,s){const o=new Yd,l=new pS,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,M,D,P,U){const L=P.fog,G=U.geometry,O=S.isMeshStandardMaterial?P.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||O),H=K&&K.mapping===jo?K.image.height:null,J=_[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,F=q!==void 0?q.length:0;let W=0;G.morphAttributes.position!==void 0&&(W=1),G.morphAttributes.normal!==void 0&&(W=2),G.morphAttributes.color!==void 0&&(W=3);let ee,N,k,ie;if(J){const We=ni[J];ee=We.vertexShader,N=We.fragmentShader}else ee=S.vertexShader,N=S.fragmentShader,l.update(S),k=l.getVertexShaderID(S),ie=l.getFragmentShaderID(S);const X=a.getRenderTarget(),ne=a.state.buffers.depth.getReversed(),Se=U.isInstancedMesh===!0,_e=U.isBatchedMesh===!0,ve=!!S.map,fe=!!S.matcap,Ie=!!K,I=!!S.aoMap,ke=!!S.lightMap,Re=!!S.bumpMap,Le=!!S.normalMap,le=!!S.displacementMap,Ee=!!S.emissiveMap,de=!!S.metalnessMap,te=!!S.roughnessMap,De=S.anisotropy>0,C=S.clearcoat>0,T=S.dispersion>0,z=S.iridescence>0,ae=S.sheen>0,$=S.transmission>0,Q=De&&!!S.anisotropyMap,xe=C&&!!S.clearcoatMap,me=C&&!!S.clearcoatNormalMap,Me=C&&!!S.clearcoatRoughnessMap,be=z&&!!S.iridescenceMap,oe=z&&!!S.iridescenceThicknessMap,pe=ae&&!!S.sheenColorMap,ge=ae&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,ye=!!S.specularColorMap,ze=!!S.specularIntensityMap,B=$&&!!S.transmissionMap,he=$&&!!S.thicknessMap,ce=!!S.gradientMap,Ue=!!S.alphaMap,ue=S.alphaTest>0,se=!!S.alphaHash,we=!!S.extensions;let Fe=Ji;S.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Fe=a.toneMapping);const Oe={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:N,defines:S.defines,customVertexShaderID:k,customFragmentShaderID:ie,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:_e,batchingColor:_e&&U._colorsTexture!==null,instancing:Se,instancingColor:Se&&U.instanceColor!==null,instancingMorph:Se&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:X===null?a.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:an,alphaToCoverage:!!S.alphaToCoverage,map:ve,matcap:fe,envMap:Ie,envMapMode:Ie&&K.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:ke,bumpMap:Re,normalMap:Le,displacementMap:f&&le,emissiveMap:Ee,normalMapObjectSpace:Le&&S.normalMapType===gg,normalMapTangentSpace:Le&&S.normalMapType===Vd,metalnessMap:de,roughnessMap:te,anisotropy:De,anisotropyMap:Q,clearcoat:C,clearcoatMap:xe,clearcoatNormalMap:me,clearcoatRoughnessMap:Me,dispersion:T,iridescence:z,iridescenceMap:be,iridescenceThicknessMap:oe,sheen:ae,sheenColorMap:pe,sheenRoughnessMap:ge,specularMap:Ae,specularColorMap:ye,specularIntensityMap:ze,transmission:$,transmissionMap:B,thicknessMap:he,gradientMap:ce,opaque:S.transparent===!1&&S.blending===is&&S.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ue,alphaHash:se,combine:S.combine,mapUv:ve&&g(S.map.channel),aoMapUv:I&&g(S.aoMap.channel),lightMapUv:ke&&g(S.lightMap.channel),bumpMapUv:Re&&g(S.bumpMap.channel),normalMapUv:Le&&g(S.normalMap.channel),displacementMapUv:le&&g(S.displacementMap.channel),emissiveMapUv:Ee&&g(S.emissiveMap.channel),metalnessMapUv:de&&g(S.metalnessMap.channel),roughnessMapUv:te&&g(S.roughnessMap.channel),anisotropyMapUv:Q&&g(S.anisotropyMap.channel),clearcoatMapUv:xe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(S.sheenRoughnessMap.channel),specularMapUv:Ae&&g(S.specularMap.channel),specularColorMapUv:ye&&g(S.specularColorMap.channel),specularIntensityMapUv:ze&&g(S.specularIntensityMap.channel),transmissionMapUv:B&&g(S.transmissionMap.channel),thicknessMapUv:he&&g(S.thicknessMap.channel),alphaMapUv:Ue&&g(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Le||De),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(ve||Ue),fog:!!L,useFog:S.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ne,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:W,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:a.shadowMap.enabled&&D.length>0,shadowMapType:a.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ve&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===ut,decodeVideoTextureEmissive:Ee&&S.emissiveMap.isVideoTexture===!0&&at.getTransfer(S.emissiveMap.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Gn,flipSided:S.side===hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:we&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&S.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function m(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(a.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=_[S.type];let D;if(M){const P=ni[M];D=Lu.clone(P.uniforms)}else D=S.uniforms;return D}function E(S,M){let D;for(let P=0,U=u.length;P<U;P++){const L=u[P];if(L.cacheKey===M){D=L,++D.usedTimes;break}}return D===void 0&&(D=new fS(a,M,S,r),u.push(D)),D}function w(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:E,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:A}}function _S(){let a=new WeakMap;function e(s){return a.has(s)}function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function n(s){a.delete(s)}function i(s,o,l){a.get(s)[o]=l}function r(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function vS(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Gf(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Vf(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h,f,d,_,g,p){let m=a[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},a[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function o(h,f,d,_,g,p){const m=s(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,_,g,p){const m=s(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||vS),n.length>1&&n.sort(f||Gf),i.length>1&&i.sort(f||Gf)}function u(){for(let h=e,f=a.length;h<f;h++){const d=a[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function xS(){let a=new WeakMap;function e(n,i){const r=a.get(n);let s;return r===void 0?(s=new Vf,a.set(n,[s])):i>=r.length?(s=new Vf,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function yS(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new He};break;case"SpotLight":t={position:new Y,direction:new Y,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return a[e.id]=t,t}}}function SS(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let MS=0;function TS(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function ES(a){const e=new yS,t=SS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const i=new Y,r=new je,s=new je;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,x=0,y=0,v=0,E=0,w=0,b=0;c.sort(TS);for(let S=0,M=c.length;S<M;S++){const D=c[S],P=D.color,U=D.intensity,L=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=P.r*U,h+=P.g*U,f+=P.b*U;else if(D.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(D.sh.coefficients[O],U);b++}else if(D.isDirectionalLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,H=t.get(D);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=D.shadow.matrix,x++}n.directional[d]=O,d++}else if(D.isSpotLight){const O=e.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(P).multiplyScalar(U),O.distance=L,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,n.spot[g]=O;const K=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,K.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[g]=K.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=G,v++}g++}else if(D.isRectAreaLight){const O=e.get(D);O.color.copy(P).multiplyScalar(U),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=O,p++}else if(D.isPointLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){const K=D.shadow,H=t.get(D);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=G,n.pointShadowMatrix[_]=D.shadow.matrix,y++}n.point[_]=O,_++}else if(D.isHemisphereLight){const O=e.get(D);O.skyColor.copy(D.color).multiplyScalar(U),O.groundColor.copy(D.groundColor).multiplyScalar(U),n.hemi[m]=O,m++}}p>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==d||A.pointLength!==_||A.spotLength!==g||A.rectAreaLength!==p||A.hemiLength!==m||A.numDirectionalShadows!==x||A.numPointShadows!==y||A.numSpotShadows!==v||A.numSpotMaps!==E||A.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,A.directionalLength=d,A.pointLength=_,A.spotLength=g,A.rectAreaLength=p,A.hemiLength=m,A.numDirectionalShadows=x,A.numPointShadows=y,A.numSpotShadows=v,A.numSpotMaps=E,A.numLightProbes=b,n.version=MS++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const y=c[m];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),h++}else if(y.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),d++}else if(y.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),s.identity(),r.copy(y.matrixWorld),r.premultiply(p),s.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),_++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Hf(a){const e=new ES(a),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function s(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function bS(a){let e=new WeakMap;function t(i,r=0){const s=e.get(i);let o;return s===void 0?(o=new Hf(a),e.set(i,[o])):r>=s.length?(o=new Hf(a),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const AS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function RS(a,e,t){let n=new Ou;const i=new Qe,r=new Qe,s=new it,o=new rp({depthPacking:Gd}),l=new sp,c={},u=t.maxTextureSize,h={[wi]:hn,[hn]:wi,[Gn]:Gn},f=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:AS,fragmentShader:wS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Zn;_.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Rt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cd;let m=this.type;this.render=function(w,b,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=a.getRenderTarget(),M=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),P=a.state;P.setBlending(Zi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const U=m!==xi&&this.type===xi,L=m===xi&&this.type!==xi;for(let G=0,O=w.length;G<O;G++){const K=w[G],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const J=H.getFrameExtents();if(i.multiply(J),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/J.x),i.x=r.x*J.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/J.y),i.y=r.y*J.y,H.mapSize.y=r.y)),H.map===null||U===!0||L===!0){const F=this.type!==xi?{minFilter:rn,magFilter:rn}:{};H.map!==null&&H.map.dispose(),H.map=new tr(i.x,i.y,F),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}a.setRenderTarget(H.map),a.clear();const q=H.getViewportCount();for(let F=0;F<q;F++){const W=H.getViewport(F);s.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),P.viewport(s),H.updateMatrices(K,F),n=H.getFrustum(),v(b,A,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===xi&&x(H,A),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,a.setRenderTarget(S,M,D)};function x(w,b){const A=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new tr(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(b,null,A,f,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(b,null,A,d,g,null)}function y(w,b,A,S){let M=null;const D=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)M=D;else if(M=A.isPointLight===!0?l:o,a.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const P=M.uuid,U=b.uuid;let L=c[P];L===void 0&&(L={},c[P]=L);let G=L[U];G===void 0&&(G=M.clone(),L[U]=G,b.addEventListener("dispose",E)),M=G}if(M.visible=b.visible,M.wireframe=b.wireframe,S===xi?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const P=a.properties.get(M);P.light=A}return M}function v(w,b,A,S,M){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===xi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const U=e.update(w),L=w.material;if(Array.isArray(L)){const G=U.groups;for(let O=0,K=G.length;O<K;O++){const H=G[O],J=L[H.materialIndex];if(J&&J.visible){const q=y(w,J,S,M);w.onBeforeShadow(a,w,b,A,U,q,H),a.renderBufferDirect(A,null,U,q,w,H),w.onAfterShadow(a,w,b,A,U,q,H)}}}else if(L.visible){const G=y(w,L,S,M);w.onBeforeShadow(a,w,b,A,U,G,null),a.renderBufferDirect(A,null,U,G,w,null),w.onAfterShadow(a,w,b,A,U,G,null)}}const P=w.children;for(let U=0,L=P.length;U<L;U++)v(P[U],b,A,S,M)}function E(w){w.target.removeEventListener("dispose",E);for(const A in c){const S=c[A],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const CS={[mc]:gc,[_c]:yc,[vc]:Sc,[hs]:xc,[gc]:mc,[yc]:_c,[Sc]:vc,[xc]:hs};function PS(a,e){function t(){let B=!1;const he=new it;let ce=null;const Ue=new it(0,0,0,0);return{setMask:function(ue){ce!==ue&&!B&&(a.colorMask(ue,ue,ue,ue),ce=ue)},setLocked:function(ue){B=ue},setClear:function(ue,se,we,Fe,Oe){Oe===!0&&(ue*=Fe,se*=Fe,we*=Fe),he.set(ue,se,we,Fe),Ue.equals(he)===!1&&(a.clearColor(ue,se,we,Fe),Ue.copy(he))},reset:function(){B=!1,ce=null,Ue.set(-1,0,0,0)}}}function n(){let B=!1,he=!1,ce=null,Ue=null,ue=null;return{setReversed:function(se){if(he!==se){const we=e.get("EXT_clip_control");se?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),he=se;const Fe=ue;ue=null,this.setClear(Fe)}},getReversed:function(){return he},setTest:function(se){se?X(a.DEPTH_TEST):ne(a.DEPTH_TEST)},setMask:function(se){ce!==se&&!B&&(a.depthMask(se),ce=se)},setFunc:function(se){if(he&&(se=CS[se]),Ue!==se){switch(se){case mc:a.depthFunc(a.NEVER);break;case gc:a.depthFunc(a.ALWAYS);break;case _c:a.depthFunc(a.LESS);break;case hs:a.depthFunc(a.LEQUAL);break;case vc:a.depthFunc(a.EQUAL);break;case xc:a.depthFunc(a.GEQUAL);break;case yc:a.depthFunc(a.GREATER);break;case Sc:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ue=se}},setLocked:function(se){B=se},setClear:function(se){ue!==se&&(he&&(se=1-se),a.clearDepth(se),ue=se)},reset:function(){B=!1,ce=null,Ue=null,ue=null,he=!1}}}function i(){let B=!1,he=null,ce=null,Ue=null,ue=null,se=null,we=null,Fe=null,Oe=null;return{setTest:function(We){B||(We?X(a.STENCIL_TEST):ne(a.STENCIL_TEST))},setMask:function(We){he!==We&&!B&&(a.stencilMask(We),he=We)},setFunc:function(We,ht,dt){(ce!==We||Ue!==ht||ue!==dt)&&(a.stencilFunc(We,ht,dt),ce=We,Ue=ht,ue=dt)},setOp:function(We,ht,dt){(se!==We||we!==ht||Fe!==dt)&&(a.stencilOp(We,ht,dt),se=We,we=ht,Fe=dt)},setLocked:function(We){B=We},setClear:function(We){Oe!==We&&(a.clearStencil(We),Oe=We)},reset:function(){B=!1,he=null,ce=null,Ue=null,ue=null,se=null,we=null,Fe=null,Oe=null}}}const r=new t,s=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,p=null,m=null,x=null,y=null,v=null,E=null,w=null,b=new He(0,0,0),A=0,S=!1,M=null,D=null,P=null,U=null,L=null;const G=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,K=0;const H=a.getParameter(a.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=K>=2);let J=null,q={};const F=a.getParameter(a.SCISSOR_BOX),W=a.getParameter(a.VIEWPORT),ee=new it().fromArray(F),N=new it().fromArray(W);function k(B,he,ce,Ue){const ue=new Uint8Array(4),se=a.createTexture();a.bindTexture(B,se),a.texParameteri(B,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(B,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let we=0;we<ce;we++)B===a.TEXTURE_3D||B===a.TEXTURE_2D_ARRAY?a.texImage3D(he,0,a.RGBA,1,1,Ue,0,a.RGBA,a.UNSIGNED_BYTE,ue):a.texImage2D(he+we,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ue);return se}const ie={};ie[a.TEXTURE_2D]=k(a.TEXTURE_2D,a.TEXTURE_2D,1),ie[a.TEXTURE_CUBE_MAP]=k(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[a.TEXTURE_2D_ARRAY]=k(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ie[a.TEXTURE_3D]=k(a.TEXTURE_3D,a.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),X(a.DEPTH_TEST),s.setFunc(hs),Re(!1),Le(Ch),X(a.CULL_FACE),I(Zi);function X(B){u[B]!==!0&&(a.enable(B),u[B]=!0)}function ne(B){u[B]!==!1&&(a.disable(B),u[B]=!1)}function Se(B,he){return h[B]!==he?(a.bindFramebuffer(B,he),h[B]=he,B===a.DRAW_FRAMEBUFFER&&(h[a.FRAMEBUFFER]=he),B===a.FRAMEBUFFER&&(h[a.DRAW_FRAMEBUFFER]=he),!0):!1}function _e(B,he){let ce=d,Ue=!1;if(B){ce=f.get(he),ce===void 0&&(ce=[],f.set(he,ce));const ue=B.textures;if(ce.length!==ue.length||ce[0]!==a.COLOR_ATTACHMENT0){for(let se=0,we=ue.length;se<we;se++)ce[se]=a.COLOR_ATTACHMENT0+se;ce.length=ue.length,Ue=!0}}else ce[0]!==a.BACK&&(ce[0]=a.BACK,Ue=!0);Ue&&a.drawBuffers(ce)}function ve(B){return _!==B?(a.useProgram(B),_=B,!0):!1}const fe={[_r]:a.FUNC_ADD,[Om]:a.FUNC_SUBTRACT,[Bm]:a.FUNC_REVERSE_SUBTRACT};fe[km]=a.MIN,fe[zm]=a.MAX;const Ie={[Gm]:a.ZERO,[Vm]:a.ONE,[Hm]:a.SRC_COLOR,[dc]:a.SRC_ALPHA,[Km]:a.SRC_ALPHA_SATURATE,[qm]:a.DST_COLOR,[Xm]:a.DST_ALPHA,[Wm]:a.ONE_MINUS_SRC_COLOR,[pc]:a.ONE_MINUS_SRC_ALPHA,[jm]:a.ONE_MINUS_DST_COLOR,[Ym]:a.ONE_MINUS_DST_ALPHA,[Zm]:a.CONSTANT_COLOR,[Jm]:a.ONE_MINUS_CONSTANT_COLOR,[Qm]:a.CONSTANT_ALPHA,[$m]:a.ONE_MINUS_CONSTANT_ALPHA};function I(B,he,ce,Ue,ue,se,we,Fe,Oe,We){if(B===Zi){g===!0&&(ne(a.BLEND),g=!1);return}if(g===!1&&(X(a.BLEND),g=!0),B!==Nm){if(B!==p||We!==S){if((m!==_r||v!==_r)&&(a.blendEquation(a.FUNC_ADD),m=_r,v=_r),We)switch(B){case is:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ph:a.blendFunc(a.ONE,a.ONE);break;case Dh:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Uh:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case is:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ph:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Dh:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Uh:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,y=null,E=null,w=null,b.set(0,0,0),A=0,p=B,S=We}return}ue=ue||he,se=se||ce,we=we||Ue,(he!==m||ue!==v)&&(a.blendEquationSeparate(fe[he],fe[ue]),m=he,v=ue),(ce!==x||Ue!==y||se!==E||we!==w)&&(a.blendFuncSeparate(Ie[ce],Ie[Ue],Ie[se],Ie[we]),x=ce,y=Ue,E=se,w=we),(Fe.equals(b)===!1||Oe!==A)&&(a.blendColor(Fe.r,Fe.g,Fe.b,Oe),b.copy(Fe),A=Oe),p=B,S=!1}function ke(B,he){B.side===Gn?ne(a.CULL_FACE):X(a.CULL_FACE);let ce=B.side===hn;he&&(ce=!ce),Re(ce),B.blending===is&&B.transparent===!1?I(Zi):I(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const Ue=B.stencilWrite;o.setTest(Ue),Ue&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ee(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?X(a.SAMPLE_ALPHA_TO_COVERAGE):ne(a.SAMPLE_ALPHA_TO_COVERAGE)}function Re(B){M!==B&&(B?a.frontFace(a.CW):a.frontFace(a.CCW),M=B)}function Le(B){B!==Im?(X(a.CULL_FACE),B!==D&&(B===Ch?a.cullFace(a.BACK):B===Lm?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ne(a.CULL_FACE),D=B}function le(B){B!==P&&(O&&a.lineWidth(B),P=B)}function Ee(B,he,ce){B?(X(a.POLYGON_OFFSET_FILL),(U!==he||L!==ce)&&(a.polygonOffset(he,ce),U=he,L=ce)):ne(a.POLYGON_OFFSET_FILL)}function de(B){B?X(a.SCISSOR_TEST):ne(a.SCISSOR_TEST)}function te(B){B===void 0&&(B=a.TEXTURE0+G-1),J!==B&&(a.activeTexture(B),J=B)}function De(B,he,ce){ce===void 0&&(J===null?ce=a.TEXTURE0+G-1:ce=J);let Ue=q[ce];Ue===void 0&&(Ue={type:void 0,texture:void 0},q[ce]=Ue),(Ue.type!==B||Ue.texture!==he)&&(J!==ce&&(a.activeTexture(ce),J=ce),a.bindTexture(B,he||ie[B]),Ue.type=B,Ue.texture=he)}function C(){const B=q[J];B!==void 0&&B.type!==void 0&&(a.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function T(){try{a.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function z(){try{a.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{a.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(){try{a.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{a.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{a.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{a.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{a.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{a.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{a.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(B){ee.equals(B)===!1&&(a.scissor(B.x,B.y,B.z,B.w),ee.copy(B))}function ge(B){N.equals(B)===!1&&(a.viewport(B.x,B.y,B.z,B.w),N.copy(B))}function Ae(B,he){let ce=c.get(he);ce===void 0&&(ce=new WeakMap,c.set(he,ce));let Ue=ce.get(B);Ue===void 0&&(Ue=a.getUniformBlockIndex(he,B.name),ce.set(B,Ue))}function ye(B,he){const Ue=c.get(he).get(B);l.get(he)!==Ue&&(a.uniformBlockBinding(he,Ue,B.__bindingPointIndex),l.set(he,Ue))}function ze(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),s.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},J=null,q={},h={},f=new WeakMap,d=[],_=null,g=!1,p=null,m=null,x=null,y=null,v=null,E=null,w=null,b=new He(0,0,0),A=0,S=!1,M=null,D=null,P=null,U=null,L=null,ee.set(0,0,a.canvas.width,a.canvas.height),N.set(0,0,a.canvas.width,a.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:X,disable:ne,bindFramebuffer:Se,drawBuffers:_e,useProgram:ve,setBlending:I,setMaterial:ke,setFlipSided:Re,setCullFace:Le,setLineWidth:le,setPolygonOffset:Ee,setScissorTest:de,activeTexture:te,bindTexture:De,unbindTexture:C,compressedTexImage2D:T,compressedTexImage3D:z,texImage2D:be,texImage3D:oe,updateUBOMapping:Ae,uniformBlockBinding:ye,texStorage2D:me,texStorage3D:Me,texSubImage2D:ae,texSubImage3D:$,compressedTexSubImage2D:Q,compressedTexSubImage3D:xe,scissor:pe,viewport:ge,reset:ze}}function DS(a,e,t,n,i,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,T){return d?new OffscreenCanvas(C,T):va("canvas")}function g(C,T,z){let ae=1;const $=De(C);if(($.width>z||$.height>z)&&(ae=z/Math.max($.width,$.height)),ae<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(ae*$.width),xe=Math.floor(ae*$.height);h===void 0&&(h=_(Q,xe));const me=T?_(Q,xe):h;return me.width=Q,me.height=xe,me.getContext("2d").drawImage(C,0,0,Q,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Q+"x"+xe+")."),me}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function p(C){return C.generateMipmaps}function m(C){a.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?a.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function y(C,T,z,ae,$=!1){if(C!==null){if(a[C]!==void 0)return a[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=T;if(T===a.RED&&(z===a.FLOAT&&(Q=a.R32F),z===a.HALF_FLOAT&&(Q=a.R16F),z===a.UNSIGNED_BYTE&&(Q=a.R8)),T===a.RED_INTEGER&&(z===a.UNSIGNED_BYTE&&(Q=a.R8UI),z===a.UNSIGNED_SHORT&&(Q=a.R16UI),z===a.UNSIGNED_INT&&(Q=a.R32UI),z===a.BYTE&&(Q=a.R8I),z===a.SHORT&&(Q=a.R16I),z===a.INT&&(Q=a.R32I)),T===a.RG&&(z===a.FLOAT&&(Q=a.RG32F),z===a.HALF_FLOAT&&(Q=a.RG16F),z===a.UNSIGNED_BYTE&&(Q=a.RG8)),T===a.RG_INTEGER&&(z===a.UNSIGNED_BYTE&&(Q=a.RG8UI),z===a.UNSIGNED_SHORT&&(Q=a.RG16UI),z===a.UNSIGNED_INT&&(Q=a.RG32UI),z===a.BYTE&&(Q=a.RG8I),z===a.SHORT&&(Q=a.RG16I),z===a.INT&&(Q=a.RG32I)),T===a.RGB_INTEGER&&(z===a.UNSIGNED_BYTE&&(Q=a.RGB8UI),z===a.UNSIGNED_SHORT&&(Q=a.RGB16UI),z===a.UNSIGNED_INT&&(Q=a.RGB32UI),z===a.BYTE&&(Q=a.RGB8I),z===a.SHORT&&(Q=a.RGB16I),z===a.INT&&(Q=a.RGB32I)),T===a.RGBA_INTEGER&&(z===a.UNSIGNED_BYTE&&(Q=a.RGBA8UI),z===a.UNSIGNED_SHORT&&(Q=a.RGBA16UI),z===a.UNSIGNED_INT&&(Q=a.RGBA32UI),z===a.BYTE&&(Q=a.RGBA8I),z===a.SHORT&&(Q=a.RGBA16I),z===a.INT&&(Q=a.RGBA32I)),T===a.RGB&&z===a.UNSIGNED_INT_5_9_9_9_REV&&(Q=a.RGB9_E5),T===a.RGBA){const xe=$?Fo:at.getTransfer(ae);z===a.FLOAT&&(Q=a.RGBA32F),z===a.HALF_FLOAT&&(Q=a.RGBA16F),z===a.UNSIGNED_BYTE&&(Q=xe===ut?a.SRGB8_ALPHA8:a.RGBA8),z===a.UNSIGNED_SHORT_4_4_4_4&&(Q=a.RGBA4),z===a.UNSIGNED_SHORT_5_5_5_1&&(Q=a.RGB5_A1)}return(Q===a.R16F||Q===a.R32F||Q===a.RG16F||Q===a.RG32F||Q===a.RGBA16F||Q===a.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(C,T){let z;return C?T===null||T===Ar||T===da?z=a.DEPTH24_STENCIL8:T===Wn?z=a.DEPTH32F_STENCIL8:T===fa&&(z=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ar||T===da?z=a.DEPTH_COMPONENT24:T===Wn?z=a.DEPTH_COMPONENT32F:T===fa&&(z=a.DEPTH_COMPONENT16),z}function E(C,T){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==rn&&C.minFilter!==nn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function w(C){const T=C.target;T.removeEventListener("dispose",w),A(T),T.isVideoTexture&&u.delete(T)}function b(C){const T=C.target;T.removeEventListener("dispose",b),M(T)}function A(C){const T=n.get(C);if(T.__webglInit===void 0)return;const z=C.source,ae=f.get(z);if(ae){const $=ae[T.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(C),Object.keys(ae).length===0&&f.delete(z)}n.remove(C)}function S(C){const T=n.get(C);a.deleteTexture(T.__webglTexture);const z=C.source,ae=f.get(z);delete ae[T.__cacheKey],s.memory.textures--}function M(C){const T=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(T.__webglFramebuffer[ae]))for(let $=0;$<T.__webglFramebuffer[ae].length;$++)a.deleteFramebuffer(T.__webglFramebuffer[ae][$]);else a.deleteFramebuffer(T.__webglFramebuffer[ae]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[ae])}else{if(Array.isArray(T.__webglFramebuffer))for(let ae=0;ae<T.__webglFramebuffer.length;ae++)a.deleteFramebuffer(T.__webglFramebuffer[ae]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ae=0;ae<T.__webglColorRenderbuffer.length;ae++)T.__webglColorRenderbuffer[ae]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[ae]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const z=C.textures;for(let ae=0,$=z.length;ae<$;ae++){const Q=n.get(z[ae]);Q.__webglTexture&&(a.deleteTexture(Q.__webglTexture),s.memory.textures--),n.remove(z[ae])}n.remove(C)}let D=0;function P(){D=0}function U(){const C=D;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function L(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function G(C,T){const z=n.get(C);if(C.isVideoTexture&&de(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const ae=C.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(z,C,T);return}}t.bindTexture(a.TEXTURE_2D,z.__webglTexture,a.TEXTURE0+T)}function O(C,T){const z=n.get(C);if(C.version>0&&z.__version!==C.version){ie(z,C,T);return}t.bindTexture(a.TEXTURE_2D_ARRAY,z.__webglTexture,a.TEXTURE0+T)}function K(C,T){const z=n.get(C);if(C.version>0&&z.__version!==C.version){ie(z,C,T);return}t.bindTexture(a.TEXTURE_3D,z.__webglTexture,a.TEXTURE0+T)}function H(C,T){const z=n.get(C);if(C.version>0&&z.__version!==C.version){X(z,C,T);return}t.bindTexture(a.TEXTURE_CUBE_MAP,z.__webglTexture,a.TEXTURE0+T)}const J={[ps]:a.REPEAT,[Wi]:a.CLAMP_TO_EDGE,[Io]:a.MIRRORED_REPEAT},q={[rn]:a.NEAREST,[Ud]:a.NEAREST_MIPMAP_NEAREST,[Qs]:a.NEAREST_MIPMAP_LINEAR,[nn]:a.LINEAR,[_o]:a.LINEAR_MIPMAP_NEAREST,[Ti]:a.LINEAR_MIPMAP_LINEAR},F={[_g]:a.NEVER,[Tg]:a.ALWAYS,[vg]:a.LESS,[Hd]:a.LEQUAL,[xg]:a.EQUAL,[Mg]:a.GEQUAL,[yg]:a.GREATER,[Sg]:a.NOTEQUAL};function W(C,T){if(T.type===Wn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===nn||T.magFilter===_o||T.magFilter===Qs||T.magFilter===Ti||T.minFilter===nn||T.minFilter===_o||T.minFilter===Qs||T.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(C,a.TEXTURE_WRAP_S,J[T.wrapS]),a.texParameteri(C,a.TEXTURE_WRAP_T,J[T.wrapT]),(C===a.TEXTURE_3D||C===a.TEXTURE_2D_ARRAY)&&a.texParameteri(C,a.TEXTURE_WRAP_R,J[T.wrapR]),a.texParameteri(C,a.TEXTURE_MAG_FILTER,q[T.magFilter]),a.texParameteri(C,a.TEXTURE_MIN_FILTER,q[T.minFilter]),T.compareFunction&&(a.texParameteri(C,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(C,a.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===rn||T.minFilter!==Qs&&T.minFilter!==Ti||T.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");a.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ee(C,T){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",w));const ae=T.source;let $=f.get(ae);$===void 0&&($={},f.set(ae,$));const Q=L(T);if(Q!==C.__cacheKey){$[Q]===void 0&&($[Q]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,z=!0),$[Q].usedTimes++;const xe=$[C.__cacheKey];xe!==void 0&&($[C.__cacheKey].usedTimes--,xe.usedTimes===0&&S(T)),C.__cacheKey=Q,C.__webglTexture=$[Q].texture}return z}function N(C,T,z){return Math.floor(Math.floor(C/z)/T)}function k(C,T,z,ae){const Q=C.updateRanges;if(Q.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,z,ae,T.data);else{Q.sort((oe,pe)=>oe.start-pe.start);let xe=0;for(let oe=1;oe<Q.length;oe++){const pe=Q[xe],ge=Q[oe],Ae=pe.start+pe.count,ye=N(ge.start,T.width,4),ze=N(pe.start,T.width,4);ge.start<=Ae+1&&ye===ze&&N(ge.start+ge.count-1,T.width,4)===ye?pe.count=Math.max(pe.count,ge.start+ge.count-pe.start):(++xe,Q[xe]=ge)}Q.length=xe+1;const me=a.getParameter(a.UNPACK_ROW_LENGTH),Me=a.getParameter(a.UNPACK_SKIP_PIXELS),be=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let oe=0,pe=Q.length;oe<pe;oe++){const ge=Q[oe],Ae=Math.floor(ge.start/4),ye=Math.ceil(ge.count/4),ze=Ae%T.width,B=Math.floor(Ae/T.width),he=ye,ce=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ze),a.pixelStorei(a.UNPACK_SKIP_ROWS,B),t.texSubImage2D(a.TEXTURE_2D,0,ze,B,he,ce,z,ae,T.data)}C.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,me),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Me),a.pixelStorei(a.UNPACK_SKIP_ROWS,be)}}function ie(C,T,z){let ae=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ae=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ae=a.TEXTURE_3D);const $=ee(C,T),Q=T.source;t.bindTexture(ae,C.__webglTexture,a.TEXTURE0+z);const xe=n.get(Q);if(Q.version!==xe.__version||$===!0){t.activeTexture(a.TEXTURE0+z);const me=at.getPrimaries(at.workingColorSpace),Me=T.colorSpace===Hi?null:at.getPrimaries(T.colorSpace),be=T.colorSpace===Hi||me===Me?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let oe=g(T.image,!1,i.maxTextureSize);oe=te(T,oe);const pe=r.convert(T.format,T.colorSpace),ge=r.convert(T.type);let Ae=y(T.internalFormat,pe,ge,T.colorSpace,T.isVideoTexture);W(ae,T);let ye;const ze=T.mipmaps,B=T.isVideoTexture!==!0,he=xe.__version===void 0||$===!0,ce=Q.dataReady,Ue=E(T,oe);if(T.isDepthTexture)Ae=v(T.format===ma,T.type),he&&(B?t.texStorage2D(a.TEXTURE_2D,1,Ae,oe.width,oe.height):t.texImage2D(a.TEXTURE_2D,0,Ae,oe.width,oe.height,0,pe,ge,null));else if(T.isDataTexture)if(ze.length>0){B&&he&&t.texStorage2D(a.TEXTURE_2D,Ue,Ae,ze[0].width,ze[0].height);for(let ue=0,se=ze.length;ue<se;ue++)ye=ze[ue],B?ce&&t.texSubImage2D(a.TEXTURE_2D,ue,0,0,ye.width,ye.height,pe,ge,ye.data):t.texImage2D(a.TEXTURE_2D,ue,Ae,ye.width,ye.height,0,pe,ge,ye.data);T.generateMipmaps=!1}else B?(he&&t.texStorage2D(a.TEXTURE_2D,Ue,Ae,oe.width,oe.height),ce&&k(T,oe,pe,ge)):t.texImage2D(a.TEXTURE_2D,0,Ae,oe.width,oe.height,0,pe,ge,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){B&&he&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ue,Ae,ze[0].width,ze[0].height,oe.depth);for(let ue=0,se=ze.length;ue<se;ue++)if(ye=ze[ue],T.format!==Dn)if(pe!==null)if(B){if(ce)if(T.layerUpdates.size>0){const we=xf(ye.width,ye.height,T.format,T.type);for(const Fe of T.layerUpdates){const Oe=ye.data.subarray(Fe*we/ye.data.BYTES_PER_ELEMENT,(Fe+1)*we/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,Fe,ye.width,ye.height,1,pe,Oe)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,0,ye.width,ye.height,oe.depth,pe,ye.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ue,Ae,ye.width,ye.height,oe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ce&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,0,ye.width,ye.height,oe.depth,pe,ge,ye.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ue,Ae,ye.width,ye.height,oe.depth,0,pe,ge,ye.data)}else{B&&he&&t.texStorage2D(a.TEXTURE_2D,Ue,Ae,ze[0].width,ze[0].height);for(let ue=0,se=ze.length;ue<se;ue++)ye=ze[ue],T.format!==Dn?pe!==null?B?ce&&t.compressedTexSubImage2D(a.TEXTURE_2D,ue,0,0,ye.width,ye.height,pe,ye.data):t.compressedTexImage2D(a.TEXTURE_2D,ue,Ae,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ce&&t.texSubImage2D(a.TEXTURE_2D,ue,0,0,ye.width,ye.height,pe,ge,ye.data):t.texImage2D(a.TEXTURE_2D,ue,Ae,ye.width,ye.height,0,pe,ge,ye.data)}else if(T.isDataArrayTexture)if(B){if(he&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ue,Ae,oe.width,oe.height,oe.depth),ce)if(T.layerUpdates.size>0){const ue=xf(oe.width,oe.height,T.format,T.type);for(const se of T.layerUpdates){const we=oe.data.subarray(se*ue/oe.data.BYTES_PER_ELEMENT,(se+1)*ue/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,se,oe.width,oe.height,1,pe,ge,we)}T.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,pe,ge,oe.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Ae,oe.width,oe.height,oe.depth,0,pe,ge,oe.data);else if(T.isData3DTexture)B?(he&&t.texStorage3D(a.TEXTURE_3D,Ue,Ae,oe.width,oe.height,oe.depth),ce&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,pe,ge,oe.data)):t.texImage3D(a.TEXTURE_3D,0,Ae,oe.width,oe.height,oe.depth,0,pe,ge,oe.data);else if(T.isFramebufferTexture){if(he)if(B)t.texStorage2D(a.TEXTURE_2D,Ue,Ae,oe.width,oe.height);else{let ue=oe.width,se=oe.height;for(let we=0;we<Ue;we++)t.texImage2D(a.TEXTURE_2D,we,Ae,ue,se,0,pe,ge,null),ue>>=1,se>>=1}}else if(ze.length>0){if(B&&he){const ue=De(ze[0]);t.texStorage2D(a.TEXTURE_2D,Ue,Ae,ue.width,ue.height)}for(let ue=0,se=ze.length;ue<se;ue++)ye=ze[ue],B?ce&&t.texSubImage2D(a.TEXTURE_2D,ue,0,0,pe,ge,ye):t.texImage2D(a.TEXTURE_2D,ue,Ae,pe,ge,ye);T.generateMipmaps=!1}else if(B){if(he){const ue=De(oe);t.texStorage2D(a.TEXTURE_2D,Ue,Ae,ue.width,ue.height)}ce&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,pe,ge,oe)}else t.texImage2D(a.TEXTURE_2D,0,Ae,pe,ge,oe);p(T)&&m(ae),xe.__version=Q.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function X(C,T,z){if(T.image.length!==6)return;const ae=ee(C,T),$=T.source;t.bindTexture(a.TEXTURE_CUBE_MAP,C.__webglTexture,a.TEXTURE0+z);const Q=n.get($);if($.version!==Q.__version||ae===!0){t.activeTexture(a.TEXTURE0+z);const xe=at.getPrimaries(at.workingColorSpace),me=T.colorSpace===Hi?null:at.getPrimaries(T.colorSpace),Me=T.colorSpace===Hi||xe===me?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const be=T.isCompressedTexture||T.image[0].isCompressedTexture,oe=T.image[0]&&T.image[0].isDataTexture,pe=[];for(let se=0;se<6;se++)!be&&!oe?pe[se]=g(T.image[se],!0,i.maxCubemapSize):pe[se]=oe?T.image[se].image:T.image[se],pe[se]=te(T,pe[se]);const ge=pe[0],Ae=r.convert(T.format,T.colorSpace),ye=r.convert(T.type),ze=y(T.internalFormat,Ae,ye,T.colorSpace),B=T.isVideoTexture!==!0,he=Q.__version===void 0||ae===!0,ce=$.dataReady;let Ue=E(T,ge);W(a.TEXTURE_CUBE_MAP,T);let ue;if(be){B&&he&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Ue,ze,ge.width,ge.height);for(let se=0;se<6;se++){ue=pe[se].mipmaps;for(let we=0;we<ue.length;we++){const Fe=ue[we];T.format!==Dn?Ae!==null?B?ce&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,0,0,Fe.width,Fe.height,Ae,Fe.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,ze,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ce&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,0,0,Fe.width,Fe.height,Ae,ye,Fe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,ze,Fe.width,Fe.height,0,Ae,ye,Fe.data)}}}else{if(ue=T.mipmaps,B&&he){ue.length>0&&Ue++;const se=De(pe[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Ue,ze,se.width,se.height)}for(let se=0;se<6;se++)if(oe){B?ce&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,pe[se].width,pe[se].height,Ae,ye,pe[se].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ze,pe[se].width,pe[se].height,0,Ae,ye,pe[se].data);for(let we=0;we<ue.length;we++){const Oe=ue[we].image[se].image;B?ce&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,0,0,Oe.width,Oe.height,Ae,ye,Oe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,ze,Oe.width,Oe.height,0,Ae,ye,Oe.data)}}else{B?ce&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ae,ye,pe[se]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ze,Ae,ye,pe[se]);for(let we=0;we<ue.length;we++){const Fe=ue[we];B?ce&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,0,0,Ae,ye,Fe.image[se]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,ze,Ae,ye,Fe.image[se])}}}p(T)&&m(a.TEXTURE_CUBE_MAP),Q.__version=$.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ne(C,T,z,ae,$,Q){const xe=r.convert(z.format,z.colorSpace),me=r.convert(z.type),Me=y(z.internalFormat,xe,me,z.colorSpace),be=n.get(T),oe=n.get(z);if(oe.__renderTarget=T,!be.__hasExternalTextures){const pe=Math.max(1,T.width>>Q),ge=Math.max(1,T.height>>Q);$===a.TEXTURE_3D||$===a.TEXTURE_2D_ARRAY?t.texImage3D($,Q,Me,pe,ge,T.depth,0,xe,me,null):t.texImage2D($,Q,Me,pe,ge,0,xe,me,null)}t.bindFramebuffer(a.FRAMEBUFFER,C),Ee(T)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ae,$,oe.__webglTexture,0,le(T)):($===a.TEXTURE_2D||$>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ae,$,oe.__webglTexture,Q),t.bindFramebuffer(a.FRAMEBUFFER,null)}function Se(C,T,z){if(a.bindRenderbuffer(a.RENDERBUFFER,C),T.depthBuffer){const ae=T.depthTexture,$=ae&&ae.isDepthTexture?ae.type:null,Q=v(T.stencilBuffer,$),xe=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,me=le(T);Ee(T)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,me,Q,T.width,T.height):z?a.renderbufferStorageMultisample(a.RENDERBUFFER,me,Q,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,Q,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,xe,a.RENDERBUFFER,C)}else{const ae=T.textures;for(let $=0;$<ae.length;$++){const Q=ae[$],xe=r.convert(Q.format,Q.colorSpace),me=r.convert(Q.type),Me=y(Q.internalFormat,xe,me,Q.colorSpace),be=le(T);z&&Ee(T)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,be,Me,T.width,T.height):Ee(T)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,be,Me,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,Me,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function _e(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=n.get(T.depthTexture);ae.__renderTarget=T,(!ae.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),G(T.depthTexture,0);const $=ae.__webglTexture,Q=le(T);if(T.depthTexture.format===pa)Ee(T)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,$,0,Q):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,$,0);else if(T.depthTexture.format===ma)Ee(T)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,$,0,Q):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ve(C){const T=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const ae=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ae){const $=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ae.removeEventListener("dispose",$)};ae.addEventListener("dispose",$),T.__depthDisposeCallback=$}T.__boundDepthTexture=ae}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const ae=C.texture.mipmaps;ae&&ae.length>0?_e(T.__webglFramebuffer[0],C):_e(T.__webglFramebuffer,C)}else if(z){T.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[ae]),T.__webglDepthbuffer[ae]===void 0)T.__webglDepthbuffer[ae]=a.createRenderbuffer(),Se(T.__webglDepthbuffer[ae],C,!1);else{const $=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer[ae];a.bindRenderbuffer(a.RENDERBUFFER,Q),a.framebufferRenderbuffer(a.FRAMEBUFFER,$,a.RENDERBUFFER,Q)}}else{const ae=C.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),Se(T.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Q),a.framebufferRenderbuffer(a.FRAMEBUFFER,$,a.RENDERBUFFER,Q)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function fe(C,T,z){const ae=n.get(C);T!==void 0&&ne(ae.__webglFramebuffer,C,C.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),z!==void 0&&ve(C)}function Ie(C){const T=C.texture,z=n.get(C),ae=n.get(T);C.addEventListener("dispose",b);const $=C.textures,Q=C.isWebGLCubeRenderTarget===!0,xe=$.length>1;if(xe||(ae.__webglTexture===void 0&&(ae.__webglTexture=a.createTexture()),ae.__version=T.version,s.memory.textures++),Q){z.__webglFramebuffer=[];for(let me=0;me<6;me++)if(T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer[me]=[];for(let Me=0;Me<T.mipmaps.length;Me++)z.__webglFramebuffer[me][Me]=a.createFramebuffer()}else z.__webglFramebuffer[me]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer=[];for(let me=0;me<T.mipmaps.length;me++)z.__webglFramebuffer[me]=a.createFramebuffer()}else z.__webglFramebuffer=a.createFramebuffer();if(xe)for(let me=0,Me=$.length;me<Me;me++){const be=n.get($[me]);be.__webglTexture===void 0&&(be.__webglTexture=a.createTexture(),s.memory.textures++)}if(C.samples>0&&Ee(C)===!1){z.__webglMultisampledFramebuffer=a.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let me=0;me<$.length;me++){const Me=$[me];z.__webglColorRenderbuffer[me]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,z.__webglColorRenderbuffer[me]);const be=r.convert(Me.format,Me.colorSpace),oe=r.convert(Me.type),pe=y(Me.internalFormat,be,oe,Me.colorSpace,C.isXRRenderTarget===!0),ge=le(C);a.renderbufferStorageMultisample(a.RENDERBUFFER,ge,pe,C.width,C.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.RENDERBUFFER,z.__webglColorRenderbuffer[me])}a.bindRenderbuffer(a.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=a.createRenderbuffer(),Se(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Q){t.bindTexture(a.TEXTURE_CUBE_MAP,ae.__webglTexture),W(a.TEXTURE_CUBE_MAP,T);for(let me=0;me<6;me++)if(T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)ne(z.__webglFramebuffer[me][Me],C,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+me,Me);else ne(z.__webglFramebuffer[me],C,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);p(T)&&m(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let me=0,Me=$.length;me<Me;me++){const be=$[me],oe=n.get(be);t.bindTexture(a.TEXTURE_2D,oe.__webglTexture),W(a.TEXTURE_2D,be),ne(z.__webglFramebuffer,C,be,a.COLOR_ATTACHMENT0+me,a.TEXTURE_2D,0),p(be)&&m(a.TEXTURE_2D)}t.unbindTexture()}else{let me=a.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(me,ae.__webglTexture),W(me,T),T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)ne(z.__webglFramebuffer[Me],C,T,a.COLOR_ATTACHMENT0,me,Me);else ne(z.__webglFramebuffer,C,T,a.COLOR_ATTACHMENT0,me,0);p(T)&&m(me),t.unbindTexture()}C.depthBuffer&&ve(C)}function I(C){const T=C.textures;for(let z=0,ae=T.length;z<ae;z++){const $=T[z];if(p($)){const Q=x(C),xe=n.get($).__webglTexture;t.bindTexture(Q,xe),m(Q),t.unbindTexture()}}}const ke=[],Re=[];function Le(C){if(C.samples>0){if(Ee(C)===!1){const T=C.textures,z=C.width,ae=C.height;let $=a.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,xe=n.get(C),me=T.length>1;if(me)for(let be=0;be<T.length;be++)t.bindFramebuffer(a.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+be,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,xe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+be,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Me=C.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let be=0;be<T.length;be++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=a.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=a.STENCIL_BUFFER_BIT)),me){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,xe.__webglColorRenderbuffer[be]);const oe=n.get(T[be]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,oe,0)}a.blitFramebuffer(0,0,z,ae,0,0,z,ae,$,a.NEAREST),l===!0&&(ke.length=0,Re.length=0,ke.push(a.COLOR_ATTACHMENT0+be),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ke.push(Q),Re.push(Q),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Re)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),me)for(let be=0;be<T.length;be++){t.bindFramebuffer(a.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+be,a.RENDERBUFFER,xe.__webglColorRenderbuffer[be]);const oe=n.get(T[be]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,xe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+be,a.TEXTURE_2D,oe,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const T=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function le(C){return Math.min(i.maxSamples,C.samples)}function Ee(C){const T=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function de(C){const T=s.render.frame;u.get(C)!==T&&(u.set(C,T),C.update())}function te(C,T){const z=C.colorSpace,ae=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==an&&z!==Hi&&(at.getTransfer(z)===ut?(ae!==Dn||$!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),T}function De(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=G,this.setTexture2DArray=O,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=fe,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Ee}function US(a,e){function t(n,i=Hi){let r;const s=at.getTransfer(i);if(n===li)return a.UNSIGNED_BYTE;if(n===bu)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Au)return a.UNSIGNED_SHORT_5_5_5_1;if(n===Fd)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===Id)return a.BYTE;if(n===Ld)return a.SHORT;if(n===fa)return a.UNSIGNED_SHORT;if(n===Eu)return a.INT;if(n===Ar)return a.UNSIGNED_INT;if(n===Wn)return a.FLOAT;if(n===As)return a.HALF_FLOAT;if(n===Nd)return a.ALPHA;if(n===Od)return a.RGB;if(n===Dn)return a.RGBA;if(n===pa)return a.DEPTH_COMPONENT;if(n===ma)return a.DEPTH_STENCIL;if(n===wu)return a.RED;if(n===Ru)return a.RED_INTEGER;if(n===Bd)return a.RG;if(n===Cu)return a.RG_INTEGER;if(n===Pu)return a.RGBA_INTEGER;if(n===vo||n===xo||n===yo||n===So)if(s===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ec||n===bc||n===Ac||n===wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===Cc||n===Pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rc||n===Cc)return s===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dc||n===Uc||n===Ic||n===Lc||n===Fc||n===Nc||n===Oc||n===Bc||n===kc||n===zc||n===Gc||n===Vc||n===Hc||n===Wc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ic)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wc)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mo||n===Xc||n===Yc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Mo)return s===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kd||n===qc||n===jc||n===Kc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===da?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}const IS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Pt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ri({vertexShader:IS,fragmentShader:LS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new Jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NS extends Rr{constructor(e,t){super();const n=this;let i=null,r=1,s=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new FS,p=t.getContextAttributes();let m=null,x=null;const y=[],v=[],E=new Qe;let w=null;const b=new jt;b.viewport=new it;const A=new jt;A.viewport=new it;const S=[b,A],M=new W_;let D=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let k=y[N];return k===void 0&&(k=new Bl,y[N]=k),k.getTargetRaySpace()},this.getControllerGrip=function(N){let k=y[N];return k===void 0&&(k=new Bl,y[N]=k),k.getGripSpace()},this.getHand=function(N){let k=y[N];return k===void 0&&(k=new Bl,y[N]=k),k.getHandSpace()};function U(N){const k=v.indexOf(N.inputSource);if(k===-1)return;const ie=y[k];ie!==void 0&&(ie.update(N.inputSource,N.frame,c||s),ie.dispatchEvent({type:N.type,data:N.inputSource}))}function L(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",G);for(let N=0;N<y.length;N++){const k=v[N];k!==null&&(v[N]=null,y[N].disconnect(k))}D=null,P=null,g.reset(),e.setRenderTarget(m),d=null,f=null,h=null,i=null,x=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",L),i.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,X=null,ne=null;p.depth&&(ne=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=p.stencil?ma:pa,X=p.stencil?da:Ar);const Se={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Se),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new tr(f.textureWidth,f.textureHeight,{format:Dn,type:li,depthTexture:new ip(f.textureWidth,f.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ie={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new tr(d.framebufferWidth,d.framebufferHeight,{format:Dn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(N){for(let k=0;k<N.removed.length;k++){const ie=N.removed[k],X=v.indexOf(ie);X>=0&&(v[X]=null,y[X].disconnect(ie))}for(let k=0;k<N.added.length;k++){const ie=N.added[k];let X=v.indexOf(ie);if(X===-1){for(let Se=0;Se<y.length;Se++)if(Se>=v.length){v.push(ie),X=Se;break}else if(v[Se]===null){v[Se]=ie,X=Se;break}if(X===-1)break}const ne=y[X];ne&&ne.connect(ie)}}const O=new Y,K=new Y;function H(N,k,ie){O.setFromMatrixPosition(k.matrixWorld),K.setFromMatrixPosition(ie.matrixWorld);const X=O.distanceTo(K),ne=k.projectionMatrix.elements,Se=ie.projectionMatrix.elements,_e=ne[14]/(ne[10]-1),ve=ne[14]/(ne[10]+1),fe=(ne[9]+1)/ne[5],Ie=(ne[9]-1)/ne[5],I=(ne[8]-1)/ne[0],ke=(Se[8]+1)/Se[0],Re=_e*I,Le=_e*ke,le=X/(-I+ke),Ee=le*-I;if(k.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ee),N.translateZ(le),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),ne[10]===-1)N.projectionMatrix.copy(k.projectionMatrix),N.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const de=_e+le,te=ve+le,De=Re-Ee,C=Le+(X-Ee),T=fe*ve/te*de,z=Ie*ve/te*de;N.projectionMatrix.makePerspective(De,C,T,z,de,te),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function J(N,k){k===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(k.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;let k=N.near,ie=N.far;g.texture!==null&&(g.depthNear>0&&(k=g.depthNear),g.depthFar>0&&(ie=g.depthFar)),M.near=A.near=b.near=k,M.far=A.far=b.far=ie,(D!==M.near||P!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,P=M.far),b.layers.mask=N.layers.mask|2,A.layers.mask=N.layers.mask|4,M.layers.mask=b.layers.mask|A.layers.mask;const X=N.parent,ne=M.cameras;J(M,X);for(let Se=0;Se<ne.length;Se++)J(ne[Se],X);ne.length===2?H(M,b,A):M.projectionMatrix.copy(b.projectionMatrix),q(N,M,X)};function q(N,k,ie){ie===null?N.matrix.copy(k.matrixWorld):(N.matrix.copy(ie.matrixWorld),N.matrix.invert(),N.matrix.multiply(k.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(k.projectionMatrix),N.projectionMatrixInverse.copy(k.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=ms*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let F=null;function W(N,k){if(u=k.getViewerPose(c||s),_=k,u!==null){const ie=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let X=!1;ie.length!==M.cameras.length&&(M.cameras.length=0,X=!0);for(let _e=0;_e<ie.length;_e++){const ve=ie[_e];let fe=null;if(d!==null)fe=d.getViewport(ve);else{const I=h.getViewSubImage(f,ve);fe=I.viewport,_e===0&&(e.setRenderTargetTextures(x,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(x))}let Ie=S[_e];Ie===void 0&&(Ie=new jt,Ie.layers.enable(_e),Ie.viewport=new it,S[_e]=Ie),Ie.matrix.fromArray(ve.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(ve.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(fe.x,fe.y,fe.width,fe.height),_e===0&&(M.matrix.copy(Ie.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),X===!0&&M.cameras.push(Ie)}const ne=i.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const _e=h.getDepthInformation(ie[0]);_e&&_e.isValid&&_e.texture&&g.init(e,_e,i.renderState)}}for(let ie=0;ie<y.length;ie++){const X=v[ie],ne=y[ie];X!==null&&ne!==void 0&&ne.update(X,k,c||s)}F&&F(N,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),_=null}const ee=new hp;ee.setAnimationLoop(W),this.setAnimationLoop=function(N){F=N},this.dispose=function(){}}}const ur=new ci,OS=new je;function BS(a,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Zd(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,x,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,x,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===hn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===hn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),y=x.envMap,v=x.envMapRotation;y&&(p.envMap.value=y,ur.copy(v),ur.x*=-1,ur.y*=-1,ur.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),p.envMapRotation.value.setFromMatrix4(OS.makeRotationFromEuler(ur)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kS(a,e,t,n){let i={},r={},s=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(_(x),v=u(x),i[x.id]=v,x.addEventListener("dispose",p));const E=y.program;n.updateUBOMapping(x,E);const w=e.render.frame;r[x.id]!==w&&(f(x),r[x.id]=w)}function u(x){const y=h();x.__bindingPointIndex=y;const v=a.createBuffer(),E=x.__size,w=x.usage;return a.bindBuffer(a.UNIFORM_BUFFER,v),a.bufferData(a.UNIFORM_BUFFER,E,w),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,y,v),v}function h(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=i[x.id],v=x.uniforms,E=x.__cache;a.bindBuffer(a.UNIFORM_BUFFER,y);for(let w=0,b=v.length;w<b;w++){const A=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,M=A.length;S<M;S++){const D=A[S];if(d(D,w,S,E)===!0){const P=D.__offset,U=Array.isArray(D.value)?D.value:[D.value];let L=0;for(let G=0;G<U.length;G++){const O=U[G],K=g(O);typeof O=="number"||typeof O=="boolean"?(D.__data[0]=O,a.bufferSubData(a.UNIFORM_BUFFER,P+L,D.__data)):O.isMatrix3?(D.__data[0]=O.elements[0],D.__data[1]=O.elements[1],D.__data[2]=O.elements[2],D.__data[3]=0,D.__data[4]=O.elements[3],D.__data[5]=O.elements[4],D.__data[6]=O.elements[5],D.__data[7]=0,D.__data[8]=O.elements[6],D.__data[9]=O.elements[7],D.__data[10]=O.elements[8],D.__data[11]=0):(O.toArray(D.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,P,D.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function d(x,y,v,E){const w=x.value,b=y+"_"+v;if(E[b]===void 0)return typeof w=="number"||typeof w=="boolean"?E[b]=w:E[b]=w.clone(),!0;{const A=E[b];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return E[b]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function _(x){const y=x.uniforms;let v=0;const E=16;for(let b=0,A=y.length;b<A;b++){const S=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,D=S.length;M<D;M++){const P=S[M],U=Array.isArray(P.value)?P.value:[P.value];for(let L=0,G=U.length;L<G;L++){const O=U[L],K=g(O),H=v%E,J=H%K.boundary,q=H+J;v+=J,q!==0&&E-q<K.storage&&(v+=E-q),P.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=K.storage}}}const w=v%E;return w>0&&(v+=E-w),x.__size=v,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function p(x){const y=x.target;y.removeEventListener("dispose",p);const v=s.indexOf(y.__bindingPointIndex);s.splice(v,1),a.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(const x in i)a.deleteBuffer(i[x]);s=[],i={},r={}}return{bind:l,update:c,dispose:m}}class zS{constructor(e={}){const{canvas:t=zg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=s;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,m=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=Bt;let w=0,b=0,A=null,S=-1,M=null;const D=new it,P=new it;let U=null;const L=new He(0);let G=0,O=t.width,K=t.height,H=1,J=null,q=null;const F=new it(0,0,O,K),W=new it(0,0,O,K);let ee=!1;const N=new Ou;let k=!1,ie=!1;const X=new je,ne=new je,Se=new Y,_e=new it,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Ie(){return A===null?H:1}let I=n;function ke(R,j){return t.getContext(R,j)}try{const R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tu}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",se,!1),I===null){const j="webgl2";if(I=ke(j,R),I===null)throw ke(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Re,Le,le,Ee,de,te,De,C,T,z,ae,$,Q,xe,me,Me,be,oe,pe,ge,Ae,ye,ze,B;function he(){Re=new Zx(I),Re.init(),ye=new US(I,Re),Le=new Hx(I,Re,e,ye),le=new PS(I,Re),Le.reverseDepthBuffer&&f&&le.buffers.depth.setReversed(!0),Ee=new $x(I),de=new _S,te=new DS(I,Re,le,de,Le,ye,Ee),De=new Xx(v),C=new Kx(v),T=new s0(I),ze=new Gx(I,T),z=new Jx(I,T,Ee,ze),ae=new ty(I,z,T,Ee),pe=new ey(I,Le,te),Me=new Wx(de),$=new gS(v,De,C,Re,Le,ze,Me),Q=new BS(v,de),xe=new xS,me=new bS(Re),oe=new zx(v,De,C,le,ae,d,l),be=new RS(v,ae,Le),B=new kS(I,Ee,Le,le),ge=new Vx(I,Re,Ee),Ae=new Qx(I,Re,Ee),Ee.programs=$.programs,v.capabilities=Le,v.extensions=Re,v.properties=de,v.renderLists=xe,v.shadowMap=be,v.state=le,v.info=Ee}he();const ce=new NS(v,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=Re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(O,K,!1))},this.getSize=function(R){return R.set(O,K)},this.setSize=function(R,j,re=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,K=j,t.width=Math.floor(R*H),t.height=Math.floor(j*H),re===!0&&(t.style.width=R+"px",t.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(O*H,K*H).floor()},this.setDrawingBufferSize=function(R,j,re){O=R,K=j,H=re,t.width=Math.floor(R*re),t.height=Math.floor(j*re),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(F)},this.setViewport=function(R,j,re,V){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,j,re,V),le.viewport(D.copy(F).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(W)},this.setScissor=function(R,j,re,V){R.isVector4?W.set(R.x,R.y,R.z,R.w):W.set(R,j,re,V),le.scissor(P.copy(W).multiplyScalar(H).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(R){le.setScissorTest(ee=R)},this.setOpaqueSort=function(R){J=R},this.setTransparentSort=function(R){q=R},this.getClearColor=function(R){return R.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,re=!0){let V=0;if(R){let Z=!1;if(A!==null){const Te=A.texture.format;Z=Te===Pu||Te===Cu||Te===Ru}if(Z){const Te=A.texture.type,Ce=Te===li||Te===Ar||Te===fa||Te===da||Te===bu||Te===Au,Be=oe.getClearColor(),Ne=oe.getClearAlpha(),Xe=Be.r,Ye=Be.g,Ge=Be.b;Ce?(_[0]=Xe,_[1]=Ye,_[2]=Ge,_[3]=Ne,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=Xe,g[1]=Ye,g[2]=Ge,g[3]=Ne,I.clearBufferiv(I.COLOR,0,g))}else V|=I.COLOR_BUFFER_BIT}j&&(V|=I.DEPTH_BUFFER_BIT),re&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",se,!1),oe.dispose(),xe.dispose(),me.dispose(),de.dispose(),De.dispose(),C.dispose(),ae.dispose(),ze.dispose(),B.dispose(),$.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",St),ce.removeEventListener("sessionend",on),Wt.stop()};function Ue(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=Ee.autoReset,j=be.enabled,re=be.autoUpdate,V=be.needsUpdate,Z=be.type;he(),Ee.autoReset=R,be.enabled=j,be.autoUpdate=re,be.needsUpdate=V,be.type=Z}function se(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function we(R){const j=R.target;j.removeEventListener("dispose",we),Fe(j)}function Fe(R){Oe(R),de.remove(R)}function Oe(R){const j=de.get(R).programs;j!==void 0&&(j.forEach(function(re){$.releaseProgram(re)}),R.isShaderMaterial&&$.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,re,V,Z,Te){j===null&&(j=ve);const Ce=Z.isMesh&&Z.matrixWorld.determinant()<0,Be=al(R,j,re,V,Z);le.setMaterial(V,Ce);let Ne=re.index,Xe=1;if(V.wireframe===!0){if(Ne=z.getWireframeAttribute(re),Ne===void 0)return;Xe=2}const Ye=re.drawRange,Ge=re.attributes.position;let Je=Ye.start*Xe,st=(Ye.start+Ye.count)*Xe;Te!==null&&(Je=Math.max(Je,Te.start*Xe),st=Math.min(st,(Te.start+Te.count)*Xe)),Ne!==null?(Je=Math.max(Je,0),st=Math.min(st,Ne.count)):Ge!=null&&(Je=Math.max(Je,0),st=Math.min(st,Ge.count));const pt=st-Je;if(pt<0||pt===1/0)return;ze.setup(Z,V,Be,re,Ne);let mt,nt=ge;if(Ne!==null&&(mt=T.get(Ne),nt=Ae,nt.setIndex(mt)),Z.isMesh)V.wireframe===!0?(le.setLineWidth(V.wireframeLinewidth*Ie()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(Z.isLine){let Ve=V.linewidth;Ve===void 0&&(Ve=1),le.setLineWidth(Ve*Ie()),Z.isLineSegments?nt.setMode(I.LINES):Z.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else Z.isPoints?nt.setMode(I.POINTS):Z.isSprite&&nt.setMode(I.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)rs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))nt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ve=Z._multiDrawStarts,Tt=Z._multiDrawCounts,$e=Z._multiDrawCount,Qt=Ne?T.get(Ne).bytesPerElement:1,ei=de.get(V).currentProgram.getUniforms();for(let zt=0;zt<$e;zt++)ei.setValue(I,"_gl_DrawID",zt),nt.render(Ve[zt]/Qt,Tt[zt])}else if(Z.isInstancedMesh)nt.renderInstances(Je,pt,Z.count);else if(re.isInstancedBufferGeometry){const Ve=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Tt=Math.min(re.instanceCount,Ve);nt.renderInstances(Je,pt,Tt)}else nt.render(Je,pt)};function We(R,j,re){R.transparent===!0&&R.side===Gn&&R.forceSinglePass===!1?(R.side=hn,R.needsUpdate=!0,wn(R,j,re),R.side=wi,R.needsUpdate=!0,wn(R,j,re),R.side=Gn):wn(R,j,re)}this.compile=function(R,j,re=null){re===null&&(re=R),m=me.get(re),m.init(j),y.push(m),re.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),R!==re&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights();const V=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Te=Z.material;if(Te)if(Array.isArray(Te))for(let Ce=0;Ce<Te.length;Ce++){const Be=Te[Ce];We(Be,re,Z),V.add(Be)}else We(Te,re,Z),V.add(Te)}),m=y.pop(),V},this.compileAsync=function(R,j,re=null){const V=this.compile(R,j,re);return new Promise(Z=>{function Te(){if(V.forEach(function(Ce){de.get(Ce).currentProgram.isReady()&&V.delete(Ce)}),V.size===0){Z(R);return}setTimeout(Te,10)}Re.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let ht=null;function dt(R){ht&&ht(R)}function St(){Wt.stop()}function on(){Wt.start()}const Wt=new hp;Wt.setAnimationLoop(dt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(R){ht=R,ce.setAnimationLoop(R),R===null?Wt.stop():Wt.start()},ce.addEventListener("sessionstart",St),ce.addEventListener("sessionend",on),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(j),j=ce.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,j,A),m=me.get(R,y.length),m.init(j),y.push(m),ne.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),N.setFromProjectionMatrix(ne),ie=this.localClippingEnabled,k=Me.init(this.clippingPlanes,ie),p=xe.get(R,x.length),p.init(),x.push(p),ce.enabled===!0&&ce.isPresenting===!0){const Te=v.xr.getDepthSensingMesh();Te!==null&&_n(Te,j,-1/0,v.sortObjects)}_n(R,j,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(J,q),fe=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,fe&&oe.addToRenderList(p,R),this.info.render.frame++,k===!0&&Me.beginShadows();const re=m.state.shadowsArray;be.render(re,R,j),k===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,Z=p.transmissive;if(m.setupLights(),j.isArrayCamera){const Te=j.cameras;if(Z.length>0)for(let Ce=0,Be=Te.length;Ce<Be;Ce++){const Ne=Te[Ce];$n(V,Z,R,Ne)}fe&&oe.render(R);for(let Ce=0,Be=Te.length;Ce<Be;Ce++){const Ne=Te[Ce];Ln(p,R,Ne,Ne.viewport)}}else Z.length>0&&$n(V,Z,R,j),fe&&oe.render(R),Ln(p,R,j);A!==null&&b===0&&(te.updateMultisampleRenderTarget(A),te.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(v,R,j),ze.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],k===!0&&Me.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function _n(R,j,re,V){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||N.intersectsSprite(R)){V&&_e.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ne);const Ce=ae.update(R),Be=R.material;Be.visible&&p.push(R,Ce,Be,re,_e.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||N.intersectsObject(R))){const Ce=ae.update(R),Be=R.material;if(V&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_e.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),_e.copy(Ce.boundingSphere.center)),_e.applyMatrix4(R.matrixWorld).applyMatrix4(ne)),Array.isArray(Be)){const Ne=Ce.groups;for(let Xe=0,Ye=Ne.length;Xe<Ye;Xe++){const Ge=Ne[Xe],Je=Be[Ge.materialIndex];Je&&Je.visible&&p.push(R,Ce,Je,re,_e.z,Ge)}}else Be.visible&&p.push(R,Ce,Be,re,_e.z,null)}}const Te=R.children;for(let Ce=0,Be=Te.length;Ce<Be;Ce++)_n(Te[Ce],j,re,V)}function Ln(R,j,re,V){const Z=R.opaque,Te=R.transmissive,Ce=R.transparent;m.setupLightsView(re),k===!0&&Me.setGlobalState(v.clippingPlanes,re),V&&le.viewport(D.copy(V)),Z.length>0&&ln(Z,j,re),Te.length>0&&ln(Te,j,re),Ce.length>0&&ln(Ce,j,re),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function $n(R,j,re,V){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new tr(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float")?As:li,minFilter:Ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const Te=m.state.transmissionRenderTarget[V.id],Ce=V.viewport||D;Te.setSize(Ce.z*v.transmissionResolutionScale,Ce.w*v.transmissionResolutionScale);const Be=v.getRenderTarget();v.setRenderTarget(Te),v.getClearColor(L),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),fe&&oe.render(re);const Ne=v.toneMapping;v.toneMapping=Ji;const Xe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),k===!0&&Me.setGlobalState(v.clippingPlanes,V),ln(R,re,V),te.updateMultisampleRenderTarget(Te),te.updateRenderTargetMipmap(Te),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Ge=0,Je=j.length;Ge<Je;Ge++){const st=j[Ge],pt=st.object,mt=st.geometry,nt=st.material,Ve=st.group;if(nt.side===Gn&&pt.layers.test(V.layers)){const Tt=nt.side;nt.side=hn,nt.needsUpdate=!0,It(pt,re,V,mt,nt,Ve),nt.side=Tt,nt.needsUpdate=!0,Ye=!0}}Ye===!0&&(te.updateMultisampleRenderTarget(Te),te.updateRenderTargetMipmap(Te))}v.setRenderTarget(Be),v.setClearColor(L,G),Xe!==void 0&&(V.viewport=Xe),v.toneMapping=Ne}function ln(R,j,re){const V=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,Te=R.length;Z<Te;Z++){const Ce=R[Z],Be=Ce.object,Ne=Ce.geometry,Xe=Ce.group;let Ye=Ce.material;Ye.allowOverride===!0&&V!==null&&(Ye=V),Be.layers.test(re.layers)&&It(Be,j,re,Ne,Ye,Xe)}}function It(R,j,re,V,Z,Te){R.onBeforeRender(v,j,re,V,Z,Te),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(v,j,re,V,R,Te),Z.transparent===!0&&Z.side===Gn&&Z.forceSinglePass===!1?(Z.side=hn,Z.needsUpdate=!0,v.renderBufferDirect(re,j,V,Z,R,Te),Z.side=wi,Z.needsUpdate=!0,v.renderBufferDirect(re,j,V,Z,R,Te),Z.side=Gn):v.renderBufferDirect(re,j,V,Z,R,Te),R.onAfterRender(v,j,re,V,Z,Te)}function wn(R,j,re){j.isScene!==!0&&(j=ve);const V=de.get(R),Z=m.state.lights,Te=m.state.shadowsArray,Ce=Z.state.version,Be=$.getParameters(R,Z.state,Te,j,re),Ne=$.getProgramCacheKey(Be);let Xe=V.programs;V.environment=R.isMeshStandardMaterial?j.environment:null,V.fog=j.fog,V.envMap=(R.isMeshStandardMaterial?C:De).get(R.envMap||V.environment),V.envMapRotation=V.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",we),Xe=new Map,V.programs=Xe);let Ye=Xe.get(Ne);if(Ye!==void 0){if(V.currentProgram===Ye&&V.lightsStateVersion===Ce)return Pr(R,Be),Ye}else Be.uniforms=$.getUniforms(R),R.onBeforeCompile(Be,v),Ye=$.acquireProgram(Be,Ne),Xe.set(Ne,Ye),V.uniforms=Be.uniforms;const Ge=V.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=Me.uniform),Pr(R,Be),V.needsLights=Dr(R),V.lightsStateVersion=Ce,V.needsLights&&(Ge.ambientLightColor.value=Z.state.ambient,Ge.lightProbe.value=Z.state.probe,Ge.directionalLights.value=Z.state.directional,Ge.directionalLightShadows.value=Z.state.directionalShadow,Ge.spotLights.value=Z.state.spot,Ge.spotLightShadows.value=Z.state.spotShadow,Ge.rectAreaLights.value=Z.state.rectArea,Ge.ltc_1.value=Z.state.rectAreaLTC1,Ge.ltc_2.value=Z.state.rectAreaLTC2,Ge.pointLights.value=Z.state.point,Ge.pointLightShadows.value=Z.state.pointShadow,Ge.hemisphereLights.value=Z.state.hemi,Ge.directionalShadowMap.value=Z.state.directionalShadowMap,Ge.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ge.spotShadowMap.value=Z.state.spotShadowMap,Ge.spotLightMatrix.value=Z.state.spotLightMatrix,Ge.spotLightMap.value=Z.state.spotLightMap,Ge.pointShadowMap.value=Z.state.pointShadowMap,Ge.pointShadowMatrix.value=Z.state.pointShadowMatrix),V.currentProgram=Ye,V.uniformsList=null,Ye}function Us(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=To.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Pr(R,j){const re=de.get(R);re.outputColorSpace=j.outputColorSpace,re.batching=j.batching,re.batchingColor=j.batchingColor,re.instancing=j.instancing,re.instancingColor=j.instancingColor,re.instancingMorph=j.instancingMorph,re.skinning=j.skinning,re.morphTargets=j.morphTargets,re.morphNormals=j.morphNormals,re.morphColors=j.morphColors,re.morphTargetsCount=j.morphTargetsCount,re.numClippingPlanes=j.numClippingPlanes,re.numIntersection=j.numClipIntersection,re.vertexAlphas=j.vertexAlphas,re.vertexTangents=j.vertexTangents,re.toneMapping=j.toneMapping}function al(R,j,re,V,Z){j.isScene!==!0&&(j=ve),te.resetTextureUnits();const Te=j.fog,Ce=V.isMeshStandardMaterial?j.environment:null,Be=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:an,Ne=(V.isMeshStandardMaterial?C:De).get(V.envMap||Ce),Xe=V.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ye=!!re.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ge=!!re.morphAttributes.position,Je=!!re.morphAttributes.normal,st=!!re.morphAttributes.color;let pt=Ji;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pt=v.toneMapping);const mt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,nt=mt!==void 0?mt.length:0,Ve=de.get(V),Tt=m.state.lights;if(k===!0&&(ie===!0||R!==M)){const Ft=R===M&&V.id===S;Me.setState(V,R,Ft)}let $e=!1;V.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Tt.state.version||Ve.outputColorSpace!==Be||Z.isBatchedMesh&&Ve.batching===!1||!Z.isBatchedMesh&&Ve.batching===!0||Z.isBatchedMesh&&Ve.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ve.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ve.instancing===!1||!Z.isInstancedMesh&&Ve.instancing===!0||Z.isSkinnedMesh&&Ve.skinning===!1||!Z.isSkinnedMesh&&Ve.skinning===!0||Z.isInstancedMesh&&Ve.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ve.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ve.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ve.instancingMorph===!1&&Z.morphTexture!==null||Ve.envMap!==Ne||V.fog===!0&&Ve.fog!==Te||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Me.numPlanes||Ve.numIntersection!==Me.numIntersection)||Ve.vertexAlphas!==Xe||Ve.vertexTangents!==Ye||Ve.morphTargets!==Ge||Ve.morphNormals!==Je||Ve.morphColors!==st||Ve.toneMapping!==pt||Ve.morphTargetsCount!==nt)&&($e=!0):($e=!0,Ve.__version=V.version);let Qt=Ve.currentProgram;$e===!0&&(Qt=wn(V,j,Z));let ei=!1,zt=!1,Xt=!1;const gt=Qt.getUniforms(),Gt=Ve.uniforms;if(le.useProgram(Qt.program)&&(ei=!0,zt=!0,Xt=!0),V.id!==S&&(S=V.id,zt=!0),ei||M!==R){le.buffers.depth.getReversed()?(X.copy(R.projectionMatrix),Vg(X),Hg(X),gt.setValue(I,"projectionMatrix",X)):gt.setValue(I,"projectionMatrix",R.projectionMatrix),gt.setValue(I,"viewMatrix",R.matrixWorldInverse);const Ct=gt.map.cameraPosition;Ct!==void 0&&Ct.setValue(I,Se.setFromMatrixPosition(R.matrixWorld)),Le.logarithmicDepthBuffer&&gt.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&gt.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,zt=!0,Xt=!0)}if(Z.isSkinnedMesh){gt.setOptional(I,Z,"bindMatrix"),gt.setOptional(I,Z,"bindMatrixInverse");const Ft=Z.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),gt.setValue(I,"boneTexture",Ft.boneTexture,te))}Z.isBatchedMesh&&(gt.setOptional(I,Z,"batchingTexture"),gt.setValue(I,"batchingTexture",Z._matricesTexture,te),gt.setOptional(I,Z,"batchingIdTexture"),gt.setValue(I,"batchingIdTexture",Z._indirectTexture,te),gt.setOptional(I,Z,"batchingColorTexture"),Z._colorsTexture!==null&&gt.setValue(I,"batchingColorTexture",Z._colorsTexture,te));const Lt=re.morphAttributes;if((Lt.position!==void 0||Lt.normal!==void 0||Lt.color!==void 0)&&pe.update(Z,re,Qt),(zt||Ve.receiveShadow!==Z.receiveShadow)&&(Ve.receiveShadow=Z.receiveShadow,gt.setValue(I,"receiveShadow",Z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Gt.envMap.value=Ne,Gt.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&j.environment!==null&&(Gt.envMapIntensity.value=j.environmentIntensity),zt&&(gt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&Ia(Gt,Xt),Te&&V.fog===!0&&Q.refreshFogUniforms(Gt,Te),Q.refreshMaterialUniforms(Gt,V,H,K,m.state.transmissionRenderTarget[R.id]),To.upload(I,Us(Ve),Gt,te)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(To.upload(I,Us(Ve),Gt,te),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&gt.setValue(I,"center",Z.center),gt.setValue(I,"modelViewMatrix",Z.modelViewMatrix),gt.setValue(I,"normalMatrix",Z.normalMatrix),gt.setValue(I,"modelMatrix",Z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ft=V.uniformsGroups;for(let Ct=0,Ui=Ft.length;Ct<Ui;Ct++){const Fn=Ft[Ct];B.update(Fn,Qt),B.bind(Fn,Qt)}}return Qt}function Ia(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Dr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,j,re){const V=de.get(R);V.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),de.get(R.texture).__webglTexture=j,de.get(R.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:re,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const re=de.get(R);re.__webglFramebuffer=j,re.__useDefaultFramebuffer=j===void 0};const Is=I.createFramebuffer();this.setRenderTarget=function(R,j=0,re=0){A=R,w=j,b=re;let V=!0,Z=null,Te=!1,Ce=!1;if(R){const Ne=de.get(R);if(Ne.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(Ne.__webglFramebuffer===void 0)te.setupRenderTarget(R);else if(Ne.__hasExternalTextures)te.rebindTextures(R,de.get(R.texture).__webglTexture,de.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ge=R.depthTexture;if(Ne.__boundDepthTexture!==Ge){if(Ge!==null&&de.has(Ge)&&(R.width!==Ge.image.width||R.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(R)}}const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ce=!0);const Ye=de.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[j])?Z=Ye[j][re]:Z=Ye[j],Te=!0):R.samples>0&&te.useMultisampledRTT(R)===!1?Z=de.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?Z=Ye[re]:Z=Ye,D.copy(R.viewport),P.copy(R.scissor),U=R.scissorTest}else D.copy(F).multiplyScalar(H).floor(),P.copy(W).multiplyScalar(H).floor(),U=ee;if(re!==0&&(Z=Is),le.bindFramebuffer(I.FRAMEBUFFER,Z)&&V&&le.drawBuffers(R,Z),le.viewport(D),le.scissor(P),le.setScissorTest(U),Te){const Ne=de.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ne.__webglTexture,re)}else if(Ce){const Ne=de.get(R.texture),Xe=j;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ne.__webglTexture,re,Xe)}else if(R!==null&&re!==0){const Ne=de.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ne.__webglTexture,re)}S=-1},this.readRenderTargetPixels=function(R,j,re,V,Z,Te,Ce,Be=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=de.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){le.bindFramebuffer(I.FRAMEBUFFER,Ne);try{const Xe=R.textures[Be],Ye=Xe.format,Ge=Xe.type;if(!Le.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-V&&re>=0&&re<=R.height-Z&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Be),I.readPixels(j,re,V,Z,ye.convert(Ye),ye.convert(Ge),Te))}finally{const Xe=A!==null?de.get(A).__webglFramebuffer:null;le.bindFramebuffer(I.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,j,re,V,Z,Te,Ce,Be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=de.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne)if(j>=0&&j<=R.width-V&&re>=0&&re<=R.height-Z){le.bindFramebuffer(I.FRAMEBUFFER,Ne);const Xe=R.textures[Be],Ye=Xe.format,Ge=Xe.type;if(!Le.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Je),I.bufferData(I.PIXEL_PACK_BUFFER,Te.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Be),I.readPixels(j,re,V,Z,ye.convert(Ye),ye.convert(Ge),0);const st=A!==null?de.get(A).__webglFramebuffer:null;le.bindFramebuffer(I.FRAMEBUFFER,st);const pt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Gg(I,pt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Je),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Te),I.deleteBuffer(Je),I.deleteSync(pt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,re=0){const V=Math.pow(2,-re),Z=Math.floor(R.image.width*V),Te=Math.floor(R.image.height*V),Ce=j!==null?j.x:0,Be=j!==null?j.y:0;te.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,re,0,0,Ce,Be,Z,Te),le.unbindTexture()};const ol=I.createFramebuffer(),La=I.createFramebuffer();this.copyTextureToTexture=function(R,j,re=null,V=null,Z=0,Te=null){Te===null&&(Z!==0?(rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Z,Z=0):Te=0);let Ce,Be,Ne,Xe,Ye,Ge,Je,st,pt;const mt=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(re!==null)Ce=re.max.x-re.min.x,Be=re.max.y-re.min.y,Ne=re.isBox3?re.max.z-re.min.z:1,Xe=re.min.x,Ye=re.min.y,Ge=re.isBox3?re.min.z:0;else{const Lt=Math.pow(2,-Z);Ce=Math.floor(mt.width*Lt),Be=Math.floor(mt.height*Lt),R.isDataArrayTexture?Ne=mt.depth:R.isData3DTexture?Ne=Math.floor(mt.depth*Lt):Ne=1,Xe=0,Ye=0,Ge=0}V!==null?(Je=V.x,st=V.y,pt=V.z):(Je=0,st=0,pt=0);const nt=ye.convert(j.format),Ve=ye.convert(j.type);let Tt;j.isData3DTexture?(te.setTexture3D(j,0),Tt=I.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(te.setTexture2DArray(j,0),Tt=I.TEXTURE_2D_ARRAY):(te.setTexture2D(j,0),Tt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);const $e=I.getParameter(I.UNPACK_ROW_LENGTH),Qt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ei=I.getParameter(I.UNPACK_SKIP_PIXELS),zt=I.getParameter(I.UNPACK_SKIP_ROWS),Xt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,mt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ye),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ge);const gt=R.isDataArrayTexture||R.isData3DTexture,Gt=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const Lt=de.get(R),Ft=de.get(j),Ct=de.get(Lt.__renderTarget),Ui=de.get(Ft.__renderTarget);le.bindFramebuffer(I.READ_FRAMEBUFFER,Ct.__webglFramebuffer),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Fn=0;Fn<Ne;Fn++)gt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,de.get(R).__webglTexture,Z,Ge+Fn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,de.get(j).__webglTexture,Te,pt+Fn)),I.blitFramebuffer(Xe,Ye,Ce,Be,Je,st,Ce,Be,I.DEPTH_BUFFER_BIT,I.NEAREST);le.bindFramebuffer(I.READ_FRAMEBUFFER,null),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||de.has(R)){const Lt=de.get(R),Ft=de.get(j);le.bindFramebuffer(I.READ_FRAMEBUFFER,ol),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,La);for(let Ct=0;Ct<Ne;Ct++)gt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Lt.__webglTexture,Z,Ge+Ct):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Lt.__webglTexture,Z),Gt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.__webglTexture,Te,pt+Ct):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ft.__webglTexture,Te),Z!==0?I.blitFramebuffer(Xe,Ye,Ce,Be,Je,st,Ce,Be,I.COLOR_BUFFER_BIT,I.NEAREST):Gt?I.copyTexSubImage3D(Tt,Te,Je,st,pt+Ct,Xe,Ye,Ce,Be):I.copyTexSubImage2D(Tt,Te,Je,st,Xe,Ye,Ce,Be);le.bindFramebuffer(I.READ_FRAMEBUFFER,null),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Gt?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(Tt,Te,Je,st,pt,Ce,Be,Ne,nt,Ve,mt.data):j.isCompressedArrayTexture?I.compressedTexSubImage3D(Tt,Te,Je,st,pt,Ce,Be,Ne,nt,mt.data):I.texSubImage3D(Tt,Te,Je,st,pt,Ce,Be,Ne,nt,Ve,mt):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Te,Je,st,Ce,Be,nt,Ve,mt.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Te,Je,st,mt.width,mt.height,nt,mt.data):I.texSubImage2D(I.TEXTURE_2D,Te,Je,st,Ce,Be,nt,Ve,mt);I.pixelStorei(I.UNPACK_ROW_LENGTH,$e),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ei),I.pixelStorei(I.UNPACK_SKIP_ROWS,zt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xt),Te===0&&j.generateMipmaps&&I.generateMipmap(Tt),le.unbindTexture()},this.copyTextureToTexture3D=function(R,j,re=null,V=null,Z=0){return rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,re,V,Z)},this.initRenderTarget=function(R){de.get(R).__webglFramebuffer===void 0&&te.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?te.setTextureCube(R,0):R.isData3DTexture?te.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?te.setTexture2DArray(R,0):te.setTexture2D(R,0),le.unbindTexture()},this.resetState=function(){w=0,b=0,A=null,le.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}function Wf(a,e){if(e===pg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Zc||e===zd){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===Zc)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=a.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class GS extends Cs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new YS(t)}),this.register(function(t){return new qS(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new KS(t)}),this.register(function(t){return new ZS(t)}),this.register(function(t){return new JS(t)}),this.register(function(t){return new QS(t)}),this.register(function(t){return new XS(t)}),this.register(function(t){return new $S(t)}),this.register(function(t){return new jS(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new HS(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new aM(t)})}load(e,t,n,i){const r=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const c=aa.extractUrlBase(e);s=aa.resolveURL(c,this.path)}else s=aa.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new cp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===gp){try{s[tt.KHR_BINARY_GLTF]=new oM(e)}catch(h){i&&i(h);return}r=JSON.parse(s[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new yM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,s[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case tt.KHR_MATERIALS_UNLIT:s[h]=new WS;break;case tt.KHR_DRACO_MESH_COMPRESSION:s[h]=new lM(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:s[h]=new cM;break;case tt.KHR_MESH_QUANTIZATION:s[h]=new uM;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function VS(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class HS{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new He(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],an);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new z_(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Gu(u),c.distance=h;break;case"spot":c=new O_(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),yi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class WS{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Xn}extendParams(e,t,n){const i=[];e.color=new He(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],an),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Bt))}return Promise.all(i)}}class XS{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class YS{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Qe(o,o)}return Promise.all(r)}}class qS{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class jS{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class KS{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];if(s.sheenColorFactor!==void 0){const o=s.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],an)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Bt)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class ZS{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class JS{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(o[0],o[1],o[2],an),Promise.all(r)}}class QS{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class $S{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(o[0],o[1],o[2],an),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,Bt)),Promise.all(r)}}class eM{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(r)}}class tM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(r)}}class nM{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class iM{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,s.source,l)}}class rM{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,s.source,l)}}class sM{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):s.ready.then(function(){const d=new ArrayBuffer(u*h);return s.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class aM{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Pn.TRIANGLES&&c.mode!==Pn.TRIANGLE_STRIP&&c.mode!==Pn.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=n.extensions[this.name].attributes,o=[],l={};for(const c in s)o.push(this.parser.getDependency("accessor",s[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const _ of h){const g=new je,p=new Y,m=new qn,x=new Y(1,1,1),y=new x_(_.geometry,_.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,g.compose(p,m,x));for(const v in l)if(v==="_COLOR_0"){const E=l[v];y.instanceColor=new Oo(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,l[v]);yt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const gp="glTF",Ks=12,Xf={JSON:1313821514,BIN:5130562};class oM{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ks),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ks,r=new DataView(e,Ks);let s=0;for(;s<i;){const o=r.getUint32(s,!0);s+=4;const l=r.getUint32(s,!0);if(s+=4,l===Xf.JSON){const c=new Uint8Array(e,Ks+s,o);this.content=n.decode(c)}else if(l===Xf.BIN){const c=Ks+s;this.body=e.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class lM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const u in s){const h=nu[u]||u.toLowerCase();o[h]=s[u]}for(const u in e.attributes){const h=nu[u]||u.toLowerCase();if(s[u]!==void 0){const f=n.accessors[e.attributes[u]],d=os[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const _ in d.attributes){const g=d.attributes[_],p=l[_];p!==void 0&&(g.normalized=p)}h(d)},o,c,an,f)})})}}class cM{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class uM{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class _p extends wa{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,p=-2*d+3*f,m=d-f,x=1-p,y=m-f+h;for(let v=0;v!==o;v++){const E=s[g+v+o],w=s[g+v+l]*u,b=s[_+v+o],A=s[_+v]*u;r[v]=x*E+y*w+p*b+m*A}return r}}const hM=new qn;class fM extends _p{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return hM.fromArray(r).normalize().toArray(r),r}}const Pn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yf={9728:rn,9729:nn,9984:Ud,9985:_o,9986:Qs,9987:Ti},qf={33071:Wi,33648:Io,10497:ps},Ql={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dM={CUBICSPLINE:void 0,LINEAR:_a,STEP:ga},$l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pM(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new ku({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wi})),a.DefaultMaterial}function hr(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function yi(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mM(a,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(a);const s=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):a.attributes.position;s.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):a.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):a.attributes.color;l.push(f)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(a.morphAttributes.position=u),i&&(a.morphAttributes.normal=h),r&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function gM(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _M(a){let e;const t=a.extensions&&a.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ec(t.attributes):e=a.indices+":"+ec(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,i=a.targets.length;n<i;n++)e+=":"+ec(a.targets[n]);return e}function ec(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function iu(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vM(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const xM=new je;class yM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new VS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,s=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,s=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&s<98?this.textureLoader=new up(this.options.manager):this.textureLoader=new H_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const o={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};return hr(r,o,i),yi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[c,u]of s.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(aa.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=Ql[i.type],o=os[i.componentType],l=i.normalized===!0,c=new o(i.count*s);return Promise.resolve(new sn(c,s,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const o=s[0],l=Ql[i.type],c=os[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,p;if(d&&d!==h){const m=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let y=t.cache.get(x);y||(g=new c(o,m*d,i.count*d/u),y=new p_(g,d/u),t.cache.add(x,y)),p=new Fu(y,l,f%d/u,_)}else o===null?g=new c(i.count*l):g=new c(o,f,i.count*l),p=new sn(g,l,_);if(i.sparse!==void 0){const m=Ql.SCALAR,x=os[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,E=new x(s[1],y,i.sparse.count*m),w=new c(s[2],v,i.sparse.count*l);o!==null&&(p=new sn(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let b=0,A=E.length;b<A;b++){const S=E[b];if(p.setX(S,w[b*l]),l>=2&&p.setY(S,w[b*l+1]),l>=3&&p.setZ(S,w[b*l+2]),l>=4&&p.setW(S,w[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=_}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let o=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=s.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[s.sampler]||{};return u.magFilter=Yf[f.magFilter]||nn,u.minFilter=Yf[f.minFilter]||Ti,u.wrapS=qf[f.wrapS]||ps,u.wrapT=qf[f.wrapT]||ps,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==rn&&u.minFilter!==nn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const s=i.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:s.mimeType});return l=o.createObjectURL(f),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const p=new Pt(g);p.needsUpdate=!0,f(p)}),t.load(aa.resolveURL(h,r.path),_,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),yi(h,s),h.userData.mimeType=s.mimeType||vM(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(s);s=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,l)}}return i!==void 0&&(s.colorSpace=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new np,ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new tp,ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||s){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ku}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const o={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){const h=i[tt.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new He(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],an),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Bt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Gn);const u=r.alphaMode||$l.OPAQUE;if(u===$l.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===$l.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==Xn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Qe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&s!==Xn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==Xn){const h=r.emissiveFactor;o.emissive=new He().setRGB(h[0],h[1],h[2],an)}return r.emissiveTexture!==void 0&&s!==Xn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Bt)),Promise.all(c).then(function(){const h=new s(o);return r.name&&(h.name=r.name),yi(h,r),t.associations.set(h,{materials:e}),r.extensions&&hr(i,h,r),h})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return jf(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=_M(c),h=i[u];if(h)s.push(h.promise);else{let f;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=jf(new Zn,c,t),i[u]={primitive:c,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?pM(this.cache):this.getDependency("material",s[l].material);o.push(u)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],p=s[d];let m;const x=c[d];if(p.mode===Pn.TRIANGLES||p.mode===Pn.TRIANGLE_STRIP||p.mode===Pn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new g_(g,x):new Rt(g,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Pn.TRIANGLE_STRIP?m.geometry=Wf(m.geometry,zd):p.mode===Pn.TRIANGLE_FAN&&(m.geometry=Wf(m.geometry,Zc));else if(p.mode===Pn.LINES)m=new M_(g,x);else if(p.mode===Pn.LINE_STRIP)m=new Bu(g,x);else if(p.mode===Pn.LINE_LOOP)m=new T_(g,x);else if(p.mode===Pn.POINTS)m=new E_(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&gM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),yi(m,r),p.extensions&&hr(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&hr(i,h[0],r),h[0];const f=new xr;r.extensions&&hr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(Qc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Vu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,o=[],l=[];for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h){o.push(h);const f=new je;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Nu(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,s=[],o=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],_=i.samplers[d.sampler],g=d.target,p=g.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,x=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(s.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(_),u.push(g))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],g=h[3],p=h[4],m=[];for(let x=0,y=f.length;x<y;x++){const v=f[x],E=d[x],w=_[x],b=g[x],A=p[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const S=n._createAnimationTracks(v,E,w,b,A);if(S)for(let M=0;M<S.length;M++)m.push(S[M])}return new eu(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),s=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)s.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,xM)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new $d:c.length>1?u=new xr:c.length===1?u=c[0]:u=new yt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=s),yi(u,r),r.extensions&&hr(n,u,r),r.matrix!==void 0){const h=new je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new xr;n.name&&(r.name=i.createUniqueName(n.name)),yi(r,n),n.extensions&&hr(t,r,n);const s=n.nodes||[],o=[];for(let l=0,c=s.length;l<c;l++)o.push(i.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof ai||f instanceof Pt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const s=[],o=e.name?e.name:e.uuid,l=[];Gi[r.path]===Gi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Gi[r.path]){case Gi.weights:c=_s;break;case Gi.rotation:c=vs;break;case Gi.translation:case Gi.scale:c=xs;break;default:switch(n.itemSize){case 1:c=_s;break;case 2:case 3:default:c=xs;break}break}const u=i.interpolation!==void 0?dM[i.interpolation]:_a,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const _=new c(l[f]+"."+Gi[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),s.push(_)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=iu(t.constructor),i=new Float32Array(t.length);for(let r=0,s=t.length;r<s;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof vs?fM:_p;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function SM(a,e,t){const n=e.attributes,i=new jn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new Y(l[0],l[1],l[2]),new Y(c[0],c[1],c[2])),o.normalized){const u=iu(os[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new Y,l=new Y;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=iu(os[f.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const s=new Kn;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=s}function jf(a,e,t){const n=e.attributes,i=[];function r(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in n){const o=nu[s]||s.toLowerCase();o in a.attributes||i.push(r(n[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(s)}return at.workingColorSpace!==an&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),yi(a,e),SM(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?mM(a,e.targets,t):a})}function Si(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function vp(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var En={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ys={duration:.5,overwrite:!1,delay:0},Yu,Ht,_t,oi=1e8,Zt=1/oi,ru=Math.PI*2,MM=ru/4,TM=0,xp=Math.sqrt,EM=Math.cos,bM=Math.sin,kt=function(e){return typeof e=="string"},Mt=function(e){return typeof e=="function"},Ci=function(e){return typeof e=="number"},qu=function(e){return typeof e>"u"},ui=function(e){return typeof e=="object"},fn=function(e){return e!==!1},ju=function(){return typeof window<"u"},fo=function(e){return Mt(e)||kt(e)},yp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jt=Array.isArray,su=/(?:-?\.?\d|\.)+/gi,Sp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ts=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Mp=/[+-]=-?[.\d]+/,Tp=/[^,'"\[\]\s]+/gi,AM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,vt,ti,au,Ku,bn={},zo={},Ep,bp=function(e){return(zo=Ss(e,bn))&&gn},Zu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xa=function(e,t){return!t&&console.warn(e)},Ap=function(e,t){return e&&(bn[e]=t)&&zo&&(zo[e]=t)||bn},ya=function(){return 0},wM={suppressEvents:!0,isStart:!0,kill:!1},Eo={suppressEvents:!0,kill:!1},RM={suppressEvents:!0},Ju={},Qi=[],ou={},wp,Sn={},nc={},Kf=30,bo=[],Qu="",$u=function(e){var t=e[0],n,i;if(ui(t)||Mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=bo.length;i--&&!bo[i].targetTest(t););n=bo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Jp(e[i],n)))||e.splice(i,1);return e},Sr=function(e){return e._gsap||$u(Un(e))[0]._gsap},Rp=function(e,t,n){return(n=e[t])&&Mt(n)?e[t]():qu(n)&&e.getAttribute&&e.getAttribute(t)||n},dn=function(e,t){return(e=e.split(",")).forEach(t)||e},Et=function(e){return Math.round(e*1e5)/1e5||0},wt=function(e){return Math.round(e*1e7)/1e7||0},ls=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},CM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Go=function(){var e=Qi.length,t=Qi.slice(0),n,i;for(ou={},Qi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},eh=function(e){return!!(e._initted||e._startAt||e.add)},Cp=function(e,t,n,i){Qi.length&&!Ht&&Go(),e.render(t,n,!!(Ht&&t<0&&eh(e))),Qi.length&&!Ht&&Go()},Pp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Tp).length<2?t:kt(e)?e.trim():e},Dp=function(e){return e},An=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},PM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ss=function(e,t){for(var n in t)e[n]=t[n];return e},Zf=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ui(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},Vo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},oa=function(e){var t=e.parent||vt,n=e.keyframes?PM(Jt(e.keyframes)):An;if(fn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},DM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Up=function(e,t,n,i,r){var s=e[i],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},Qo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},nr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Mr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},UM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},lu=function(e,t,n,i){return e._startAt&&(Ht?e._startAt.revert(Eo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},IM=function a(e){return!e||e._ts&&a(e.parent)},Jf=function(e){return e._repeat?Ms(e._tTime,e=e.duration()+e._rDelay)*e:0},Ms=function(e,t){var n=Math.floor(e=wt(e/t));return e&&n===e?n-1:n},Ho=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},$o=function(e){return e._end=wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Zt)||0))},el=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=wt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),$o(e),n._dirty||Mr(n,e)),e},Ip=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ho(e.rawTime(),t),(!t._dur||Ra(0,t.totalDuration(),n)-t._tTime>Zt)&&t.render(n,!0)),Mr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},ii=function(e,t,n,i){return t.parent&&nr(t),t._start=wt((Ci(n)?n:n||e!==vt?Cn(e,n,t):e._time)+t._delay),t._end=wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Up(e,t,"_first","_last",e._sort?"_start":0),cu(t)||(e._recent=t),i||Ip(e,t),e._ts<0&&el(e,e._tTime),e},Lp=function(e,t){return(bn.ScrollTrigger||Zu("scrollTrigger",t))&&bn.ScrollTrigger.create(t,e)},Fp=function(e,t,n,i,r){if(nh(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Ht&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&wp!==Mn.frame)return Qi.push(e),e._lazy=[r,i],1},LM=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},cu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},FM=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&LM(e)&&!(!e._initted&&cu(e))||(e._ts<0||e._dp._ts<0)&&!cu(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Ra(0,e._tDur,t),u=Ms(l,o),e._yoyo&&u&1&&(s=1-s),u!==Ms(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||Ht||i||e._zTime===Zt||!t&&e._zTime){if(!e._initted&&Fp(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Zt:0),n||(n=t&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&lu(e,t,n,!0),e._onUpdate&&!n&&Tn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Tn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&nr(e,1),!n&&!Ht&&(Tn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},NM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ts=function(e,t,n,i){var r=e._repeat,s=wt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:wt(s*(r+1)+e._rDelay*r):s,o>0&&!i&&el(e,e._tTime=e._tDur*o),e.parent&&$o(e),n||Mr(e.parent,e),e},Qf=function(e){return e instanceof tn?Mr(e):Ts(e,e._dur)},OM={_start:0,endTime:ya,totalDuration:ya},Cn=function a(e,t,n){var i=e.labels,r=e._recent||OM,s=e.duration()>=oi?r.endTime(!1):e._dur,o,l,c;return kt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Jt(n)?n[0]:n).totalDuration()),o>1?a(e,t.substr(0,o-1),n)+l:s+l)):t==null?s:+t},la=function(e,t,n){var i=Ci(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],o,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(o=s,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=fn(l.vars.inherit)&&l.parent;s.immediateRender=fn(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new At(t[0],s,t[r+1])},rr=function(e,t){return e||e===0?t(e):t},Ra=function(e,t,n){return n<e?e:n>t?t:n},Kt=function(e,t){return!kt(e)||!(t=AM.exec(e))?"":t[1]},BM=function(e,t,n){return rr(n,function(i){return Ra(e,t,i)})},uu=[].slice,Np=function(e,t){return e&&ui(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ui(e[0]))&&!e.nodeType&&e!==ti},kM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return kt(i)&&!t||Np(i,1)?(r=n).push.apply(r,Un(i)):n.push(i)})||n},Un=function(e,t,n){return _t&&!t&&_t.selector?_t.selector(e):kt(e)&&!n&&(au||!Es())?uu.call((t||Ku).querySelectorAll(e),0):Jt(e)?kM(e,n):Np(e)?uu.call(e,0):e?[e]:[]},hu=function(e){return e=Un(e)[0]||xa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Un(t,n.querySelectorAll?n:n===e?xa("Invalid scope")||Ku.createElement("div"):e)}},Op=function(e){return e.sort(function(){return .5-Math.random()})},Bp=function(e){if(Mt(e))return e;var t=ui(e)?e:{each:e},n=Tr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return kt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,p=s[g],m,x,y,v,E,w,b,A,S;if(!p){if(S=t.grid==="auto"?0:(t.grid||[1,oi])[1],!S){for(b=-1e8;b<(b=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(p=s[g]=[],m=l?Math.min(S,g)*u-.5:i%S,x=S===oi?0:l?g*h/S-.5:i/S|0,b=0,A=oi,w=0;w<g;w++)y=w%S-m,v=x-(w/S|0),p[w]=E=c?Math.abs(c==="y"?v:y):xp(y*y+v*v),E>b&&(b=E),E<A&&(A=E);i==="random"&&Op(p),p.max=b-A,p.min=A,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),p.b=g<0?r-g:r,p.u=Kt(t.amount||t.each)||0,n=n&&g<0?jp(n):n}return g=(p[f]-p.min)/p.max||0,wt(p.b+(n?n(g):g)*p.v)+p.u}},fu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=wt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ci(n)?0:Kt(n))}},kp=function(e,t){var n=Jt(e),i,r;return!n&&ui(e)&&(i=n=e.radius||oi,e.values?(e=Un(e.values),(r=!Ci(e[0]))&&(i*=i)):e=fu(e.increment)),rr(t,n?Mt(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=oi,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:s,r||u===s||Ci(s)?u:u+Kt(s)}:fu(e))},zp=function(e,t,n,i){return rr(Jt(e)?!t:n===!0?!!(n=0):!i,function(){return Jt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},zM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},GM=function(e,t){return function(n){return e(parseFloat(n))+(t||Kt(n))}},VM=function(e,t,n){return Vp(e,t,0,1,n)},Gp=function(e,t,n){return rr(n,function(i){return e[~~t(i)]})},HM=function a(e,t,n){var i=t-e;return Jt(e)?Gp(e,a(0,e.length),t):rr(n,function(r){return(i+(r-e)%i)%i+e})},WM=function a(e,t,n){var i=t-e,r=i*2;return Jt(e)?Gp(e,a(0,e.length-1),t):rr(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},Sa=function(e){for(var t=0,n="",i,r,s,o;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,s-i-7).match(o?Tp:su),n+=e.substr(t,i-t)+zp(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},Vp=function(e,t,n,i,r){var s=t-e,o=i-n;return rr(r,function(l){return n+((l-e)/s*o||0)})},XM=function a(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var s=kt(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(Jt(e)&&!Jt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(a(e[c-1],e[c]));h--,r=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=Ss(Jt(e)?[]:{},e));if(!u){for(l in t)th.call(o,e,l,"get",t[l]);r=function(_){return sh(_,o)||(s?e.p:e)}}}return rr(n,r)},$f=function(e,t,n){var i=e.labels,r=oi,s,o,l;for(s in i)o=i[s]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},Tn=function(e,t,n){var i=e.vars,r=i[t],s=_t,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Qi.length&&Go(),o&&(_t=o),u=l?r.apply(c,l):r.call(c),_t=s,u},ea=function(e){return nr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ht),e.progress()<1&&Tn(e,"onInterrupt"),e},ns,Hp=[],Wp=function(e){if(e)if(e=!e.name&&e.default||e,ju()||e.headless){var t=e.name,n=Mt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:ya,render:sh,add:th,kill:o1,modifier:a1,rawVars:0},s={targetTest:0,get:0,getSetter:rh,aliases:{},register:0};if(Es(),e!==i){if(Sn[t])return;An(i,An(Vo(e,r),s)),Ss(i.prototype,Ss(r,Vo(e,s))),Sn[i.prop=t]=i,e.targetTest&&(bo.push(i),Ju[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ap(t,i),e.register&&e.register(gn,i,pn)}else Hp.push(e)},ft=255,ta={aqua:[0,ft,ft],lime:[0,ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ft],navy:[0,0,128],white:[ft,ft,ft],olive:[128,128,0],yellow:[ft,ft,0],orange:[ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ft,0,0],pink:[ft,192,203],cyan:[0,ft,ft],transparent:[ft,ft,ft,0]},ic=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ft+.5|0},Xp=function(e,t,n){var i=e?Ci(e)?[e>>16,e>>8&ft,e&ft]:0:ta.black,r,s,o,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ta[e])i=ta[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ft,i&ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ft,e&ft]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(su),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=ic(l+1/3,r,s),i[1]=ic(l,r,s),i[2]=ic(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match(Sp),n&&i.length<4&&(i[3]=1),i}else i=e.match(su)||ta.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/ft,s=i[1]/ft,o=i[2]/ft,h=Math.max(r,s,o),f=Math.min(r,s,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(s-o)/d+(s<o?6:0):h===s?(o-r)/d+2:(r-s)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Yp=function(e){var t=[],n=[],i=-1;return e.split($i).forEach(function(r){var s=r.match(ts)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},ed=function(e,t,n){var i="",r=(e+i).match($i),s=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Xp(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Yp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace($i,"1").split(ts),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split($i),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},$i=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ta)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),YM=/hsl[a]?\(/,qp=function(e){var t=e.join(" "),n;if($i.lastIndex=0,$i.test(t))return n=YM.test(t),e[1]=ed(e[1],n),e[0]=ed(e[0],n,Yp(e[1])),!0},Ma,Mn=function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,s=r,o=[],l,c,u,h,f,d,_=function g(p){var m=a()-i,x=p===!0,y,v,E,w;if((m>e||m<0)&&(n+=m-t),i+=m,E=i-n,y=E-s,(y>0||x)&&(w=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,s+=y+(y>=r?4:r-y),v=1),x||(l=c(g)),v)for(d=0;d<o.length;d++)o[d](E,f,w,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Ep&&(!au&&ju()&&(ti=au=window,Ku=ti.document||{},bn.gsap=gn,(ti.gsapVersions||(ti.gsapVersions=[])).push(gn.version),bp(zo||ti.GreenSockGlobals||!ti.gsap&&ti||{}),Hp.forEach(Wp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,s-h.time*1e3+1|0)},Ma=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ma=0,c=ya},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),s=h.time*1e3+r},add:function(p,m,x){var y=m?function(v,E,w,b){p(v,E,w,b),h.remove(y)}:p;return h.remove(p),o[x?"unshift":"push"](y),Es(),y},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},h}(),Es=function(){return!Ma&&Mn.wake()},rt={},qM=/^[\d.\-M][\d.\-,\s]/,jM=/["']/g,KM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,o,l,c;r<s;r++)l=n[r],o=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(jM,"").trim():+c,i=l.substr(o+1).trim();return t},ZM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},JM=function(e){var t=(e+"").split("("),n=rt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[KM(t[1])]:ZM(e).split(",").map(Pp)):rt._CE&&qM.test(e)?rt._CE("",e):n},jp=function(e){return function(t){return 1-e(1-t)}},Kp=function a(e,t){for(var n=e._first,i;n;)n instanceof tn?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Tr=function(e,t){return e&&(Mt(e)?e:rt[e]||JM(e))||t},Cr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return dn(e,function(o){rt[o]=bn[o]=r,rt[s=o.toLowerCase()]=n;for(var l in r)rt[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=rt[o+"."+l]=r[l]}),r},Zp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},rc=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/ru*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*bM((u-s)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Zp(o);return r=ru/r,l.config=function(c,u){return a(e,c,u)},l},sc=function a(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Zp(n);return i.config=function(r){return a(e,r)},i};dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;Cr(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});rt.Linear.easeNone=rt.none=rt.Linear.easeIn;Cr("Elastic",rc("in"),rc("out"),rc());(function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?a*o*o:o<n?a*Math.pow(o-1.5/e,2)+.75:o<i?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};Cr("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Cr("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});Cr("Circ",function(a){return-(xp(1-a*a)-1)});Cr("Sine",function(a){return a===1?1:-EM(a*MM)+1});Cr("Back",sc("in"),sc("out"),sc());rt.SteppedEase=rt.steps=bn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-Zt;return function(o){return((i*Ra(0,s,o)|0)+r)*n}}};ys.ease=rt["quad.out"];dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Qu+=a+","+a+"Params,"});var Jp=function(e,t){this.id=TM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Rp,this.set=t?t.getSetter:rh},Ta=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ts(this,+t.duration,1,1),this.data=t.data,_t&&(this._ctx=_t,_t.data.push(this)),Ma||Mn.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ts(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Es(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(el(this,n),!r._dp||r.parent||Ip(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ii(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Zt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Cp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Jf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Jf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ms(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ho(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Ra(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),$o(this),UM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Es(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Zt&&(this._tTime-=Zt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ii(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(fn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ho(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=RM);var i=Ht;return Ht=n,eh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ht=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Qf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Qf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Cn(this,n),fn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,fn(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Zt)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(r){var s=Mt(n)?n:Dp,o=function(){var c=i.then;i.then=null,Mt(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){ea(this)},a}();An(Ta.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var tn=function(a){vp(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=fn(n.sortChildren),vt&&ii(n.parent||vt,Si(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Lp(Si(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return la(0,arguments,this),this},t.from=function(i,r,s){return la(1,arguments,this),this},t.fromTo=function(i,r,s,o){return la(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,oa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new At(i,r,Cn(this,s),1),this},t.call=function(i,r,s){return ii(this,At.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,o,l,c,u){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new At(i,s,Cn(this,l)),this},t.staggerFrom=function(i,r,s,o,l,c,u){return s.runBackwards=1,oa(s).immediateRender=fn(s.immediateRender),this.staggerTo(i,r,s,o,l,c,u)},t.staggerFromTo=function(i,r,s,o,l,c,u,h){return o.startAt=s,oa(o).immediateRender=fn(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:wt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,x,y,v,E,w,b;if(this!==vt&&u>l&&i>=0&&(u=l),u!==this._tTime||s||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,v=this._start,y=this._ts,m=!y,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,s);if(f=wt(u%p),u===l?(g=this._repeat,f=c):(E=wt(u/p),g=~~E,g&&g===E&&(f=c,g--),f>c&&(f=c)),E=Ms(this._tTime,p),!o&&this._tTime&&E!==g&&this._tTime-E*p-this._dur<=0&&(E=g),w&&g&1&&(f=c-f,b=1),g!==E&&!this._lock){var A=w&&E&1,S=A===(w&&g&1);if(g<E&&(A=!A),o=A?0:u%c?c:u,this._lock=1,this.render(o||(b?0:wt(g*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Tn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=A?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Kp(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=NM(this,wt(o),wt(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&!r&&!E&&(Tn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,r,s);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,s),f!==this._time||!this._ts&&!m){x=0,_&&(u+=this._zTime=-1e-8);break}}d=_}else{d=this._last;for(var M=i<0?i:f;d;){if(_=d._prev,(d._act||M<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,r,s);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,r,s||Ht&&eh(d)),f!==this._time||!this._ts&&!m){x=0,_&&(u+=this._zTime=M?-1e-8:Zt);break}}d=_}}if(x&&!r&&(this.pause(),x.render(f>=o?0:-1e-8)._zTime=f>=o?1:-1,this._ts))return this._start=v,$o(this),this.render(i,r,s);this._onUpdate&&!r&&Tn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&nr(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(Tn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(Ci(r)||(r=Cn(this,r,i)),!(i instanceof Ta)){if(Jt(i))return i.forEach(function(o){return s.add(o,r)}),this;if(kt(i))return this.addLabel(i,r);if(Mt(i))i=At.delayedCall(0,i);else return this}return this!==i?ii(this,i,r):this},t.getChildren=function(i,r,s,o){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-1e8);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof At?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return kt(i)?this.removeLabel(i):Mt(i)?this.killTweensOf(i):(i.parent===this&&Qo(this,i),i===this._recent&&(this._recent=this._last),Mr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=wt(Mn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Cn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var o=At.delayedCall(0,r||ya,s);return o.data="isPause",this._hasPause=1,ii(this,o,Cn(this,i))},t.removePause=function(i){var r=this._first;for(i=Cn(this,i);r;)r._start===i&&r.data==="isPause"&&nr(r),r=r._next},t.killTweensOf=function(i,r,s){for(var o=this.getTweensOf(i,s),l=o.length;l--;)Yi!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],o=Un(i),l=this._first,c=Ci(r),u;l;)l instanceof At?CM(l._targets,o)&&(c?(!Yi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(o,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,o=Cn(s,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=At.to(s,An({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||Zt,onStart:function(){if(s.pause(),!d){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());_._dur!==p&&Ts(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,An({startAt:{time:Cn(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),$f(this,Cn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),$f(this,Cn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Zt)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return Mr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Mr(this)},t.totalDuration=function(i){var r=0,s=this,o=s._last,l=oi,c,u,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,ii(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Ts(s,s===vt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(vt._ts&&(Cp(vt,Ho(i,vt)),wp=Mn.frame),Mn.frame>=Kf){Kf+=En.autoSleep||120;var r=vt._first;if((!r||!r._ts)&&En.autoSleep&&Mn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Mn.sleep()}}},e}(Ta);An(tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var QM=function(e,t,n,i,r,s,o){var l=new pn(this._pt,e,t,0,1,im,null,r),c=0,u=0,h,f,d,_,g,p,m,x;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Sa(i)),s&&(x=[n,i],s(x,e,t),n=x[0],i=x[1]),f=n.match(tc)||[];h=tc.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?ls(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=tc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Mp.test(i)||m)&&(l.e=0),this._pt=l,l},th=function(e,t,n,i,r,s,o,l,c,u){Mt(i)&&(i=i(r||0,e,s));var h=e[t],f=n!=="get"?n:Mt(h)?c?e[t.indexOf("set")||!Mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Mt(h)?c?i1:tm:ih,_;if(kt(i)&&(~i.indexOf("random(")&&(i=Sa(i)),i.charAt(1)==="="&&(_=ls(f,i)+(Kt(f)||0),(_||_===0)&&(i=_))),!u||f!==i||du)return!isNaN(f*i)&&i!==""?(_=new pn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?s1:nm,0,d),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&Zu(t,i),QM.call(this,e,t,f,i,d,l||En.stringFilter,c))},$M=function(e,t,n,i,r){if(Mt(e)&&(e=ca(e,r,t,n,i)),!ui(e)||e.style&&e.nodeType||Jt(e)||yp(e))return kt(e)?ca(e,r,t,n,i):e;var s={},o;for(o in e)s[o]=ca(e[o],r,t,n,i);return s},Qp=function(e,t,n,i,r,s){var o,l,c,u;if(Sn[e]&&(o=new Sn[e]).init(r,o.rawVars?t[e]:$M(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new pn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==ns))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Yi,du,nh=function a(e,t,n){var i=e.vars,r=i.ease,s=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:p,y=e._overwrite==="auto"&&!Yu,v=e.timeline,E,w,b,A,S,M,D,P,U,L,G,O,K;if(v&&(!f||!r)&&(r="none"),e._ease=Tr(r,ys.ease),e._yEase=h?jp(Tr(h===!0?r:h,ys.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(P=p[0]?Sr(p[0]).harness:0,O=P&&i[P.prop],E=Vo(i,Ju),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?Eo:wM),g._lazy=0),s){if(nr(e._startAt=At.set(p,An({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&fn(l),startAt:null,delay:0,onUpdate:c&&function(){return Tn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ht||!o&&!d)&&e._startAt.revert(Eo),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),b=An({overwrite:!1,data:"isFromStart",lazy:o&&!g&&fn(l),immediateRender:o,stagger:0,parent:m},E),O&&(b[P.prop]=O),nr(e._startAt=At.set(p,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ht?e._startAt.revert(Eo):e._startAt.render(-1,!0)),e._zTime=t,!o)a(e._startAt,Zt,Zt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&fn(l)||l&&!_,w=0;w<p.length;w++){if(S=p[w],D=S._gsap||$u(p)[w]._gsap,e._ptLookup[w]=L={},ou[D.id]&&Qi.length&&Go(),G=x===p?w:x.indexOf(S),P&&(U=new P).init(S,O||E,e,G,x)!==!1&&(e._pt=A=new pn(e._pt,S,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(H){L[H]=A}),U.priority&&(M=1)),!P||O)for(b in E)Sn[b]&&(U=Qp(b,E,e,G,S,x))?U.priority&&(M=1):L[b]=A=th.call(e,S,b,"get",E[b],G,x,0,i.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),y&&e._pt&&(Yi=e,vt.killTweensOf(S,L,e.globalTime(t)),K=!e.parent,Yi=0),e._pt&&l&&(ou[D.id]=1)}M&&rm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,f&&t<=0&&v.render(oi,!0,!0)},e1=function(e,t,n,i,r,s,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return du=1,e.vars[t]="+=0",nh(e,o),du=0,l?xa(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+s*u.c,u.c=n-u.s,h.e&&(h.e=Et(n)+Kt(h.e)),h.b&&(h.b=u.s+Kt(h.b))},t1=function(e,t){var n=e[0]?Sr(e[0]).harness:0,i=n&&n.aliases,r,s,o,l;if(!i)return t;r=Ss({},t);for(s in i)if(s in r)for(l=i[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},n1=function(e,t,n,i){var r=t.ease||i||"power1.inOut",s,o;if(Jt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},ca=function(e,t,n,i,r){return Mt(e)?e.call(t,n,i,r):kt(e)&&~e.indexOf("random(")?Sa(e):e},$p=Qu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",em={};dn($p+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return em[a]=1});var At=function(a){vp(e,a);function e(n,i,r,s){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=a.call(this,s?i:oa(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,x=i.parent||vt,y=(Jt(n)||yp(n)?Ci(n[0]):"length"in i)?[n]:Un(n),v,E,w,b,A,S,M,D;if(o._targets=y.length?$u(y):xa("GSAP target "+n+" not found. https://gsap.com",!En.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||fo(c)||fo(u)){if(i=o.vars,v=o.timeline=new tn({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:y}),v.kill(),v.parent=v._dp=Si(o),v._start=0,f||fo(c)||fo(u)){if(b=y.length,M=f&&Bp(f),ui(f))for(A in f)~$p.indexOf(A)&&(D||(D={}),D[A]=f[A]);for(E=0;E<b;E++)w=Vo(i,em),w.stagger=0,m&&(w.yoyoEase=m),D&&Ss(w,D),S=y[E],w.duration=+ca(c,Si(o),E,S,y),w.delay=(+ca(u,Si(o),E,S,y)||0)-o._delay,!f&&b===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),v.to(S,w,M?M(E,S,y):0),v._ease=rt.none;v.duration()?c=u=0:o.timeline=0}else if(_){oa(An(v.vars.defaults,{ease:"none"})),v._ease=Tr(_.ease||i.ease||"none");var P=0,U,L,G;if(Jt(_))_.forEach(function(O){return v.to(y,O,">")}),v.duration();else{w={};for(A in _)A==="ease"||A==="easeEach"||n1(A,_[A],w,_.easeEach);for(A in w)for(U=w[A].sort(function(O,K){return O.t-K.t}),P=0,E=0;E<U.length;E++)L=U[E],G={ease:L.e,duration:(L.t-(E?U[E-1].t:0))/100*c},G[A]=L.v,v.to(y,G,P),P+=G.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!Yu&&(Yi=Si(o),vt.killTweensOf(y),Yi=0),ii(x,Si(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===wt(x._time)&&fn(h)&&IM(Si(o))&&x.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-u)||0)),p&&Lp(Si(o),p),o}var t=e.prototype;return t.render=function(i,r,s){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Zt&&!u?l:i<Zt?0:i,f,d,_,g,p,m,x,y,v;if(!c)FM(this,i,r,s);else if(h!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,s);if(f=wt(h%g),h===l?(_=this._repeat,f=c):(p=wt(h/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(v=this._yEase,f=c-f),p=Ms(this._tTime,g),f===o&&!s&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(y&&this._yEase&&Kp(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=s=1,this.render(wt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Fp(this,u?i:f,s,r,h))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(f/c),this._from&&(this.ratio=x=1-x),!o&&h&&!r&&!p&&(Tn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&lu(this,i,r,s),Tn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&Tn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&lu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&nr(this,1),!r&&!(u&&!o)&&(h||o||m)&&(Tn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,s,o,l){Ma||Mn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||nh(this,c),u=this._ease(c/this._dur),e1(this,i,r,s,o,u,c,l)?this.resetTo(i,r,s,o,1):(el(this,0),this.parent||Up(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ea(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ht),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Yi&&Yi.vars.overwrite!==!0)._first||ea(this),this.parent&&s!==this.timeline.totalDuration()&&Ts(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=i?Un(i):o,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!r||r==="all")&&DM(o,l))return r==="all"&&(this._pt=0),ea(this);for(h=this._op=this._op||[],r!=="all"&&(kt(r)&&(g={},dn(r,function(x){return g[x]=1}),r=g),r=t1(o,r)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],r==="all"?(h[m]=r,_=f,d={}):(d=h[m]=h[m]||{},_=r);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Qo(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&ea(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return la(1,arguments)},e.delayedCall=function(i,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(i,r,s){return la(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return vt.killTweensOf(i,r,s)},e}(Ta);An(At.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});dn("staggerTo,staggerFrom,staggerFromTo",function(a){At[a]=function(){var e=new tn,t=uu.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var ih=function(e,t,n){return e[t]=n},tm=function(e,t,n){return e[t](n)},i1=function(e,t,n,i){return e[t](i.fp,n)},r1=function(e,t,n){return e.setAttribute(t,n)},rh=function(e,t){return Mt(e[t])?tm:qu(e[t])&&e.setAttribute?r1:ih},nm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},s1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},im=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},sh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},a1=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},o1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Qo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},l1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},rm=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},pn=function(){function a(t,n,i,r,s,o,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=o||nm,this.d=l||this,this.set=c||ih,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=l1,this.m=n,this.mt=r,this.tween=i},a}();dn(Qu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Ju[a]=1});bn.TweenMax=bn.TweenLite=At;bn.TimelineLite=bn.TimelineMax=tn;vt=new tn({sortChildren:!1,defaults:ys,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});En.stringFilter=qp;var Er=[],Ao={},c1=[],td=0,u1=0,ac=function(e){return(Ao[e]||c1).map(function(t){return t()})},pu=function(){var e=Date.now(),t=[];e-td>2&&(ac("matchMediaInit"),Er.forEach(function(n){var i=n.queries,r=n.conditions,s,o,l,c;for(o in i)s=ti.matchMedia(i[o]).matches,s&&(l=1),s!==r[o]&&(r[o]=s,c=1);c&&(n.revert(),l&&t.push(n))}),ac("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),td=e,ac("matchMedia"))},sm=function(){function a(t,n){this.selector=n&&hu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=u1++,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,r){Mt(n)&&(r=i,i=n,n=Mt);var s=this,o=function(){var c=_t,u=s.selector,h;return c&&c!==s&&c.data.push(s),r&&(s.selector=hu(r)),_t=s,h=i.apply(s,arguments),Mt(h)&&s._r.push(h),_t=c,s.selector=u,s.isReverted=!1,h};return s.last=o,n===Mt?o(s,function(l){return s.add(null,l)}):n?s[n]=o:o},e.ignore=function(n){var i=_t;_t=null,n(this),_t=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof At&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof At)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var s=Er.length;s--;)Er[s].id===this.id&&Er.splice(s,1)},e.revert=function(n){this.kill(n||{})},a}(),h1=function(){function a(t){this.contexts=[],this.scope=t,_t&&_t.data.push(this)}var e=a.prototype;return e.add=function(n,i,r){ui(n)||(n={matches:n});var s=new sm(0,r||this.scope),o=s.conditions={},l,c,u;_t&&!s.selector&&(s.selector=_t.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?u=1:(l=ti.matchMedia(n[c]),l&&(Er.indexOf(s)<0&&Er.push(s),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(pu):l.addEventListener("change",pu)));return u&&i(s,function(h){return s.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a}(),Wo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Wp(i)})},timeline:function(e){return new tn(e)},getTweensOf:function(e,t){return vt.getTweensOf(e,t)},getProperty:function(e,t,n,i){kt(e)&&(e=Un(e)[0]);var r=Sr(e||{}).get,s=n?Dp:Pp;return n==="native"&&(n=""),e&&(t?s((Sn[t]&&Sn[t].get||r)(e,t,n,i)):function(o,l,c){return s((Sn[o]&&Sn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Un(e),e.length>1){var i=e.map(function(u){return gn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var s=Sn[t],o=Sr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(u){var h=new s;ns._pt=0,h.init(e,n?u+n:u,ns,0,[e]),h.render(1,h),ns._pt&&sh(1,ns)}:o.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=gn.to(e,An((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Tr(e.ease,ys.ease)),Zf(ys,e||{})},config:function(e){return Zf(En,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Sn[o]&&!bn[o]&&xa(t+" effect requires "+o+" plugin.")}),nc[t]=function(o,l,c){return n(Un(o),An(l||{},r),c)},s&&(tn.prototype[t]=function(o,l,c){return this.add(nc[t](o,ui(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){rt[e]=Tr(t)},parseEase:function(e,t){return arguments.length?Tr(e,t):rt},getById:function(e){return vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new tn(e),i,r;for(n.smoothChildTiming=fn(e.smoothChildTiming),vt.remove(n),n._dp=0,n._time=n._tTime=vt._time,i=vt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof At&&i.vars.onComplete===i._targets[0]))&&ii(n,i,i._start-i._delay),i=r;return ii(vt,n,0),n},context:function(e,t){return e?new sm(e,t):_t},matchMedia:function(e){return new h1(e)},matchMediaRefresh:function(){return Er.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||pu()},addEventListener:function(e,t){var n=Ao[e]||(Ao[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ao[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:HM,wrapYoyo:WM,distribute:Bp,random:zp,snap:kp,normalize:VM,getUnit:Kt,clamp:BM,splitColor:Xp,toArray:Un,selector:hu,mapRange:Vp,pipe:zM,unitize:GM,interpolate:XM,shuffle:Op},install:bp,effects:nc,ticker:Mn,updateRoot:tn.updateRoot,plugins:Sn,globalTimeline:vt,core:{PropTween:pn,globals:Ap,Tween:At,Timeline:tn,Animation:Ta,getCache:Sr,_removeLinkedListItem:Qo,reverting:function(){return Ht},context:function(e){return e&&_t&&(_t.data.push(e),e._ctx=_t),_t},suppressOverwrites:function(e){return Yu=e}}};dn("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Wo[a]=At[a]});Mn.add(tn.updateRoot);ns=Wo.to({},{duration:0});var f1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},d1=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=f1(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},oc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,s){s._onInit=function(o){var l,c;if(kt(r)&&(l={},dn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}d1(o,r)}}}},gn=Wo.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,o,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",t[s],i,r,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)Ht?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},oc("roundProps",fu),oc("modifiers"),oc("snap",kp))||Wo;At.version=tn.version=gn.version="3.13.0";Ep=1;ju()&&Es();rt.Power0;rt.Power1;rt.Power2;rt.Power3;rt.Power4;rt.Linear;rt.Quad;rt.Cubic;rt.Quart;rt.Quint;rt.Strong;rt.Elastic;rt.Back;rt.SteppedEase;rt.Bounce;rt.Sine;rt.Expo;rt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nd,qi,cs,ah,yr,id,oh,p1=function(){return typeof window<"u"},Pi={},gr=180/Math.PI,us=Math.PI/180,Kr=Math.atan2,rd=1e8,lh=/([A-Z])/g,m1=/(left|right|width|margin|padding|x)/i,g1=/[\s,\(]\S/,si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},mu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},v1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},x1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},am=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},om=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},y1=function(e,t,n){return e.style[t]=n},S1=function(e,t,n){return e.style.setProperty(t,n)},M1=function(e,t,n){return e._gsap[t]=n},T1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},E1=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},b1=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},xt="transform",mn=xt+"Origin",A1=function a(e,t){var n=this,i=this.target,r=i.style,s=i._gsap;if(e in Pi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=si[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Mi(i,o)}):this.tfm[e]=s.x?s[e]:Mi(i,e),e===mn&&(this.tfm.zOrigin=s.zOrigin);else return si.transform.split(",").forEach(function(o){return a.call(n,o,t)});if(this.props.indexOf(xt)>=0)return;s.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(mn,t,"")),e=xt}(r||t)&&this.props.push(e,t,r[e])},lm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},w1=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(lh,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=oh(),(!r||!r.isStart)&&!n[xt]&&(lm(n),i.zOrigin&&n[mn]&&(n[mn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},cm=function(e,t){var n={target:e,props:[],revert:w1,save:A1};return e._gsap||gn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},um,gu=function(e,t){var n=qi.createElementNS?qi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):qi.createElement(e);return n&&n.style?n:qi.createElement(e)},In=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(lh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,bs(t)||t,1)||""},sd="O,Moz,ms,Ms,Webkit".split(","),bs=function(e,t,n){var i=t||yr,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(sd[s]+e in r););return s<0?null:(s===3?"ms":s>=0?sd[s]:"")+e},_u=function(){p1()&&window.document&&(nd=window,qi=nd.document,cs=qi.documentElement,yr=gu("div")||{style:{}},gu("div"),xt=bs(xt),mn=xt+"Origin",yr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",um=!!bs("perspective"),oh=gn.core.reverting,ah=1)},ad=function(e){var t=e.ownerSVGElement,n=gu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),cs.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),cs.removeChild(n),r},od=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},hm=function(e){var t,n;try{t=e.getBBox()}catch{t=ad(e),n=1}return t&&(t.width||t.height)||n||(t=ad(e)),t&&!t.width&&!t.x&&!t.y?{x:+od(e,["x","cx","x1"])||0,y:+od(e,["y","cy","y1"])||0,width:0,height:0}:t},fm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&hm(e))},wr=function(e,t){if(t){var n=e.style,i;t in Pi&&t!==mn&&(t=xt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(lh,"-$1").toLowerCase())):n.removeAttribute(t)}},ji=function(e,t,n,i,r,s){var o=new pn(e._pt,t,n,0,1,s?om:am);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},ld={deg:1,rad:1,turn:1},R1={grid:1,flex:1},ir=function a(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",o=yr.style,l=m1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;if(i===s||!r||ld[i]||ld[s])return r;if(s!=="px"&&!f&&(r=a(e,t,n,"px")),m=e.getCTM&&fm(e),(d||s==="%")&&(Pi[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Et(d?r/_*h:r/100*_);if(o[l?"width":"height"]=h+(f?s:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===qi||!g.appendChild)&&(g=qi.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Mn.time&&!p.uncache)return Et(r/p.width*h);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,_=e[u],x?e.style[t]=x:wr(e,t)}else(d||s==="%")&&!R1[In(g,"display")]&&(o.position=In(e,"position")),g===e&&(o.position="static"),g.appendChild(yr),_=yr[u],g.removeChild(yr),o.position="absolute";return l&&d&&(p=Sr(g),p.time=Mn.time,p.width=g[u]),Et(f?_*r/h:_&&r?h/_*r:0)},Mi=function(e,t,n,i){var r;return ah||_u(),t in si&&t!=="transform"&&(t=si[t],~t.indexOf(",")&&(t=t.split(",")[0])),Pi[t]&&t!=="transform"?(r=ba(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Yo(In(e,mn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Xo[t]&&Xo[t](e,t,n)||In(e,t)||Rp(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ir(e,t,r,n)+n:r},C1=function(e,t,n,i){if(!n||n==="none"){var r=bs(t,e,1),s=r&&In(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=In(e,"borderTopColor"))}var o=new pn(this._pt,e.style,t,0,1,im),l=0,c=0,u,h,f,d,_,g,p,m,x,y,v,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=In(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=In(e,t)||i,g?e.style[t]=g:wr(e,t)),u=[n,i],qp(u),n=u[0],i=u[1],f=n.match(ts)||[],E=i.match(ts)||[],E.length){for(;h=ts.exec(i);)p=h[0],x=i.substring(l,h.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),p.charAt(1)==="="&&(p=ls(d,p)+v),m=parseFloat(p),y=p.substr((m+"").length),l=ts.lastIndex-y.length,y||(y=y||En.units[t]||v,l===i.length&&(i+=y,o.e+=y)),v!==y&&(d=ir(e,t,g,y)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?om:am;return Mp.test(i)&&(o.e=0),this._pt=o,o},cd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},P1=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=cd[n]||n,t[1]=cd[i]||i,t.join(" ")},D1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Pi[o]&&(l=1,o=o==="transformOrigin"?mn:xt),wr(n,o);l&&(wr(n,xt),s&&(s.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ba(n,1),s.uncache=1,lm(i)))}},Xo={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new pn(e._pt,t,n,0,0,D1);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},Ea=[1,0,0,1,0,0],dm={},pm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ud=function(e){var t=In(e,xt);return pm(t)?Ea:t.substr(7).match(Sp).map(Et)},ch=function(e,t){var n=e._gsap||Sr(e),i=e.style,r=ud(e),s,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ea:r):(r===Ea&&!e.offsetParent&&e!==cs&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,cs.appendChild(e)),r=ud(e),l?i.display=l:wr(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):cs.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},vu=function(e,t,n,i,r,s){var o=e._gsap,l=r||ch(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],x=l[5],y=t.split(" "),v=parseFloat(y[0])||0,E=parseFloat(y[1])||0,w,b,A,S;n?l!==Ea&&(b=d*p-_*g)&&(A=v*(p/b)+E*(-g/b)+(g*x-p*m)/b,S=v*(-_/b)+E*(d/b)-(d*x-_*m)/b,v=A,E=S):(w=hm(e),v=w.x+(~y[0].indexOf("%")?v/100*w.width:v),E=w.y+(~(y[1]||y[0]).indexOf("%")?E/100*w.height:E)),i||i!==!1&&o.smooth?(m=v-c,x=E-u,o.xOffset=h+(m*d+x*g)-m,o.yOffset=f+(m*_+x*p)-x):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[mn]="0px 0px",s&&(ji(s,o,"xOrigin",c,v),ji(s,o,"yOrigin",u,E),ji(s,o,"xOffset",h,o.xOffset),ji(s,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+E)},ba=function(e,t){var n=e._gsap||new Jp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=In(e,mn)||"0",u,h,f,d,_,g,p,m,x,y,v,E,w,b,A,S,M,D,P,U,L,G,O,K,H,J,q,F,W,ee,N,k;return u=h=f=g=p=m=x=y=v=0,d=_=1,n.svg=!!(e.getCTM&&fm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[xt]!=="none"?l[xt]:"")),i.scale=i.rotate=i.translate="none"),b=ch(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),vu(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,b)),E=n.xOrigin||0,w=n.yOrigin||0,b!==Ea&&(D=b[0],P=b[1],U=b[2],L=b[3],u=G=b[4],h=O=b[5],b.length===6?(d=Math.sqrt(D*D+P*P),_=Math.sqrt(L*L+U*U),g=D||P?Kr(P,D)*gr:0,x=U||L?Kr(U,L)*gr+g:0,x&&(_*=Math.abs(Math.cos(x*us))),n.svg&&(u-=E-(E*D+w*U),h-=w-(E*P+w*L))):(k=b[6],ee=b[7],q=b[8],F=b[9],W=b[10],N=b[11],u=b[12],h=b[13],f=b[14],A=Kr(k,W),p=A*gr,A&&(S=Math.cos(-A),M=Math.sin(-A),K=G*S+q*M,H=O*S+F*M,J=k*S+W*M,q=G*-M+q*S,F=O*-M+F*S,W=k*-M+W*S,N=ee*-M+N*S,G=K,O=H,k=J),A=Kr(-U,W),m=A*gr,A&&(S=Math.cos(-A),M=Math.sin(-A),K=D*S-q*M,H=P*S-F*M,J=U*S-W*M,N=L*M+N*S,D=K,P=H,U=J),A=Kr(P,D),g=A*gr,A&&(S=Math.cos(A),M=Math.sin(A),K=D*S+P*M,H=G*S+O*M,P=P*S-D*M,O=O*S-G*M,D=K,G=H),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Et(Math.sqrt(D*D+P*P+U*U)),_=Et(Math.sqrt(O*O+k*k)),A=Kr(G,O),x=Math.abs(A)>2e-4?A*gr:0,v=N?1/(N<0?-N:N):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!pm(In(e,xt)),K&&e.setAttribute("transform",K))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(d*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=Et(d),n.scaleY=Et(_),n.rotation=Et(g)+o,n.rotationX=Et(p)+o,n.rotationY=Et(m)+o,n.skewX=x+o,n.skewY=y+o,n.transformPerspective=v+s,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[mn]=Yo(c)),n.xOffset=n.yOffset=0,n.force3D=En.force3D,n.renderTransform=n.svg?I1:um?mm:U1,n.uncache=0,n},Yo=function(e){return(e=e.split(" "))[0]+" "+e[1]},lc=function(e,t,n){var i=Kt(t);return Et(parseFloat(t)+parseFloat(ir(e,"x",n+"px",i)))+i},U1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,mm(e,t)},fr="0deg",Zs="0px",dr=") ",mm=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,x=n.target,y=n.zOrigin,v="",E=m==="auto"&&e&&e!==1||m===!0;if(y&&(h!==fr||u!==fr)){var w=parseFloat(u)*us,b=Math.sin(w),A=Math.cos(w),S;w=parseFloat(h)*us,S=Math.cos(w),s=lc(x,s,b*S*-y),o=lc(x,o,-Math.sin(w)*-y),l=lc(x,l,A*S*-y+y)}p!==Zs&&(v+="perspective("+p+dr),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(E||s!==Zs||o!==Zs||l!==Zs)&&(v+=l!==Zs||E?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+dr),c!==fr&&(v+="rotate("+c+dr),u!==fr&&(v+="rotateY("+u+dr),h!==fr&&(v+="rotateX("+h+dr),(f!==fr||d!==fr)&&(v+="skew("+f+", "+d+dr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+dr),x.style[xt]=v||"translate(0, 0)"},I1=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,x=n.forceCSS,y=parseFloat(s),v=parseFloat(o),E,w,b,A,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=us,c*=us,E=Math.cos(l)*h,w=Math.sin(l)*h,b=Math.sin(l-c)*-f,A=Math.cos(l-c)*f,c&&(u*=us,S=Math.tan(c-u),S=Math.sqrt(1+S*S),b*=S,A*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),E*=S,w*=S)),E=Et(E),w=Et(w),b=Et(b),A=Et(A)):(E=h,A=f,w=b=0),(y&&!~(s+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(y=ir(d,"x",s,"px"),v=ir(d,"y",o,"px")),(_||g||p||m)&&(y=Et(y+_-(_*E+g*b)+p),v=Et(v+g-(_*w+g*A)+m)),(i||r)&&(S=d.getBBox(),y=Et(y+i/100*S.width),v=Et(v+r/100*S.height)),S="matrix("+E+","+w+","+b+","+A+","+y+","+v+")",d.setAttribute("transform",S),x&&(d.style[xt]=S)},L1=function(e,t,n,i,r){var s=360,o=kt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?gr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-360)),h==="cw"&&c<0?c=(c+s*rd)%s-~~(c/s)*s:h==="ccw"&&c>0&&(c=(c-s*rd)%s-~~(c/s)*s)),e._pt=f=new pn(e._pt,t,n,i,c,_1),f.e=u,f.u="deg",e._props.push(n),f},hd=function(e,t){for(var n in t)e[n]=t[n];return e},F1=function(e,t,n){var i=hd({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[xt]=t,o=ba(n,1),wr(n,xt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[xt],s[xt]=t,o=ba(n,1),s[xt]=c);for(l in Pi)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=Kt(c),_=Kt(u),h=d!==_?ir(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new pn(e._pt,o,l,h,f-h,mu),e._pt.u=_||0,e._props.push(l));hd(o,i)};dn("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?a+o:"border"+o+a});Xo[e>1?"border"+a:a]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=s.map(function(_){return Mi(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},s.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,h)}});var gm={name:"css",register:_u,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,x,y,v,E,w,b,A;ah||_u(),this.styles=this.styles||cm(e),A=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Sn[g]&&Qp(g,t,n,i,e,r)))){if(d=typeof u,_=Xo[g],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Sa(u)),_)_(this,e,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",$i.lastIndex=0,$i.test(c)||(p=Kt(c),m=Kt(u)),m?p!==m&&(c=ir(e,g,c,m)+m):p&&(u+=p),this.add(o,"setProperty",c,u,i,r,0,0,g),s.push(g),A.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],kt(c)&&~c.indexOf("random(")&&(c=Sa(c)),Kt(c+"")||c==="auto"||(c+=En.units[g]||Kt(Mi(e,g))||""),(c+"").charAt(1)==="="&&(c=Mi(e,g))):c=Mi(e,g),f=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),g in si&&(g==="autoAlpha"&&(f===1&&Mi(e,"visibility")==="hidden"&&h&&(f=0),A.push("visibility",0,o.visibility),ji(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=si[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Pi,y){if(this.styles.save(g),d==="string"&&u.substring(0,6)==="var(--"&&(u=In(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),v||(E=e._gsap,E.renderTransform&&!t.parseTransform||ba(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,v=this._pt=new pn(this._pt,o,xt,0,1,E.renderTransform,E,0,-1),v.dep=1),g==="scale")this._pt=new pn(this._pt,E,"scaleY",E.scaleY,(x?ls(E.scaleY,x+h):h)-E.scaleY||0,mu),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){A.push(mn,0,o[mn]),u=P1(u),E.svg?vu(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&ji(this,E,"zOrigin",E.zOrigin,m),ji(this,o,g,Yo(c),Yo(u)));continue}else if(g==="svgOrigin"){vu(e,u,1,w,0,this);continue}else if(g in dm){L1(this,E,g,f,x?ls(f,x+u):u);continue}else if(g==="smoothOrigin"){ji(this,E,"smooth",E.smooth,u);continue}else if(g==="force3D"){E[g]=u;continue}else if(g==="transform"){F1(this,u,e);continue}}else g in o||(g=bs(g)||g);if(y||(h||h===0)&&(f||f===0)&&!g1.test(u)&&g in o)p=(c+"").substr((f+"").length),h||(h=0),m=Kt(u)||(g in En.units?En.units[g]:p),p!==m&&(f=ir(e,g,c,m)),this._pt=new pn(this._pt,y?E:o,g,f,(x?ls(f,x+h):h)-f,!y&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?x1:mu),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=v1);else if(g in o)C1.call(this,e,g,c,x?x+u:u);else if(g in e)this.add(e,g,c||e[g],x?x+u:u,i,r);else if(g!=="parseTransform"){Zu(g,u);continue}y||(g in o?A.push(g,0,o[g]):typeof e[g]=="function"?A.push(g,2,e[g]()):A.push(g,1,c||e[g])),s.push(g)}}b&&rm(this)},render:function(e,t){if(t.tween._time||!oh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Mi,aliases:si,getSetter:function(e,t,n){var i=si[t];return i&&i.indexOf(",")<0&&(t=i),t in Pi&&t!==mn&&(e._gsap.x||Mi(e,"x"))?n&&id===n?t==="scale"?T1:M1:(id=n||{})&&(t==="scale"?E1:b1):e.style&&!qu(e.style[t])?y1:~t.indexOf("-")?S1:rh(e,t)},core:{_removeProperty:wr,_getMatrix:ch}};gn.utils.checkPrefix=bs;gn.core.getStyleSaver=cm;(function(a,e,t,n){var i=dn(a+","+e+","+t,function(r){Pi[r]=1});dn(e,function(r){En.units[r]="deg",dm[r]=1}),si[i[13]]=a+","+e,dn(n,function(r){var s=r.split(":");si[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){En.units[a]="px"});gn.registerPlugin(gm);var ri=gn.registerPlugin(gm)||gn;ri.core.Tween;function N1(){var a=Object.create(null);function e(i,r){var s=i.id,o=i.name,l=i.dependencies;l===void 0&&(l=[]);var c=i.init;c===void 0&&(c=function(){});var u=i.getTransferables;if(u===void 0&&(u=null),!a[s])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=a[f.id].value),f}),c=n("<"+o+">.init",c),u&&(u=n("<"+o+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[s]={id:s,value:h,getTransferables:u},r(h)}catch(f){f&&f.noLog||console.error(f),r(f)}}function t(i,r){var s,o=i.id,l=i.args;(!a[o]||typeof a[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(s=a[o]).value.apply(s,l);c&&typeof c.then=="function"?c.then(u,function(h){return r(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){r(h)}function u(h){try{var f=a[o].getTransferables&&a[o].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),r(h,f)}catch(d){console.error(d),r(d)}}}function n(i,r){var s=void 0;self.troikaDefine=function(l){return s=l};var o=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,s}self.addEventListener("message",function(i){var r=i.data,s=r.messageId,o=r.action,l=r.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function O1(a){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,n=a.init;t=Array.isArray(t)?t.map(function(r){return r&&(r=r.onMainThread||r,r._getInitResult&&(r=r._getInitResult())),r}):[];var i=Promise.all(t).then(function(r){return n.apply(null,r)});return e._getInitResult=function(){return i},i},e}var _m=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return _m=function(){return a},a},B1=0,k1=0,cc=!1,ua=Object.create(null),ha=Object.create(null),xu=Object.create(null);function Ds(a){if((!a||typeof a.init!="function")&&!cc)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,n=a.getTransferables,i=a.workerId,r=O1(a);i==null&&(i="#default");var s="workerModule"+ ++B1,o=a.name||s,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(cc=!0,u=Ds({workerId:i,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+wo(u)+`
)}`}),cc=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],h=arguments.length;h--;)u[h]=arguments[h];if(!_m())return r.apply(void 0,u);if(!l){l=fd(i,"registerModule",c.workerModuleData);var f=function(){l=null,ha[i].delete(f)};(ha[i]||(ha[i]=new Set)).add(f)}return l.then(function(d){var _=d.isCallable;if(_)return fd(i,"callModule",{id:s,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:s,name:o,dependencies:e,init:wo(t),getTransferables:n&&wo(n)},c.onMainThread=r,c}function z1(a){ha[a]&&ha[a].forEach(function(e){e()}),ua[a]&&(ua[a].terminate(),delete ua[a])}function wo(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function G1(a){var e=ua[a];if(!e){var t=wo(N1);e=ua[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(n){var i=n.data,r=i.messageId,s=xu[r];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete xu[r],s(i)}}return e}function fd(a,e,t){return new Promise(function(n,i){var r=++k1;xu[r]=function(s){s.success?n(s.result):i(new Error("Error in worker "+e+" call: "+s.error))},G1(a).postMessage({messageId:r,action:e,data:t})})}function vm(){var a=function(e){function t(J,q,F,W,ee,N,k,ie){var X=1-k;ie.x=X*X*J+2*X*k*F+k*k*ee,ie.y=X*X*q+2*X*k*W+k*k*N}function n(J,q,F,W,ee,N,k,ie,X,ne){var Se=1-X;ne.x=Se*Se*Se*J+3*Se*Se*X*F+3*Se*X*X*ee+X*X*X*k,ne.y=Se*Se*Se*q+3*Se*Se*X*W+3*Se*X*X*N+X*X*X*ie}function i(J,q){for(var F=/([MLQCZ])([^MLQCZ]*)/g,W,ee,N,k,ie;W=F.exec(J);){var X=W[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ne){return parseFloat(ne)});switch(W[1]){case"M":k=ee=X[0],ie=N=X[1];break;case"L":(X[0]!==k||X[1]!==ie)&&q("L",k,ie,k=X[0],ie=X[1]);break;case"Q":{q("Q",k,ie,k=X[2],ie=X[3],X[0],X[1]);break}case"C":{q("C",k,ie,k=X[4],ie=X[5],X[0],X[1],X[2],X[3]);break}case"Z":(k!==ee||ie!==N)&&q("L",k,ie,ee,N);break}}}function r(J,q,F){F===void 0&&(F=16);var W={x:0,y:0};i(J,function(ee,N,k,ie,X,ne,Se,_e,ve){switch(ee){case"L":q(N,k,ie,X);break;case"Q":{for(var fe=N,Ie=k,I=1;I<F;I++)t(N,k,ne,Se,ie,X,I/(F-1),W),q(fe,Ie,W.x,W.y),fe=W.x,Ie=W.y;break}case"C":{for(var ke=N,Re=k,Le=1;Le<F;Le++)n(N,k,ne,Se,_e,ve,ie,X,Le/(F-1),W),q(ke,Re,W.x,W.y),ke=W.x,Re=W.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(J,q){var F=J.getContext?J.getContext("webgl",c):J,W=l.get(F);if(!W){let ke=function(te){var De=N[te];if(!De&&(De=N[te]=F.getExtension(te),!De))throw new Error(te+" not supported");return De},Re=function(te,De){var C=F.createShader(De);return F.shaderSource(C,te),F.compileShader(C),C},Le=function(te,De,C,T){if(!k[te]){var z={},ae={},$=F.createProgram();F.attachShader($,Re(De,F.VERTEX_SHADER)),F.attachShader($,Re(C,F.FRAGMENT_SHADER)),F.linkProgram($),k[te]={program:$,transaction:function(xe){F.useProgram($),xe({setUniform:function(Me,be){for(var oe=[],pe=arguments.length-2;pe-- >0;)oe[pe]=arguments[pe+2];var ge=ae[be]||(ae[be]=F.getUniformLocation($,be));F["uniform"+Me].apply(F,[ge].concat(oe))},setAttribute:function(Me,be,oe,pe,ge){var Ae=z[Me];Ae||(Ae=z[Me]={buf:F.createBuffer(),loc:F.getAttribLocation($,Me),data:null}),F.bindBuffer(F.ARRAY_BUFFER,Ae.buf),F.vertexAttribPointer(Ae.loc,be,F.FLOAT,!1,0,0),F.enableVertexAttribArray(Ae.loc),ee?F.vertexAttribDivisor(Ae.loc,pe):ke("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ae.loc,pe),ge!==Ae.data&&(F.bufferData(F.ARRAY_BUFFER,ge,oe),Ae.data=ge)}})}}}k[te].transaction(T)},le=function(te,De){X++;try{F.activeTexture(F.TEXTURE0+X);var C=ie[te];C||(C=ie[te]=F.createTexture(),F.bindTexture(F.TEXTURE_2D,C),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MIN_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MAG_FILTER,F.NEAREST)),F.bindTexture(F.TEXTURE_2D,C),De(C,X)}finally{X--}},Ee=function(te,De,C){var T=F.createFramebuffer();ne.push(T),F.bindFramebuffer(F.FRAMEBUFFER,T),F.activeTexture(F.TEXTURE0+De),F.bindTexture(F.TEXTURE_2D,te),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,te,0);try{C(T)}finally{F.deleteFramebuffer(T),F.bindFramebuffer(F.FRAMEBUFFER,ne[--ne.length-1]||null)}},de=function(){N={},k={},ie={},X=-1,ne.length=0};var Se=ke,_e=Re,ve=Le,fe=le,Ie=Ee,I=de,ee=typeof WebGL2RenderingContext<"u"&&F instanceof WebGL2RenderingContext,N={},k={},ie={},X=-1,ne=[];F.canvas.addEventListener("webglcontextlost",function(te){de(),te.preventDefault()},!1),l.set(F,W={gl:F,isWebGL2:ee,getExtension:ke,withProgram:Le,withTexture:le,withTextureFramebuffer:Ee,handleContextLoss:de})}q(W)}function h(J,q,F,W,ee,N,k,ie){k===void 0&&(k=15),ie===void 0&&(ie=null),u(J,function(X){var ne=X.gl,Se=X.withProgram,_e=X.withTexture;_e("copy",function(ve,fe){ne.texImage2D(ne.TEXTURE_2D,0,ne.RGBA,ee,N,0,ne.RGBA,ne.UNSIGNED_BYTE,q),Se("copy",s,o,function(Ie){var I=Ie.setUniform,ke=Ie.setAttribute;ke("aUV",2,ne.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),I("1i","image",fe),ne.bindFramebuffer(ne.FRAMEBUFFER,ie||null),ne.disable(ne.BLEND),ne.colorMask(k&8,k&4,k&2,k&1),ne.viewport(F,W,ee,N),ne.scissor(F,W,ee,N),ne.drawArrays(ne.TRIANGLES,0,3)})})})}function f(J,q,F){var W=J.width,ee=J.height;u(J,function(N){var k=N.gl,ie=new Uint8Array(W*ee*4);k.readPixels(0,0,W,ee,k.RGBA,k.UNSIGNED_BYTE,ie),J.width=q,J.height=F,h(k,ie,0,0,W,ee)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function _(J,q,F,W,ee,N){N===void 0&&(N=1);var k=new Uint8Array(J*q),ie=W[2]-W[0],X=W[3]-W[1],ne=[];r(F,function(ke,Re,Le,le){ne.push({x1:ke,y1:Re,x2:Le,y2:le,minX:Math.min(ke,Le),minY:Math.min(Re,le),maxX:Math.max(ke,Le),maxY:Math.max(Re,le)})}),ne.sort(function(ke,Re){return ke.maxX-Re.maxX});for(var Se=0;Se<J;Se++)for(var _e=0;_e<q;_e++){var ve=Ie(W[0]+ie*(Se+.5)/J,W[1]+X*(_e+.5)/q),fe=Math.pow(1-Math.abs(ve)/ee,N)/2;ve<0&&(fe=1-fe),fe=Math.max(0,Math.min(255,Math.round(fe*255))),k[_e*J+Se]=fe}return k;function Ie(ke,Re){for(var Le=1/0,le=1/0,Ee=ne.length;Ee--;){var de=ne[Ee];if(de.maxX+le<=ke)break;if(ke+le>de.minX&&Re-le<de.maxY&&Re+le>de.minY){var te=m(ke,Re,de.x1,de.y1,de.x2,de.y2);te<Le&&(Le=te,le=Math.sqrt(Le))}}return I(ke,Re)&&(le=-le),le}function I(ke,Re){for(var Le=0,le=ne.length;le--;){var Ee=ne[le];if(Ee.maxX<=ke)break;var de=Ee.y1>Re!=Ee.y2>Re&&ke<(Ee.x2-Ee.x1)*(Re-Ee.y1)/(Ee.y2-Ee.y1)+Ee.x1;de&&(Le+=Ee.y1<Ee.y2?1:-1)}return Le!==0}}function g(J,q,F,W,ee,N,k,ie,X,ne){N===void 0&&(N=1),ie===void 0&&(ie=0),X===void 0&&(X=0),ne===void 0&&(ne=0),p(J,q,F,W,ee,N,k,null,ie,X,ne)}function p(J,q,F,W,ee,N,k,ie,X,ne,Se){N===void 0&&(N=1),X===void 0&&(X=0),ne===void 0&&(ne=0),Se===void 0&&(Se=0);for(var _e=_(J,q,F,W,ee,N),ve=new Uint8Array(_e.length*4),fe=0;fe<_e.length;fe++)ve[fe*4+Se]=_e[fe];h(k,ve,X,ne,J,q,1<<3-Se,ie)}function m(J,q,F,W,ee,N){var k=ee-F,ie=N-W,X=k*k+ie*ie,ne=X?Math.max(0,Math.min(1,((J-F)*k+(q-W)*ie)/X)):0,Se=J-(F+ne*k),_e=q-(W+ne*ie);return Se*Se+_e*_e}var x=Object.freeze({__proto__:null,generate:_,generateIntoCanvas:g,generateIntoFramebuffer:p}),y="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",v="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",E="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),b=null,A=!1,S={},M=new WeakMap;function D(J){if(!A&&!G(J))throw new Error("WebGL generation not supported")}function P(J,q,F,W,ee,N,k){if(N===void 0&&(N=1),k===void 0&&(k=null),!k&&(k=b,!k)){var ie=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ie)throw new Error("OffscreenCanvas or DOM canvas not supported");k=b=ie.getContext("webgl",{depth:!1})}D(k);var X=new Uint8Array(J*q*4);u(k,function(ve){var fe=ve.gl,Ie=ve.withTexture,I=ve.withTextureFramebuffer;Ie("readable",function(ke,Re){fe.texImage2D(fe.TEXTURE_2D,0,fe.RGBA,J,q,0,fe.RGBA,fe.UNSIGNED_BYTE,null),I(ke,Re,function(Le){L(J,q,F,W,ee,N,fe,Le,0,0,0),fe.readPixels(0,0,J,q,fe.RGBA,fe.UNSIGNED_BYTE,X)})})});for(var ne=new Uint8Array(J*q),Se=0,_e=0;Se<X.length;Se+=4)ne[_e++]=X[Se];return ne}function U(J,q,F,W,ee,N,k,ie,X,ne){N===void 0&&(N=1),ie===void 0&&(ie=0),X===void 0&&(X=0),ne===void 0&&(ne=0),L(J,q,F,W,ee,N,k,null,ie,X,ne)}function L(J,q,F,W,ee,N,k,ie,X,ne,Se){N===void 0&&(N=1),X===void 0&&(X=0),ne===void 0&&(ne=0),Se===void 0&&(Se=0),D(k);var _e=[];r(F,function(ve,fe,Ie,I){_e.push(ve,fe,Ie,I)}),_e=new Float32Array(_e),u(k,function(ve){var fe=ve.gl,Ie=ve.isWebGL2,I=ve.getExtension,ke=ve.withProgram,Re=ve.withTexture,Le=ve.withTextureFramebuffer,le=ve.handleContextLoss;if(Re("rawDistances",function(Ee,de){(J!==Ee._lastWidth||q!==Ee._lastHeight)&&fe.texImage2D(fe.TEXTURE_2D,0,fe.RGBA,Ee._lastWidth=J,Ee._lastHeight=q,0,fe.RGBA,fe.UNSIGNED_BYTE,null),ke("main",y,v,function(te){var De=te.setAttribute,C=te.setUniform,T=!Ie&&I("ANGLE_instanced_arrays"),z=!Ie&&I("EXT_blend_minmax");De("aUV",2,fe.STATIC_DRAW,0,w),De("aLineSegment",4,fe.DYNAMIC_DRAW,1,_e),C.apply(void 0,["4f","uGlyphBounds"].concat(W)),C("1f","uMaxDistance",ee),C("1f","uExponent",N),Le(Ee,de,function(ae){fe.enable(fe.BLEND),fe.colorMask(!0,!0,!0,!0),fe.viewport(0,0,J,q),fe.scissor(0,0,J,q),fe.blendFunc(fe.ONE,fe.ONE),fe.blendEquationSeparate(fe.FUNC_ADD,Ie?fe.MAX:z.MAX_EXT),fe.clear(fe.COLOR_BUFFER_BIT),Ie?fe.drawArraysInstanced(fe.TRIANGLES,0,3,_e.length/4):T.drawArraysInstancedANGLE(fe.TRIANGLES,0,3,_e.length/4)})}),ke("post",s,E,function(te){te.setAttribute("aUV",2,fe.STATIC_DRAW,0,w),te.setUniform("1i","tex",de),fe.bindFramebuffer(fe.FRAMEBUFFER,ie),fe.disable(fe.BLEND),fe.colorMask(Se===0,Se===1,Se===2,Se===3),fe.viewport(X,ne,J,q),fe.scissor(X,ne,J,q),fe.drawArrays(fe.TRIANGLES,0,3)})}),fe.isContextLost())throw le(),new Error("webgl context lost")})}function G(J){var q=!J||J===b?S:J.canvas||J,F=M.get(q);if(F===void 0){A=!0;var W=null;try{var ee=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],N=P(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,J);F=N&&ee.length===N.length&&N.every(function(k,ie){return k===ee[ie]}),F||(W="bad trial run results",console.info(ee,N))}catch(k){F=!1,W=k.message}W&&console.warn("WebGL SDF generation not supported:",W),A=!1,M.set(q,F)}return F}var O=Object.freeze({__proto__:null,generate:P,generateIntoCanvas:U,generateIntoFramebuffer:L,isSupported:G});function K(J,q,F,W,ee,N){ee===void 0&&(ee=Math.max(W[2]-W[0],W[3]-W[1])/2),N===void 0&&(N=1);try{return P.apply(O,arguments)}catch(k){return console.info("WebGL SDF generation failed, falling back to JS",k),_.apply(x,arguments)}}function H(J,q,F,W,ee,N,k,ie,X,ne){ee===void 0&&(ee=Math.max(W[2]-W[0],W[3]-W[1])/2),N===void 0&&(N=1),ie===void 0&&(ie=0),X===void 0&&(X=0),ne===void 0&&(ne=0);try{return U.apply(O,arguments)}catch(Se){return console.info("WebGL SDF generation failed, falling back to JS",Se),g.apply(x,arguments)}}return e.forEachPathCommand=i,e.generate=K,e.generateIntoCanvas=H,e.javascript=x,e.pathToLineSegments=r,e.webgl=O,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}function V1(){var a=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},n={},i={};n.L=1,i[1]="L",Object.keys(t).forEach(function(le,Ee){n[le]=1<<Ee+1,i[n[le]]=le}),Object.freeze(n);var r=n.LRI|n.RLI|n.FSI,s=n.L|n.R|n.AL,o=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,l=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,c=n.S|n.WS|n.B|r|n.PDI|l,u=null;function h(){if(!u){u=new Map;var le=function(de){if(t.hasOwnProperty(de)){var te=0;t[de].split(",").forEach(function(De){var C=De.split("+"),T=C[0],z=C[1];T=parseInt(T,36),z=z?parseInt(z,36):0,u.set(te+=T,n[de]);for(var ae=0;ae<z;ae++)u.set(++te,n[de])})}};for(var Ee in t)le(Ee)}}function f(le){return h(),u.get(le.codePointAt(0))||n.L}function d(le){return i[f(le)]}var _={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function g(le,Ee){var de=36,te=0,De=new Map,C=Ee&&new Map,T;return le.split(",").forEach(function z(ae){if(ae.indexOf("+")!==-1)for(var $=+ae;$--;)z(T);else{T=ae;var Q=ae.split(">"),xe=Q[0],me=Q[1];xe=String.fromCodePoint(te+=parseInt(xe,de)),me=String.fromCodePoint(te+=parseInt(me,de)),De.set(xe,me),Ee&&C.set(me,xe)}}),{map:De,reverseMap:C}}var p,m,x;function y(){if(!p){var le=g(_.pairs,!0),Ee=le.map,de=le.reverseMap;p=Ee,m=de,x=g(_.canonical,!1).map}}function v(le){return y(),p.get(le)||null}function E(le){return y(),m.get(le)||null}function w(le){return y(),x.get(le)||null}var b=n.L,A=n.R,S=n.EN,M=n.ES,D=n.ET,P=n.AN,U=n.CS,L=n.B,G=n.S,O=n.ON,K=n.BN,H=n.NSM,J=n.AL,q=n.LRO,F=n.RLO,W=n.LRE,ee=n.RLE,N=n.PDF,k=n.LRI,ie=n.RLI,X=n.FSI,ne=n.PDI;function Se(le,Ee){for(var de=125,te=new Uint32Array(le.length),De=0;De<le.length;De++)te[De]=f(le[De]);var C=new Map;function T(cn,On){var un=te[cn];te[cn]=On,C.set(un,C.get(un)-1),un&o&&C.set(o,C.get(o)-1),C.set(On,(C.get(On)||0)+1),On&o&&C.set(o,(C.get(o)||0)+1)}for(var z=new Uint8Array(le.length),ae=new Map,$=[],Q=null,xe=0;xe<le.length;xe++)Q||$.push(Q={start:xe,end:le.length-1,level:Ee==="rtl"?1:Ee==="ltr"?0:wh(xe,!1)}),te[xe]&L&&(Q.end=xe,Q=null);for(var me=ee|W|F|q|r|ne|N|L,Me=function(cn){return cn+(cn&1?1:2)},be=function(cn){return cn+(cn&1?2:1)},oe=0;oe<$.length;oe++){Q=$[oe];var pe=[{_level:Q.level,_override:0,_isolate:0}],ge=void 0,Ae=0,ye=0,ze=0;C.clear();for(var B=Q.start;B<=Q.end;B++){var he=te[B];if(ge=pe[pe.length-1],C.set(he,(C.get(he)||0)+1),he&o&&C.set(o,(C.get(o)||0)+1),he&me)if(he&(ee|W)){z[B]=ge._level;var ce=(he===ee?be:Me)(ge._level);ce<=de&&!Ae&&!ye?pe.push({_level:ce,_override:0,_isolate:0}):Ae||ye++}else if(he&(F|q)){z[B]=ge._level;var Ue=(he===F?be:Me)(ge._level);Ue<=de&&!Ae&&!ye?pe.push({_level:Ue,_override:he&F?A:b,_isolate:0}):Ae||ye++}else if(he&r){he&X&&(he=wh(B+1,!0)===1?ie:k),z[B]=ge._level,ge._override&&T(B,ge._override);var ue=(he===ie?be:Me)(ge._level);ue<=de&&Ae===0&&ye===0?(ze++,pe.push({_level:ue,_override:0,_isolate:1,_isolInitIndex:B})):Ae++}else if(he&ne){if(Ae>0)Ae--;else if(ze>0){for(ye=0;!pe[pe.length-1]._isolate;)pe.pop();var se=pe[pe.length-1]._isolInitIndex;se!=null&&(ae.set(se,B),ae.set(B,se)),pe.pop(),ze--}ge=pe[pe.length-1],z[B]=ge._level,ge._override&&T(B,ge._override)}else he&N?(Ae===0&&(ye>0?ye--:!ge._isolate&&pe.length>1&&(pe.pop(),ge=pe[pe.length-1])),z[B]=ge._level):he&L&&(z[B]=Q.level);else z[B]=ge._level,ge._override&&he!==K&&T(B,ge._override)}for(var we=[],Fe=null,Oe=Q.start;Oe<=Q.end;Oe++){var We=te[Oe];if(!(We&l)){var ht=z[Oe],dt=We&r,St=We===ne;Fe&&ht===Fe._level?(Fe._end=Oe,Fe._endsWithIsolInit=dt):we.push(Fe={_start:Oe,_end:Oe,_level:ht,_startsWithPDI:St,_endsWithIsolInit:dt})}}for(var on=[],Wt=0;Wt<we.length;Wt++){var _n=we[Wt];if(!_n._startsWithPDI||_n._startsWithPDI&&!ae.has(_n._start)){for(var Ln=[Fe=_n],$n=void 0;Fe&&Fe._endsWithIsolInit&&($n=ae.get(Fe._end))!=null;)for(var ln=Wt+1;ln<we.length;ln++)if(we[ln]._start===$n){Ln.push(Fe=we[ln]);break}for(var It=[],wn=0;wn<Ln.length;wn++)for(var Us=Ln[wn],Pr=Us._start;Pr<=Us._end;Pr++)It.push(Pr);for(var al=z[It[0]],Ia=Q.level,Dr=It[0]-1;Dr>=0;Dr--)if(!(te[Dr]&l)){Ia=z[Dr];break}var Is=It[It.length-1],ol=z[Is],La=Q.level;if(!(te[Is]&r)){for(var R=Is+1;R<=Q.end;R++)if(!(te[R]&l)){La=z[R];break}}on.push({_seqIndices:It,_sosType:Math.max(Ia,al)%2?A:b,_eosType:Math.max(La,ol)%2?A:b})}}for(var j=0;j<on.length;j++){var re=on[j],V=re._seqIndices,Z=re._sosType,Te=re._eosType,Ce=z[V[0]]&1?A:b;if(C.get(H))for(var Be=0;Be<V.length;Be++){var Ne=V[Be];if(te[Ne]&H){for(var Xe=Z,Ye=Be-1;Ye>=0;Ye--)if(!(te[V[Ye]]&l)){Xe=te[V[Ye]];break}T(Ne,Xe&(r|ne)?O:Xe)}}if(C.get(S))for(var Ge=0;Ge<V.length;Ge++){var Je=V[Ge];if(te[Je]&S)for(var st=Ge-1;st>=-1;st--){var pt=st===-1?Z:te[V[st]];if(pt&s){pt===J&&T(Je,P);break}}}if(C.get(J))for(var mt=0;mt<V.length;mt++){var nt=V[mt];te[nt]&J&&T(nt,A)}if(C.get(M)||C.get(U))for(var Ve=1;Ve<V.length-1;Ve++){var Tt=V[Ve];if(te[Tt]&(M|U)){for(var $e=0,Qt=0,ei=Ve-1;ei>=0&&($e=te[V[ei]],!!($e&l));ei--);for(var zt=Ve+1;zt<V.length&&(Qt=te[V[zt]],!!(Qt&l));zt++);$e===Qt&&(te[Tt]===M?$e===S:$e&(S|P))&&T(Tt,$e)}}if(C.get(S))for(var Xt=0;Xt<V.length;Xt++){var gt=V[Xt];if(te[gt]&S){for(var Gt=Xt-1;Gt>=0&&te[V[Gt]]&(D|l);Gt--)T(V[Gt],S);for(Xt++;Xt<V.length&&te[V[Xt]]&(D|l|S);Xt++)te[V[Xt]]!==S&&T(V[Xt],S)}}if(C.get(D)||C.get(M)||C.get(U))for(var Lt=0;Lt<V.length;Lt++){var Ft=V[Lt];if(te[Ft]&(D|M|U)){T(Ft,O);for(var Ct=Lt-1;Ct>=0&&te[V[Ct]]&l;Ct--)T(V[Ct],O);for(var Ui=Lt+1;Ui<V.length&&te[V[Ui]]&l;Ui++)T(V[Ui],O)}}if(C.get(S))for(var Fn=0,mh=Z;Fn<V.length;Fn++){var gh=V[Fn],ll=te[gh];ll&S?mh===b&&T(gh,b):ll&s&&(mh=ll)}if(C.get(o)){var Ls=A|S|P,_h=Ls|b,Fa=[];{for(var Ur=[],Ir=0;Ir<V.length;Ir++)if(te[V[Ir]]&o){var Fs=le[V[Ir]],vh=void 0;if(v(Fs)!==null)if(Ur.length<63)Ur.push({char:Fs,seqIndex:Ir});else break;else if((vh=E(Fs))!==null)for(var Ns=Ur.length-1;Ns>=0;Ns--){var cl=Ur[Ns].char;if(cl===vh||cl===E(w(Fs))||v(w(cl))===Fs){Fa.push([Ur[Ns].seqIndex,Ir]),Ur.length=Ns;break}}}Fa.sort(function(cn,On){return cn[0]-On[0]})}for(var ul=0;ul<Fa.length;ul++){for(var xh=Fa[ul],Na=xh[0],hl=xh[1],yh=!1,Nn=0,fl=Na+1;fl<hl;fl++){var Sh=V[fl];if(te[Sh]&_h){yh=!0;var Mh=te[Sh]&Ls?A:b;if(Mh===Ce){Nn=Mh;break}}}if(yh&&!Nn){Nn=Z;for(var dl=Na-1;dl>=0;dl--){var Th=V[dl];if(te[Th]&_h){var Eh=te[Th]&Ls?A:b;Eh!==Ce?Nn=Eh:Nn=Ce;break}}}if(Nn){if(te[V[Na]]=te[V[hl]]=Nn,Nn!==Ce){for(var Os=Na+1;Os<V.length;Os++)if(!(te[V[Os]]&l)){f(le[V[Os]])&H&&(te[V[Os]]=Nn);break}}if(Nn!==Ce){for(var Bs=hl+1;Bs<V.length;Bs++)if(!(te[V[Bs]]&l)){f(le[V[Bs]])&H&&(te[V[Bs]]=Nn);break}}}}for(var Ii=0;Ii<V.length;Ii++)if(te[V[Ii]]&o){for(var bh=Ii,pl=Ii,ml=Z,ks=Ii-1;ks>=0;ks--)if(te[V[ks]]&l)bh=ks;else{ml=te[V[ks]]&Ls?A:b;break}for(var Ah=Te,zs=Ii+1;zs<V.length;zs++)if(te[V[zs]]&(o|l))pl=zs;else{Ah=te[V[zs]]&Ls?A:b;break}for(var gl=bh;gl<=pl;gl++)te[V[gl]]=ml===Ah?ml:Ce;Ii=pl}}}for(var vn=Q.start;vn<=Q.end;vn++){var Dm=z[vn],Oa=te[vn];if(Dm&1?Oa&(b|S|P)&&z[vn]++:Oa&A?z[vn]++:Oa&(P|S)&&(z[vn]+=2),Oa&l&&(z[vn]=vn===0?Q.level:z[vn-1]),vn===Q.end||f(le[vn])&(G|L))for(var Ba=vn;Ba>=0&&f(le[Ba])&c;Ba--)z[Ba]=Q.level}}return{levels:z,paragraphs:$};function wh(cn,On){for(var un=cn;un<le.length;un++){var Li=te[un];if(Li&(A|J))return 1;if(Li&(L|b)||On&&Li===ne)return 0;if(Li&r){var Rh=Um(un);un=Rh===-1?le.length:Rh}}return 0}function Um(cn){for(var On=1,un=cn+1;un<le.length;un++){var Li=te[un];if(Li&L)break;if(Li&ne){if(--On===0)return un}else Li&r&&On++}return-1}}var _e="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ve;function fe(){if(!ve){var le=g(_e,!0),Ee=le.map,de=le.reverseMap;de.forEach(function(te,De){Ee.set(De,te)}),ve=Ee}}function Ie(le){return fe(),ve.get(le)||null}function I(le,Ee,de,te){var De=le.length;de=Math.max(0,de==null?0:+de),te=Math.min(De-1,te==null?De-1:+te);for(var C=new Map,T=de;T<=te;T++)if(Ee[T]&1){var z=Ie(le[T]);z!==null&&C.set(T,z)}return C}function ke(le,Ee,de,te){var De=le.length;de=Math.max(0,de==null?0:+de),te=Math.min(De-1,te==null?De-1:+te);var C=[];return Ee.paragraphs.forEach(function(T){var z=Math.max(de,T.start),ae=Math.min(te,T.end);if(z<ae){for(var $=Ee.levels.slice(z,ae+1),Q=ae;Q>=z&&f(le[Q])&c;Q--)$[Q]=T.level;for(var xe=T.level,me=1/0,Me=0;Me<$.length;Me++){var be=$[Me];be>xe&&(xe=be),be<me&&(me=be|1)}for(var oe=xe;oe>=me;oe--)for(var pe=0;pe<$.length;pe++)if($[pe]>=oe){for(var ge=pe;pe+1<$.length&&$[pe+1]>=oe;)pe++;pe>ge&&C.push([ge+z,pe+z])}}}),C}function Re(le,Ee,de,te){var De=Le(le,Ee,de,te),C=[].concat(le);return De.forEach(function(T,z){C[z]=(Ee.levels[T]&1?Ie(le[T]):null)||le[T]}),C.join("")}function Le(le,Ee,de,te){for(var De=ke(le,Ee,de,te),C=[],T=0;T<le.length;T++)C[T]=T;return De.forEach(function(z){for(var ae=z[0],$=z[1],Q=C.slice(ae,$+1),xe=Q.length;xe--;)C[$-xe]=Q[xe]}),C}return e.closingToOpeningBracket=E,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=w,e.getEmbeddingLevels=Se,e.getMirroredCharacter=Ie,e.getMirroredCharactersMap=I,e.getReorderSegments=ke,e.getReorderedIndices=Le,e.getReorderedString=Re,e.openingToClosingBracket=v,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}const xm=/\bvoid\s+main\s*\(\s*\)\s*{/g;function yu(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,i){let r=Ze[i];return r?yu(r):n}return a.replace(e,t)}const Vt=[];for(let a=0;a<256;a++)Vt[a]=(a<16?"0":"")+a.toString(16);function H1(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[a&255]+Vt[a>>8&255]+Vt[a>>16&255]+Vt[a>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toUpperCase()}const pr=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let i in n)Object.prototype.hasOwnProperty.call(n,i)&&(a[i]=n[i])}return a},W1=Date.now(),dd=new WeakMap,pd=new Map;let X1=1e10;function Su(a,e){const t=K1(e);let n=dd.get(a);if(n||dd.set(a,n=Object.create(null)),n[t])return new n[t];const i=`_onBeforeCompile${t}`,r=function(c,u){a.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=pd[h];if(!f){const d=Y1(this,c,e,t);f=pd[h]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,pr(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-W1}}),this[i]&&this[i](c)},s=function(){return o(e.chained?a:a.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:X1++}),u.uuid=H1(),u.uniforms=pr({},c.uniforms,e.uniforms),u.defines=pr({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=pr({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:s},isDerivedMaterial:{value:!0},type:{get:()=>a.type,set:c=>{a.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(pr(this.extensions,c.extensions),pr(this.defines,c.defines),pr(this.uniforms,Lu.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Su(a.isDerivedMaterial?a.getDepthMaterial():new rp({depthPacking:Gd}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Su(a.isDerivedMaterial?a.getDistanceMaterial():new sp,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return n[t]=s,new s}function Y1(a,{vertexShader:e,fragmentShader:t},n,i){let{vertexDefs:r,vertexMainIntro:s,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:_}=n;if(r=r||"",s=s||"",o=o||"",c=c||"",u=u||"",h=h||"",(l||d)&&(e=yu(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=yu(t)),d){let g=d({vertexShader:e,fragmentShader:t});e=g.vertexShader,t=g.fragmentShader}if(f){let g=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(g.push(p),"")),h=`${f}
${g.join(`
`)}
${h}`}if(_){const g=`
uniform float ${_};
`;r=g+r,c=g+c}return l&&(e=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${e}
`,r=`${r}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,s=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${s}
`,e=e.replace(/\b(position|normal|uv)\b/g,(g,p,m,x)=>/\battribute\s+vec[23]\s+$/.test(x.substr(0,m))?p:`troika_${p}_${i}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),e=md(e,i,r,s,o),t=md(t,i,c,u,h),{vertexShader:e,fragmentShader:t}}function md(a,e,t,n,i){return(n||i||t)&&(a=a.replace(xm,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`),a}function q1(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let j1=0;const gd=new Map;function K1(a){const e=JSON.stringify(a,q1);let t=gd.get(e);return t==null&&gd.set(e,t=++j1),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function Z1(){return typeof window>"u"&&(self.window=self),function(a){var e={parse:function(i){var r=e._bin,s=new Uint8Array(i);if(r.readASCII(s,0,4)=="ttcf"){var o=4;r.readUshort(s,o),o+=2,r.readUshort(s,o),o+=2;var l=r.readUint(s,o);o+=4;for(var c=[],u=0;u<l;u++){var h=r.readUint(s,o);o+=4,c.push(e._readFont(s,h))}return c}return[e._readFont(s,0)]},_readFont:function(i,r){var s=e._bin,o=r;s.readFixed(i,r),r+=4;var l=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:i,_offset:o},h={},f=0;f<l;f++){var d=s.readASCII(i,r,4);r+=4,s.readUint(i,r),r+=4;var _=s.readUint(i,r);r+=4;var g=s.readUint(i,r);r+=4,h[d]={offset:_,length:g}}for(f=0;f<c.length;f++){var p=c[f];h[p]&&(u[p.trim()]=e[p.trim()].parse(i,h[p].offset,h[p].length,u))}return u},_tabOffset:function(i,r,s){for(var o=e._bin,l=o.readUshort(i,s+4),c=s+12,u=0;u<l;u++){var h=o.readASCII(i,c,4);c+=4,o.readUint(i,c),c+=4;var f=o.readUint(i,c);if(c+=4,o.readUint(i,c),c+=4,h==r)return f}return 0}};e._bin={readFixed:function(i,r){return(i[r]<<8|i[r+1])+(i[r+2]<<8|i[r+3])/65540},readF2dot14:function(i,r){return e._bin.readShort(i,r)/16384},readInt:function(i,r){return e._bin._view(i).getInt32(r)},readInt8:function(i,r){return e._bin._view(i).getInt8(r)},readShort:function(i,r){return e._bin._view(i).getInt16(r)},readUshort:function(i,r){return e._bin._view(i).getUint16(r)},readUshorts:function(i,r,s){for(var o=[],l=0;l<s;l++)o.push(e._bin.readUshort(i,r+2*l));return o},readUint:function(i,r){return e._bin._view(i).getUint32(r)},readUint64:function(i,r){return 4294967296*e._bin.readUint(i,r)+e._bin.readUint(i,r+4)},readASCII:function(i,r,s){for(var o="",l=0;l<s;l++)o+=String.fromCharCode(i[r+l]);return o},readUnicode:function(i,r,s){for(var o="",l=0;l<s;l++){var c=i[r++]<<8|i[r++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,r,s){var o=e._bin._tdec;return o&&r==0&&s==i.length?o.decode(i):e._bin.readASCII(i,r,s)},readBytes:function(i,r,s){for(var o=[],l=0;l<s;l++)o.push(i[r+l]);return o},readASCIIArray:function(i,r,s){for(var o=[],l=0;l<s;l++)o.push(String.fromCharCode(i[r+l]));return o},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,r,s,o,l){var c=e._bin,u={},h=r;c.readFixed(i,r),r+=4;var f=c.readUshort(i,r);r+=2;var d=c.readUshort(i,r);r+=2;var _=c.readUshort(i,r);return r+=2,u.scriptList=e._lctf.readScriptList(i,h+f),u.featureList=e._lctf.readFeatureList(i,h+d),u.lookupList=e._lctf.readLookupList(i,h+_,l),u},e._lctf.readLookupList=function(i,r,s){var o=e._bin,l=r,c=[],u=o.readUshort(i,r);r+=2;for(var h=0;h<u;h++){var f=o.readUshort(i,r);r+=2;var d=e._lctf.readLookupTable(i,l+f,s);c.push(d)}return c},e._lctf.readLookupTable=function(i,r,s){var o=e._bin,l=r,c={tabs:[]};c.ltype=o.readUshort(i,r),r+=2,c.flag=o.readUshort(i,r),r+=2;var u=o.readUshort(i,r);r+=2;for(var h=c.ltype,f=0;f<u;f++){var d=o.readUshort(i,r);r+=2;var _=s(i,h,l+d,c);c.tabs.push(_)}return c},e._lctf.numOfOnes=function(i){for(var r=0,s=0;s<32;s++)(i>>>s&1)!=0&&r++;return r},e._lctf.readClassDef=function(i,r){var s=e._bin,o=[],l=s.readUshort(i,r);if(r+=2,l==1){var c=s.readUshort(i,r);r+=2;var u=s.readUshort(i,r);r+=2;for(var h=0;h<u;h++)o.push(c+h),o.push(c+h),o.push(s.readUshort(i,r)),r+=2}if(l==2){var f=s.readUshort(i,r);for(r+=2,h=0;h<f;h++)o.push(s.readUshort(i,r)),r+=2,o.push(s.readUshort(i,r)),r+=2,o.push(s.readUshort(i,r)),r+=2}return o},e._lctf.getInterval=function(i,r){for(var s=0;s<i.length;s+=3){var o=i[s],l=i[s+1];if(i[s+2],o<=r&&r<=l)return s}return-1},e._lctf.readCoverage=function(i,r){var s=e._bin,o={};o.fmt=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);return r+=2,o.fmt==1&&(o.tab=s.readUshorts(i,r,l)),o.fmt==2&&(o.tab=s.readUshorts(i,r,3*l)),o},e._lctf.coverageIndex=function(i,r){var s=i.tab;if(i.fmt==1)return s.indexOf(r);if(i.fmt==2){var o=e._lctf.getInterval(s,r);if(o!=-1)return s[o+2]+(r-s[o])}return-1},e._lctf.readFeatureList=function(i,r){var s=e._bin,o=r,l=[],c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=s.readASCII(i,r,4);r+=4;var f=s.readUshort(i,r);r+=2;var d=e._lctf.readFeatureTable(i,o+f);d.tag=h.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(i,r){var s=e._bin,o=r,l={},c=s.readUshort(i,r);r+=2,c>0&&(l.featureParams=o+c);var u=s.readUshort(i,r);r+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(s.readUshort(i,r+2*h));return l},e._lctf.readScriptList=function(i,r){var s=e._bin,o=r,l={},c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=s.readASCII(i,r,4);r+=4;var f=s.readUshort(i,r);r+=2,l[h.trim()]=e._lctf.readScriptTable(i,o+f)}return l},e._lctf.readScriptTable=function(i,r){var s=e._bin,o=r,l={},c=s.readUshort(i,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(i,o+c));var u=s.readUshort(i,r);r+=2;for(var h=0;h<u;h++){var f=s.readASCII(i,r,4);r+=4;var d=s.readUshort(i,r);r+=2,l[f.trim()]=e._lctf.readLangSysTable(i,o+d)}return l},e._lctf.readLangSysTable=function(i,r){var s=e._bin,o={};s.readUshort(i,r),r+=2,o.reqFeature=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);return r+=2,o.features=s.readUshorts(i,r,l),o},e.CFF={},e.CFF.parse=function(i,r,s){var o=e._bin;(i=new Uint8Array(i.buffer,r,s))[r=0],i[++r],i[++r],i[++r],r++;var l=[];r=e.CFF.readIndex(i,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(i,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var h=[];r=e.CFF.readIndex(i,r,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(i,r+h[u],r+h[u+1]));r+=h[h.length-1];var d=f[0],_=[];r=e.CFF.readIndex(i,r,_);var g=[];for(u=0;u<_.length-1;u++)g.push(o.readASCII(i,r+_[u],_[u+1]-_[u]));if(r+=_[_.length-1],e.CFF.readSubrs(i,r,d),d.CharStrings){r=d.CharStrings,_=[],r=e.CFF.readIndex(i,r,_);var p=[];for(u=0;u<_.length-1;u++)p.push(o.readBytes(i,r+_[u],_[u+1]-_[u]));d.CharStrings=p}if(d.ROS){r=d.FDArray;var m=[];for(r=e.CFF.readIndex(i,r,m),d.FDArray=[],u=0;u<m.length-1;u++){var x=e.CFF.readDict(i,r+m[u],r+m[u+1]);e.CFF._readFDict(i,x,g),d.FDArray.push(x)}r+=m[m.length-1],r=d.FDSelect,d.FDSelect=[];var y=i[r];if(r++,y!=3)throw y;var v=o.readUshort(i,r);for(r+=2,u=0;u<v+1;u++)d.FDSelect.push(o.readUshort(i,r),i[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(i,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(i,d.charset,d.CharStrings.length)),e.CFF._readFDict(i,d,g),d},e.CFF._readFDict=function(i,r,s){var o;for(var l in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(i,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(i,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=s[r[l]-426+35])},e.CFF.readSubrs=function(i,r,s){var o=e._bin,l=[];r=e.CFF.readIndex(i,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var h=0;h<l.length-1;h++)s.Subrs.push(o.readBytes(i,r+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,r){for(var s=0;s<i.charset.length;s++)if(i.charset[s]==r)return s;return-1},e.CFF.glyphBySE=function(i,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[r])},e.CFF.readEncoding=function(i,r,s){e._bin;var o=[".notdef"],l=i[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=i[r];r++;for(var u=0;u<c;u++)o.push(i[r+u]);return o},e.CFF.readCharset=function(i,r,s){var o=e._bin,l=[".notdef"],c=i[r];if(r++,c==0)for(var u=0;u<s;u++){var h=o.readUshort(i,r);r+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){h=o.readUshort(i,r),r+=2;var f=0;for(c==1?(f=i[r],r++):(f=o.readUshort(i,r),r+=2),u=0;u<=f;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(i,r,s){var o=e._bin,l=o.readUshort(i,r)+1,c=i[r+=2];if(r++,c==1)for(var u=0;u<l;u++)s.push(i[r+u]);else if(c==2)for(u=0;u<l;u++)s.push(o.readUshort(i,r+2*u));else if(c==3)for(u=0;u<l;u++)s.push(16777215&o.readUint(i,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(i,r,s){var o=e._bin,l=i[r],c=i[r+1];i[r+2],i[r+3],i[r+4];var u=1,h=null,f=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(f=o.readShort(i,r+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(f=l-139,u=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,u=2),l==255&&(f=o.readInt(i,r+1)/65535,u=5),s.val=f??"o"+h,s.size=u},e.CFF.readCharString=function(i,r,s){for(var o=r+s,l=e._bin,c=[];r<o;){var u=i[r],h=i[r+1];i[r+2],i[r+3],i[r+4];var f=1,d=null,_=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(_=l.readShort(i,r+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(_=u-139,f=1),247<=u&&u<=250&&(_=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(_=256*-(u-251)-h-108,f=2),u==255&&(_=l.readInt(i,r+1)/65535,f=5),c.push(_??"o"+d),r+=f}return c},e.CFF.readDict=function(i,r,s){for(var o=e._bin,l={},c=[];r<s;){var u=i[r],h=i[r+1];i[r+2],i[r+3],i[r+4];var f=1,d=null,_=null;if(u==28&&(_=o.readShort(i,r+1),f=3),u==29&&(_=o.readInt(i,r+1),f=5),32<=u&&u<=246&&(_=u-139,f=1),247<=u&&u<=250&&(_=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(_=256*-(u-251)-h-108,f=2),u==255)throw _=o.readInt(i,r+1)/65535,f=5,"unknown number";if(u==30){var g=[];for(f=1;;){var p=i[r+f];f++;var m=p>>4,x=15&p;if(m!=15&&g.push(m),x!=15&&g.push(x),x==15)break}for(var y="",v=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],E=0;E<g.length;E++)y+=v[g[E]];_=parseFloat(y)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(_),r+=f}return l},e.cmap={},e.cmap.parse=function(i,r,s){i=new Uint8Array(i.buffer,r,s),r=0;var o=e._bin,l={};o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var f=o.readUshort(i,r);r+=2;var d=o.readUshort(i,r);r+=2;var _=o.readUint(i,r);r+=4;var g="p"+f+"e"+d,p=u.indexOf(_);if(p==-1){var m;p=l.tables.length,u.push(_);var x=o.readUshort(i,_);x==0?m=e.cmap.parse0(i,_):x==4?m=e.cmap.parse4(i,_):x==6?m=e.cmap.parse6(i,_):x==12?m=e.cmap.parse12(i,_):console.debug("unknown format: "+x,f,d,_),l.tables.push(m)}if(l[g]!=null)throw"multiple tables for one platform+encoding";l[g]=p}return l},e.cmap.parse0=function(i,r){var s=e._bin,o={};o.format=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(i[r+c]);return o},e.cmap.parse4=function(i,r){var s=e._bin,o=r,l={};l.format=s.readUshort(i,r),r+=2;var c=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2;var u=s.readUshort(i,r);r+=2;var h=u/2;l.searchRange=s.readUshort(i,r),r+=2,l.entrySelector=s.readUshort(i,r),r+=2,l.rangeShift=s.readUshort(i,r),r+=2,l.endCount=s.readUshorts(i,r,h),r+=2*h,r+=2,l.startCount=s.readUshorts(i,r,h),r+=2*h,l.idDelta=[];for(var f=0;f<h;f++)l.idDelta.push(s.readShort(i,r)),r+=2;for(l.idRangeOffset=s.readUshorts(i,r,h),r+=2*h,l.glyphIdArray=[];r<o+c;)l.glyphIdArray.push(s.readUshort(i,r)),r+=2;return l},e.cmap.parse6=function(i,r){var s=e._bin,o={};o.format=s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,o.firstCode=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);r+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(s.readUshort(i,r)),r+=2;return o},e.cmap.parse12=function(i,r){var s=e._bin,o={};o.format=s.readUshort(i,r),r+=2,r+=2,s.readUint(i,r),r+=4,s.readUint(i,r),r+=4;var l=s.readUint(i,r);r+=4,o.groups=[];for(var c=0;c<l;c++){var u=r+12*c,h=s.readUint(i,u+0),f=s.readUint(i,u+4),d=s.readUint(i,u+8);o.groups.push([h,f,d])}return o},e.glyf={},e.glyf.parse=function(i,r,s,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(i,r){var s=e._bin,o=i._data,l=e._tabOffset(o,"glyf",i._offset)+i.loca[r];if(i.loca[r]==i.loca[r+1])return null;var c={};if(c.noc=s.readShort(o,l),l+=2,c.xMin=s.readShort(o,l),l+=2,c.yMin=s.readShort(o,l),l+=2,c.xMax=s.readShort(o,l),l+=2,c.yMax=s.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(s.readUshort(o,l)),l+=2;var h=s.readUshort(o,l);if(l+=2,o.length-l<h)return null;c.instructions=s.readBytes(o,l,h),l+=h;var f=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<f;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var _=o[l];l++;for(var g=0;g<_;g++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<f;u++){var p=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;p?(c.xs.push(m?o[l]:-o[l]),l++):m?c.xs.push(0):(c.xs.push(s.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<f;u++)p=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,p?(c.ys.push(m?o[l]:-o[l]),l++):m?c.ys.push(0):(c.ys.push(s.readShort(o,l)),l+=2);var x=0,y=0;for(u=0;u<f;u++)x+=c.xs[u],y+=c.ys[u],c.xs[u]=x,c.ys[u]=y}else{var v;c.parts=[];do{v=s.readUshort(o,l),l+=2;var E={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(E),E.glyphIndex=s.readUshort(o,l),l+=2,1&v){var w=s.readShort(o,l);l+=2;var b=s.readShort(o,l);l+=2}else w=s.readInt8(o,l),l++,b=s.readInt8(o,l),l++;2&v?(E.m.tx=w,E.m.ty=b):(E.p1=w,E.p2=b),8&v?(E.m.a=E.m.d=s.readF2dot14(o,l),l+=2):64&v?(E.m.a=s.readF2dot14(o,l),l+=2,E.m.d=s.readF2dot14(o,l),l+=2):128&v&&(E.m.a=s.readF2dot14(o,l),l+=2,E.m.b=s.readF2dot14(o,l),l+=2,E.m.c=s.readF2dot14(o,l),l+=2,E.m.d=s.readF2dot14(o,l),l+=2)}while(32&v);if(256&v){var A=s.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<A;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(i,r,s,o){var l=r;r+=4;var c=e._bin.readUshort(i,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(i,l+c)}},e.GPOS={},e.GPOS.parse=function(i,r,s,o){return e._lctf.parse(i,r,s,o,e.GPOS.subt)},e.GPOS.subt=function(i,r,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(i,s),s+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var h=l.readUshort(i,s);s+=2,u.coverage=e._lctf.readCoverage(i,h+c)}if(r==1&&u.fmt==1){var f=l.readUshort(i,s);s+=2,f!=0&&(u.pos=e.GPOS.readValueRecord(i,s,f))}else if(r==2&&u.fmt>=1&&u.fmt<=2){f=l.readUshort(i,s),s+=2;var d=l.readUshort(i,s);s+=2;var _=e._lctf.numOfOnes(f),g=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var p=l.readUshort(i,s);s+=2;for(var m=0;m<p;m++){var x=c+l.readUshort(i,s);s+=2;var y=l.readUshort(i,x);x+=2;for(var v=[],E=0;E<y;E++){var w=l.readUshort(i,x);x+=2,f!=0&&(P=e.GPOS.readValueRecord(i,x,f),x+=2*_),d!=0&&(U=e.GPOS.readValueRecord(i,x,d),x+=2*g),v.push({gid2:w,val1:P,val2:U})}u.pairsets.push(v)}}if(u.fmt==2){var b=l.readUshort(i,s);s+=2;var A=l.readUshort(i,s);s+=2;var S=l.readUshort(i,s);s+=2;var M=l.readUshort(i,s);for(s+=2,u.classDef1=e._lctf.readClassDef(i,c+b),u.classDef2=e._lctf.readClassDef(i,c+A),u.matrix=[],m=0;m<S;m++){var D=[];for(E=0;E<M;E++){var P=null,U=null;f!=0&&(P=e.GPOS.readValueRecord(i,s,f),s+=2*_),d!=0&&(U=e.GPOS.readValueRecord(i,s,d),s+=2*g),D.push({val1:P,val2:U})}u.matrix.push(D)}}}else if(r==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(i,l.readUshort(i,s)+c),u.baseCoverage=e._lctf.readCoverage(i,l.readUshort(i,s+2)+c),u.markClassCount=l.readUshort(i,s+4),u.markArray=e.GPOS.readMarkArray(i,l.readUshort(i,s+6)+c),u.baseArray=e.GPOS.readBaseArray(i,l.readUshort(i,s+8)+c,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(i,l.readUshort(i,s)+c),u.mark2Coverage=e._lctf.readCoverage(i,l.readUshort(i,s+2)+c),u.markClassCount=l.readUshort(i,s+4),u.mark1Array=e.GPOS.readMarkArray(i,l.readUshort(i,s+6)+c),u.mark2Array=e.GPOS.readBaseArray(i,l.readUshort(i,s+8)+c,u.markClassCount);else{if(r==9&&u.fmt==1){var L=l.readUshort(i,s);s+=2;var G=l.readUint(i,s);if(s+=4,o.ltype==9)o.ltype=L;else if(o.ltype!=L)throw"invalid extension substitution";return e.GPOS.subt(i,o.ltype,c+G)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(i,r,s){var o=e._bin,l=[];return l.push(1&s?o.readShort(i,r):0),r+=1&s?2:0,l.push(2&s?o.readShort(i,r):0),r+=2&s?2:0,l.push(4&s?o.readShort(i,r):0),r+=4&s?2:0,l.push(8&s?o.readShort(i,r):0),r+=8&s?2:0,l},e.GPOS.readBaseArray=function(i,r,s){var o=e._bin,l=[],c=r,u=o.readUshort(i,r);r+=2;for(var h=0;h<u;h++){for(var f=[],d=0;d<s;d++)f.push(e.GPOS.readAnchorRecord(i,c+o.readUshort(i,r))),r+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(i,r){var s=e._bin,o=[],l=r,c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=e.GPOS.readAnchorRecord(i,s.readUshort(i,r+2)+l);h.markClass=s.readUshort(i,r),o.push(h),r+=4}return o},e.GPOS.readAnchorRecord=function(i,r){var s=e._bin,o={};return o.fmt=s.readUshort(i,r),o.x=s.readShort(i,r+2),o.y=s.readShort(i,r+4),o},e.GSUB={},e.GSUB.parse=function(i,r,s,o){return e._lctf.parse(i,r,s,o,e.GSUB.subt)},e.GSUB.subt=function(i,r,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(i,s),s+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var h=l.readUshort(i,s);s+=2,u.coverage=e._lctf.readCoverage(i,c+h)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(i,s),s+=2;else if(u.fmt==2){var f=l.readUshort(i,s);s+=2,u.newg=l.readUshorts(i,s,f),s+=2*u.newg.length}}else if(r==2&&u.fmt==1){f=l.readUshort(i,s),s+=2,u.seqs=[];for(var d=0;d<f;d++){var _=l.readUshort(i,s)+c;s+=2;var g=l.readUshort(i,_);u.seqs.push(l.readUshorts(i,_+2,g))}}else if(r==4)for(u.vals=[],f=l.readUshort(i,s),s+=2,d=0;d<f;d++){var p=l.readUshort(i,s);s+=2,u.vals.push(e.GSUB.readLigatureSet(i,c+p))}else if(r==5&&u.fmt==2){if(u.fmt==2){var m=l.readUshort(i,s);s+=2,u.cDef=e._lctf.readClassDef(i,c+m),u.scset=[];var x=l.readUshort(i,s);for(s+=2,d=0;d<x;d++){var y=l.readUshort(i,s);s+=2,u.scset.push(y==0?null:e.GSUB.readSubClassSet(i,c+y))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=l.readUshort(i,s),s+=2;for(var v=[],E=0;E<f;E++)v.push(e._lctf.readCoverage(i,c+l.readUshort(i,s+2*E)));s+=2*f,d==0&&(u.backCvg=v),d==1&&(u.inptCvg=v),d==2&&(u.ahedCvg=v)}f=l.readUshort(i,s),s+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(i,s,f)}}else{if(r==7&&u.fmt==1){var w=l.readUshort(i,s);s+=2;var b=l.readUint(i,s);if(s+=4,o.ltype==9)o.ltype=w;else if(o.ltype!=w)throw"invalid extension substitution";return e.GSUB.subt(i,o.ltype,c+b)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(i,r){var s=e._bin.readUshort,o=r,l=[],c=s(i,r);r+=2;for(var u=0;u<c;u++){var h=s(i,r);r+=2,l.push(e.GSUB.readSubClassRule(i,o+h))}return l},e.GSUB.readSubClassRule=function(i,r){var s=e._bin.readUshort,o={},l=s(i,r),c=s(i,r+=2);r+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(s(i,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(i,r,c),o},e.GSUB.readSubstLookupRecords=function(i,r,s){for(var o=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(o(i,r),o(i,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(i,r){var s=e._bin,o=r,l=[],c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=s.readUshort(i,r);r+=2,l.push(e.GSUB.readChainSubClassRule(i,o+h))}return l},e.GSUB.readChainSubClassRule=function(i,r){for(var s=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=s.readUshort(i,r);r+=2,c==1&&u--,o[l[c]]=s.readUshorts(i,r,u),r+=2*o[l[c]].length}return u=s.readUshort(i,r),r+=2,o.subst=s.readUshorts(i,r,2*u),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(i,r){var s=e._bin,o=r,l=[],c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=s.readUshort(i,r);r+=2,l.push(e.GSUB.readLigature(i,o+h))}return l},e.GSUB.readLigature=function(i,r){var s=e._bin,o={chain:[]};o.nglyph=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);r+=2;for(var c=0;c<l-1;c++)o.chain.push(s.readUshort(i,r)),r+=2;return o},e.head={},e.head.parse=function(i,r,s){var o=e._bin,l={};return o.readFixed(i,r),r+=4,l.fontRevision=o.readFixed(i,r),r+=4,o.readUint(i,r),r+=4,o.readUint(i,r),r+=4,l.flags=o.readUshort(i,r),r+=2,l.unitsPerEm=o.readUshort(i,r),r+=2,l.created=o.readUint64(i,r),r+=8,l.modified=o.readUint64(i,r),r+=8,l.xMin=o.readShort(i,r),r+=2,l.yMin=o.readShort(i,r),r+=2,l.xMax=o.readShort(i,r),r+=2,l.yMax=o.readShort(i,r),r+=2,l.macStyle=o.readUshort(i,r),r+=2,l.lowestRecPPEM=o.readUshort(i,r),r+=2,l.fontDirectionHint=o.readShort(i,r),r+=2,l.indexToLocFormat=o.readShort(i,r),r+=2,l.glyphDataFormat=o.readShort(i,r),r+=2,l},e.hhea={},e.hhea.parse=function(i,r,s){var o=e._bin,l={};return o.readFixed(i,r),r+=4,l.ascender=o.readShort(i,r),r+=2,l.descender=o.readShort(i,r),r+=2,l.lineGap=o.readShort(i,r),r+=2,l.advanceWidthMax=o.readUshort(i,r),r+=2,l.minLeftSideBearing=o.readShort(i,r),r+=2,l.minRightSideBearing=o.readShort(i,r),r+=2,l.xMaxExtent=o.readShort(i,r),r+=2,l.caretSlopeRise=o.readShort(i,r),r+=2,l.caretSlopeRun=o.readShort(i,r),r+=2,l.caretOffset=o.readShort(i,r),r+=2,r+=8,l.metricDataFormat=o.readShort(i,r),r+=2,l.numberOfHMetrics=o.readUshort(i,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(i,r,s,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(u=l.readUshort(i,r),r+=2,h=l.readShort(i,r),r+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(i,r,s,o){var l=e._bin,c=l.readUshort(i,r);if(r+=2,c==1)return e.kern.parseV1(i,r-2,s,o);var u=l.readUshort(i,r);r+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){r+=2,s=l.readUshort(i,r),r+=2;var d=l.readUshort(i,r);r+=2;var _=d>>>8;if((_&=15)!=0)throw"unknown kern table format: "+_;r=e.kern.readFormat0(i,r,h)}return h},e.kern.parseV1=function(i,r,s,o){var l=e._bin;l.readFixed(i,r),r+=4;var c=l.readUint(i,r);r+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(i,r),r+=4;var f=l.readUshort(i,r);r+=2,l.readUshort(i,r),r+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(i,r,u)}return u},e.kern.readFormat0=function(i,r,s){var o=e._bin,l=-1,c=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2;for(var u=0;u<c;u++){var h=o.readUshort(i,r);r+=2;var f=o.readUshort(i,r);r+=2;var d=o.readShort(i,r);r+=2,h!=l&&(s.glyph1.push(h),s.rval.push({glyph2:[],vals:[]}));var _=s.rval[s.rval.length-1];_.glyph2.push(f),_.vals.push(d),l=h}return r},e.loca={},e.loca.parse=function(i,r,s,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,h=o.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)c.push(l.readUshort(i,r+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)c.push(l.readUint(i,r+(f<<2)));return c},e.maxp={},e.maxp.parse=function(i,r,s){var o=e._bin,l={},c=o.readUint(i,r);return r+=4,l.numGlyphs=o.readUshort(i,r),r+=2,c==65536&&(l.maxPoints=o.readUshort(i,r),r+=2,l.maxContours=o.readUshort(i,r),r+=2,l.maxCompositePoints=o.readUshort(i,r),r+=2,l.maxCompositeContours=o.readUshort(i,r),r+=2,l.maxZones=o.readUshort(i,r),r+=2,l.maxTwilightPoints=o.readUshort(i,r),r+=2,l.maxStorage=o.readUshort(i,r),r+=2,l.maxFunctionDefs=o.readUshort(i,r),r+=2,l.maxInstructionDefs=o.readUshort(i,r),r+=2,l.maxStackElements=o.readUshort(i,r),r+=2,l.maxSizeOfInstructions=o.readUshort(i,r),r+=2,l.maxComponentElements=o.readUshort(i,r),r+=2,l.maxComponentDepth=o.readUshort(i,r),r+=2),l},e.name={},e.name.parse=function(i,r,s){var o=e._bin,l={};o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2,o.readUshort(i,r);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=r+=2,d=0;d<c;d++){var _=o.readUshort(i,r);r+=2;var g=o.readUshort(i,r);r+=2;var p=o.readUshort(i,r);r+=2;var m=o.readUshort(i,r);r+=2;var x=o.readUshort(i,r);r+=2;var y=o.readUshort(i,r);r+=2;var v,E=h[m],w=f+12*c+y;if(_==0)v=o.readUnicode(i,w,x/2);else if(_==3&&g==0)v=o.readUnicode(i,w,x/2);else if(g==0)v=o.readASCII(i,w,x);else if(g==1)v=o.readUnicode(i,w,x/2);else if(g==3)v=o.readUnicode(i,w,x/2);else{if(_!=1)throw"unknown encoding "+g+", platformID: "+_;v=o.readASCII(i,w,x),console.debug("reading unknown MAC encoding "+g+" as ASCII")}var b="p"+_+","+p.toString(16);l[b]==null&&(l[b]={}),l[b][E!==void 0?E:m]=v,l[b]._lang=p}for(var A in l)if(l[A].postScriptName!=null&&l[A]._lang==1033)return l[A];for(var A in l)if(l[A].postScriptName!=null&&l[A]._lang==0)return l[A];for(var A in l)if(l[A].postScriptName!=null&&l[A]._lang==3084)return l[A];for(var A in l)if(l[A].postScriptName!=null)return l[A];for(var A in l){u=A;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(i,r,s){var o=e._bin.readUshort(i,r);r+=2;var l={};if(o==0)e["OS/2"].version0(i,r,l);else if(o==1)e["OS/2"].version1(i,r,l);else if(o==2||o==3||o==4)e["OS/2"].version2(i,r,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(i,r,l)}return l},e["OS/2"].version0=function(i,r,s){var o=e._bin;return s.xAvgCharWidth=o.readShort(i,r),r+=2,s.usWeightClass=o.readUshort(i,r),r+=2,s.usWidthClass=o.readUshort(i,r),r+=2,s.fsType=o.readUshort(i,r),r+=2,s.ySubscriptXSize=o.readShort(i,r),r+=2,s.ySubscriptYSize=o.readShort(i,r),r+=2,s.ySubscriptXOffset=o.readShort(i,r),r+=2,s.ySubscriptYOffset=o.readShort(i,r),r+=2,s.ySuperscriptXSize=o.readShort(i,r),r+=2,s.ySuperscriptYSize=o.readShort(i,r),r+=2,s.ySuperscriptXOffset=o.readShort(i,r),r+=2,s.ySuperscriptYOffset=o.readShort(i,r),r+=2,s.yStrikeoutSize=o.readShort(i,r),r+=2,s.yStrikeoutPosition=o.readShort(i,r),r+=2,s.sFamilyClass=o.readShort(i,r),r+=2,s.panose=o.readBytes(i,r,10),r+=10,s.ulUnicodeRange1=o.readUint(i,r),r+=4,s.ulUnicodeRange2=o.readUint(i,r),r+=4,s.ulUnicodeRange3=o.readUint(i,r),r+=4,s.ulUnicodeRange4=o.readUint(i,r),r+=4,s.achVendID=[o.readInt8(i,r),o.readInt8(i,r+1),o.readInt8(i,r+2),o.readInt8(i,r+3)],r+=4,s.fsSelection=o.readUshort(i,r),r+=2,s.usFirstCharIndex=o.readUshort(i,r),r+=2,s.usLastCharIndex=o.readUshort(i,r),r+=2,s.sTypoAscender=o.readShort(i,r),r+=2,s.sTypoDescender=o.readShort(i,r),r+=2,s.sTypoLineGap=o.readShort(i,r),r+=2,s.usWinAscent=o.readUshort(i,r),r+=2,s.usWinDescent=o.readUshort(i,r),r+=2},e["OS/2"].version1=function(i,r,s){var o=e._bin;return r=e["OS/2"].version0(i,r,s),s.ulCodePageRange1=o.readUint(i,r),r+=4,s.ulCodePageRange2=o.readUint(i,r),r+=4},e["OS/2"].version2=function(i,r,s){var o=e._bin;return r=e["OS/2"].version1(i,r,s),s.sxHeight=o.readShort(i,r),r+=2,s.sCapHeight=o.readShort(i,r),r+=2,s.usDefault=o.readUshort(i,r),r+=2,s.usBreak=o.readUshort(i,r),r+=2,s.usMaxContext=o.readUshort(i,r),r+=2},e["OS/2"].version5=function(i,r,s){var o=e._bin;return r=e["OS/2"].version2(i,r,s),s.usLowerOpticalPointSize=o.readUshort(i,r),r+=2,s.usUpperOpticalPointSize=o.readUshort(i,r),r+=2},e.post={},e.post.parse=function(i,r,s){var o=e._bin,l={};return l.version=o.readFixed(i,r),r+=4,l.italicAngle=o.readFixed(i,r),r+=4,l.underlinePosition=o.readShort(i,r),r+=2,l.underlineThickness=o.readShort(i,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,r){var s=i.cmap,o=-1;if(s.p0e4!=null?o=s.p0e4:s.p3e1!=null?o=s.p3e1:s.p1e0!=null?o=s.p1e0:s.p0e3!=null&&(o=s.p0e3),o==-1)throw"no familiar platform and encoding!";var l=s.tables[o];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=r&&r<=h[1])return h[2]+(r-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(i,r){var s={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[r]){var o=i.SVG.entries[r];return o==null?s:(typeof o=="string"&&(o=e.SVG.toPath(o),i.SVG.entries[r]=o),o)}if(i.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},c=i.CFF,u=i.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=r;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(i.CFF.CharStrings[r],l,c,u,s)}else i.glyf&&e.U._drawGlyf(r,i,s);return s},e.U._drawGlyf=function(i,r,s){var o=r.glyf[i];o==null&&(o=r.glyf[i]=e.glyf._parseGlyf(r,i)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,s):e.U._compoGlyph(o,r,s))},e.U._simpleGlyph=function(i,r){for(var s=0;s<i.noc;s++){for(var o=s==0?0:i.endPts[s-1]+1,l=i.endPts[s],c=o;c<=l;c++){var u=c==o?l:c-1,h=c==l?o:c+1,f=1&i.flags[c],d=1&i.flags[u],_=1&i.flags[h],g=i.xs[c],p=i.ys[c];if(c==o)if(f){if(!d){e.U.P.moveTo(r,g,p);continue}e.U.P.moveTo(r,i.xs[u],i.ys[u])}else d?e.U.P.moveTo(r,i.xs[u],i.ys[u]):e.U.P.moveTo(r,(i.xs[u]+g)/2,(i.ys[u]+p)/2);f?d&&e.U.P.lineTo(r,g,p):_?e.U.P.qcurveTo(r,g,p,i.xs[h],i.ys[h]):e.U.P.qcurveTo(r,g,p,(g+i.xs[h])/2,(p+i.ys[h])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(i,r,s){for(var o=0;o<i.parts.length;o++){var l={cmds:[],crds:[]},c=i.parts[o];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var f=l.crds[h],d=l.crds[h+1];s.crds.push(f*u.a+d*u.b+u.tx),s.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)s.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(i,r){var s=e._lctf.getInterval(r,i);return s==-1?0:r[s+2]},e.U._applySubs=function(i,r,s,o){for(var l=i.length-r-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var u,h=s.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,i[r]))!=-1){if(s.ltype==1)i[r],h.fmt==1?i[r]=i[r]+h.delta:i[r]=h.newg[u];else if(s.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var _=f[d],g=_.chain.length;if(!(g>l)){for(var p=!0,m=0,x=0;x<g;x++){for(;i[r+m+(1+x)]==-1;)m++;_.chain[x]!=i[r+m+(1+x)]&&(p=!1)}if(p){for(i[r]=_.nglyph,x=0;x<g+m;x++)i[r+x+1]=-1;break}}}else if(s.ltype==5&&h.fmt==2)for(var y=e._lctf.getInterval(h.cDef,i[r]),v=h.cDef[y+2],E=h.scset[v],w=0;w<E.length;w++){var b=E[w],A=b.input;if(!(A.length>l)){for(p=!0,x=0;x<A.length;x++){var S=e._lctf.getInterval(h.cDef,i[r+1+x]);if(y==-1&&h.cDef[S+2]!=A[x]){p=!1;break}}if(p){var M=b.substLookupRecords;for(d=0;d<M.length;d+=2)M[d],M[d+1]}}}else if(s.ltype==6&&h.fmt==3){if(!e.U._glsCovered(i,h.backCvg,r-h.backCvg.length)||!e.U._glsCovered(i,h.inptCvg,r)||!e.U._glsCovered(i,h.ahedCvg,r+h.inptCvg.length))continue;var D=h.lookupRec;for(w=0;w<D.length;w+=2){y=D[w];var P=o[D[w+1]];e.U._applySubs(i,r+y,P,o)}}}}},e.U._glsCovered=function(i,r,s){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],i[s+o])==-1)return!1;return!0},e.U.glyphsToPath=function(i,r,s){for(var o={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var h=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,f=e.U.glyphToPath(i,u),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+l),o.crds.push(f.crds[d+1]);for(s&&o.cmds.push(s),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);s&&o.cmds.push("X"),l+=i.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(i,u,h))}}return o},e.U.P={},e.U.P.moveTo=function(i,r,s){i.cmds.push("M"),i.crds.push(r,s)},e.U.P.lineTo=function(i,r,s){i.cmds.push("L"),i.crds.push(r,s)},e.U.P.curveTo=function(i,r,s,o,l,c,u){i.cmds.push("C"),i.crds.push(r,s,o,l,c,u)},e.U.P.qcurveTo=function(i,r,s,o,l){i.cmds.push("Q"),i.crds.push(r,s,o,l)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,r,s,o,l){for(var c=r.stack,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open,_=0,g=r.x,p=r.y,m=0,x=0,y=0,v=0,E=0,w=0,b=0,A=0,S=0,M=0,D={val:0,size:0};_<i.length;){e.CFF.getCharString(i,_,D);var P=D.val;if(_+=D.size,P=="o1"||P=="o18")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(P=="o3"||P=="o23")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(P=="o4")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,g,p),d=!0;else if(P=="o5")for(;c.length>0;)g+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,g,p);else if(P=="o6"||P=="o7")for(var U=c.length,L=P=="o6",G=0;G<U;G++){var O=c.shift();L?g+=O:p+=O,L=!L,e.U.P.lineTo(l,g,p)}else if(P=="o8"||P=="o24"){U=c.length;for(var K=0;K+6<=U;)m=g+c.shift(),x=p+c.shift(),y=m+c.shift(),v=x+c.shift(),g=y+c.shift(),p=v+c.shift(),e.U.P.curveTo(l,m,x,y,v,g,p),K+=6;P=="o24"&&(g+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,g,p))}else{if(P=="o11")break;if(P=="o1234"||P=="o1235"||P=="o1236"||P=="o1237")P=="o1234"&&(x=p,y=(m=g+c.shift())+c.shift(),M=v=x+c.shift(),w=v,A=p,g=(b=(E=(S=y+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,x,y,v,S,M),e.U.P.curveTo(l,E,w,b,A,g,p)),P=="o1235"&&(m=g+c.shift(),x=p+c.shift(),y=m+c.shift(),v=x+c.shift(),S=y+c.shift(),M=v+c.shift(),E=S+c.shift(),w=M+c.shift(),b=E+c.shift(),A=w+c.shift(),g=b+c.shift(),p=A+c.shift(),c.shift(),e.U.P.curveTo(l,m,x,y,v,S,M),e.U.P.curveTo(l,E,w,b,A,g,p)),P=="o1236"&&(m=g+c.shift(),x=p+c.shift(),y=m+c.shift(),M=v=x+c.shift(),w=v,b=(E=(S=y+c.shift())+c.shift())+c.shift(),A=w+c.shift(),g=b+c.shift(),e.U.P.curveTo(l,m,x,y,v,S,M),e.U.P.curveTo(l,E,w,b,A,g,p)),P=="o1237"&&(m=g+c.shift(),x=p+c.shift(),y=m+c.shift(),v=x+c.shift(),S=y+c.shift(),M=v+c.shift(),E=S+c.shift(),w=M+c.shift(),b=E+c.shift(),A=w+c.shift(),Math.abs(b-g)>Math.abs(A-p)?g=b+c.shift():p=A+c.shift(),e.U.P.curveTo(l,m,x,y,v,S,M),e.U.P.curveTo(l,E,w,b,A,g,p));else if(P=="o14"){if(c.length>0&&!h&&(f=c.shift()+s.nominalWidthX,h=!0),c.length==4){var H=c.shift(),J=c.shift(),q=c.shift(),F=c.shift(),W=e.CFF.glyphBySE(s,q),ee=e.CFF.glyphBySE(s,F);e.U._drawCFF(s.CharStrings[W],r,s,o,l),r.x=H,r.y=J,e.U._drawCFF(s.CharStrings[ee],r,s,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(P=="o19"||P=="o20")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,_+=u+7>>3;else if(P=="o21")c.length>2&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),p+=c.pop(),g+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,g,p),d=!0;else if(P=="o22")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),g+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,g,p),d=!0;else if(P=="o25"){for(;c.length>6;)g+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,g,p);m=g+c.shift(),x=p+c.shift(),y=m+c.shift(),v=x+c.shift(),g=y+c.shift(),p=v+c.shift(),e.U.P.curveTo(l,m,x,y,v,g,p)}else if(P=="o26")for(c.length%2&&(g+=c.shift());c.length>0;)m=g,x=p+c.shift(),g=y=m+c.shift(),p=(v=x+c.shift())+c.shift(),e.U.P.curveTo(l,m,x,y,v,g,p);else if(P=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)x=p,y=(m=g+c.shift())+c.shift(),v=x+c.shift(),g=y+c.shift(),p=v,e.U.P.curveTo(l,m,x,y,v,g,p);else if(P=="o10"||P=="o29"){var N=P=="o10"?o:s;if(c.length==0)console.debug("error: empty stack");else{var k=c.pop(),ie=N.Subrs[k+N.Bias];r.x=g,r.y=p,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d,e.U._drawCFF(ie,r,s,o,l),g=r.x,p=r.y,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open}}else if(P=="o30"||P=="o31"){var X=c.length,ne=(K=0,P=="o31");for(K+=X-(U=-3&X);K<U;)ne?(x=p,y=(m=g+c.shift())+c.shift(),p=(v=x+c.shift())+c.shift(),U-K==5?(g=y+c.shift(),K++):g=y,ne=!1):(m=g,x=p+c.shift(),y=m+c.shift(),v=x+c.shift(),g=y+c.shift(),U-K==5?(p=v+c.shift(),K++):p=v,ne=!0),e.U.P.curveTo(l,m,x,y,v,g,p),K+=4}else{if((P+"").charAt(0)=="o")throw console.debug("Unknown operation: "+P,i),P;c.push(P)}}}r.x=g,r.y=p,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d};var t=e,n={Typr:t};return a.Typr=t,a.default=n,Object.defineProperty(a,"__esModule",{value:!0}),a}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function J1(){return function(a){var e=Uint8Array,t=Uint16Array,n=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(P,U){for(var L=new t(31),G=0;G<31;++G)L[G]=U+=1<<P[G-1];var O=new n(L[30]);for(G=1;G<30;++G)for(var K=L[G];K<L[G+1];++K)O[K]=K-L[G]<<5|G;return[L,O]},l=o(i,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=o(r,0)[0],f=new t(32768),d=0;d<32768;++d){var _=(43690&d)>>>1|(21845&d)<<1;_=(61680&(_=(52428&_)>>>2|(13107&_)<<2))>>>4|(3855&_)<<4,f[d]=((65280&_)>>>8|(255&_)<<8)>>>1}var g=function(P,U,L){for(var G=P.length,O=0,K=new t(U);O<G;++O)++K[P[O]-1];var H,J=new t(U);for(O=0;O<U;++O)J[O]=J[O-1]+K[O-1]<<1;{H=new t(1<<U);var q=15-U;for(O=0;O<G;++O)if(P[O])for(var F=O<<4|P[O],W=U-P[O],ee=J[P[O]-1]++<<W,N=ee|(1<<W)-1;ee<=N;++ee)H[f[ee]>>>q]=F}return H},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var x=g(p,9),y=g(m,5),v=function(P){for(var U=P[0],L=1;L<P.length;++L)P[L]>U&&(U=P[L]);return U},E=function(P,U,L){var G=U/8|0;return(P[G]|P[G+1]<<8)>>(7&U)&L},w=function(P,U){var L=U/8|0;return(P[L]|P[L+1]<<8|P[L+2]<<16)>>(7&U)},b=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],A=function(P,U,L){var G=new Error(U||b[P]);if(G.code=P,Error.captureStackTrace&&Error.captureStackTrace(G,A),!L)throw G;return G},S=function(P,U,L){var G=P.length;if(!G||L&&!L.l&&G<5)return U||new e(0);var O=!U||L,K=!L||L.i;L||(L={}),U||(U=new e(3*G));var H,J=function(ge){var Ae=U.length;if(ge>Ae){var ye=new e(Math.max(2*Ae,ge));ye.set(U),U=ye}},q=L.f||0,F=L.p||0,W=L.b||0,ee=L.l,N=L.d,k=L.m,ie=L.n,X=8*G;do{if(!ee){L.f=q=E(P,F,1);var ne=E(P,F+1,3);if(F+=3,!ne){var Se=P[(de=((H=F)/8|0)+(7&H&&1)+4)-4]|P[de-3]<<8,_e=de+Se;if(_e>G){K&&A(0);break}O&&J(W+Se),U.set(P.subarray(de,_e),W),L.b=W+=Se,L.p=F=8*_e;continue}if(ne==1)ee=x,N=y,k=9,ie=5;else if(ne==2){var ve=E(P,F,31)+257,fe=E(P,F+10,15)+4,Ie=ve+E(P,F+5,31)+1;F+=14;for(var I=new e(Ie),ke=new e(19),Re=0;Re<fe;++Re)ke[s[Re]]=E(P,F+3*Re,7);F+=3*fe;var Le=v(ke),le=(1<<Le)-1,Ee=g(ke,Le);for(Re=0;Re<Ie;){var de,te=Ee[E(P,F,le)];if(F+=15&te,(de=te>>>4)<16)I[Re++]=de;else{var De=0,C=0;for(de==16?(C=3+E(P,F,3),F+=2,De=I[Re-1]):de==17?(C=3+E(P,F,7),F+=3):de==18&&(C=11+E(P,F,127),F+=7);C--;)I[Re++]=De}}var T=I.subarray(0,ve),z=I.subarray(ve);k=v(T),ie=v(z),ee=g(T,k),N=g(z,ie)}else A(1);if(F>X){K&&A(0);break}}O&&J(W+131072);for(var ae=(1<<k)-1,$=(1<<ie)-1,Q=F;;Q=F){var xe=(De=ee[w(P,F)&ae])>>>4;if((F+=15&De)>X){K&&A(0);break}if(De||A(2),xe<256)U[W++]=xe;else{if(xe==256){Q=F,ee=null;break}var me=xe-254;if(xe>264){var Me=i[Re=xe-257];me=E(P,F,(1<<Me)-1)+c[Re],F+=Me}var be=N[w(P,F)&$],oe=be>>>4;if(be||A(3),F+=15&be,z=h[oe],oe>3&&(Me=r[oe],z+=w(P,F)&(1<<Me)-1,F+=Me),F>X){K&&A(0);break}O&&J(W+131072);for(var pe=W+me;W<pe;W+=4)U[W]=U[W-z],U[W+1]=U[W+1-z],U[W+2]=U[W+2-z],U[W+3]=U[W+3-z];W=pe}}L.l=ee,L.p=Q,L.b=W,ee&&(q=1,L.m=k,L.d=N,L.n=ie)}while(!q);return W==U.length?U:function(ge,Ae,ye){(ye==null||ye>ge.length)&&(ye=ge.length);var ze=new(ge instanceof t?t:ge instanceof n?n:e)(ye-Ae);return ze.set(ge.subarray(Ae,ye)),ze}(U,0,W)},M=new e(0),D=typeof TextDecoder<"u"&&new TextDecoder;try{D.decode(M,{stream:!0})}catch{}return a.convert_streams=function(P){var U=new DataView(P),L=0;function G(){var ve=U.getUint16(L);return L+=2,ve}function O(){var ve=U.getUint32(L);return L+=4,ve}function K(ve){Se.setUint16(_e,ve),_e+=2}function H(ve){Se.setUint32(_e,ve),_e+=4}for(var J={signature:O(),flavor:O(),length:O(),numTables:G(),reserved:G(),totalSfntSize:O(),majorVersion:G(),minorVersion:G(),metaOffset:O(),metaLength:O(),metaOrigLength:O(),privOffset:O(),privLength:O()},q=0;Math.pow(2,q)<=J.numTables;)q++;q--;for(var F=16*Math.pow(2,q),W=16*J.numTables-F,ee=12,N=[],k=0;k<J.numTables;k++)N.push({tag:O(),offset:O(),compLength:O(),origLength:O(),origChecksum:O()}),ee+=16;var ie,X=new Uint8Array(12+16*N.length+N.reduce(function(ve,fe){return ve+fe.origLength+4},0)),ne=X.buffer,Se=new DataView(ne),_e=0;return H(J.flavor),K(J.numTables),K(F),K(q),K(W),N.forEach(function(ve){H(ve.tag),H(ve.origChecksum),H(ee),H(ve.origLength),ve.outOffset=ee,(ee+=ve.origLength)%4!=0&&(ee+=4-ee%4)}),N.forEach(function(ve){var fe,Ie=P.slice(ve.offset,ve.offset+ve.compLength);if(ve.compLength!=ve.origLength){var I=new Uint8Array(ve.origLength);fe=new Uint8Array(Ie,2),S(fe,I)}else I=new Uint8Array(Ie);X.set(I,ve.outOffset);var ke=0;(ee=ve.outOffset+ve.origLength)%4!=0&&(ke=4-ee%4),X.set(new Uint8Array(ke).buffer,ve.outOffset+ve.origLength),ie=ee+ke}),ne.slice(0,ie)},Object.defineProperty(a,"__esModule",{value:!0}),a}({}).convert_streams}function Q1(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},n={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,r=2,s=4,o=8,l=16,c=32;let u;function h(b){if(!u){const A={R:r,L:i,D:s,C:l,U:c,T:o};u=new Map;for(let S in n){let M=0;n[S].split(",").forEach(D=>{let[P,U]=D.split("+");P=parseInt(P,36),U=U?parseInt(U,36):0,u.set(M+=P,A[S]);for(let L=U;L--;)u.set(++M,A[S])})}}return u.get(b)||c}const f=1,d=2,_=3,g=4,p=[null,"isol","init","fina","medi"];function m(b){const A=new Uint8Array(b.length);let S=c,M=f,D=-1;for(let P=0;P<b.length;P++){const U=b.codePointAt(P);let L=h(U)|0,G=f;L&o||(S&(i|s|l)?L&(r|s|l)?(G=_,(M===f||M===_)&&A[D]++):L&(i|c)&&(M===d||M===g)&&A[D]--:S&(r|c)&&(M===d||M===g)&&A[D]--,M=A[P]=G,S=L,D=P,U>65535&&P++)}return A}function x(b,A){const S=[];for(let D=0;D<A.length;D++){const P=A.codePointAt(D);P>65535&&D++,S.push(a.U.codeToGlyph(b,P))}const M=b.GSUB;if(M){const{lookupList:D,featureList:P}=M;let U;const L=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,G=[];P.forEach(O=>{if(L.test(O.tag))for(let K=0;K<O.tab.length;K++){if(G[O.tab[K]])continue;G[O.tab[K]]=!0;const H=D[O.tab[K]],J=/^(isol|init|fina|medi)$/.test(O.tag);J&&!U&&(U=m(A));for(let q=0;q<S.length;q++)(!U||!J||p[U[q]]===O.tag)&&a.U._applySubs(S,q,H,D)}})}return S}function y(b,A){const S=new Int16Array(A.length*3);let M=0;for(;M<A.length;M++){const L=A[M];if(L===-1)continue;S[M*3+2]=b.hmtx.aWidth[L];const G=b.GPOS;if(G){const O=G.lookupList;for(let K=0;K<O.length;K++){const H=O[K];for(let J=0;J<H.tabs.length;J++){const q=H.tabs[J];if(H.ltype===1){if(a._lctf.coverageIndex(q.coverage,L)!==-1&&q.pos){U(q.pos,M);break}}else if(H.ltype===2){let F=null,W=D();if(W!==-1){const ee=a._lctf.coverageIndex(q.coverage,A[W]);if(ee!==-1){if(q.fmt===1){const N=q.pairsets[ee];for(let k=0;k<N.length;k++)N[k].gid2===L&&(F=N[k])}else if(q.fmt===2){const N=a.U._getGlyphClass(A[W],q.classDef1),k=a.U._getGlyphClass(L,q.classDef2);F=q.matrix[N][k]}if(F){F.val1&&U(F.val1,W),F.val2&&U(F.val2,M);break}}}}else if(H.ltype===4){const F=a._lctf.coverageIndex(q.markCoverage,L);if(F!==-1){const W=D(P),ee=W===-1?-1:a._lctf.coverageIndex(q.baseCoverage,A[W]);if(ee!==-1){const N=q.markArray[F],k=q.baseArray[ee][N.markClass];S[M*3]=k.x-N.x+S[W*3]-S[W*3+2],S[M*3+1]=k.y-N.y+S[W*3+1];break}}}else if(H.ltype===6){const F=a._lctf.coverageIndex(q.mark1Coverage,L);if(F!==-1){const W=D();if(W!==-1){const ee=A[W];if(v(b,ee)===3){const N=a._lctf.coverageIndex(q.mark2Coverage,ee);if(N!==-1){const k=q.mark1Array[F],ie=q.mark2Array[N][k.markClass];S[M*3]=ie.x-k.x+S[W*3]-S[W*3+2],S[M*3+1]=ie.y-k.y+S[W*3+1];break}}}}}}}}else if(b.kern&&!b.cff){const O=D();if(O!==-1){const K=b.kern.glyph1.indexOf(A[O]);if(K!==-1){const H=b.kern.rval[K].glyph2.indexOf(L);H!==-1&&(S[O*3+2]+=b.kern.rval[K].vals[H])}}}}return S;function D(L){for(let G=M-1;G>=0;G--)if(A[G]!==-1&&(!L||L(A[G])))return G;return-1}function P(L){return v(b,L)===1}function U(L,G){for(let O=0;O<3;O++)S[G*3+O]+=L[O]||0}}function v(b,A){const S=b.GDEF&&b.GDEF.glyphClassDef;return S?a.U._getGlyphClass(A,S):0}function E(...b){for(let A=0;A<b.length;A++)if(typeof b[A]=="number")return b[A]}function w(b){const A=Object.create(null),S=b["OS/2"],M=b.hhea,D=b.head.unitsPerEm,P=E(S&&S.sTypoAscender,M&&M.ascender,D),U={unitsPerEm:D,ascender:P,descender:E(S&&S.sTypoDescender,M&&M.descender,0),capHeight:E(S&&S.sCapHeight,P),xHeight:E(S&&S.sxHeight,P),lineGap:E(S&&S.sTypoLineGap,M&&M.lineGap),supportsCodePoint(L){return a.U.codeToGlyph(b,L)>0},forEachGlyph(L,G,O,K){let H=0;const J=1/U.unitsPerEm*G,q=x(b,L);let F=0;const W=y(b,q);return q.forEach((ee,N)=>{if(ee!==-1){let k=A[ee];if(!k){const{cmds:ie,crds:X}=a.U.glyphToPath(b,ee);let ne="",Se=0;for(let I=0,ke=ie.length;I<ke;I++){const Re=t[ie[I]];ne+=ie[I];for(let Le=1;Le<=Re;Le++)ne+=(Le>1?",":"")+X[Se++]}let _e,ve,fe,Ie;if(X.length){_e=ve=1/0,fe=Ie=-1/0;for(let I=0,ke=X.length;I<ke;I+=2){let Re=X[I],Le=X[I+1];Re<_e&&(_e=Re),Le<ve&&(ve=Le),Re>fe&&(fe=Re),Le>Ie&&(Ie=Le)}}else _e=fe=ve=Ie=0;k=A[ee]={index:ee,advanceWidth:b.hmtx.aWidth[ee],xMin:_e,yMin:ve,xMax:fe,yMax:Ie,path:ne}}K.call(null,k,H+W[N*3]*J,W[N*3+1]*J,F),H+=W[N*3+2]*J,O&&(H+=O*G)}F+=L.codePointAt(F)>65535?2:1}),H}};return U}return function(A){const S=new Uint8Array(A,0,4),M=a._bin.readASCII(S,0,4);if(M==="wOFF")A=e(A);else if(M==="wOF2")throw new Error("woff2 fonts not supported");return w(a.parse(A)[0])}}const $1=Ds({name:"Typr Font Parser",dependencies:[Z1,J1,Q1],init(a,e,t){const n=a(),i=e();return t(n,i)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function eT(){return function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(y){var v=y>>5;this.buckets.set(v,(this.buckets.get(v)||0)|1<<(31&y))},e.prototype.has=function(y){var v=this.buckets.get(y>>5);return v!==void 0&&(v&1<<(31&y))!=0},e.prototype.serialize=function(){var y=[];return this.buckets.forEach(function(v,E){y.push((+E).toString(36)+":"+v.toString(36))}),y.join(",")},e.prototype.deserialize=function(y){var v=this;this.buckets.clear(),y.split(",").forEach(function(E){var w=E.split(":");v.buckets.set(parseInt(w[0],36),parseInt(w[1],36))})};var t=Math.pow(2,8),n=t-1,i=~n;function r(y){var v=function(w){return w&i}(y).toString(16),E=function(w){return(w&i)+t-1}(y).toString(16);return"codepoint-index/plane"+(y>>16)+"/"+v+"-"+E+".json"}function s(y,v){var E=y&n,w=v.codePointAt(E/6|0);return((w=(w||48)-48)&1<<E%6)!=0}function o(y,v){var E;(E=y,E.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(w){return w.split("-").map(function(b){return parseInt(b.trim(),16)})})).forEach(function(w){var b=w[0],A=w[1];A===void 0&&(A=b),v(b,A)})}function l(y,v){o(y,function(E,w){for(var b=E;b<=w;b++)v(b)})}var c={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(y){var v=h.get(y);return v||(v=new e,l(y.ranges,function(E){return v.add(E)}),h.set(y,v)),v}var _,g=new Map;function p(y,v,E){return y[v]?v:y[E]?E:function(w){for(var b in w)return b}(y)}function m(y,v){var E=v;if(!y.includes(E)){E=1/0;for(var w=0;w<y.length;w++)Math.abs(y[w]-v)<Math.abs(E-v)&&(E=y[w])}return E}function x(y){return _||(_=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(v){_.add(v)})),_.has(y)}return a.CodePointSet=e,a.clearCache=function(){c={},u={}},a.getFontsForString=function(y,v){v===void 0&&(v={});var E,w=v.lang;w===void 0&&(w=new RegExp("\\p{Script=Hangul}","u").test(E=y)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(E)?"ja":"en");var b=v.category;b===void 0&&(b="sans-serif");var A=v.style;A===void 0&&(A="normal");var S=v.weight;S===void 0&&(S=400);var M=(v.dataUrl||f).replace(/\/$/g,""),D=new Map,P=new Uint8Array(y.length),U={},L={},G=new Array(y.length),O=new Map,K=!1;function H(F){var W=g.get(F);return W||(W=fetch(M+"/"+F).then(function(ee){if(!ee.ok)throw new Error(ee.statusText);return ee.json().then(function(N){if(!Array.isArray(N)||N[0]!==1)throw new Error("Incorrect schema version; need 1, got "+N[0]);return N[1]})}).catch(function(ee){if(M!==f)return K||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+M+'", trying default CDN. '+ee.message),K=!0),M=f,g.delete(F),H(F);throw ee}),g.set(F,W)),W}for(var J=function(F){var W=y.codePointAt(F),ee=r(W);G[F]=ee,c[ee]||O.has(ee)||O.set(ee,H(ee).then(function(N){c[ee]=N})),W>65535&&(F++,q=F)},q=0;q<y.length;q++)J(q);return Promise.all(O.values()).then(function(){O.clear();for(var F=function(ee){var N=y.codePointAt(ee),k=null,ie=c[G[ee]],X=void 0;for(var ne in ie){var Se=L[ne];if(Se===void 0&&(Se=L[ne]=new RegExp(ne).test(w||"en")),Se){for(var _e in X=ne,ie[ne])if(s(N,ie[ne][_e])){k=_e;break}break}}if(!k){e:for(var ve in ie)if(ve!==X){for(var fe in ie[ve])if(s(N,ie[ve][fe])){k=fe;break e}}}k||(console.debug("No font coverage for U+"+N.toString(16)),k="latin"),G[ee]=k,u[k]||O.has(k)||O.set(k,H("font-meta/"+k+".json").then(function(Ie){u[k]=Ie})),N>65535&&(ee++,W=ee)},W=0;W<y.length;W++)F(W);return Promise.all(O.values())}).then(function(){for(var F,W=null,ee=0;ee<y.length;ee++){var N=y.codePointAt(ee);if(W&&(x(N)||d(W).has(N)))P[ee]=P[ee-1];else{W=u[G[ee]];var k=U[W.id];if(!k){var ie=W.typeforms,X=p(ie,b,"sans-serif"),ne=p(ie[X],A,"normal"),Se=m((F=ie[X])===null||F===void 0?void 0:F[ne],S);k=U[W.id]=M+"/font-files/"+W.id+"/"+X+"."+ne+"."+Se+".woff"}var _e=D.get(k);_e==null&&(_e=D.size,D.set(k,_e)),P[ee]=_e}N>65535&&(ee++,P[ee]=P[ee-1])}return{fontUrls:Array.from(D.keys()),chars:P}})},Object.defineProperty(a,"__esModule",{value:!0}),a}({})}function tT(a,e){const t=Object.create(null),n=Object.create(null);function i(s,o){const l=c=>{console.error(`Failure loading font ${s}`,c)};try{const c=new XMLHttpRequest;c.open("get",s,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=a(c.response);u.src=s,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(s,o){let l=t[s];l?o(l):n[s]?n[s].push(o):(n[s]=[o],i(s,c=>{c.src=s,t[s]=c,n[s].forEach(u=>u(c)),delete n[s]}))}return function(s,o,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(s.length),_=[];s.length||x();const g=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(v=>!v.lang||v.lang.test(l)).reverse(),c.length){let b=0;(function A(S=0){for(let M=S,D=s.length;M<D;M++){const P=s.codePointAt(M);if(b===1&&_[d[M-1]].supportsCodePoint(P)||M>0&&/\s/.test(s[M]))d[M]=d[M-1],b===2&&(p[p.length-1][1]=M);else for(let U=d[M],L=c.length;U<=L;U++)if(U===L){const G=b===2?p[p.length-1]:p[p.length]=[M,M];G[1]=M,b=2}else{d[M]=U;const{src:G,unicodeRange:O}=c[U];if(!O||y(P,O)){const K=t[G];if(!K){r(G,()=>{A(M)});return}if(K.supportsCodePoint(P)){let H=g.get(K);typeof H!="number"&&(H=_.length,_.push(K),g.set(K,H)),d[M]=H,b=1;break}}}P>65535&&M+1<D&&(d[M+1]=d[M],M++,b===2&&(p[p.length-1][1]=M))}m()})()}else p.push([0,s.length-1]),m();function m(){if(p.length){const v=p.map(E=>s.substring(E[0],E[1]+1)).join(`
`);e.getFontsForString(v,{lang:l||void 0,style:u,weight:h,dataUrl:f}).then(({fontUrls:E,chars:w})=>{const b=_.length;let A=0;p.forEach(M=>{for(let D=0,P=M[1]-M[0];D<=P;D++)d[M[0]+D]=w[A++]+b;A++});let S=0;E.forEach((M,D)=>{r(M,P=>{_[D+b]=P,++S===E.length&&x()})})})}else x()}function x(){o({chars:d,fonts:_})}function y(v,E){for(let w=0;w<E.length;w++){const[b,A=b]=E[w];if(b<=v&&v<=A)return!0}return!1}}}const nT=Ds({name:"FontResolver",dependencies:[tT,$1,eT],init(a,e,t){return a(e,t())}});function iT(a,e){const n=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,i="[^\\S\\u00A0]",r=new RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function s({text:_,lang:g,fonts:p,style:m,weight:x,preResolvedFonts:y,unicodeFontsURL:v},E){const w=({chars:b,fonts:A})=>{let S,M;const D=[];for(let P=0;P<b.length;P++)b[P]!==M?(M=b[P],D.push(S={start:P,end:P,fontObj:A[b[P]]})):S.end=P;E(D)};y?w(y):a(_,w,{lang:g,fonts:p,style:m,weight:x,unicodeFontsURL:v})}function o({text:_="",font:g,lang:p,sdfGlyphSize:m=64,fontSize:x=400,fontWeight:y=1,fontStyle:v="normal",letterSpacing:E=0,lineHeight:w="normal",maxWidth:b=1/0,direction:A,textAlign:S="left",textIndent:M=0,whiteSpace:D="normal",overflowWrap:P="normal",anchorX:U=0,anchorY:L=0,metricsOnly:G=!1,unicodeFontsURL:O,preResolvedFonts:K=null,includeCaretPositions:H=!1,chunkedBoundsSize:J=8192,colorRanges:q=null},F){const W=h(),ee={fontLoad:0,typesetting:0};_.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),x=+x,E=+E,b=+b,w=w||"normal",M=+M,s({text:_,lang:p,style:v,weight:y,fonts:typeof g=="string"?[{src:g}]:g,unicodeFontsURL:O,preResolvedFonts:K},N=>{ee.fontLoad=h()-W;const k=isFinite(b);let ie=null,X=null,ne=null,Se=null,_e=null,ve=null,fe=null,Ie=null,I=0,ke=0,Re=D!=="nowrap";const Le=new Map,le=h();let Ee=M,de=0,te=new f;const De=[te];N.forEach($=>{const{fontObj:Q}=$,{ascender:xe,descender:me,unitsPerEm:Me,lineGap:be,capHeight:oe,xHeight:pe}=Q;let ge=Le.get(Q);if(!ge){const he=x/Me,ce=w==="normal"?(xe-me+be)*he:w*x,Ue=(ce-(xe-me)*he)/2,ue=Math.min(ce,(xe-me)*he),se=(xe+me)/2*he+ue/2;ge={index:Le.size,src:Q.src,fontObj:Q,fontSizeMult:he,unitsPerEm:Me,ascender:xe*he,descender:me*he,capHeight:oe*he,xHeight:pe*he,lineHeight:ce,baseline:-Ue-xe*he,caretTop:se,caretBottom:se-ue},Le.set(Q,ge)}const{fontSizeMult:Ae}=ge,ye=_.slice($.start,$.end+1);let ze,B;Q.forEachGlyph(ye,x,E,(he,ce,Ue,ue)=>{ce+=de,ue+=$.start,ze=ce,B=he;const se=_.charAt(ue),we=he.advanceWidth*Ae,Fe=te.count;let Oe;if("isEmpty"in he||(he.isWhitespace=!!se&&new RegExp(i).test(se),he.canBreakAfter=!!se&&r.test(se),he.isEmpty=he.xMin===he.xMax||he.yMin===he.yMax||n.test(se)),!he.isWhitespace&&!he.isEmpty&&ke++,Re&&k&&!he.isWhitespace&&ce+we+Ee>b&&Fe){if(te.glyphAt(Fe-1).glyphObj.canBreakAfter)Oe=new f,Ee=-ce;else for(let ht=Fe;ht--;)if(ht===0&&P==="break-word"){Oe=new f,Ee=-ce;break}else if(te.glyphAt(ht).glyphObj.canBreakAfter){Oe=te.splitAt(ht+1);const dt=Oe.glyphAt(0).x;Ee-=dt;for(let St=Oe.count;St--;)Oe.glyphAt(St).x-=dt;break}Oe&&(te.isSoftWrapped=!0,te=Oe,De.push(te),I=b)}let We=te.glyphAt(te.count);We.glyphObj=he,We.x=ce+Ee,We.y=Ue,We.width=we,We.charIndex=ue,We.fontData=ge,se===`
`&&(te=new f,De.push(te),Ee=-(ce+we+E*x)+M)}),de=ze+B.advanceWidth*Ae+E*x});let C=0;De.forEach($=>{let Q=!0;for(let xe=$.count;xe--;){const me=$.glyphAt(xe);Q&&!me.glyphObj.isWhitespace&&($.width=me.x+me.width,$.width>I&&(I=$.width),Q=!1);let{lineHeight:Me,capHeight:be,xHeight:oe,baseline:pe}=me.fontData;Me>$.lineHeight&&($.lineHeight=Me);const ge=pe-$.baseline;ge<0&&($.baseline+=ge,$.cap+=ge,$.ex+=ge),$.cap=Math.max($.cap,$.baseline+be),$.ex=Math.max($.ex,$.baseline+oe)}$.baseline-=C,$.cap-=C,$.ex-=C,C+=$.lineHeight});let T=0,z=0;if(U&&(typeof U=="number"?T=-U:typeof U=="string"&&(T=-I*(U==="left"?0:U==="center"?.5:U==="right"?1:c(U)))),L&&(typeof L=="number"?z=-L:typeof L=="string"&&(z=L==="top"?0:L==="top-baseline"?-De[0].baseline:L==="top-cap"?-De[0].cap:L==="top-ex"?-De[0].ex:L==="middle"?C/2:L==="bottom"?C:L==="bottom-baseline"?-De[De.length-1].baseline:c(L)*C)),!G){const $=e.getEmbeddingLevels(_,A);ie=new Uint16Array(ke),X=new Uint8Array(ke),ne=new Float32Array(ke*2),Se={},fe=[1/0,1/0,-1/0,-1/0],Ie=[],H&&(ve=new Float32Array(_.length*4)),q&&(_e=new Uint8Array(ke*3));let Q=0,xe=-1,me=-1,Me,be;if(De.forEach((oe,pe)=>{let{count:ge,width:Ae}=oe;if(ge>0){let ye=0;for(let ue=ge;ue--&&oe.glyphAt(ue).glyphObj.isWhitespace;)ye++;let ze=0,B=0;if(S==="center")ze=(I-Ae)/2;else if(S==="right")ze=I-Ae;else if(S==="justify"&&oe.isSoftWrapped){let ue=0;for(let se=ge-ye;se--;)oe.glyphAt(se).glyphObj.isWhitespace&&ue++;B=(I-Ae)/ue}if(B||ze){let ue=0;for(let se=0;se<ge;se++){let we=oe.glyphAt(se);const Fe=we.glyphObj;we.x+=ze+ue,B!==0&&Fe.isWhitespace&&se<ge-ye&&(ue+=B,we.width+=B)}}const he=e.getReorderSegments(_,$,oe.glyphAt(0).charIndex,oe.glyphAt(oe.count-1).charIndex);for(let ue=0;ue<he.length;ue++){const[se,we]=he[ue];let Fe=1/0,Oe=-1/0;for(let We=0;We<ge;We++)if(oe.glyphAt(We).charIndex>=se){let ht=We,dt=We;for(;dt<ge;dt++){let St=oe.glyphAt(dt);if(St.charIndex>we)break;dt<ge-ye&&(Fe=Math.min(Fe,St.x),Oe=Math.max(Oe,St.x+St.width))}for(let St=ht;St<dt;St++){const on=oe.glyphAt(St);on.x=Oe-(on.x+on.width-Fe)}break}}let ce;const Ue=ue=>ce=ue;for(let ue=0;ue<ge;ue++){const se=oe.glyphAt(ue);ce=se.glyphObj;const we=ce.index,Fe=$.levels[se.charIndex]&1;if(Fe){const Oe=e.getMirroredCharacter(_[se.charIndex]);Oe&&se.fontData.fontObj.forEachGlyph(Oe,0,0,Ue)}if(H){const{charIndex:Oe,fontData:We}=se,ht=se.x+T,dt=se.x+se.width+T;ve[Oe*4]=Fe?dt:ht,ve[Oe*4+1]=Fe?ht:dt,ve[Oe*4+2]=oe.baseline+We.caretBottom+z,ve[Oe*4+3]=oe.baseline+We.caretTop+z;const St=Oe-xe;St>1&&u(ve,xe,St),xe=Oe}if(q){const{charIndex:Oe}=se;for(;Oe>me;)me++,q.hasOwnProperty(me)&&(be=q[me])}if(!ce.isWhitespace&&!ce.isEmpty){const Oe=Q++,{fontSizeMult:We,src:ht,index:dt}=se.fontData,St=Se[ht]||(Se[ht]={});St[we]||(St[we]={path:ce.path,pathBounds:[ce.xMin,ce.yMin,ce.xMax,ce.yMax]});const on=se.x+T,Wt=se.y+oe.baseline+z;ne[Oe*2]=on,ne[Oe*2+1]=Wt;const _n=on+ce.xMin*We,Ln=Wt+ce.yMin*We,$n=on+ce.xMax*We,ln=Wt+ce.yMax*We;_n<fe[0]&&(fe[0]=_n),Ln<fe[1]&&(fe[1]=Ln),$n>fe[2]&&(fe[2]=$n),ln>fe[3]&&(fe[3]=ln),Oe%J===0&&(Me={start:Oe,end:Oe,rect:[1/0,1/0,-1/0,-1/0]},Ie.push(Me)),Me.end++;const It=Me.rect;if(_n<It[0]&&(It[0]=_n),Ln<It[1]&&(It[1]=Ln),$n>It[2]&&(It[2]=$n),ln>It[3]&&(It[3]=ln),ie[Oe]=we,X[Oe]=dt,q){const wn=Oe*3;_e[wn]=be>>16&255,_e[wn+1]=be>>8&255,_e[wn+2]=be&255}}}}}),ve){const oe=_.length-xe;oe>1&&u(ve,xe,oe)}}const ae=[];Le.forEach(({index:$,src:Q,unitsPerEm:xe,ascender:me,descender:Me,lineHeight:be,capHeight:oe,xHeight:pe})=>{ae[$]={src:Q,unitsPerEm:xe,ascender:me,descender:Me,lineHeight:be,capHeight:oe,xHeight:pe}}),ee.typesetting=h()-le,F({glyphIds:ie,glyphFontIndices:X,glyphPositions:ne,glyphData:Se,fontData:ae,caretPositions:ve,glyphColors:_e,chunkedBounds:Ie,fontSize:x,topBaseline:z+De[0].baseline,blockBounds:[T,z-C,T+I,z],visibleBounds:fe,timings:ee})})}function l(_,g){o({..._,metricsOnly:!0},p=>{const[m,x,y,v]=p.blockBounds;g({width:y-m,height:v-x})})}function c(_){let g=_.match(/^([\d.]+)%$/),p=g?parseFloat(g[1]):NaN;return isNaN(p)?0:p/100}function u(_,g,p){const m=_[g*4],x=_[g*4+1],y=_[g*4+2],v=_[g*4+3],E=(x-m)/p;for(let w=0;w<p;w++){const b=(g+w)*4;_[b]=m+E*w,_[b+1]=m+E*(w+1),_[b+2]=y,_[b+3]=v}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(_){let g=f.flyweight;return g.data=this.data,g.index=_,g},splitAt(_){let g=new f;return g.data=this.data.splice(_*d.length),g}},f.flyweight=d.reduce((_,g,p,m)=>(Object.defineProperty(_,g,{get(){return this.data[this.index*d.length+p]},set(x){this.data[this.index*d.length+p]=x}}),_),{data:null,index:0}),{typeset:o,measure:l}}const br=()=>(self.performance||Date).now(),tl=vm();let _d;function rT(a,e,t,n,i,r,s,o,l,c,u=!0){return u?aT(a,e,t,n,i,r,s,o,l,c).then(null,h=>(_d||(console.warn("WebGL SDF generation failed, falling back to JS",h),_d=!0),xd(a,e,t,n,i,r,s,o,l,c))):xd(a,e,t,n,i,r,s,o,l,c)}const Ro=[],sT=5;let Mu=0;function ym(){const a=br();for(;Ro.length&&br()-a<sT;)Ro.shift()();Mu=Ro.length?setTimeout(ym,0):0}const aT=(...a)=>new Promise((e,t)=>{Ro.push(()=>{const n=br();try{tl.webgl.generateIntoCanvas(...a),e({timing:br()-n})}catch(i){t(i)}}),Mu||(Mu=setTimeout(ym,0))}),oT=4,lT=2e3,vd={};let cT=0;function xd(a,e,t,n,i,r,s,o,l,c){const u="TroikaTextSDFGenerator_JS_"+cT++%oT;let h=vd[u];return h||(h=vd[u]={workerModule:Ds({name:u,workerId:u,dependencies:[vm,br],init(f,d){const _=f().javascript.generate;return function(...g){const p=d();return{textureData:_(...g),timing:d()-p}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(a,e,t,n,i,r).then(({textureData:f,timing:d})=>{const _=br(),g=new Uint8Array(f.length*4);for(let p=0;p<f.length;p++)g[p*4+c]=f[p];return tl.webglUtils.renderImageData(s,g,o,l,a,e,1<<3-c),d+=br()-_,--h.requests===0&&(h.idleTimer=setTimeout(()=>{z1(u)},lT)),{timing:d}})}function uT(a){a._warm||(tl.webgl.isSupported(a),a._warm=!0)}const hT=tl.webglUtils.resizeWebGLCanvasWithoutClearing,na={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},fT=new He;function Zr(){return(self.performance||Date).now()}const yd=Object.create(null);function dT(a,e){a=mT({},a);const t=Zr(),n=[];if(a.font&&n.push({label:"user",src:gT(a.font)}),a.font=n,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||na.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||na.unicodeFontsURL,a.colorRanges!=null){let f={};for(let d in a.colorRanges)if(a.colorRanges.hasOwnProperty(d)){let _=a.colorRanges[d];typeof _!="number"&&(_=fT.set(_).getHex()),f[d]=_}a.colorRanges=f}Object.freeze(a);const{textureWidth:i,sdfExponent:r}=na,{sdfGlyphSize:s}=a,o=i/s*4;let l=yd[s];if(!l){const f=document.createElement("canvas");f.width=i,f.height=s*256/o,l=yd[s]={glyphCount:0,sdfGlyphSize:s,sdfCanvas:f,sdfTexture:new Pt(f,void 0,void 0,void 0,nn,nn),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,pT(l)}const{sdfTexture:c,sdfCanvas:u}=l;Tm(a).then(f=>{const{glyphIds:d,glyphFontIndices:_,fontData:g,glyphPositions:p,fontSize:m,timings:x}=f,y=[],v=new Float32Array(d.length*4);let E=0,w=0;const b=Zr(),A=g.map(U=>{let L=l.glyphsByFont.get(U.src);return L||l.glyphsByFont.set(U.src,L=new Map),L});d.forEach((U,L)=>{const G=_[L],{src:O,unitsPerEm:K}=g[G];let H=A[G].get(U);if(!H){const{path:ee,pathBounds:N}=f.glyphData[O][U],k=Math.max(N[2]-N[0],N[3]-N[1])/s*(na.sdfMargin*s+.5),ie=l.glyphCount++,X=[N[0]-k,N[1]-k,N[2]+k,N[3]+k];A[G].set(U,H={path:ee,atlasIndex:ie,sdfViewBox:X}),y.push(H)}const{sdfViewBox:J}=H,q=p[w++],F=p[w++],W=m/K;v[E++]=q+J[0]*W,v[E++]=F+J[1]*W,v[E++]=q+J[2]*W,v[E++]=F+J[3]*W,d[L]=H.atlasIndex}),x.quads=(x.quads||0)+(Zr()-b);const S=Zr();x.sdf={};const M=u.height,D=Math.ceil(l.glyphCount/o),P=Math.pow(2,Math.ceil(Math.log2(D*s)));P>M&&(console.info(`Increasing SDF texture size ${M}->${P}`),hT(u,i,P),c.dispose()),Promise.all(y.map(U=>Sm(U,l,a.gpuAccelerateSDF).then(({timing:L})=>{x.sdf[U.atlasIndex]=L}))).then(()=>{y.length&&!l.contextLost&&(Mm(l),c.needsUpdate=!0),x.sdfTotal=Zr()-S,x.total=Zr()-t,e(Object.freeze({parameters:a,sdfTexture:c,sdfGlyphSize:s,sdfExponent:r,glyphBounds:v,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{l.contextLost||uT(u)})}function Sm({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:n,sdfCanvas:i,contextLost:r},s){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=na,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(o/n)*n,f=Math.floor(u/(o/n))*n,d=e%4;return rT(n,n,a,t,c,l,i,h,f,d,s)}function pT(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const n=[];a.glyphsByFont.forEach(i=>{i.forEach(r=>{n.push(Sm(r,a,!0))})}),Promise.all(n).then(()=>{Mm(a),a.sdfTexture.needsUpdate=!0})})}function mT(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let po;function gT(a){return po||(po=typeof document>"u"?{}:document.createElement("a")),po.href=a,po.href}function Mm(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:n,height:i}=e,r=a.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==n*i*4)&&(s=new Uint8Array(n*i*4),t.image={width:n,height:i,data:s},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,n,i,r.RGBA,r.UNSIGNED_BYTE,s)}}const _T=Ds({name:"Typesetter",dependencies:[iT,nT,V1],init(a,e,t){return a(e,t())}}),Tm=Ds({name:"Typesetter",dependencies:[_T],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}});Tm.onMainThread;const Sd={};function vT(a){let e=Sd[a];return e||(e=Sd[a]=new Jn(1,1,a,a).translate(.5,.5,0)),e}const xT="aTroikaGlyphBounds",Md="aTroikaGlyphIndex",yT="aTroikaGlyphColor";class ST extends V_{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Kn,this.boundingBox=new jn}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=vT(e);["position","normal","uv"].forEach(n=>{this.attributes[n]=t.attributes[n].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,n,i,r){this.updateAttributeData(xT,e,4),this.updateAttributeData(Md,t,1),this.updateAttributeData(yT,r,3),this._blockBounds=n,this._chunkedBounds=i,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:n}=this;if(t){const{PI:i,floor:r,min:s,max:o,sin:l,cos:c}=Math,u=i/2,h=i*2,f=Math.abs(t),d=e[0]/f,_=e[2]/f,g=r((d+u)/h)!==r((_+u)/h)?-f:s(l(d)*f,l(_)*f),p=r((d-u)/h)!==r((_-u)/h)?f:o(l(d)*f,l(_)*f),m=r((d+i)/h)!==r((_+i)/h)?f*2:o(f-c(d)*f,f-c(_)*f);n.min.set(g,e[1],t<0?-m:0),n.max.set(p,e[3],t<0?0:m)}else n.min.set(e[0],e[1],0),n.max.set(e[2],e[3],0);n.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Md).count,n=this._chunkedBounds;if(n)for(let i=n.length;i--;){t=n[i].end;let r=n[i].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,n){const i=this.getAttribute(e);t?i&&i.array.length===t.length?(i.array.set(t),i.needsUpdate=!0):(this.setAttribute(e,new Oo(t,n)),delete this._maxInstanceCount,this.dispose()):i&&this.deleteAttribute(e)}}const MT=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,TT=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,ET=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,bT=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function AT(a){const e=Su(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Qe},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new it(0,0,0,0)},uTroikaClipRect:{value:new it(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Qe},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new He},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ke},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:MT,vertexTransform:TT,fragmentDefs:ET,fragmentColorTransform:bT,customRewriter({vertexShader:t,fragmentShader:n}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(n)&&(n=n.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(xm,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:n}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const uh=new Xn({color:16777215,side:Gn,transparent:!0}),Td=8421504,Ed=new je,mo=new Y,uc=new Y,Js=[],wT=new Y,hc="+x+y";function bd(a){return Array.isArray(a)?a[0]:a}let Em=()=>{const a=new Rt(new Jn(1,1),uh);return Em=()=>a,a},bm=()=>{const a=new Rt(new Jn(1,1,32,1),uh);return bm=()=>a,a};const RT={type:"syncstart"},CT={type:"synccomplete"},Am=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],PT=Am.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class wm extends Rt{constructor(){const e=new ST;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Td,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=hc,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(RT),dT({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const n=this._queuedSyncs;n&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{n.forEach(i=>i&&i())})),this.dispatchEvent(CT),e&&e()})))}onBeforeRender(e,t,n,i,r,s){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return AT(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=uh.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),e.dispose()})),this.hasOutline()){let n=e._outlineMtl;return n||(n=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),n.isTextOutlineMaterial=!0,n.depthWrite=!1,n.map=null,e.addEventListener("dispose",function i(){e.removeEventListener("dispose",i),n.dispose()})),[n,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return bd(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return bd(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,n=e.uniforms,i=this.textRenderInfo;if(i){const{sdfTexture:o,blockBounds:l}=i;n.uTroikaSDFTexture.value=o,n.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),n.uTroikaSDFGlyphSize.value=i.sdfGlyphSize,n.uTroikaSDFExponent.value=i.sdfExponent,n.uTroikaTotalBounds.value.fromArray(l),n.uTroikaUseGlyphColors.value=!t&&!!i.glyphColors;let c=0,u=0,h=0,f,d,_,g=0,p=0;if(t){let{outlineWidth:x,outlineOffsetX:y,outlineOffsetY:v,outlineBlur:E,outlineOpacity:w}=this;c=this._parsePercent(x)||0,u=Math.max(0,this._parsePercent(E)||0),f=w,g=this._parsePercent(y)||0,p=this._parsePercent(v)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(_=this.strokeColor,n.uTroikaStrokeColor.value.set(_??Td),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;n.uTroikaEdgeOffset.value=c,n.uTroikaPositionOffset.value.set(g,p),n.uTroikaBlurRadius.value=u,n.uTroikaStrokeWidth.value=h,n.uTroikaStrokeOpacity.value=d,n.uTroikaFillOpacity.value=f??1,n.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)n.uTroikaClipRect.value.fromArray(m);else{const x=(this.fontSize||.1)*100;n.uTroikaClipRect.value.set(l[0]-x,l[1]-x,l[2]+x,l[3]+x)}this.geometry.applyClipRect(n.uTroikaClipRect.value)}n.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new He;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let s=this.orientation||hc;if(s!==e._orientation){let o=n.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let l=s!==hc&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,f]=l;mo.set(0,0,0)[u]=c==="-"?1:-1,uc.set(0,0,0)[f]=h==="-"?-1:1,Ed.lookAt(wT,mo.cross(uc),uc),o.setFromMatrix4(Ed)}else o.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),n=t?parseFloat(t[1]):NaN;e=(isNaN(n)?0:n/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Qe){t.copy(e);const n=this.curveRadius;return n&&(t.x=Math.atan2(e.x,Math.abs(n)-Math.abs(e.z))*Math.abs(n)),t}worldPositionToTextCoords(e,t=new Qe){return mo.copy(e),this.localPositionToTextCoords(this.worldToLocal(mo),t)}raycast(e,t){const{textRenderInfo:n,curveRadius:i}=this;if(n){const r=n.blockBounds,s=i?bm():Em(),o=s.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let h=r[0]+c.getX(u)*(r[2]-r[0]);const f=r[1]+c.getY(u)*(r[3]-r[1]);let d=0;i&&(d=i-Math.cos(h/i)*i,h=Math.sin(h/i)*i),l.setXYZ(u,h,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,Js.length=0,s.raycast(e,Js);for(let u=0;u<Js.length;u++)Js[u].object=this,t.push(Js[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,PT.forEach(n=>{this[n]=e[n]}),this}clone(){return new this.constructor().copy(this)}}Am.forEach(a=>{const e="_private_"+a;Object.defineProperty(wm.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new jn;new He;class nl extends Rt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new jt;const n=this,i=t.color!==void 0?new He(t.color):new He(8355711),r=t.textureWidth||512,s=t.textureHeight||512,o=t.clipBias||0,l=t.shader||nl.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Vi,h=new Y,f=new Y,d=new Y,_=new je,g=new Y(0,0,-1),p=new it,m=new Y,x=new Y,y=new it,v=new je,E=this.camera,w=new tr(r,s,{samples:c,type:As}),b=new Ri({name:l.name!==void 0?l.name:"unspecified",uniforms:Lu.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});b.uniforms.tDiffuse.value=w.texture,b.uniforms.color.value=i,b.uniforms.textureMatrix.value=v,this.material=b,this.onBeforeRender=function(A,S,M){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(M.matrixWorld),_.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(_),m.subVectors(f,d),m.dot(h)>0===!0&&this.forceUpdate===!1)return;m.reflect(h).negate(),m.add(f),_.extractRotation(M.matrixWorld),g.set(0,0,-1),g.applyMatrix4(_),g.add(d),x.subVectors(f,g),x.reflect(h).negate(),x.add(f),E.position.copy(m),E.up.set(0,1,0),E.up.applyMatrix4(_),E.up.reflect(h),E.lookAt(x),E.far=M.far,E.updateMatrixWorld(),E.projectionMatrix.copy(M.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(E.projectionMatrix),v.multiply(E.matrixWorldInverse),v.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(E.matrixWorldInverse),p.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const P=E.projectionMatrix;y.x=(Math.sign(p.x)+P.elements[8])/P.elements[0],y.y=(Math.sign(p.y)+P.elements[9])/P.elements[5],y.z=-1,y.w=(1+P.elements[10])/P.elements[14],p.multiplyScalar(2/p.dot(y)),P.elements[2]=p.x,P.elements[6]=p.y,P.elements[10]=p.z+1-o,P.elements[14]=p.w,n.visible=!1;const U=A.getRenderTarget(),L=A.xr.enabled,G=A.shadowMap.autoUpdate;A.xr.enabled=!1,A.shadowMap.autoUpdate=!1,A.setRenderTarget(w),A.state.buffers.depth.setMask(!0),A.autoClear===!1&&A.clear(),A.render(S,E),A.xr.enabled=L,A.shadowMap.autoUpdate=G,A.setRenderTarget(U);const O=M.viewport;O!==void 0&&A.state.viewport(O),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return w},this.dispose=function(){w.dispose(),n.material.dispose()}}}nl.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const qe=new d_,Rm=document.querySelector("canvas");let vi=new jt(45,window.innerWidth/window.innerHeight,.1,100);const Co=new Gu(16777215,1),Po=new Gu(16777215,1),Do=new G_(16711920,.2);qe.add(Co);qe.add(Po);qe.add(Do);const qo=new zS({canvas:Rm,antialias:!0,alpha:!0});qo.setSize(window.innerWidth,window.innerHeight);qo.setPixelRatio(Math.min(window.devicePixelRatio,2));function Di(a,e){const t=new wm;return t.text=a,t.font="/fonts/Anton.ttf",t.anchorX="center",t.anchorY="middle",t.textAlign="center",t.color=16777215,t.letterSpacing=.01,t.fontSize=window.innerWidth/e,t.glyphGeometryDetail=20,t}const er=Di("",3e4);er.text=` VKZ Studio 
  A studio where design, motion, and development meet.
 We craft digital products that don't just attract you, but
 pull you into an immersive experience.`;er.font="/fonts/Satoshi.ttf";er.letterSpacing=-.01;er.sync();qe.add(er);const hh=Di("FESTKA",5600);hh.sync();qe.add(hh);const Ca=Di("Website Design & Development",8e4);Ca.font="/fonts/Satoshi.ttf";Ca.letterSpacing=-.02;Ca.sync();qe.add(Ca);const fh=Di("MUZA",5600);fh.sync();qe.add(fh);const Pa=Di("Brand Identity, Website Design & Development",8e4);Pa.font="/fonts/Satoshi.ttf";Pa.letterSpacing=-.02;Pa.sync();qe.add(Pa);const il=Di(`SEABROOK
STUDIO`,8500);il.lineHeight=.95;il.sync();qe.add(il);const Da=Di("Website Design & Development",8e4);Da.font="/fonts/Satoshi.ttf";Da.letterSpacing=-.02;Da.sync();qe.add(Da);const dh=Di("ELONGA",5600);dh.sync();qe.add(dh);const Ua=Di("Product Design",8e4);Ua.font="/fonts/Satoshi.ttf";Ua.letterSpacing=-.02;Ua.sync();qe.add(Ua);const Jr=new GS;Jr.load("/models/STROM_6.glb",a=>{a.scene.position.set(0,0,-95);const e=new Rt(new Jn(2.55,75),new Xn({color:5308787}));e.position.y=.012,e.position.z=a.scene.position.z-15,e.rotation.x=-Math.PI/2,qe.add(e),console.log(a.scene),a.scene.traverse(t=>{t.isMesh&&t.material&&(t.material.color.set(15728880),t.material.metalness=.9,t.material.roughness=.01)}),qe.add(a.scene)},void 0,a=>{console.error("Error loading STROM_6:",a)});const rl=new nl(new Jn(2.55,150),{clipBias:3e-5,textureWidth:window.innerWidth*window.devicePixelRatio,textureHeight:window.innerHeight*window.devicePixelRatio,color:2236996});rl.rotation.x=-Math.PI/2;rl.position.y=.01;qe.add(rl);const sl=rl.material;sl.roughness=.85;sl.metalness=.05;sl.opacity=.15;sl.transparent=!0;const DT=new Jn(2.55,150),ia=new Xn({color:2228299,opacity:.95,transparent:!0,depthWrite:!1}),ph=new Rt(DT,ia);ph.rotation.x=-Math.PI/2;ph.position.y=.015;qe.add(ph);const Ad=2.24,UT=3,IT=6;let go,Cm=!1,wd=!1,LT=1;const Ot={isActive:!1,target:0,current:0,lastTime:0};let fc=7e-4;const Pm=new up;let FT=Pm.load("/images/clouds2.webp");qe.background=new He(262173);qe.fog=new as(262173,.3);let ct=[];const NT=new Jn(.55,.32);for(let a=1;a<=4;a++){let e=Pm.load(`/images/image${a}.avif`);e.colorSpace=Bt;const t=new Xn({color:16777215,map:e,toneMapped:!1}),n=new Rt(NT,t);ct.push(n),qe.add(n)}ct[0].position.set(-.35,.38,-37.8);ct[0].rotation.y=Math.PI/180*45;ct[1].position.set(.35,.38,-44.865);ct[1].rotation.y=-Math.PI/180*45;ct[2].position.set(-.35,.38,-51.93);ct[2].rotation.y=Math.PI/180*45;ct[3].position.set(.35,.38,-59);ct[3].rotation.y=-Math.PI/180*45;hh.position.set(-ct[0].position.x-.1,ct[0].position.y-.02,ct[0].position.z-.02);Ca.position.set(.04,ct[0].position.y-.14,ct[0].position.z+.3);fh.position.set(-ct[1].position.x+.152,ct[1].position.y-.02,ct[1].position.z-.02);Pa.position.set(-.105,ct[1].position.y-.14,ct[1].position.z+.3);il.position.set(-ct[2].position.x-.1,ct[2].position.y-.01,ct[2].position.z-.1);Da.position.set(.15,ct[2].position.y-.165,ct[2].position.z+.3);dh.position.set(-ct[3].position.x+.08,ct[3].position.y-.02,ct[3].position.z-.02);Ua.position.set(.03,ct[3].position.y-.145,ct[3].position.z+.3);Jr.load("/models/VKZ_web_34.glb",a=>{const e=a.scene;e.position.set(0,0,0),a.scene.traverse(r=>{r.isLight&&(r.intensity=50)}),go=new i0(e),a.animations.forEach(r=>{go.clipAction(r).play()});let t=null;a.scene.traverse(r=>{r.isCamera&&(t=r)}),t&&(vi=t,vi.position.z+=2.3,vi.updateProjectionMatrix());let n;e.traverse(r=>{if(r.name=="Empty_plane_Short_text"&&(er.position.x=r.position.x,er.position.y=r.position.y-.2,er.position.z=r.position.z-1.5,r.visible=!1),r.name=="Columns_Visual_room001"){let s=r.position;const o=r.clone();o.position.set(s.x,s.y,s.z);const l=r.clone();l.position.set(s.x,s.y,s.z-2);const c=r.clone();c.position.set(s.x,s.y,s.z-4);const u=r.clone();u.position.set(s.x,s.y,s.z-6);const h=r.clone();h.position.set(s.x,s.y,s.z-8);const f=r.clone();h.position.set(s.x,s.y,s.z+2);const d=r.clone();d.position.set(-s.x,s.y,s.z);const _=r.clone();_.position.set(-s.x,s.y,s.z-2);const g=r.clone();g.position.set(-s.x,s.y,s.z-4);const p=r.clone();p.position.set(-s.x,s.y,s.z-6);const m=r.clone();m.position.set(-s.x,s.y,s.z-8);const x=r.clone();m.position.set(-s.x,s.y,s.z+2),qe.add(o),qe.add(l),qe.add(c),qe.add(u),qe.add(h),qe.add(f),qe.add(d),qe.add(_),qe.add(g),qe.add(p),qe.add(m),qe.add(x)}if(r.name=="Floor_Object"&&(r.visible=!1),r.name=="Statues_Team"){n=r.position,console.log(r.position),r.position.x=.5,r.position.y-=.1;const s=r.clone();s.position.set(-.5,n.y,n.z);const o=r.clone();o.position.set(-.4,n.y,n.z-1.5);const l=r.clone();l.position.set(.4,n.y,n.z-1.5),qe.add(s),qe.add(o),qe.add(l)}}),Jr.load("/models/Statue_Lukas_2.glb",r=>{r.scene.position.x=n.x,r.scene.position.y=n.y-.11,r.scene.position.z=n.z,r.scene.rotation.y=-50*Math.PI/180,qe.add(r.scene)}),Jr.load("/models/Statue_Mira_2.glb",r=>{r.scene.position.x=n.x-1,r.scene.position.y=n.y-.11,r.scene.position.z=n.z,qe.add(r.scene)}),Jr.load("/models/Statue_Tyna_2.glb",r=>{r.scene.position.x=n.x-.9,r.scene.position.y=n.y-.11,r.scene.position.z=n.z-1.5,qe.add(r.scene)}),Jr.load("/models/Statue_Venca_2.glb",r=>{r.scene.position.x=n.x-.1,r.scene.position.y=n.y-.11,r.scene.position.z=n.z-1.5,r.scene.rotation.y=-50*Math.PI/180,qe.add(r.scene)}),Co.position.x=0,Co.position.y=n.y+.2,Co.position.z=n.z+.2,Po.position.x=0,Po.position.y=n.y+.2,Po.position.z=n.z+.2-1.5,Do.position.x=vi.position.x,Do.position.y=vi.position.y+2.5,Do.position.z=vi.position.z-4,qe.add(e),window.addEventListener("wheel",r=>{Cm&&(ri.to(".scrollAnime",{opacity:0,duration:.8}),wd=!0),Ot.current>=6&&ri.to(".contact",{opacity:1,y:0,duration:1}),Ot.current<6&&ri.to(".contact",{opacity:0,y:50,duration:1}),Ot.isActive=!0,Ot.lastTime=Date.now(),Ot.target=Qc.clamp(Ot.target+r.deltaY*fc,0,6.18)}),window.addEventListener("mousemove",r=>{let s=r.x/window.innerWidth*2-1,o=r.y/window.innerHeight*2-1;ri.to(vi.position,{x:s/30,y:-o/30,duration:1})});function i(){if(requestAnimationFrame(i),!wd){qo.render(qe,vi);return}Ot.isActive&&Date.now()-Ot.lastTime>200&&(Ot.isActive=!1),Ot.current>Ad&&Ot.current<UT?(qe.background=FT,qe.fog=new as(15850227,.11),fc=3e-4,ia.color=new He(5308787),ia.opacity=.98,e.traverse(r=>{r.name=="Cube007_1"&&r.traverse(s=>{s.isMesh&&s.material&&s.material.color.set(16777215)})})):Ot.current<=Ad&&(qe.background=new He(262173),qe.fog=new as(262173,.14),ia.color=new He(2228299),ia.opacity=.9,e.traverse(r=>{r.name=="Cube007_1"&&(r.material.color=new He(.27236685156822205,0,.9112716317176819))}),fc=4e-4),Ot.current=Qc.lerp(Ot.current,Ot.target,.1),Ot.current>IT&&(qe.fog=new as(15850227,.03+(6.18-Ot.current))),go&&go.setTime(Ot.current*LT),qo.render(qe,vi)}i()});const Ki=document.querySelector("audio");let Uo=!1;Ki.muted=!0;Ki.pause();let Rd=document.querySelector(".loadPage .enter");Rd.addEventListener("click",()=>{Cm=!0,Ki.muted=!1,Ki.play(),Uo=!0,ri.to(".Homepage",{opacity:1,duration:1}),ri.to(".loadPage",{opacity:0,duration:.7}),ri.to(Rm,{opacity:1,duration:1.5}),ri.to(qe.fog,{density:.15,duration:1.2,onComplete:()=>{Rd.style.display="hidden"}}),ri.to(".scrollAnime",{opacity:1,delay:.8,duration:1})});document.querySelector(".sound").addEventListener("click",()=>{Uo?(document.querySelector(".soundF").style.opacity=1,document.querySelector(".soundP").style.opacity=0,document.querySelector(".soundText").innerHTML="SOUND OFF",Uo=!1,Ki.muted=!0,Ki.pause()):(document.querySelector(".soundP").style.opacity=1,document.querySelector(".soundF").style.opacity=0,document.querySelector(".soundText").innerHTML="SOUND ON",Uo=!0,Ki.muted=!1,Ki.play())});
