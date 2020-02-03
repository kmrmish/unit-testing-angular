describe('my first test', () => {
    //system under test
    let sut;

    beforeEach(function(){
        sut = {};
    });

    it('should be true if true', () => {
        //arrange
        sut.a =false;

        //act
        sut.a = true;

        //assert
        expect(sut.a).toBe(true);

    });
});