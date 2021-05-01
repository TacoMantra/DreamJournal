import React from 'react';
import { FamiliarityType } from '../../../../models/person/Person';
import { getEnumStringValues } from '../../../../utils';
import SelectQuestion from '../../../../components/select-question';

interface PersonFamiliarityQuestionProps {
    onComplete: (string) => void;
}

const PersonFamiliarityQuestion: React.FC<PersonFamiliarityQuestionProps> = ({ onComplete }: PersonFamiliarityQuestionProps) => (
    <SelectQuestion
        question="How well do you know them?"
        options={getEnumStringValues(FamiliarityType)}
        label="Familiarity"
        onComplete={onComplete}
    />
);

export default PersonFamiliarityQuestion;
