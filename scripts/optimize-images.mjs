import sharp from "sharp";
import { readdir, mkdir, stat } from "fs/promises";
import path from "path";

const INPUT_BASE = "public/images";
const OUTPUT_BASE = "public/images/optimized";
const MAX_WIDTH = 1600;
const THUMB_WIDTH = 800;
const QUALITY = 80;

// SEO-friendly name mapping
const RENAME_MAP = {
  // Root images
  "cyrielle-thiebaut-a-propos.JPG": "cyrielle-thiebaut-portrait-maquilleuse-professionnelle",

  // Beauté
  "portfolio/beauté/49F272A9-596F-4BAB-A2FD-D17D3D7D6684.jpg": "maquillage-beaute-teint-lumineux",
  "portfolio/beauté/B375535D-124A-4113-91D5-5205287D6FA0.JPG": "maquillage-beaute-regard-sophistique",
  "portfolio/beauté/B385CAA2-707D-4BF5-9888-D16C37B9BB2D.JPG": "maquillage-beaute-levres-nude",
  "portfolio/beauté/EC6DABCC-FFCD-4CB0-A6DC-11CBD16411E7.JPG": "maquillage-beaute-smoky-eye",
  "portfolio/beauté/IMG_0295.JPG": "maquillage-beaute-naturel-eclat",
  "portfolio/beauté/IMG_0316.JPG": "maquillage-beaute-portrait-studio",
  "portfolio/beauté/IMG_3657.JPG": "maquillage-beaute-peau-parfaite",
  "portfolio/beauté/IMG_3665.JPG": "maquillage-beaute-glamour-dore",

  // Édito
  "portfolio/edito/EB140E3C-E0D0-45CE-B735-C49431D9FDB9.JPG": "maquillage-editorial-portrait-creatif",
  "portfolio/edito/f317af52-1fe5-44e6-add9-8419fef5c752.JPG": "maquillage-editorial-beaute-artistique",
  "portfolio/edito/IMG_0718.JPG": "maquillage-editorial-shooting-studio-01",
  "portfolio/edito/IMG_0720.JPG": "maquillage-editorial-shooting-studio-02",
  "portfolio/edito/IMG_0721.JPG": "maquillage-editorial-shooting-studio-03",
  "portfolio/edito/IMG_0722.JPG": "maquillage-editorial-shooting-studio-04",
  "portfolio/edito/IMG_0723.JPG": "maquillage-editorial-shooting-studio-05",
  "portfolio/edito/IMG_0724.JPG": "maquillage-editorial-shooting-studio-06",
  "portfolio/edito/IMG_4678.JPG": "maquillage-editorial-mode-lumiere-naturelle-01",
  "portfolio/edito/IMG_4685.JPG": "maquillage-editorial-mode-lumiere-naturelle-02",
  "portfolio/edito/IMG_4714.JPG": "maquillage-editorial-mode-lumiere-naturelle-03",
  "portfolio/edito/IMG_5250.JPG": "maquillage-editorial-beaute-close-up-01",
  "portfolio/edito/IMG_5259.JPG": "maquillage-editorial-beaute-close-up-02",
  "portfolio/edito/IMG_5374.JPG": "maquillage-editorial-regard-intense-01",
  "portfolio/edito/IMG_5377.JPG": "maquillage-editorial-regard-intense-02",
  "portfolio/edito/IMG_9893.JPG": "maquillage-editorial-creative-look-01",
  "portfolio/edito/IMG_9896.JPG": "maquillage-editorial-creative-look-02",
  "portfolio/edito/IMG_9899.JPG": "maquillage-editorial-creative-look-03",
  "portfolio/edito/IMG_9901.JPG": "maquillage-editorial-creative-look-04",
  "portfolio/edito/LOFT 43.JPG": "maquillage-editorial-loft-session-01",
  "portfolio/edito/LOFT 63.JPG": "maquillage-editorial-loft-session-02",
  "portfolio/edito/LOFT 75.JPG": "maquillage-editorial-loft-session-03",

  // Mariage
  "portfolio/mariage/68496436-84F5-4021-8891-2F401151D00E.JPG": "maquillage-mariee-portrait-voile",
  "portfolio/mariage/9153673192315546575_VSCO.JPG": "maquillage-mariee-preparation-jour-j",
  "portfolio/mariage/IMG_3886.JPG": "maquillage-mariee-naturel-romantique",
  "portfolio/mariage/IMG_3887.JPG": "maquillage-mariee-bouquet-elegance",
  "portfolio/mariage/IMG_3889.JPG": "maquillage-mariee-ceremonie-plein-air",
  "portfolio/mariage/IMG_4440.JPG": "maquillage-mariee-mise-en-beaute-01",
  "portfolio/mariage/IMG_4443.JPG": "maquillage-mariee-mise-en-beaute-02",
  "portfolio/mariage/IMG_4447.JPG": "maquillage-mariee-mise-en-beaute-03",
  "portfolio/mariage/IMG_4448.JPG": "maquillage-mariee-portrait-lumiere-douce",
  "portfolio/mariage/IMG_4449.JPG": "maquillage-mariee-sourire-bonheur",
  "portfolio/mariage/IMG_4451.JPG": "maquillage-mariee-couple-emotion",
  "portfolio/mariage/IMG_5924.JPG": "maquillage-mariee-regard-doux",
  "portfolio/mariage/IMG_5928.JPG": "maquillage-mariee-details-bijoux",
  "portfolio/mariage/IMG_8987.JPG": "maquillage-mariee-preparation-coiffure",
  "portfolio/mariage/IMG_8988.JPG": "maquillage-mariee-reflet-miroir",

  // Mode - Chaussea
  "portfolio/mode/chaussea/IMG_2428.JPG": "maquillage-mode-chaussea-campagne-01",
  "portfolio/mode/chaussea/IMG_2429.JPG": "maquillage-mode-chaussea-campagne-02",
  "portfolio/mode/chaussea/IMG_2430.JPG": "maquillage-mode-chaussea-campagne-03",
  "portfolio/mode/chaussea/IMG_2431.JPG": "maquillage-mode-chaussea-campagne-04",
  "portfolio/mode/chaussea/IMG_2432.JPG": "maquillage-mode-chaussea-campagne-05",
  "portfolio/mode/chaussea/IMG_2433.JPG": "maquillage-mode-chaussea-campagne-06",
  "portfolio/mode/chaussea/IMG_2434.JPG": "maquillage-mode-chaussea-campagne-07",
  "portfolio/mode/chaussea/IMG_2435.JPG": "maquillage-mode-chaussea-campagne-08",
  "portfolio/mode/chaussea/IMG_2436.JPG": "maquillage-mode-chaussea-campagne-09",
  "portfolio/mode/chaussea/IMG_2437.JPG": "maquillage-mode-chaussea-campagne-10",
  "portfolio/mode/chaussea/IMG_2438.JPG": "maquillage-mode-chaussea-campagne-11",
  "portfolio/mode/chaussea/IMG_2439.JPG": "maquillage-mode-chaussea-campagne-12",

  // Mode - Les Touristes
  "portfolio/mode/les touristes/5D39CB0D-5A5F-43B5-AE29-DC45D5D25A5D.JPG": "maquillage-mode-les-touristes-portrait-01",
  "portfolio/mode/les touristes/A480D010-0348-4CA0-9C18-9C3C5BC649EB.JPG": "maquillage-mode-les-touristes-portrait-02",
  "portfolio/mode/les touristes/AMBIANCE_EDITO_1-5.JPG": "maquillage-mode-les-touristes-ambiance-editoriale-01",
  "portfolio/mode/les touristes/AMBIANCE_EDITO_10.JPG": "maquillage-mode-les-touristes-ambiance-editoriale-02",
  "portfolio/mode/les touristes/AMBIANCE_EDITO_8.JPG": "maquillage-mode-les-touristes-ambiance-editoriale-03",
  "portfolio/mode/les touristes/_-3.JPG": "maquillage-mode-les-touristes-look-creatif-01",
  "portfolio/mode/les touristes/_-4.JPG": "maquillage-mode-les-touristes-look-creatif-02",
  "portfolio/mode/les touristes/_-7.JPG": "maquillage-mode-les-touristes-look-creatif-03",
  "portfolio/mode/les touristes/_-8.JPG": "maquillage-mode-les-touristes-look-creatif-04",
  "portfolio/mode/les touristes/_-10.JPG": "maquillage-mode-les-touristes-look-creatif-05",
  "portfolio/mode/les touristes/_-12.JPG": "maquillage-mode-les-touristes-look-creatif-06",
  "portfolio/mode/les touristes/_-19.JPG": "maquillage-mode-les-touristes-look-creatif-07",
  "portfolio/mode/les touristes/_-24.JPG": "maquillage-mode-les-touristes-look-creatif-08",
  "portfolio/mode/les touristes/_-28.JPG": "maquillage-mode-les-touristes-look-creatif-09",

  // Opéra
  "portfolio/opéra/5D812E42-D9C5-4FED-8512-05FE8EF9283D.JPG": "maquillage-opera-scene-theatre-metz-01",
  "portfolio/opéra/B368BF35-1937-4435-A96D-6351F5B2EE24.JPG": "maquillage-opera-scene-theatre-metz-02",
  "portfolio/opéra/F207640C-81F8-43B4-AF59-2891BE9A9A3B.JPG": "maquillage-opera-scene-theatre-metz-03",
  "portfolio/opéra/IMG_8208.jpg": "maquillage-opera-coulisses-artiste-01",
  "portfolio/opéra/IMG_8213.jpg": "maquillage-opera-coulisses-artiste-02",
  "portfolio/opéra/IMG_8221.jpg": "maquillage-opera-coulisses-artiste-03",
  "portfolio/opéra/IMG_8381.PNG": "maquillage-opera-spectacle-costume-01",
  "portfolio/opéra/IMG_8382.PNG": "maquillage-opera-spectacle-costume-02",
  "portfolio/opéra/IMG_8383.PNG": "maquillage-opera-spectacle-costume-03",
};

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

