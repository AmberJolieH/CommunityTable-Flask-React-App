from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError



class ResourceForm(FlaskForm):
    posterId = IntegerField('posterId', validators=[DataRequired()])
    name = StringField('Name', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    image = StringField('Image')
    quantity = IntegerField('Quantity', validators=[DataRequired()])
    catName = StringField('Category', validators=[DataRequired()])
    startsAt = DateField('Starts At', validators=[DataRequired()])
    endsAt = DateField('Ends At', validators=[DataRequired()])
    locationsId = SelectField('Location', choices=[
        (1, 'location')
    ])
 