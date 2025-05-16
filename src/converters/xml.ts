// src/converters/xml.ts

import { Converter } from '../interfaces/converter';
import { parseWord } from '../utils/wordParser';

export class XmlConverter implements Converter {
    convert(wordDocument: string): string {
        const content = parseWord(wordDocument);
        // Convert the parsed content to XML format
        const xmlContent = this.toXml(content);
        return xmlContent;
    }

    private toXml(content: any): string {
        // Implement the logic to convert content to XML format
        let xml = '<document>\n';
        for (const key in content) {
            xml += `  <${key}>${content[key]}</${key}>\n`;
        }
        xml += '</document>';
        return xml;
    }
}