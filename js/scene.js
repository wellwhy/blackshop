//container: html div to hold renderer
    //items have an onclick function for interactivity
//renderer: renders to 1 container ONLY, tied to it
//scene(s): world spaces where objects are added
//camera(s): where to look from within a scene, can be used interchangably between scenes, but every renderer is given one for now

////////
////
//CONTAINER TOTEM

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

if(!isMobile){

document.getElementById("page").style.opacity = 1.0; //this is done so that on frame 1 of page load, screen is full black, but then body is set to 0 so it can be shown again
var container = document.getElementById("three_js_container_1");
    // container.onclick = clicked;
const renderer = new THREE.WebGLRenderer({container,alpha: true,antialias:false});
var ripplescene = new THREE.Scene();
var fractalscene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 70, container.offsetWidth/container.offsetHeight, 0.1, 1000 );
camera.position.z = 2;
renderer.setPixelRatio( window.devicePixelRatio ); //pixelate
renderer.setClearColor( 0x000000, 1.0 ); //black bg
renderer.gammaOutput = true; //correct colors


var container2 = document.getElementById("three_js_container_2");
    // container2.onclick = clicked2;
    var once2 = false;
const renderer2 = new THREE.WebGLRenderer({container,alpha: true,antialias:false});
var container2scene = new THREE.Scene();
var camera2 = new THREE.PerspectiveCamera( 40, container2.offsetWidth/container2.offsetHeight, 0.1, 1000 );
camera2.position.z = 4.25;
var clicked2bool = false;
renderer2.setPixelRatio( window.devicePixelRatio); //pixelate
renderer2.setClearColor( 0xff0000, 0.0 ); //clear bg
renderer2.gammaOutput = true; //correct colors

// var container3 = document.getElementById("three_js_container_3");
//     // container3.onclick = clicked3;
//     var once3 = false;
// const renderer3 = new THREE.WebGLRenderer({container,alpha: true,antialias:false});
// var container3scene = new THREE.Scene();
// var camera3 = new THREE.PerspectiveCamera( 70, container3.offsetWidth/container3.offsetHeight, 0.1, 1000 );
// camera3.position.z = 2;
// var clicked3bool = false;
// renderer3.setPixelRatio( 1.0 ); //pixelate
// renderer3.setClearColor( 0xff0000, 0.0 ); //clear bg
// renderer3.gammaOutput = true; //correct colors

////////
////
//CONTAINER TOTEM

resize_all();
append_all();

var gltf_loader = new THREE.GLTFLoader();

var rippletexture = new THREE.TextureLoader().load( 'animegirl/ny.jpg' );
rippletexture.wrapS = THREE.RepeatWrapping;
rippletexture.wrapT = THREE.RepeatWrapping;
rippletexture.minFilter = THREE.NearestFilter;
rippletexture.magFilter = THREE.NearestFilter;

// var ocd_texture = new THREE.TextureLoader().load( 'ocd.png' );
// ocd_texture.wrapS = THREE.RepeatWrapping;
// ocd_texture.wrapT = THREE.RepeatWrapping;
// ocd_texture.minFilter = THREE.NearestFilter;
// ocd_texture.magFilter = THREE.NearestFilter;

var fullscreen_tri_geom = new THREE.BufferGeometry();
var scren_space_vert_positions = new Float32Array([
    -1.0 ,-1.0,
    3.0, -1.0,
    -1.0, 3.0
]);
fullscreen_tri_geom.addAttribute('position', new THREE.BufferAttribute(scren_space_vert_positions, 2));

var resolution = new THREE.Vector2(window.innerWidth, window.innerHeight);
var target = new THREE.WebGLRenderTarget(resolution.x, resolution.y, { //buffer that holds ss tri
    format: THREE.RGBFormat,
    stencilBuffer: false,
    depthBuffer: true,
});
target.minFilter = THREE.LinearFilter;
target.magFilter = THREE.LinearFilter;

var ripples_tex = new THREE.TextureLoader().load("bayer_b.gif");
ripples_tex.wrapS = THREE.RepeatWrapping;
ripples_tex.wrapT = THREE.RepeatWrapping;
// ripples_tex.minFilter = THREE.NearestFilter;
// ripples_tex.magFilter = THREE.NearestFilter;

var ripple_material = new THREE.RawShaderMaterial({
    fragmentShader: document.getElementById('rippleFragmentShader').textContent,
    vertexShader: document.getElementById('rippleVertexShader').textContent,
    uniforms: {
      ripples_tex: { type: "t", value: ripples_tex},
      time: {value: 0.0 },
      uResolution: { value: resolution },
    },
});

var fractal_material = new THREE.RawShaderMaterial({
    fragmentShader: document.getElementById('fractalFragmentShader').textContent,
    vertexShader: document.getElementById('rippleVertexShader').textContent,
    uniforms: {
      cover_mix_amt: { type: "float" , value: 0.3},
      cover_art: { type: "t" , value: rippletexture},
      mix_amt: { type: "float" , value: 0.7},
      shop: { type: "t" ,value: ripples_tex},
      mr: { type: "vec4" , value: new THREE.Vector4(0.0,0.0,x,y)},
      uResolution: { value: resolution },
    },
});

