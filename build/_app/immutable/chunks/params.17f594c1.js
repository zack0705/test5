import{w as fe,b as ge}from"./paths.536288b8.js";const ie="@riadh-adrani-theme",pe=e=>{localStorage.setItem(ie,JSON.stringify(e))},oe=fe(!1),re=e=>oe.update(M=>{var p;const $=typeof e=="boolean"?e:!M;return pe($),(p=document.querySelector(":root"))==null||p.setAttribute("data-theme",$?"light":"dark"),$}),$e=()=>{const e=localStorage.getItem(ie);e?re(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&re(!0)},ae=e=>`${ge}/logos/${e}`,t=(e,M)=>M?{dark:ae(M),light:ae(e)}:ae(e),f={AWS:t("aws.svg"),Bootstrap:t("bootstrap.svg"),C:t("c.svg"),Cpp:t("cpp.svg"),Celery:t("celery.svg"),Django:t("django.svg"),FastApi:t("fastapi"),Flask:t("flask.svg"),Go:t("go.svg"),Kafka:t("kafka.svg"),Neo4j:t("neo4j.svg"),Nginx:t("nginx.svg"),Numpy:t("numpy.svg"),Pandas:t("pandas.svg"),RabbitMQ:t("rabbitmq.svg"),Rust:t("rust.svg","rust-dark.png"),Scrapy:t("scrapy.png"),Selenium:t("selenium.svg"),Docker:t("docker.svg"),Kubernetes:t("kubernetees.svg"),Csharp:t("csharp.svg"),Xamarin:t("xamarin.svg"),TypeScript:t("ts.png"),VueJs:t("vue.png"),ReactJs:t("react.svg"),Dart:t("dart.png"),Kotlin:t("kotlin.png"),Python:t("python.png"),NodeJs:t("node.png"),Deno:t("deno.png","deno-dark.png"),Svelte:t("svelte.png"),ExpressJs:t("express.png"),JavaScript:t("js.png"),Fastify:t("fastify.svg","fastify-dark.png"),NestJs:t("nest.svg"),Quasar:t("quasar.svg"),SolidJs:t("solid.svg"),Electron:t("electron.png"),Flutter:t("flutter.svg"),Java:t("java.png"),AdonisJs:t("adonis.png"),Android:t("android.png"),Angular:t("angular.png"),PostgreSQL:t("postgres.png"),Firebase:t("firebase.png"),Sass:t("sass.png"),Unknown:t("no-img.svg"),MongoDB:t("mongodb.svg"),Redis:t("redis.svg"),Tailwind:t("tailwind.svg"),HTML:t("html.svg"),Premiere:t("premiere.svg"),Photoshop:t("photoshop.svg"),CSS:t("css.svg"),AfterEffects:t("after-effects.svg"),Illustrator:t("illustrator.svg"),Nuxt:t("nuxt.png"),Vite:t("vite.png"),Vitest:t("vitest.svg"),Jest:t("jest.png"),Unocss:t("unocss.svg"),Ruvy:t("ruvy.svg"),Postcss:t("postcss.svg"),FaceRec:t("face.png"),Me:t("me.jpg"),Music:t("music.jpg"),Tank:t("tank.jpg"),Parallel:t("parallel.svg"),Bi_Di:t("bi-di.png"),Sarcasm:t("sarcasm.jpg"),Health:t("health.webp"),Job:t("job.webp"),ASU:t("asu.webp"),SmartBridge:t("smart-bridge.jpg"),CareerLauncher:t("career-launcher.png"),SQL:t("sql.png"),Sklearn:t("sklearn.png"),Tensorflow:t("tensorflow.png"),Keras:t("keras.png"),Spring:t("spring.png")};let le;oe.subscribe(e=>le=e);const ke=e=>typeof e=="string"?e:le?e.dark:e.light,S=e=>e,ce=[S({slug:"python",logo:f.Python,name:"Python"}),S({slug:"java",logo:f.Java,name:"Java"}),S({slug:"js",logo:f.JavaScript,name:"Javascript"}),S({slug:"ts",logo:f.TypeScript,name:"Typescript"}),S({slug:"aws",logo:f.AWS,name:"AWS"}),S({slug:"css",logo:f.CSS,name:"CSS"}),S({slug:"html",logo:f.HTML,name:"HTML"}),S({slug:"reactjs",logo:f.ReactJs,name:"React Js"}),S({slug:"nodejs",logo:f.NodeJs,name:"NodeJS"}),S({slug:"sql",logo:f.SQL,name:"SQL"}),S({slug:"android-studio",logo:f.Android,name:"Android Studio"}),S({slug:"numpy",logo:f.Numpy,name:"NumPy"}),S({slug:"pandas",logo:f.Pandas,name:"Pandas"}),S({slug:"sk-learn",logo:f.Sklearn,name:"Sklearn"}),S({slug:"tensorflow",logo:f.Tensorflow,name:"TensorFlow"}),S({slug:"keras",logo:f.Keras,name:"Keras"}),S({slug:"mongo-db",logo:f.MongoDB,name:"MongoDB"}),S({slug:"docker",logo:f.Docker,name:"Docker"}),S({slug:"spring",logo:f.Spring,name:"Spring"})],O=(...e)=>ce.filter(M=>e.includes(M.slug));var q=(e=>(e.GitHub="github",e.Linkedin="linkedin",e.Email="email",e))(q||{}),ee=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e))(ee||{});const ve=[{slug:"open-sourcer",company:"Arizona State University",description:"Compiled a dataset of over 30,000 reviews of Amazon and BestBuy products using a web scraper created with Python and Beautiful Soup API Gained insight on the data by carrying out data analysis and sentiment analysis on it using Python and libraries such as nltk and vader and presented the results through various data visualization techniques and graphs Identified top 30 popular topics from the data by training a LDA Model for Topic Modelling on the review data and used Python and LDAVis library for its visualization Collaborated on the research presented by Dr. Nina Sharp at the 24th International Conference on Human-Computer Interaction",contract:ee.PartTime,type:"Data Analyst",location:"Tempe, AZ, US",period:{from:new Date("12/13/2021"),to:new Date("08/15/2022")},skills:O("python","numpy"),name:"Research Data Analyst",color:"#ffffff",links:[],logo:f.ASU,shortDescription:"Assisted the DeSmart Lab in ASU for the ongoing research by doing data analysis and providing technological assistance"},{slug:"software-freelance",company:"Career Launcher",description:"Analyzed the dataset consisting of stock data of various companies using Keras, SciPy, Pandas and Scikit-Learn Achieved a stock trade call predicting accuracy of over 76% by visualizing stock data for technical analysis and designing a model by using existing trade calls and Bollinger Bands Improved the performance of a portfolio by 40% by diversifying the portfolio according to the Modern Portfolio Theory and performing clustering for analysis",contract:ee.Internship,type:"Software Development",location:"Ahmedabad, Gujarat, India",period:{from:new Date("06/01/2020"),to:new Date("08/31/2020")},skills:O("python","numpy","sklearn"),name:"Software Developer Engineer Intern",color:"#ffffff",links:[],logo:f.CareerLauncher,shortDescription:"Conducted data analysis on the stock data of some companies along side predicting stock market and creating portfolio solutions as well"},{slug:"software-freelance-junior",company:"Smart Bridge Education Services Pvt. Ltd.",description:"Created a chat assistant which can resolve the user’s technical queries by giving the solution from a guide book Built the model with IBM Watson Assistant, IBM Watson Discovery, IBM Cloud Services and node-red",contract:ee.Internship,type:"Artificial Intelligence",location:"Ahmedabad, Gujarat, India",period:{from:new Date("05/01/2020"),to:new Date("06/31/2020")},skills:O("css","html","nodejs","python"),name:"Artificial Intelligence Intern",color:"#ffffff",links:[],logo:f.SmartBridge,shortDescription:"Created and deployed a smart chat bot using IBM technologies"}],ye=[{slug:"face-rec",color:"#5e95e3",description:"Developed a distributed application which predicts the person from image or by a real-time live video by using AWS for backend services For video: Prepared Docker images for AWS lambda which fetches video from S3 bucket, processes on it and identifies the person in the video clip and sends the person’s information from DynamoDB For images: Created a web and app server using AWS EC2 instances. Used NodeJS for handling the connections between web server, application server, AWS SQS and AWS S3 buckets Configured auto scaling by using python and boto3 library which would dynamically generate app server AWS EC2 instances (maximum 19) by observing incoming requests Achieved a latency of 2-3 sec for the entire system",shortDescription:"A AWS based Real Time Face Recognition Service",links:[],logo:f.FaceRec,name:"FaceRec",period:{from:new Date},skills:O("python","nodejs","java","aws","html","css","tensorflow"),type:"Cloud System"},{slug:"android-app",color:"#ff3e00",description:"Designed an android application using Android Studio which helps user check their heart rate and respiratory rate with their smart phone and keep track of their symptoms Tracked current location of the user (using GPS) every 15 min and user’s health data to the MySQL database Secured user database by allowing access only by their password. The user can choose to share their data to a global server through a website",shortDescription:"An android application that helps users measure their heart rate and respiratory rate and keep track of COVID-19 symptoms",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:f.Health,name:"Health Tracker",period:{from:new Date},skills:O("java","sql","android-studio","html","css"),type:"Android App",screenshots:[]},{slug:"job-portal",color:"#ff3e00",description:"Built a full stack job portal system where users can search and/or add job postings with RESTful services using Spring Boot Utilized MongoDB for database along with MongoDB Compass and MongoDB Atlas Search for search functionalities Implemented frontend functionalities using React with JavaScript, HTML5 and CSS3 and used Swagger for testing purposes and Maven for accessing dependencies",shortDescription:"An full stack job posting and searching website",links:[],logo:f.Job,name:"Job Portal",period:{from:new Date},skills:O("java","react","js","spring","html","css"),type:"Website",screenshots:[]},{slug:"sarcasm",color:"#ff3e00",description:"Built a model that would detect sarcasm from both text and audio by using over 6000 video clips of TV Series like Friends, TBBT, etc. Devised an audio model by implementing CNN and RNN algorithms to identify sarcastic sound patterns for sound processing Implemented NLP techniques to detect sarcasm in text and combined it with the audio model to make a hybrid model with 0.70 F-score value",shortDescription:"A hybrid machine learning that detects sarcasm through both audio and text",links:[{to:"https://github.com/zack0705/Multimodal-Sarcasm-Detection",label:"GitHub"}],logo:f.Sarcasm,name:"Multimodal Sarcasm Detection",period:{from:new Date},skills:O("python","pandas","sklearn","keras","tensorflow"),type:"Machine Learning",screenshots:[]},{slug:"music-recc",color:"#ff3e00",description:"The basic idea of this project is to recommend music using computer vision through a convolutional neural network. The network is first trained as a classifier with the labels being the 8 different genres of songs from the dataset. The trained network is then modified by discarding the softmax layer i.e. creating a new model which works as an encoder. This encoder takes as input slices of a spectrogram one at a time and outputs a 32 dimensional latent representation of that respective slice. This generates multiple latent vectors for one spectrogram depending on how many slices were generated. These multiple vectors are then averaged to get one latent representation for each spectrogram. The Cosine similarity metric is used to generate a similarity score between one anchor song and the rest of the songs in the test set. The two songs with the highest similarity score with respect to the anchor song are then outputted as the recommendations.",shortDescription:"A music recommendation system that recommends new songs based on the preference of a song by using the beats and rhythm of the song as a metric for similarity",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:f.Music,name:"Music Reccomender",period:{from:new Date},skills:O("python","pandas","sklearn","keras","tensorflow"),type:"Android App",screenshots:[]},{slug:"tank-wars",color:"#ff3e00",description:"Created a physics based two-player game of 2D tank battle by implementing real-life physics equations in algorithms for the trajectory paths of the tank shots and the two-player mechanism by using concepts of client server programming, socket programming and Peterson’s Algorithm ",shortDescription:"A real time multiplayer tank battle game",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:f.Tank,name:"Tank Wars",period:{from:new Date},skills:O("python","numpy"),type:"Android App",screenshots:[]},{slug:"bi-direction-search",color:"#ff3e00",description:"Implemented a bi-directional algorithm by using the algorithm of this research paper(https://ojs.aaai.org/index.php/AAAI/article/view/10436). Created a code to generate various kinds of environment of Pacman domain to test the performance of bi-directional search algorithm. Conducted T-test and ANOVA test of the results of bi-directional search algorithm and compared it to that of DFS, BFS, UCS, A*, etc. ",shortDescription:"Implemented and tested a bi directional search algorithm against the standard search algorithms and showcased its functionality",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:f.Bi_Di,name:"Bi-Directional Search",period:{from:new Date},skills:O("python"),type:"Android App",screenshots:[]},{slug:"parallelism",color:"#ff3e00",description:"This project was focused on investigating and comparing three parallelism techniques for training deep learning models: data parallelism, model parallelism, and pipeline parallelism. The objective was to determine the most efficient and effective technique for training large and complex models. The RESNET50 model was trained on the CIfar10 dataset for 20 epochs using each technique, and their performance was compared in terms of timing. The findings of the study revealed that pipeline parallelism offers the best trade-off between performance and efficiency for training deep learning models. The results of this project could have practical implications for industries that heavily rely on deep learning, such as healthcare and finance.",shortDescription:"A comparative study of various parallelism techniques",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:f.Parallel,name:"Parallelism Techniques",period:{from:new Date},skills:O("python","pandas","tensorflow"),type:"Android App",screenshots:[]}];var ue=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function de(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var he={exports:{}};(function(e,M){(function($,p){e.exports=p()})(ue,function(){var $=1e3,p=6e4,k=36e5,D="millisecond",A="second",Y="minute",F="hour",j="day",J="week",T="month",R="quarter",H="year",P="date",B="Invalid Date",Z=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ne={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var a=["th","st","nd","rd"],s=i%100;return"["+i+(a[(s-20)%10]||a[s]||a[0])+"]"}},N=function(i,a,s){var o=String(i);return!o||o.length>=a?i:""+Array(a+1-o.length).join(s)+i},Q={s:N,z:function(i){var a=-i.utcOffset(),s=Math.abs(a),o=Math.floor(s/60),n=s%60;return(a<=0?"+":"-")+N(o,2,"0")+":"+N(n,2,"0")},m:function i(a,s){if(a.date()<s.date())return-i(s,a);var o=12*(s.year()-a.year())+(s.month()-a.month()),n=a.clone().add(o,T),u=s-n<0,d=a.clone().add(o+(u?-1:1),T);return+(-(o+(s-n)/(u?n-d:d-n))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:T,y:H,w:J,d:j,D:P,h:F,m:Y,s:A,ms:D,Q:R}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},I="en",m={};m[I]=ne;var l="$isDayjsObject",r=function(i){return i instanceof b||!(!i||!i[l])},g=function i(a,s,o){var n;if(!a)return I;if(typeof a=="string"){var u=a.toLowerCase();m[u]&&(n=u),s&&(m[u]=s,n=u);var d=a.split("-");if(!n&&d.length>1)return i(d[0])}else{var v=a.name;m[v]=a,n=v}return!o&&n&&(I=n),n||!o&&I},h=function(i,a){if(r(i))return i.clone();var s=typeof a=="object"?a:{};return s.date=i,s.args=arguments,new b(s)},c=Q;c.l=g,c.i=r,c.w=function(i,a){return h(i,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})};var b=function(){function i(s){this.$L=g(s.locale,null,!0),this.parse(s),this.$x=this.$x||s.x||{},this[l]=!0}var a=i.prototype;return a.parse=function(s){this.$d=function(o){var n=o.date,u=o.utc;if(n===null)return new Date(NaN);if(c.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var d=n.match(Z);if(d){var v=d[2]-1||0,y=(d[7]||"0").substring(0,3);return u?new Date(Date.UTC(d[1],v,d[3]||1,d[4]||0,d[5]||0,d[6]||0,y)):new Date(d[1],v,d[3]||1,d[4]||0,d[5]||0,d[6]||0,y)}}return new Date(n)}(s),this.init()},a.init=function(){var s=this.$d;this.$y=s.getFullYear(),this.$M=s.getMonth(),this.$D=s.getDate(),this.$W=s.getDay(),this.$H=s.getHours(),this.$m=s.getMinutes(),this.$s=s.getSeconds(),this.$ms=s.getMilliseconds()},a.$utils=function(){return c},a.isValid=function(){return this.$d.toString()!==B},a.isSame=function(s,o){var n=h(s);return this.startOf(o)<=n&&n<=this.endOf(o)},a.isAfter=function(s,o){return h(s)<this.startOf(o)},a.isBefore=function(s,o){return this.endOf(o)<h(s)},a.$g=function(s,o,n){return c.u(s)?this[o]:this.set(n,s)},a.unix=function(){return Math.floor(this.valueOf()/1e3)},a.valueOf=function(){return this.$d.getTime()},a.startOf=function(s,o){var n=this,u=!!c.u(o)||o,d=c.p(s),v=function(W,L){var _=c.w(n.$u?Date.UTC(n.$y,L,W):new Date(n.$y,L,W),n);return u?_:_.endOf(j)},y=function(W,L){return c.w(n.toDate()[W].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(L)),n)},w=this.$W,z=this.$M,E=this.$D,U="set"+(this.$u?"UTC":"");switch(d){case H:return u?v(1,0):v(31,11);case T:return u?v(1,z):v(0,z+1);case J:var V=this.$locale().weekStart||0,G=(w<V?w+7:w)-V;return v(u?E-G:E+(6-G),z);case j:case P:return y(U+"Hours",0);case F:return y(U+"Minutes",1);case Y:return y(U+"Seconds",2);case A:return y(U+"Milliseconds",3);default:return this.clone()}},a.endOf=function(s){return this.startOf(s,!1)},a.$set=function(s,o){var n,u=c.p(s),d="set"+(this.$u?"UTC":""),v=(n={},n[j]=d+"Date",n[P]=d+"Date",n[T]=d+"Month",n[H]=d+"FullYear",n[F]=d+"Hours",n[Y]=d+"Minutes",n[A]=d+"Seconds",n[D]=d+"Milliseconds",n)[u],y=u===j?this.$D+(o-this.$W):o;if(u===T||u===H){var w=this.clone().set(P,1);w.$d[v](y),w.init(),this.$d=w.set(P,Math.min(this.$D,w.daysInMonth())).$d}else v&&this.$d[v](y);return this.init(),this},a.set=function(s,o){return this.clone().$set(s,o)},a.get=function(s){return this[c.p(s)]()},a.add=function(s,o){var n,u=this;s=Number(s);var d=c.p(o),v=function(z){var E=h(u);return c.w(E.date(E.date()+Math.round(z*s)),u)};if(d===T)return this.set(T,this.$M+s);if(d===H)return this.set(H,this.$y+s);if(d===j)return v(1);if(d===J)return v(7);var y=(n={},n[Y]=p,n[F]=k,n[A]=$,n)[d]||1,w=this.$d.getTime()+s*y;return c.w(w,this)},a.subtract=function(s,o){return this.add(-1*s,o)},a.format=function(s){var o=this,n=this.$locale();if(!this.isValid())return n.invalidDate||B;var u=s||"YYYY-MM-DDTHH:mm:ssZ",d=c.z(this),v=this.$H,y=this.$m,w=this.$M,z=n.weekdays,E=n.months,U=n.meridiem,V=function(L,_,K,X){return L&&(L[_]||L(o,u))||K[_].slice(0,X)},G=function(L){return c.s(v%12||12,L,"0")},W=U||function(L,_,K){var X=L<12?"AM":"PM";return K?X.toLowerCase():X};return u.replace(x,function(L,_){return _||function(K){switch(K){case"YY":return String(o.$y).slice(-2);case"YYYY":return c.s(o.$y,4,"0");case"M":return w+1;case"MM":return c.s(w+1,2,"0");case"MMM":return V(n.monthsShort,w,E,3);case"MMMM":return V(E,w);case"D":return o.$D;case"DD":return c.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return V(n.weekdaysMin,o.$W,z,2);case"ddd":return V(n.weekdaysShort,o.$W,z,3);case"dddd":return z[o.$W];case"H":return String(v);case"HH":return c.s(v,2,"0");case"h":return G(1);case"hh":return G(2);case"a":return W(v,y,!0);case"A":return W(v,y,!1);case"m":return String(y);case"mm":return c.s(y,2,"0");case"s":return String(o.$s);case"ss":return c.s(o.$s,2,"0");case"SSS":return c.s(o.$ms,3,"0");case"Z":return d}return null}(L)||d.replace(":","")})},a.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},a.diff=function(s,o,n){var u,d=this,v=c.p(o),y=h(s),w=(y.utcOffset()-this.utcOffset())*p,z=this-y,E=function(){return c.m(d,y)};switch(v){case H:u=E()/12;break;case T:u=E();break;case R:u=E()/3;break;case J:u=(z-w)/6048e5;break;case j:u=(z-w)/864e5;break;case F:u=z/k;break;case Y:u=z/p;break;case A:u=z/$;break;default:u=z}return n?u:c.a(u)},a.daysInMonth=function(){return this.endOf(T).$D},a.$locale=function(){return m[this.$L]},a.locale=function(s,o){if(!s)return this.$L;var n=this.clone(),u=g(s,o,!0);return u&&(n.$L=u),n},a.clone=function(){return c.w(this.$d,this)},a.toDate=function(){return new Date(this.valueOf())},a.toJSON=function(){return this.isValid()?this.toISOString():null},a.toISOString=function(){return this.$d.toISOString()},a.toString=function(){return this.$d.toUTCString()},i}(),C=b.prototype;return h.prototype=C,[["$ms",D],["$s",A],["$m",Y],["$H",F],["$W",j],["$M",T],["$y",H],["$D",P]].forEach(function(i){C[i[1]]=function(a){return this.$g(a,i[0],i[1])}}),h.extend=function(i,a){return i.$i||(i(a,b,h),i.$i=!0),h},h.locale=g,h.isDayjs=r,h.unix=function(i){return h(1e3*i)},h.en=m[I],h.Ls=m,h.p={},h})})(he);var be=he.exports;const te=de(be);var me={exports:{}};(function(e,M){(function($,p){e.exports=p()})(ue,function(){var $,p,k=1e3,D=6e4,A=36e5,Y=864e5,F=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,j=31536e6,J=2628e6,T=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,R={years:j,months:J,days:Y,hours:A,minutes:D,seconds:k,milliseconds:1,weeks:6048e5},H=function(m){return m instanceof Q},P=function(m,l,r){return new Q(m,r,l.$l)},B=function(m){return p.p(m)+"s"},Z=function(m){return m<0},x=function(m){return Z(m)?Math.ceil(m):Math.floor(m)},ne=function(m){return Math.abs(m)},N=function(m,l){return m?Z(m)?{negative:!0,format:""+ne(m)+l}:{negative:!1,format:""+m+l}:{negative:!1,format:""}},Q=function(){function m(r,g,h){var c=this;if(this.$d={},this.$l=h,r===void 0&&(this.$ms=0,this.parseFromMilliseconds()),g)return P(r*R[B(g)],this);if(typeof r=="number")return this.$ms=r,this.parseFromMilliseconds(),this;if(typeof r=="object")return Object.keys(r).forEach(function(i){c.$d[B(i)]=r[i]}),this.calMilliseconds(),this;if(typeof r=="string"){var b=r.match(T);if(b){var C=b.slice(2).map(function(i){return i!=null?Number(i):0});return this.$d.years=C[0],this.$d.months=C[1],this.$d.weeks=C[2],this.$d.days=C[3],this.$d.hours=C[4],this.$d.minutes=C[5],this.$d.seconds=C[6],this.calMilliseconds(),this}}return this}var l=m.prototype;return l.calMilliseconds=function(){var r=this;this.$ms=Object.keys(this.$d).reduce(function(g,h){return g+(r.$d[h]||0)*R[h]},0)},l.parseFromMilliseconds=function(){var r=this.$ms;this.$d.years=x(r/j),r%=j,this.$d.months=x(r/J),r%=J,this.$d.days=x(r/Y),r%=Y,this.$d.hours=x(r/A),r%=A,this.$d.minutes=x(r/D),r%=D,this.$d.seconds=x(r/k),r%=k,this.$d.milliseconds=r},l.toISOString=function(){var r=N(this.$d.years,"Y"),g=N(this.$d.months,"M"),h=+this.$d.days||0;this.$d.weeks&&(h+=7*this.$d.weeks);var c=N(h,"D"),b=N(this.$d.hours,"H"),C=N(this.$d.minutes,"M"),i=this.$d.seconds||0;this.$d.milliseconds&&(i+=this.$d.milliseconds/1e3,i=Math.round(1e3*i)/1e3);var a=N(i,"S"),s=r.negative||g.negative||c.negative||b.negative||C.negative||a.negative,o=b.format||C.format||a.format?"T":"",n=(s?"-":"")+"P"+r.format+g.format+c.format+o+b.format+C.format+a.format;return n==="P"||n==="-P"?"P0D":n},l.toJSON=function(){return this.toISOString()},l.format=function(r){var g=r||"YYYY-MM-DDTHH:mm:ss",h={Y:this.$d.years,YY:p.s(this.$d.years,2,"0"),YYYY:p.s(this.$d.years,4,"0"),M:this.$d.months,MM:p.s(this.$d.months,2,"0"),D:this.$d.days,DD:p.s(this.$d.days,2,"0"),H:this.$d.hours,HH:p.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:p.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:p.s(this.$d.seconds,2,"0"),SSS:p.s(this.$d.milliseconds,3,"0")};return g.replace(F,function(c,b){return b||String(h[c])})},l.as=function(r){return this.$ms/R[B(r)]},l.get=function(r){var g=this.$ms,h=B(r);return h==="milliseconds"?g%=1e3:g=h==="weeks"?x(g/R[h]):this.$d[h],g||0},l.add=function(r,g,h){var c;return c=g?r*R[B(g)]:H(r)?r.$ms:P(r,this).$ms,P(this.$ms+c*(h?-1:1),this)},l.subtract=function(r,g){return this.add(r,g,!0)},l.locale=function(r){var g=this.clone();return g.$l=r,g},l.clone=function(){return P(this.$ms,this)},l.humanize=function(r){return $().add(this.$ms,"ms").locale(this.$l).fromNow(!r)},l.valueOf=function(){return this.asMilliseconds()},l.milliseconds=function(){return this.get("milliseconds")},l.asMilliseconds=function(){return this.as("milliseconds")},l.seconds=function(){return this.get("seconds")},l.asSeconds=function(){return this.as("seconds")},l.minutes=function(){return this.get("minutes")},l.asMinutes=function(){return this.as("minutes")},l.hours=function(){return this.get("hours")},l.asHours=function(){return this.as("hours")},l.days=function(){return this.get("days")},l.asDays=function(){return this.as("days")},l.weeks=function(){return this.get("weeks")},l.asWeeks=function(){return this.as("weeks")},l.months=function(){return this.get("months")},l.asMonths=function(){return this.as("months")},l.years=function(){return this.get("years")},l.asYears=function(){return this.as("years")},m}(),I=function(m,l,r){return m.add(l.years()*r,"y").add(l.months()*r,"M").add(l.days()*r,"d").add(l.hours()*r,"h").add(l.minutes()*r,"m").add(l.seconds()*r,"s").add(l.milliseconds()*r,"ms")};return function(m,l,r){$=r,p=r().$utils(),r.duration=function(c,b){var C=r.locale();return P(c,{$l:C},b)},r.isDuration=H;var g=l.prototype.add,h=l.prototype.subtract;l.prototype.add=function(c,b){return H(c)?I(this,c,1):g.bind(this)(c,b)},l.prototype.subtract=function(c,b){return H(c)?I(this,c,-1):h.bind(this)(c,b)}}})})(me);var Se=me.exports;const Me=de(Se);te.extend(Me);const De=(e,M=new Date)=>{let $=0,p=0,k=0;return M.getFullYear()!==e.getFullYear()?(k=M.getMonth(),p=(M.getFullYear()-e.getFullYear()-1)*12,$=12-e.getMonth()):$=M.getMonth()-e.getMonth(),$+p+k+1},Ae=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e],Ce=(e,M)=>`${e} | ${M}`;function ze(e,M=new Date(Date.now()+1e3*60*60*24)){const $=te(e),p=te(M),k=te.duration(p.diff($));let D=0,A="day";return k.as("days")<=7?(A="day",D=k.as("days")):k.as("months")<=1?(A="week",D=k.as("weeks")):k.as("years")<=1?(A="month",D=k.as("months")):(A="year",D=k.as("years")),D=Math.trunc(D),`${Math.trunc(D)} ${A}${D>1?"s":""}`}var se=(e=>(e.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",e.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",e.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",e.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",e.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",e.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",e.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",e.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",e.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",e.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",e.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",e.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",e.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",e.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",e.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",e.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",e.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",e.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",e.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",e.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",e))(se||{});const Le="Zeel Portfolio",Te={home:"Home",personal:"Projects",career:"Experiences",resume:"Resume",skills:"Skills"},He=e=>{switch(e){case q.GitHub:return se.GitHub;case q.Linkedin:return se.LinkedIn;case q.Email:return se.Email}},je={title:"Home",name:"Zeel",lastName:"Prajapati",description:"Hello! I am an experienced Software Engineer with expertise in Software Development, Data Analysis and Machine Learning. My passion for innovation, strong problem-solving skills, and commitment to staying current makes me a valuable addition to any team. Explore my work to see how I can contribute to your organization's success. Let's connect and discuss potential collaborations.",links:[{platform:q.GitHub,link:"https://github.com/zack0705"},{platform:q.Linkedin,link:"https://www.linkedin.com/in/zeelprajapati/"},{platform:q.Email,link:"prajapatizeel75@gmail.com"}]},Pe={title:"Projects",items:ye},Ee={title:"Experiences",items:ve},Oe={title:"Skills",items:ce},Ye={title:"Resumé",item:"https://drive.google.com/file/d/1F-ESoWd6KKSTDTHuEYqqNAfk3-XXtTVi/view?usp=sharing"},Ne={title:"Search"};export{f as A,Ee as E,je as H,se as I,ve as M,Te as N,Pe as P,Ye as R,Ne as S,Le as T,He as a,ze as b,Ae as c,De as d,ce as e,ye as f,ke as g,Oe as h,ue as i,de as j,$e as o,oe as t,Ce as u};
