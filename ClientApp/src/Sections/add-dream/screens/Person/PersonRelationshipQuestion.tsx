import React from 'react';
import { RelationshipType } from '../../../../models/person/Person';
import { getEnumStringValues } from '../../../../utils';
import AutocompleteQuestion from '../../../../components/autocomplete-question';

interface PersonRelationshipQuestionProps {
    onComplete: (string) => void;
}

const PersonRelationshipQuestion: React.FC<PersonRelationshipQuestionProps> = ({ onComplete }: PersonRelationshipQuestionProps) => (
    <AutocompleteQuestion
        question="What is their relationship to you?"
        options={getEnumStringValues(RelationshipType)}
        label="Relationship type"
        onComplete={onComplete}
    />
);

export default PersonRelationshipQuestion;
