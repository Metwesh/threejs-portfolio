import { useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { boxBg } from "../../assets";
import { LIGHT_ARGUMENTS } from "../shaders/constants";

export function TechCore() {
  const { nodes } = useGLTF("./m-logo/M-logo.gltf");

  const meshRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current)
      meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
  });

  // Load the decals & backgrounds
  const backgroundTexture = useLoader(THREE.TextureLoader, boxBg);

  // Define the uniforms for the shader. These are the variables that can be accessed from both the vertex and fragment shaders.
  // backgroundTexture is the texture used as the background in the shader.
  // lightPosition defines the position of the light in the shader.
  // lightColor defines the color of the light in the shader.
  // These uniforms are defined as an object with keys as the uniform names and values as objects containing the actual value for the uniform.
  const decalShaderUniforms: { [uniform: string]: THREE.IUniform } = {
    backgroundTexture: { value: backgroundTexture },
    lightPosition: { value: LIGHT_ARGUMENTS.position },
    lightColor: { value: LIGHT_ARGUMENTS.color },
  };

  // Define the decal shader
  const decalShader: THREE.ShaderMaterialParameters = {
    uniforms: decalShaderUniforms,
    lights: true,
    // This is the vertex shader code for the material.
    // It calculates the position, normal, and light direction for each vertex and passes them to the fragment shader.
    //
    // 'varying' variables are used to pass data from the vertex shader to the fragment shader.
    // vUv is the UV coordinates of the vertex, used for texture mapping.
    // vNormal is the normal vector of the vertex, used for lighting calculations.
    // vLightDirection is the direction from the vertex to the light, used for lighting calculations.
    //
    // 'uniform' variables are read-only and are set from the TypeScript code. They are constant for all vertices.
    // lightPosition is the position of the light in the scene.
    //
    // In the main function:
    // uv is assigned to vUv.
    // The normal vector is transformed by the normal matrix to handle model scaling, and then normalized and assigned to vNormal.
    // The position of the vertex is transformed by the model-view matrix to handle model transformations and camera view, and then assigned to mvPosition.
    // The direction from the vertex to the light is calculated, normalized, and assigned to vLightDirection.
    // The position of the vertex is transformed by the projection matrix to handle camera projection, and then assigned to gl_Position, which determines the position of the vertex on the screen.
    vertexShader: `
          varying vec2 vUv;
          varying vec3 vNormal; 
          varying vec3 vLightDirection;
          uniform vec3 lightPosition;
          void main() {
            vUv = uv;
            vNormal = normalize(normalMatrix * normal); 
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vLightDirection = normalize(lightPosition - mvPosition.xyz);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
    // This is a fragment shader for a WebGL rendering context.
    // It calculates the final color of each pixel based on the background texture and lighting.
    //
    // 'uniform' variables are read-only and are set from the JavaScript code. They are constant for all pixels.
    // backgroundTexture is the texture used as the background.
    // lightColor is the color of the light in the scene.
    //
    // 'varying' variables are interpolated from the values calculated in the vertex shader for each vertex of the primitive currently being rasterized.
    // vUv is the interpolated UV coordinates, used for texture mapping.
    // vNormal is the interpolated normal vector, used for lighting calculations.
    // vLightDirection is the interpolated direction from the vertex to the light, used for lighting calculations.
    //
    // In the main function:
    // The color of the background texture at the interpolated UV coordinates is fetched.
    // The Lambertian reflectance is calculated, which is the cosine of the angle between the light direction and the normal vector, clamped between 0 and 1.
    // The light effect is calculated as the product of the light color and the Lambertian reflectance.
    // The color is calculated as the product of the background color and the light effect.
    // The final color is assigned to gl_FragColor, which is the output color of the fragment. The alpha component is set to 1.0, making the fragment fully opaque.
    //
    // This shader uses Lambertian reflectance to simulate basic diffuse lighting, where surfaces facing the light source directly are lit brightly, and surfaces facing away from the light source are lit dimly or not at all.
    fragmentShader: `
      uniform sampler2D backgroundTexture;
      uniform vec3 lightColor;
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vLightDirection;
      void main() {
        vec4 bgColor = texture2D(backgroundTexture, vUv);
        float lambertian = max(dot(normalize(vNormal), vLightDirection), 0.0);
        vec3 lightEffect = lightColor * lambertian;
        vec3 color = bgColor.rgb * lightEffect;
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  };

  // Create the shader material
  const decalMaterial = new THREE.ShaderMaterial({
    uniforms: decalShader.uniforms,
    vertexShader: decalShader.vertexShader,
    fragmentShader: decalShader.fragmentShader,
    transparent: true,
    opacity: 1,
  });

  return (
    <group
      ref={meshRef}
      position={[0, 0, 0]}
      scale={5}
      onPointerEnter={(e) => e.stopPropagation()}
    >
      <mesh geometry={(nodes.M as THREE.Mesh)?.geometry}>
        <primitive attach="material" object={decalMaterial} />
      </mesh>
    </group>
  );
}
