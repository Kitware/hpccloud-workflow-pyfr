export function clusterFilter(cluster) {
  return (
    'config' in cluster &&
    'pyfr' in cluster.config &&
    (('cuda' in cluster.config.pyfr && cluster.config.pyfr.cuda) ||
      ('opencl' in cluster.config.pyfr &&
        cluster.config.pyfr.opencl.length > 0) ||
      ('openmp' in cluster.config.pyfr &&
        cluster.config.pyfr.openmp.length > 0))
  );
}

// ----------------------------------------------------------------------------

export function getPayload({ project, simulation }) {
  return {
    // backend: state.backend, // FIXME...
    input: {
      folder: {
        id: simulation.metadata.inputFolder._id,
      },
      meshFile: {
        id: project.metadata.inputFolder.files.mesh,
      },
      iniFile: {
        id: simulation.metadata.inputFolder.files.ini,
      },
    },
    output: {
      folder: {
        id: simulation.metadata.outputFolder._id,
      },
    },
  };
}

// ----------------------------------------------------------------------------

export function getMetadata() {
  return {};
}
