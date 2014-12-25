Package.describe({
  git: 'https://github.com/gliesesoftware/cfs-filesystem.git',
  name: 'gliese:cfs-filesystem',
  version: '0.1.3',
  summary: "Gliese favour of the Filesystem storage adapter for CFS (INTERNAL USE ONLY)"
});

Npm.depends({
  //chokidar: "0.8.2",
  mkdirp: "0.3.5"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['gliese:cfs-base@0.0.28', 'gliese:cfs-storage@0.1.2']);
  api.addFiles('filesystem.server.js', 'server');
  api.addFiles('filesystem.client.js', 'client');
});

Package.onTest(function(api) {
  api.use(['gliese:cfs-filesystem', 'test-helpers', 'tinytest'], 'server');
  api.addFiles('tests.js', 'server');
});