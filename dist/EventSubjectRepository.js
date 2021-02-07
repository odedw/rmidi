import { Subject } from 'rxjs';
import * as log from 'loglevel';
var EventSubjectRepository = /** @class */ (function () {
    function EventSubjectRepository() {
    }
    EventSubjectRepository.subjectFor = function (key) {
        if (!EventSubjectRepository.subjects[key]) {
            var subject = new Subject();
            subject.subscribe(function (t) {
                log.debug("New " + key + " event");
            });
            EventSubjectRepository.subjects[key] = subject;
        }
        return EventSubjectRepository.subjects[key];
    };
    EventSubjectRepository.subjects = {};
    return EventSubjectRepository;
}());
export { EventSubjectRepository };
//# sourceMappingURL=EventSubjectRepository.js.map