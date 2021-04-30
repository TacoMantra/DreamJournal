import React from 'react';
import TextAreaQuestion from '../../../../components/text-area-question';

interface IDescriptionQuestionProps {
    onComplete: (string) => void;
}

const DescriptionQuestion: React.FC<IDescriptionQuestionProps> = ({ onComplete }: IDescriptionQuestionProps) => (
    <TextAreaQuestion
        skippable
        question="Describe the dream"
        label="Name"
        onComplete={onComplete}
    />
);

export default DescriptionQuestion;
