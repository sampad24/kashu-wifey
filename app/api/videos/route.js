import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const videosDir = path.join(process.cwd(), 'public', 'videos');
    const videoFiles = [];

    function readDir(dir) {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          readDir(filePath);
        } else {
          const ext = path.extname(file).toLowerCase();
          if (['.mp4', '.webm', '.ogg', '.avi', '.mov'].includes(ext)) {
            const relativePath = path.relative(videosDir, filePath);
            videoFiles.push(relativePath);
          }
        }
      });
    }

    readDir(videosDir);
    const filteredVideos = videoFiles.filter(video => !video.includes('hero-video.mp4'));
    return NextResponse.json({ videos: filteredVideos });
  } catch (error) {
    console.error('Error reading videos directory:', error);
    return NextResponse.json({ videos: [] }, { status: 500 });
  }
}
