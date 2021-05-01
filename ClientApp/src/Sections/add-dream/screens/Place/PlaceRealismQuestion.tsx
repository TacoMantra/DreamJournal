import React from 'react';
import { RealismType } from '../../../../models/place/Place';
import RadioGroupQuestion from '../../../../components/radiogroup-question';

interface PlaceRealismQuestionProps {
    onComplete: (string) => void;
}

const PlaceRealismQuestion: React.FC<PlaceRealismQuestionProps> = ({ onComplete }: PlaceRealismQuestionProps) => (
    <RadioGroupQuestion
        question="Was it a real place?"
        options={[
            {
                value: RealismType.Real,
                label: 'It was real',
            },
            {
                value: RealismType.Imaginary,
                label: 'It was imaginary',
            },
            {
                value: RealismType.Mixed,
                label: 'It was a mix',
            },
            {
                value: RealismType.Other,
                label: 'Other',
            },
            {
                value: RealismType.Unknown,
                label: 'Unknown',
            },
        ]}
        label="Realism"
        onComplete={onComplete}
    />
);

export default PlaceRealismQuestion;
