import * as fs from 'fs';
import * as path from 'path';
import * as mammoth from 'mammoth';
import Turndown from 'turndown';

async function convertToMarkdown(inputPath: string): Promise<string> {
    try {
        const result = await mammoth.convertToHtml({path: inputPath});
        const turndownService = new Turndown();
        return turndownService.turndown(result.value);
    } catch (error: any) {
        throw new Error(`转换失败: ${error.message}`);
    }
}

async function convertToXml(inputPath: string): Promise<string> {
    try {
        const result = await mammoth.convertToHtml({path: inputPath});
        // 将 HTML 转换为简单的 XML 格式
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<document>
    <content>
        ${result.value}
    </content>
</document>`;
        return xml;
    } catch (error: any) {
        throw new Error(`转换失败: ${error.message}`);
    }
}

async function main() {
    const inputDir = './input';
    const outputDir = './output';
    const format = process.argv[2]?.toLowerCase() || 'markdown'; // 获取命令行参数

    const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.docx'));
    
    for (const file of files) {
        try {
            const inputPath = path.join(inputDir, file);
            const extension = format === 'xml' ? '.xml' : '.md';
            const outputPath = path.join(outputDir, `${path.parse(file).name}${extension}`);
            
            console.log(`正在转换 ${file}...`);
            const content = format === 'xml' 
                ? await convertToXml(inputPath)
                : await convertToMarkdown(inputPath);
            
            fs.writeFileSync(outputPath, content);
            console.log(`成功转换 ${file} 到 ${outputPath}`);
        } catch (error: any) {
            console.error(`转换 ${file} 失败: ${error.message}`);
        }
    }
}

main().catch(console.error);