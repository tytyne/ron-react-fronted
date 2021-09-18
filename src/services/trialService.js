const KEYS = {
    speakers: 'speakers',
    speakerId: 'speakerId'
}

export const getDepartmentCollection = () => ([
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
])

export function insertSpeaker(data) {
    let speakers = getAllSpeakers();
    data['id'] = generateSpeakerId()
    speakers.push(data)
    localStorage.setItem(KEYS.speakers, JSON.stringify(speakers))
}

export function updateSpeaker(data) {
    let speakers = getAllSpeakers();
    let recordIndex = speakers.findIndex(x => x.id == data.id);
    speakers[recordIndex] = { ...data }
    localStorage.setItem(KEYS.speakers, JSON.stringify(speakers));
}

export function deleteSpeaker(id) {
    let speakers = getAllSpeakers();
    speakers = speakers.filter(x => x.id != id)
    localStorage.setItem(KEYS.speakers, JSON.stringify(speakers));
}

export function generateSpeakerId() {
    if (localStorage.getItem(KEYS.speakerId) == null)
        localStorage.setItem(KEYS.speakerId, '0')
    var id = parseInt(localStorage.getItem(KEYS.speakerId))
    localStorage.setItem(KEYS.speakerId, (++id).toString())
    return id;
}

export function getAllSpeakers() {
    if (localStorage.getItem(KEYS.speakers) == null)
        localStorage.setItem(KEYS.speakers, JSON.stringify([]))
    let speakers = JSON.parse(localStorage.getItem(KEYS.speakers));
    //map departmentID to department title
    let departments = getDepartmentCollection();
    return speakers.map(x => ({
        ...x,
        department: departments[x.departmentId - 1].title
    }))
}