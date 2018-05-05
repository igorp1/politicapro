"""empty message

Revision ID: 039ba292172c
Revises: 4dd22443d32c
Create Date: 2018-05-04 16:17:38.685200

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '039ba292172c'
down_revision = '4dd22443d32c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tweet_count',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('for_date', sa.DateTime(), nullable=True),
    sa.Column('key', sa.String(), nullable=True),
    sa.Column('count', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tweet_count')
    # ### end Alembic commands ###
