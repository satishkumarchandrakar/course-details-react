// import * as user from  '../coursesAction';

// user.setCourseName("React rails");

export function loadCoursesSucess(){
   return{type: 'LOAD_COURSES_SUCCESS',courses: "hi"};
}

export function createCourse(course){
    return{ type: 'CREATE_COURSE',course: course };
    
}

export function updateCourseSuccess(course){
    return{ type: 'UPDATE_COURSE_SUCCESS',course: course };
    
}

export function beginAjaxCall(course){
    return{ type: 'BEGIN_AJAX_CALL',course: course };
}


export function ajaxCallError(course){
    return{ type: 'AJAX_CALL_ERROR',course: course };
}

export function deleteCourseSuccess(course){
    return{ type: 'DELETE_COURSE_SUCCESS',course: course };
}

export function loadAurthorsucess(){
    return{ type: 'LOAD_AUHTORS_SUCCESS',aurthor: "satish" };
}

export function createAurthorsucess(aurthor){
    return{ type: 'CREATE_AUTHOR_SUCCESS',aurthor: aurthor };
}

export function updateAurthorsucess(aurthor){
    return{ type: 'UPDATE_AUTHOR_SUCCESS',aurthor: aurthor };
}

export function deleteAurthorsucess(aurthor){
    return{ type: 'DELETE_AUTHOR_SUCCESS',aurthor: aurthor };
}