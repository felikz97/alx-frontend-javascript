interface MajorCredits {
  credits: number;
  __brand: 'Major';
}

interface MinorCredits {
  credits: number;
  __brand: 'Minor';
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'Major',
  };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'Minor',
  };
}

// Example data
const major1: MajorCredits = { credits: 3, __brand: 'Major' };
const major2: MajorCredits = { credits: 4, __brand: 'Major' };
const minor1: MinorCredits = { credits: 2, __brand: 'Minor' };
const minor2: MinorCredits = { credits: 1, __brand: 'Minor' };

const totalMajor = sumMajorCredits(major1, major2);
const totalMinor = sumMinorCredits(minor1, minor2);

// Render to HTML
const output = document.createElement('div');
output.innerHTML = `
  <h2>Credit Summary</h2>
  <p><strong>Major Credits:</strong> ${totalMajor.credits}</p>
  <p><strong>Minor Credits:</strong> ${totalMinor.credits}</p>
`;

document.body.appendChild(output);
