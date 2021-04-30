import React from 'react';
import TextQuestion from '../../../../components/text-question';

interface PlaceNameQuestionProps {
    onComplete: (string) => void;
}

const PlaceNameQuestion: React.FC<PlaceNameQuestionProps> = ({ onComplete }: PlaceNameQuestionProps) => (
    <TextQuestion
        question="What was this place called?"
        label="Name"
        onComplete={onComplete}
    />
);

export default PlaceNameQuestion;