var fullscreen_tri = new THREE.Mesh(fullscreen_tri_geom, ripple_material);
fullscreen_tri.frustumCulled = false;
ripplescene.add(fullscreen_tri);

var fullscreen_tri_fractal = new THREE.Mesh(fullscreen_tri_geom, fractal_material);
fullscreen_tri_fractal.frustumCulled = false;
fractalscene.add(fullscreen_tri_fractal);




var ps1_shader_material = new THREE.ShaderMaterial({ 
    uniforms: { texture1: { type: "t", value: null} },
    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById('fragmentShader').textContent,
    });


var sv1_model;
gltf_loader.load( 'cshopmodel.gltf', function ( gltf ) {
    gltf.scene.traverse((o) => {
        if (o.isMesh){
            var temp = o.material.map;
            temp.minFilter = THREE.NearestFilter;
            temp.magFilter = THREE.NearestFilter;
            o.material = new THREE.ShaderMaterial({ 
                uniforms: { texture1: { type: "t", value: null} },
                vertexShader: document.getElementById('vertexShader').textContent,
                fragmentShader: document.getElementById('fragmentShader').textContent,
                });
            o.material.uniforms.texture1.value = rippletexture; //CHANGE THIS FOR EACH MODEL
            o.material.side = THREE.DoubleSide;
        }
    });
    sv1_model = gltf.scene;

    container2scene.add( sv1_model ); //ORDER MATTERS HERE
    //console.log(sv1_model);
}, undefined, function ( error ) {
	console.error( error );
} );

// var ocd_model;
// gltf_loader.load( 'ocd_cd.gltf', function ( gltf ) {
//     gltf.scene.traverse((o) => {
//         if (o.isMesh){
//             var temp = o.material.map;
//             temp.minFilter = THREE.NearestFilter;
//             temp.magFilter = THREE.NearestFilter;
//             o.material = new THREE.ShaderMaterial({ 
//                 uniforms: { texture1: { type: "t", value: null} },
//                 vertexShader: document.getElementById('vertexShader').textContent,
//                 fragmentShader: document.getElementById('fragmentShader').textContent,
//                 });
//             o.material.uniforms.texture1.value = temp; //CHANGE THIS FOR EACH MODEL
//         }
//     });
//     ocd_model = gltf.scene;

//     container3scene.add( ocd_model ); //ORDER MATTERS HERE
//     //console.log(ocd_model);
// }, undefined, function ( error ) {
// 	console.error( error );
// } );

//container sizes set and updated on resize in store.htmml


var x = window.innerWidth / 2;
var y = window.innerHeight / 2;
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
// function updateMousePos(event){
//     if(!isMobile){
//         x = event.clientX;
//         y = event.clientY;
//     }
// }

// function clicked2(event){
//     clicked2bool = !clicked2bool;
//     bg_once = true;
//     once2 = true;
//     once3 = false;
//     if(!startinganidone) //fixes clicking on something fast and bg not being dark
//         startinganidone = true;
//     // test.play();
// }

// function clicked3(event){
//     clicked3bool = !clicked3bool;
//     bg_once = true;
//     once3 = true;
//     once2 = false;
//     if(!startinganidone)  //fixes clicking on something fast and bg not being dark
//         startinganidone = true;
//     // test.play();
// }

// function clicked(event){
//     console.log("clicked");
//     if(once2)
//         clicked2();
//     if(once3)
//         clicked3();
//     // once2 = false;
//     // once3 = false;
// }

function animate() {
    interactive_items();
    if(sv1_model /*&& ocd_model*/){
        sv1_model.rotation.x += 0.01;
        sv1_model.rotation.y += 0.01;

        // ocd_model.rotation.x -= 0.0025;
        // ocd_model.rotation.y -= 0.0025;
    }

    requestAnimationFrame( animate );
    renderer.setRenderTarget(target);
    renderer.render( fractalscene, camera );
    if(fractalbattery){
        if(!startinganidone){
            document.body.style.opacity = 1.0 * startingani.startzoom;
            if(startingani.startzoom == 1.0)
                startinganidone = true;
        }
        // fractal_material.uniforms.mr.value = new THREE.Vector4(
        //     x*0.25 / 2+ resolution.x*0.25 / 4,
        //     y*0.25 /2 + resolution.y*0.3,
        //     resolution.x*fractalbattery.zoomx*startingani.startzoom,
        //     resolution.y*fractalbattery.zoomy*startingani.startzoom); //res*4 for correct centering
    }
    //    fractal_material.uniforms.mr.value = new THREE.Vector4(x / 2+ resolution.x*4 / 4, y /2 + resolution.y*4 / 4,resolution.x*4,resolution.y*4);
    ripple_material.uniforms.ripples_tex.value = target.texture;
    //ps1_shader_material.uniforms.texture1.value = target.texture;
    renderer.setRenderTarget(null);
    ripple_material.uniforms.time.value += .005;
    renderer.getDrawingBufferSize(resolution);

    renderer.render(ripplescene, camera);
    renderer2.render( container2scene, camera2 );
    // renderer3.render( container3scene, camera3 );
    // camera.rotation.z += .005;
}

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){
    resolution.x = window.innerWidth;
    resolution.y = window.innerHeight;
    target.width = window.innerWidth;
    target.height = window.innerHeight;
    fractal_material.uniforms.mr.value = new THREE.Vector4(x,y,resolution.x,resolution.y);
    fractal_material.uniforms.uResolution.value = resolution;
    ripple_material.uniforms.uResolution.value = resolution;

    resize_all();
}
animate();

