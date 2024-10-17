### Hasil pembelajaran dan disaring agar lebih mudah

gunakan Node.js untuk melakukan debug pada Javascript

install Node JS
```bash

# installs fnm (Fast Node Manager)
winget install Schniz.fnm

# configure fnm environment
fnm env --use-on-cd | Out-String | Invoke-Expression

# download and install Node.js
fnm use --install-if-missing 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.18.0`

# verifies the right npm version is in the environment
npm -v # should print `10.8.2`

```

Or download from

https://nodejs.org/en
