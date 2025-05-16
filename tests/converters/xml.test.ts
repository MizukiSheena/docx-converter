import { XmlConverter } from '../../src/converters/xml';
import { parseWord } from '../../src/utils/wordParser';

describe('XmlConverter', () => {
    let converter: XmlConverter;

    beforeEach(() => {
        converter = new XmlConverter();
    });

    it('should convert a Word document to XML format', () => {
        const wordDocument = 'Sample Word Document Content';
        const expectedXml = '<document><content>Sample Word Document Content</content></document>';

        const parsedContent = parseWord(wordDocument);
        const result = converter.convert(parsedContent);

        expect(result).toBe(expectedXml);
    });

    it('should handle empty Word documents', () => {
        const wordDocument = '';
        const expectedXml = '<document><content></content></document>';

        const parsedContent = parseWord(wordDocument);
        const result = converter.convert(parsedContent);

        expect(result).toBe(expectedXml);
    });
});