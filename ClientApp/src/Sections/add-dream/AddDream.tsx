import React, { useState, useEffect } from 'react';
import Dream from '../../models/dream';
import Place from '../../models/place';
import Person, { PersonType, PersonType as PersonTypeEnum } from '../../models/person/Person';
import EmotionQuestion from './screens/Emotion/EmotionQuestion';
import { PlaceNameQuestion, PlaceRealismQuestion, PlaceTypeQuestion } from './screens/Place';
import {
    PersonDeceasedQuestion, PersonFamiliarityQuestion, PersonNameQuestion, PersonRelationshipQuestion, PersonTypeQuestion, PersonYesNoQuestion,
} from './screens/Person';

enum Questions {
    EmotionType,
    PlaceType,
    PlaceRealism,
    PlaceName,
    PersonYesNo,
    PersonType,
    PersonFamiliarity,
    PersonRelationship,
    PersonName,
    PersonDeceased,
    PersonAddAnother,
    LifeEventYesNo,
    LifeEventType,
    LifeEventInterval,
    LifeEventDescription,
    Description,
}

const AddDream = (): React.FC => {
    const [dream, setDream] = useState(Dream.create());
    const [place, setPlace] = useState(Place.create());
    const [person, setPerson] = useState(Person.create());
    const [personTypeQuestionsWereSet, setPersonTypeQuestionsWereSet] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(Questions.EmotionType);

    const handleQuestionAnswer = <T extends unknown>(getter: T, setter: React.Dispatch<React.SetStateAction<T>>, key: keyof(T), value: string, nextQuestion?: Questions) => {
        setter({
            ...getter,
            [key]: value,
        });

        if (nextQuestion) {
            setCurrentQuestion(nextQuestion);
        }
    };

    useEffect(() => {
        console.log('dream:', dream);
        console.log('place:', place);
        console.log('person:', person);
        console.log(Questions[currentQuestion]);

        if (person.type === PersonTypeEnum.Relationship && !personTypeQuestionsWereSet) {
            setCurrentQuestion(Questions.PersonFamiliarity);
            setPersonTypeQuestionsWereSet(true);
        } else if (!personTypeQuestionsWereSet && (person.type === PersonTypeEnum.Famous || person.type === PersonTypeEnum.Fictional || person.Type === PersonTypeEnum.Other)) {
            setCurrentQuestion(Questions.PersonName);
            setPersonTypeQuestionsWereSet(true);
        }
    }, [dream, place, person, currentQuestion]);

    switch (currentQuestion) {
        case Questions.EmotionType:
            return <EmotionQuestion onComplete={(value) => handleQuestionAnswer(dream, setDream, 'emotion', value, Questions.PlaceType)} />;
        case Questions.PlaceType:
            return <PlaceTypeQuestion onComplete={(value) => handleQuestionAnswer(place, setPlace, 'type', value, Questions.PlaceRealism)} />;
        case Questions.PlaceRealism:
            return <PlaceRealismQuestion onComplete={(value) => handleQuestionAnswer(place, setPlace, 'realism', value, Questions.PlaceName)} />;
        case Questions.PlaceName:
            return <PlaceNameQuestion onComplete={(value) => handleQuestionAnswer(place, setPlace, 'name', value, Questions.PersonYesNo)} />;
        case Questions.PersonYesNo:
            return <PersonYesNoQuestion onYes={() => setCurrentQuestion(Questions.PersonType)} onNo={() => setCurrentQuestion(Questions.LifeEventYesNo)} />;
        case Questions.PersonType:
            return <PersonTypeQuestion onComplete={(value) => handleQuestionAnswer(person, setPerson, 'type', value)} />;
        case Questions.PersonFamiliarity:
            return <PersonFamiliarityQuestion onComplete={(value) => handleQuestionAnswer(person, setPerson, 'familiarity', value, Questions.PersonRelationship)} />;
        case Questions.PersonRelationship:
            return <PersonRelationshipQuestion onComplete={(value) => handleQuestionAnswer(person, setPerson, 'relationship', value, Questions.PersonDeceased)} />;
        case Questions.PersonName:
            return (
                <PersonNameQuestion onComplete={(values) => {
                    handleQuestionAnswer(person, setPerson, 'firstname', values.firstName);
                    handleQuestionAnswer(person, setPerson, 'lastName', values.lastName, Questions.PersonDeceased);
                }}
                />
            );
        default:
            return <EmotionQuestion onComplete={(value) => handleQuestionAnswer(dream, setDream, 'emotion', value, Questions.PlaceType)} />;
    }
};

export const AddDreamPath = '/add-dream';

export default AddDream;