function resize_all(){
    camera.aspect = container.offsetWidth / container.offsetHeight;
    renderer.setSize( container.offsetWidth, container.offsetHeight );
    camera.updateProjectionMatrix();


    camera2.aspect = container2.offsetWidth / container2.offsetHeight;
    renderer2.setSize( container2.offsetWidth, container2.offsetHeight );
    camera2.updateProjectionMatrix();

    // camera3.aspect = container3.offsetWidth / container3.offsetHeight;
    // renderer3.setSize( container3.offsetWidth, container3.offsetHeight );
    // camera3.updateProjectionMatrix();
}

function append_all(){
    container.appendChild( renderer.domElement );
    container2.appendChild( renderer2.domElement );
    // container3.appendChild( renderer3.domElement ); 
}


function XOR(a,b) {
    return ( a || b ) && !( a && b );
  }

var battery = {
    charged: '0.25',
    filter: '0.0'
}

var trans =  anime({
    autoplay: false,
    targets: battery,
    charged: '1.0',
    filter: '100.0',
    round: 100,
    loop: 1,
    easing: 'easeInOutExpo'
  });
  trans.reverse(); //gets the reverse() back and forth on the right side

var startingani = {
    startzoom: '0.0',
}

var startinganidone = false;
var startinganime =  anime({
    autoplay: true,
    targets: startingani,
    startzoom: '1.0',
    round: 1000,
    loop: 1,
    duration:3000,
    easing: 'easeInOutExpo'
  });


var fractalbattery = {
    zoomx: '3.5',
    zoomy: '1.0',
}

var fractaltrans =  anime({
    autoplay: false,
    targets: fractalbattery,
    zoomx: '11.0',
    zoomy: '9.0',
    round: 100,
    loop: 1,
    easing: 'easeInOutExpo'
  });
  fractaltrans.reverse(); //gets the reverse() back and forth on the right side

var bg_once = false;
var lastcharge = false;
function interactive_items(){
    if(bg_once){
        trans.reverse();
        trans.play();
        fractaltrans.reverse();
        fractaltrans.play();
        bg_once = false;
    }


     if(battery){ //stupid shit isnt initialized yet, and i have to prevent from going in with this dumb check
        if(battery.charged != 0.25 && battery.filter != 100.0 || lastcharge){ //still, grayscale only goes down to 9.58%
            update_ui();
            container.style.filter = "grayscale(" + parseInt(battery.filter) + "%)"; //bc i cant see if its completed or not
            // renderer.setPixelRatio(battery.filter/100 * 0.25 + 0.25);
            container.style.opacity = 0.7 * (1.0 - battery.filter / 100.0) + 0.1 ;
            fractal_material.uniforms.mix_amt.value = 0.3 * (battery.filter / 100.0) + 0.7 ;
        }
    }
}

// function update_ui(){
//     var fader = battery.filter;


//     renderer2.setPixelRatio(battery.charged);
//     if(once2){
//         if(clicked2bool){
//             // document.getElementById("info2").style.opacity = "" + Math.round(fader) + "%";

//             container3.offsetParent.style.opacity = "" + Math.round(100.0 - fader) + "%";
//             container3.offsetParent.style.pointerEvents = "none";
//         }
//         else{
//             var temp = battery.filter;
//             // document.getElementById("info2").style.opacity = "" + Math.round(fader) + "%";

//             container3.offsetParent.style.opacity = "" + Math.round(100.0 - fader) + "%";
//             if(100.0 - fader > 98.0){
//                 container3.offsetParent.style.pointerEvents = "auto";
//                 once2 = false;
//             }
//         }
//     }
//     else if(once3){
//         if(clicked3bool){
//             // document.getElementById("info3").style.opacity = "" + Math.round(fader) + "%";

//             container2.offsetParent.style.opacity = "" + Math.round(100.0 - fader) + "%";
//             container2.offsetParent.style.pointerEvents = "none";
//         }
//         else{
//             var temp = battery.filter;
//             // document.getElementById("info3").style.opacity = "" + Math.round(fader) + "%";

//             container2.offsetParent.style.opacity = "" + Math.round(100.0 - fader) + "%";
//             if(100.0 - fader > 98.0){
//                 container2.offsetParent.style.pointerEvents = "auto";
//                 once3 = false;
//             }
//         }
//     }
//     renderer3.setPixelRatio(battery.charged);
// }


}