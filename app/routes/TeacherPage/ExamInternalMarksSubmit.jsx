import ExamInternalMarksSubmitComponent from '../../components/ComponentsPages/TeacherComponent/ExamInternalMarksSubmitComponent'
import ExamInternalMarksSubmitEditComponent from '../../components/ComponentsPages/TeacherComponent/ExamInternalMarksSubmitEditComponent'
import ExamInternalMarksSubmitSaveComponent from '../../components/ComponentsPages/TeacherComponent/ExamInternalMarksSubmitSaveComponent'
import CreateBatch from '../../components/ComponentsPages/TeacherComponent/popupComponent/CreateBatch'
import TeacherLayout from '../../components/ComponentsPages/TeacherComponent/TeacherLayout'

const ExamInternalMarksSubmit = () => {
  return (
    <TeacherLayout>
      <ExamInternalMarksSubmitComponent/>
      {/* <ExamInternalMarksSubmitEditComponent/> */}
      {/* <ExamInternalMarksSubmitSaveComponent/> */}
    </TeacherLayout>
  )
}

export default ExamInternalMarksSubmit