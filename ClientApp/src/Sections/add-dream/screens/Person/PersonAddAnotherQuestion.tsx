import React from 'react';
import YesNoQuestion from '../../../../components/yes-no-question/YesNoQuestion';

interface PersonAddAnotherQuestionProps {
    onYes: () => void;
    onNo: () => void;
}

const PersonAddAnotherQuestion: React.FC<PersonAddAnotherQuestionProps> = ({ onYes, onNo }: PersonAddAnotherQuestionProps) => (
    <YesNoQuestion
        question="Do you want to add another person?"
        onYes={onYes}
        onNo={onNo}
    />
);

export default PersonAddAnotherQuestion;
