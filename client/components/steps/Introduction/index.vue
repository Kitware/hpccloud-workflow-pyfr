<template>
  <div class="ma-3">
    <h2>Introduction</h2>
    <p>
      PyFR is an open-source Python based framework for solving
      advection-diffusion type problems on streaming architectures using the
      Flux Reconstruction approach of Huynh. The framework is designed to solve
      a range of governing systems on mixed unstructured grids containing
      various element types. It is also designed to target a range of hardware
      platforms via use of an in-built domain specific language derived from the
      Mako templating engine. The current release (PyFR 1.2.0) has the following
      capabilities:
    </p>
    <ul>
      <li>Governing Equations - Euler, Navier Stokes</li>
      <li>Dimensionality - 2D, 3D</li>
      <li>
        Element Types - Triangles, Quadrilaterals, Hexahedra, Prisms,
        Tetrahedra, Pyramids
      </li>
      <li>
        Platforms - CPU Clusters, Nvidia GPU Clusters, AMD GPU Clusters
      </li>
      <li>Spatial Discretisation - High-Order Flux Reconstruction</li>
      <li>Temporal Discretisation - Explicit Runge-Kutta</li>
      <li>Precision - Single, Double</li>
      <li>Mesh Files Imported - Gmsh (.msh)</li>
      <li>Solution Files Exported - Unstructured VTK (.vtu, .pvtu)</li>
    </ul>
    <p>
      <a
        style="text-decoration: underline;"
        href="http://www.pyfr.org/"
        target="_blank"
        >Find out more</a
      >
    </p>
    <v-layout>
      <hpc-next-step-button />
      <v-spacer />
    </v-layout>
  </div>
</template>
