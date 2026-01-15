
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'first care package list - updated.xlsx');
const workbook = XLSX.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

const icons = ['Tag', 'Percent', 'Gift'];
const colors = ['blue', 'green', 'purple', 'pink', 'orange'];

const offers = data.map((row, index) => {
    const tests = row.Tests ? row.Tests.split('\r\n').map(t => t.trim()).filter(Boolean) : [];
    const sampleTypes = row['Sample Type'] ? row['Sample Type'].split('\r\n').map(s => 'Sample: ' + s.trim()).filter(Boolean) : [];

    // Combine sample types and tests for features
    const features = [...sampleTypes, ...tests];

    return {
        id: (index + 1).toString(),
        iconName: icons[index % icons.length],
        title: row['Test / Package Name'],
        originalPrice: `₹${Math.round(row.MRP)}`,
        offerPrice: `₹${row['DISCOUNT PRICE']}`,
        discount: `${Math.round(row.DISCOUNT * 100)}% OFF`,
        description: `Comprehensive package including ${tests.slice(0, 3).join(', ')}${tests.length > 3 ? '...' : ''}`,
        features: features,
        color: colors[index % colors.length]
    };
});

const tsContent = `import { Offer } from './DataContext';

export const defaultOffers: Offer[] = ${JSON.stringify(offers, null, 4)};
`;

const outputPath = path.join(__dirname, 'src', 'context', 'defaultOffersData.ts');
fs.writeFileSync(outputPath, tsContent);
console.log('Written to:', outputPath);
