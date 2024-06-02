// images.js

// Create a function to import images dynamically
const importAll = (context) => context.keys().map(context);

// Import all images from the specified directory
const images = importAll(
  require.context("../assets", false, /\.(png|jpe?g|svg)$/)
);

// Export the dynamically imported images
export const imagePaths = {
  teamimage: images.find((image) => image.includes("techimgae")),
  littleIcon: images.find((image) => image.includes("little-image")),
  next: images.find((image) => image.includes("next")),
  html: images.find((image) => image.includes("html5")),
  react: images.find((image) => image.includes("reactjs")),
  saas: images.find((image) => image.includes("SAS")),
  TailwindCss: images.find((image) => image.includes("tailwind css")),
  js: images.find((image) => image.includes("js")),
  cs: images.find((image) => image.includes("cs")),
  veu: images.find((image) => image.includes("veu")),
  python: images.find((image) => image.includes("PYTHON")),
  NODE: images.find((image) => image.includes("NODE")),
  MYSQL: images.find((image) => image.includes("MYSQL")),
  MONGODB: images.find((image) => image.includes("MONGODB")),
  LARAVAL: images.find((image) => image.includes("LARAVELNAVA")),
  laravalPostgress: images.find((image) => image.includes("LARAVEL")),
  aws: images.find((image) => image.includes("AWS")),
  radis: images.find((image) => image.includes("RADIS")),
  elastic: images.find((image) => image.includes("elastic")),

  GOLAND: images.find((image) => image.includes("GOLAND")),
  FIREBASE: images.find((image) => image.includes("FIREBASE")),
  BNEXT: images.find((image) => image.includes("bnext")),
  // for ui ux component
  afterEffect: images.find((image) => image.includes("afterEf")),
  prememiumpro: images.find((image) => image.includes("premiumpro")),
  lottie: images.find((image) => image.includes("lottie")),
  blender: images.find((image) => image.includes("blinder")),
  balsamic: images.find((image) => image.includes("balsamiq")),
  invision: images.find((image) => image.includes("invision")),
  adobxd: images.find((image) => image.includes("adob xd")),
  adobecreative: images.find((image) => image.includes("adobe-create-image")),
  figma: images.find((image) => image.includes("figma")),
  illustrater: images.find((image) => image.includes("ilustrater")),
  photoshop: images.find((image) => image.includes("ps")),
  framer: images.find((image) => image.includes("frame")),
  marvel: images.find((image) => image.includes("marvel")),
  littleIcon1: images.find((image) => image.includes("ui ux")),
  // for qa testing components
  maualtest: images.find((image) => image.includes("manualtest")),
  appium: images.find((image) => image.includes("appem")),
  awsdevic: images.find((image) => image.includes("awscont")),
  slenium: images.find((image) => image.includes("selenium")),
  browserstack: images.find((image) => image.includes("browersstack")),
  // for dataeng
  bigquery: images.find((image) => image.includes("bigqu")),
  quicksight: images.find((image) => image.includes("quciksight")),
  redshift: images.find((image) => image.includes("redsh")),
  awsathena: images.find((image) => image.includes("AWSATH")),
  datastudio: images.find((image) => image.includes("datastd")),
};

export const devpopsImages = {
  spectrum: images.find((image) => image.includes("figma")),
  BitBucket: images.find((image) => image.includes("bucket")),
  Docker: images.find((image) => image.includes("docker")),
  slenium: images.find((image) => image.includes("selenium")),
  npm: images.find((image) => image.includes("npm")),
  browserstack: images.find((image) => image.includes("browersstack")),
  aws: images.find((image) => image.includes("AWS")),

  gitlab: images.find((image) => image.includes("gitlab")),
  github: images.find((image) => image.includes("github")),
  googlecloude: images.find((image) => image.includes("googleCloud")),
  azure: images.find((image) => image.includes("azure")),
  ansible: images.find((image) => image.includes("ansible")),
};
