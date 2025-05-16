import { Converter } from '../interfaces/converter';
import { parseWord } from '../utils/wordParser';

export class MarkdownConverter implements Converter {
    convert(wordDocument: string): string {
        const content = parseWord(wordDocument);
        // Here you would implement the logic to convert the parsed content to Markdown format
        // For simplicity, let's assume the content is already in Markdown format
        return content;
    }
}