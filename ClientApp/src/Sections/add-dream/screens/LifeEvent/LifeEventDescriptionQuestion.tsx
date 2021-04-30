import React from 'react';
import TextAreaQuestion from '../../../../components/text-area-question';

interface ILifeEventDescriptionQuestionProps {
    onComplete: (string) => void;
}

const LifeEventDescriptionQuestion: React.FC<ILifeEventDescriptionQuestionProps> = ({ onComplete }: ILifeEventDescriptionQuestionProps) => (
    <TextAreaQuestion
        skippable
        question="Describe the event"
        label="Name"
        onComplete={onComplete}
    />
);

export default LifeEventDescriptionQuestion;
