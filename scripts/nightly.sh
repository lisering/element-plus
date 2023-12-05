sed -i 's/"name": "hicor-ui",/"name": "@hicor-ui\/nightly",/' packages/hicor-ui/package.json
sed -i '2s/hicor-ui/@hicor-ui\/nightly/' internal/build-constants/src/pkg.ts