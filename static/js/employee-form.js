$(document).ready(function() {
  var skill = $('#skill')
  var exp = $('#experience')
  var skillList = $('#skillList')
  var addSkillBtn = $('#addSkill');

  addSkillBtn.on('click', appendSkill)

  function appendSkill(e) {
    e.preventDefault();

    var row = "<div><strong>"
              + skill.find(':selected').text()
              + '</strong> '
              + exp.find(':selected').text()
              + '</div>';

    skillList.append(row);
  }
})
