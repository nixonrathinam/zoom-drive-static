const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const img1 = './src/assets/images/hero_bmw_sedan_1786470677977.jpg';
const img2 = './src/assets/images/hero_thar_suv_1786470691131.jpg';
const img3 = './src/assets/images/hero_hynova_muv_1786470705980.jpg';
const img4 = './src/assets/images/hero_crysta_suv_1786470720369.jpg';
const img5 = './src/assets/images/hero_fleet_highway_1786470735933.jpg';

const outputMp4 = './public/hero-bg.mp4';
const outputCopy = './public/apex-hero.mp4';

console.log('Building cinematic hero MP4 video using ffmpeg...');

// Create ffmpeg command with zoompan filter for subtle camera movement and crossfades
const filterComplex = `
[0:v]scale=1920:1080,zoompan=z='min(zoom+0.0015,1.15)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=120:s=1920x1080,fade=t=in:st=0:d=0.5,fade=t=out:st=3.5:d=0.5[v0];
[1:v]scale=1920:1080,zoompan=z='min(zoom+0.0015,1.15)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=120:s=1920x1080,fade=t=in:st=0:d=0.5,fade=t=out:st=3.5:d=0.5[v1];
[2:v]scale=1920:1080,zoompan=z='min(zoom+0.0015,1.15)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=120:s=1920x1080,fade=t=in:st=0:d=0.5,fade=t=out:st=3.5:d=0.5[v2];
[3:v]scale=1920:1080,zoompan=z='min(zoom+0.0015,1.15)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=120:s=1920x1080,fade=t=in:st=0:d=0.5,fade=t=out:st=3.5:d=0.5[v3];
[4:v]scale=1920:1080,zoompan=z='min(zoom+0.0015,1.15)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=120:s=1920x1080,fade=t=in:st=0:d=0.5,fade=t=out:st=3.5:d=0.5[v4];
[v0][v1][v2][v3][v4]concat=n=5:v=1:a=0[v]
`.trim().replace(/\n/g, ' ');

const cmd = `ffmpeg -y -loop 1 -t 4 -i "${img1}" -loop 1 -t 4 -i "${img2}" -loop 1 -t 4 -i "${img3}" -loop 1 -t 4 -i "${img4}" -loop 1 -t 4 -i "${img5}" -filter_complex "${filterComplex}" -map "[v]" -c:v libx264 -preset fast -pix_fmt yuv420p -r 30 "${outputMp4}"`;

try {
  execSync(cmd, { stdio: 'inherit' });
  fs.copyFileSync(outputMp4, outputCopy);
  console.log('Successfully generated /public/hero-bg.mp4 and /public/apex-hero.mp4!');
} catch (err) {
  console.error('ffmpeg compilation failed:', err);
}
