import { MarkdownConverter } from '../../src/converters/markdown';
import { parseWord } from '../../src/utils/wordParser';

describe('MarkdownConverter', () => {
    let converter: MarkdownConverter;

    beforeEach(() => {
        converter = new MarkdownConverter();
    });

    it('should convert a Word document to Markdown format', () => {
        const wordDocument = 'Sample Word Document Content';
        const expectedMarkdown = '# Sample Word Document Content\n'; // Example expected output

        const result = converter.convert(wordDocument);
        expect(result).toEqual(expectedMarkdown);
    });

    it('should handle empty Word documents', () => {
        const wordDocument = '';
        const expectedMarkdown = '';

        const result = converter.convert(wordDocument);
        expect(result).toEqual(expectedMarkdown);
    });

    it('should throw an error for invalid input', () => {
        const invalidInput = null;

        expect(() => converter.convert(invalidInput)).toThrowError('Invalid input');
    });
});