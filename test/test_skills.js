"use strict";

describe('Skill Tree', function() {
	describe('Add skill', function() {
		it('should add a new skill to the list of skills', function() {
			var p = new SkillsViewModel();
			p.skills().length.should.equal(0);
			p.addSkill();
			p.skills().length.should.equal(1);
		});
	});
	
	describe('Remove skill', function() {
		it('should remove a skill from the list of skills', function() {
			var p = new SkillsViewModel();
			p.skills().length.should.equal(0);
			p.addSkill();
			p.skills().length.should.equal(1);
			p.removeSkill(p.skills().pop());
			p.skills().length.should.equal(0);			
		});
	});

	describe('Edit skill', function() {
		it('should put a skill from the list of skills into the selected slot', function() {
			var p = new SkillsViewModel();
			p.addSkill();
			Should.not.exist(p.selecteditem());
			p.skills().length.should.equal(1);
			p.editSkill(p.skills()[0]);
			p.selecteditem().should.equal(p.skills.pop());
		});
	});
	
	describe('Sort By', function() {
		it('should sort the list of skills by given criteria', function() {
			var p = new SkillsViewModel();
			p.sortBy('name');
			p.sort().should.equal(p.sorts['name desc']);
			p.sortBy('name');
			p.sort().should.equal(p.sorts['name asc']);
			p.sortBy('modifier');
			p.sort().should.equal(p.sorts['modifier asc']);
			p.sortBy('modifier');
			p.sort().should.equal(p.sorts['modifier desc']);
		});
	});
	
	describe('Sort Arrow', function() {
		it('should sort the list of skills by given criteria', function() {
			var p = new SkillsViewModel();
			p.sortBy('name');
			p.sort().should.equal(p.sorts['name desc']);
			p.sortArrow('name').should.equal('glyphicon glyphicon-arrow-down');
			p.sortArrow('modifier').should.equal('');
			p.sortBy('name');
			p.sort().should.equal(p.sorts['name asc']);
			p.sortArrow('name').should.equal('glyphicon glyphicon-arrow-up');
			p.sortArrow('modifier').should.equal('');
		});
	});
	
	describe('Clear', function() {
		it('should clear all the values in skills.', function() {
			var p = new SkillsViewModel();
			var skills = [new Skill()];
			p.skills(skills);
			p.skills().should.equal(skills);
			p.clear();
			p.skills().length.should.equal(0);
		});
	});
});

