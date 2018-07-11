const chai = require('chai');

const should = chai.should();
const { expect } = chai;
const comments = require('../../domain/getMaxLength');


describe('utils library', () => {
  context('Max Length String', () => {
    it('should return the max length string', async () => {
      const commentsArr = [
        {
          id: '5b41e2b78b5e96549002d0cc',
          email: 'nativa@gmail.com',
          message: 'hello!!!',
          image: 'https://www.gravatar.com/avatar/7a06b72176ef465d35010bc595aa6a66',
          createdAt: '2018-07-08T10:08:55.356Z',
          updatedAt: '2018-07-08T10:08:55.356Z',
        },
        {
          id: '5b0939ecfc14be7c4d11628c',
          email: 'elik@bigpanda.io',
          message: 'aaaa',
          image: 'https://www.gravatar.com/avatar/7a06b72176ef465d35010bc595aa6a66',
          createdAt: '2018-05-26T10:41:48.627Z',
          updatedAt: '2018-05-26T10:41:48.627Z',
        },
      ];
      const res = comments.getMaxLength(commentsArr);
      res.should.to.be.an('object');
      res.should.have.property('email');
    });

    it('should return the max length string', () => {
      const res = comments.getMaxLength([]);
      res.should.eql({});
    });

    it('should fail to return the max length string', () => {
      try {
        comments.getMaxLength('hello world!');
      } catch (err) {
        err.should.not.be.null;
      }
    });
  });
});
