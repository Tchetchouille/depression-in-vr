// MOSTLY STOLEN FROM
// https://www.maya-ndljk.com/blog/threejs-basic-toon-shader

let lightTest = document.createElement("a-entity");
lightTest.setAttribute('light', {intensity: 10, castShadow: true, color: "#FFFFFF", type: "spot"});
lightTest.setAttribute('scale', {x: 0.1, y: 0.1, z:0.1});
lightTest.setAttribute('position', {x: 1, y: 1.5, z: 0});
lightTest.setAttribute('rotation', {x: -90, y: 0, z: 0});
document.getElementById("temple").appendChild(lightTest);



const toonShaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
        uColor: { value: new THREE.Color('#6405ED')},
        lightTest: {value: lightTest.object3D.rotation}
    },
    vertexShader:
    `
        varying vec3 vNormal;

        void main() {
            vec4 modelPosition = modelMatrix * vec4(position, 1.0);
            vec4 viewPosition = viewMatrix * modelPosition;
            vec4 clipPosition = projectionMatrix * viewPosition;

            vNormal = normalize(normalMatrix * normal);

            gl_Position = clipPosition;
        }
    `,
    fragmentShader: 
    `
        uniform vec3 uColor;
        varying vec3 vNormal;

        void main() {
            float NdotL = dot(vNormal, vec3(0, 1, 0));
            float lightIntensity = smoothstep(0.0, 0.01, NdotL);
            vec3 directionalLight = vec3(0.20, 0.20, 0.20) * lightIntensity;
          
            gl_FragColor = vec4(uColor * directionalLight, 1.0);        }
    `
    
});
  
const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 16),
    toonShaderMaterial
);
document.getElementById("temple").object3D.add(mesh);



/*
// MOSTLY STOLEN FROM
// https://sites.google.com/site/threejstuts/home/shader-toon
let basicLight = document.getElementById('basicLight');
const boxGeometry = new THREE.SphereGeometry(1, 32, 16);
const boxMaterial = new THREE.ShaderMaterial({
    uniforms: {
    lightpos: {type: 'v3', value: basicLight.getAttribute('position') }
    },
    vertexShader: `
        varying vec3 lightdir;
        varying vec3 eyenorm;
        uniform vec3 lightpos;
        void main() {
        gl_Position = projectionMatrix* modelViewMatrix * vec4( position, 1.0);
        
        vec4 tmp = modelViewMatrix * vec4 (lightpos, 1.0);
        lightdir = tmp.xyz;
        
        eyenorm = normalMatrix * normal;
        }
        `,
    fragmentShader: `
        varying vec3 lightdir;
        varying vec3 eyenorm;
        
        void main() {
        vec3 lightdir = vec3 (1,1,2);
        float ndotl = dot (normalize (eyenorm), normalize (lightdir));
        if (ndotl > 0.8) {
        ndotl = 1.0;
        } else if (ndotl > 0.6) {
        ndotl = 0.6;
        } else {
        ndotl = 0.2;
        }
        gl_FragColor = vec4 (ndotl, ndotl, ndotl, 1.0);
        }
        `,
});
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
document.getElementById("temple").object3D.add(boxMesh);
*/