async function processImage(inputPath, outputName, outputDir) {
  const fullPath = path.join(INPUT_BASE, inputPath);
  const ext = path.extname(inputPath).toLowerCase();

  try {
    const img = sharp(fullPath);
    const metadata = await img.metadata();

    // Full size
    const fullOut = path.join(outputDir, `${outputName}.webp`);
    await img
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(fullOut);

    // Thumbnail
    const thumbOut = path.join(outputDir, `${outputName}-thumb.webp`);
    await sharp(fullPath)
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(thumbOut);

    const fullStat = await stat(fullOut);
    const origStat = await stat(fullPath);

    console.log(
      `  ${inputPath} → ${outputName}.webp (${(origStat.size / 1024 / 1024).toFixed(1)}MB → ${(fullStat.size / 1024).toFixed(0)}KB)`
    );

    return {
      width: metadata.width,
      height: metadata.height,
      orientation: metadata.width > metadata.height ? "landscape" : "portrait",
    };
  } catch (err) {
    console.error(`  ERROR: ${inputPath} — ${err.message}`);
    return null;
  }
}

async function main() {
  console.log("Optimizing images...\n");

  // Output directories
  const dirs = [
    "about",
    "portfolio/beaute",
    "portfolio/editorial",
    "portfolio/mariage",
    "portfolio/mode/chaussea",
    "portfolio/mode/les-touristes",
    "portfolio/opera",
  ];

  for (const d of dirs) {
    await ensureDir(path.join(OUTPUT_BASE, d));
  }

  const manifest = {};

  for (const [inputPath, outputName] of Object.entries(RENAME_MAP)) {
    // Determine output directory
    let outDir;
    if (inputPath.startsWith("portfolio/beauté")) outDir = "portfolio/beaute";
    else if (inputPath.startsWith("portfolio/edito")) outDir = "portfolio/editorial";
    else if (inputPath.startsWith("portfolio/mariage")) outDir = "portfolio/mariage";
    else if (inputPath.startsWith("portfolio/mode/chaussea")) outDir = "portfolio/mode/chaussea";
    else if (inputPath.startsWith("portfolio/mode/les touristes")) outDir = "portfolio/mode/les-touristes";
    else if (inputPath.startsWith("portfolio/opéra")) outDir = "portfolio/opera";
    else outDir = "about";

    const result = await processImage(inputPath, outputName, path.join(OUTPUT_BASE, outDir));
    if (result) {
      manifest[outputName] = {
        src: `/images/optimized/${outDir}/${outputName}.webp`,
        thumb: `/images/optimized/${outDir}/${outputName}-thumb.webp`,
        ...result,
      };
    }
  }

  // Write manifest
  const manifestPath = path.join(OUTPUT_BASE, "manifest.json");
  const { writeFile } = await import("fs/promises");
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\nManifest written to ${manifestPath}`);
  console.log(`Total images processed: ${Object.keys(manifest).length}`);
}

main().catch(console.error);
