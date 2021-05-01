import React from 'react';
import { LifeEventType } from '../../../../models/life-event/LifeEvent';
import { getEnumStringValues } from '../../../../utils';
import AutocompleteQuestion from '../../../../components/autocomplete-question';

interface LifeEventTypeQuestionProps {
    onComplete: (string) => void;
}

const LifeEventTypeQuestion: React.FC<LifeEventTypeQuestionProps> = ({ onComplete }: LifeEventTypeQuestionProps) => (
    <AutocompleteQuestion
        question="What type of event was it?"
        options={getEnumStringValues(LifeEventType)}
        label="Life event type"
        onComplete={onComplete}
    />
);

export default LifeEventTypeQuestion;
