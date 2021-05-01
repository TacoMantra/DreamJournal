import React from 'react';
import { PersonType } from '../../../../models/person/Person';
import RadioGroupQuestion from '../../../../components/radiogroup-question';

interface PersontypeQuestionProps {
    onComplete: (string) => void;
}

const PersontypeQuestion: React.FC<PersontypeQuestionProps> = ({ onComplete }: PersontypeQuestionProps) => (
    <RadioGroupQuestion
        question="Which of the following best describes them?"
        options={[
            {
                value: PersonType.Relationship,
                label: 'I know them',
            },
            {
                value: PersonType.Famous,
                label: 'They\'re famous',
            },
            {
                value: PersonType.Fictional,
                label: 'They\'re a fictional character',
            },
            {
                value: PersonType.Other,
                label: 'Other',
            },
        ]}
        label="Realism"
        onComplete={onComplete}
    />
);

export default PersontypeQuestion;
